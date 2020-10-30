<template>
    <v-row
        align="center"
        justify="center"
    >
        <v-col cols="3">
            <v-card class="elevation-15" >
                <v-form @submit.prevent="signIn()">
                    <v-row align="center" justify="center">
                        <v-col cols="6">
                            <template>
                                <v-img
                                src="@/assets/images/logo.jpg"
                                max-height="120"
                                max-width="120"
                                contain
                                class="mx-auto"
                                ></v-img>
                            </template>
                        </v-col>
                    </v-row>
                    <v-card-text>
                        <v-text-field 
                            v-model="user"
                            label="Usuario" 
                            name="user" 
                            prepend-icon="mdi-account" 
                            type="text"
                        ></v-text-field>
                        <v-text-field
                            v-model="password"
                            label="Contraseña"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                        ></v-text-field>
                    </v-card-text>        
                    <v-card-actions>
                        <v-btn 
                            type="submit"
                            class="mx-auto" 
                            color="blue darken-3"
                            dark
                        >Ingresar</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-col>
    </v-row>

</template>

<script type="application/javascript" defer src="@/assets/js/forms.js"></script>

<script>
    import LoginServices from '../services';

    export default {
        name: 'SignIn',
        data () {
            return {
                user: '',
                password: ''
            }
        },
        inject: [
            'mySpinner',
            'errorMessages'
        ],
        methods: {
            async signIn () {
                const userLogin = { user: this.user, password: this.password }
                
                console.log("getting response");
                try {
                    this.mySpinner.val = true
                    this.errorMessages.message = ''
                    this.errorMessages.array = []
                    
                    await LoginServices.signIn(userLogin)
                    .then(response => {
                        const { data: { token } } = response
                        if( token ){
                            this.$store.dispatch('login/signIn', token)
                            this.$router.push('/')
                        }
                    })
                    .catch(error => {
                        console.log("entro catch interno");
                        console.log(error);
                        if(!error.response){
                            this.errorMessages.message = `Error de red. No hay conexión con el servidor. 
                                                    Consulte a la administradora`
                        }else{
                            switch ( error.response.status ) {
                                case 422:
                                    console.log(error.response)
                                    this.errorMessages.message = error.response.data.message
                                    this.errorMessages.array = Object.values(error.response.data.errors)
                                    break
                                case 404:
                                    console.log("error 404");
                                    console.log(error.response)
                                    this.errorMessages.message = error.response.data.message
                                    break
                            }
                        }
                    })
                }catch (error){
                    this.errorMessages.message = `Consulte a la administradora: ${error}`
                    console.log("Error de afuera " + error);
                }

                this.mySpinner.val = false

                // try {
                //     const response = await LoginServices.signIn(userLogin)
                //     console.log(response);
                //     if( !token ){ //validar códigos estados de la respuesta
                //         this.alertText = 'Verifique usuario y contraseña'
                //         this.alert = true
                //     }else{
                //         this.$store.dispatch('login/signIn', token)
                //         this.$router.push('/')
                //     }
                // } catch (error => {
                //     console.log(error);
                // )};
                
            }
         },
    }
</script>