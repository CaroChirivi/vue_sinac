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
                <v-snackbar
                    color="error"
                    v-model="snackbar"
                    top
                >¡Usuario no existe!</v-snackbar>
            </v-card>
        </v-col>
    </v-row>

</template>

<script>
export default {
    name: 'SignIn'
}
</script>