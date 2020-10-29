<template>
    <v-row
        align="center"
        justify="center"
    >
        <v-col cols="3">
            <v-card class="elevation-15" >
                <v-form @submit.prevent="signIn()">
                    <Errors
                        :error-message="errorMessageText" 
                        :errors="errorsArray"                      
                    ></Errors>
                    <!-- <ErrorsComponent
                        v-bind:error-message="'Este es mensaje desde padre con v-bind'"                       
                    ></ErrorsComponent> -->
                    <!-- <ErrorsComponent
                        error-message="Este es mensaje desde padre"
                    ></ErrorsComponent> -->
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

<script>
    import LoginServices from '../services';

    export default {
        name: 'SignIn',
        data () {
            return {
                user: '',
                password: '',
                errorMessageText: '',
                errorsArray: []
            }
        },
        inject: ['mySpinner'],
        methods: {
            async signIn () {
                const userLogin = { user: this.user, password: this.password }
                
                console.log("getting response");
                try {
                    this.mySpinner.val = true
                    await LoginServices.signIn(userLogin)
                    .then(response => {
                        const { data: { token } } = response
                        if( token ){
                            this.$store.dispatch('login/signIn', token)
                            this.$router.push('/')
                        }
                    })
                    .catch(error => {
                        switch ( error.response.status ) {
                            case 422:
                                console.log("error.response")
                                console.log(error.response)
                                this.errorMessageText = error.response.data.message
                                this.errorsArray = Object.values(error.response.data.errors)
                                this.mySpinner.val = false
                                break
                        }
                    })
                }catch (error){
                    console.log("Error de afuera " + error);
                }
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