<template>
    <v-snackbar 
        v-model="snackbar_success"
        color="green darken-4"
        top 
        right
        timeout=-1
    >
        {{ validationSuccessMessage }}
        <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar_success = false"
            >
             <v-icon >mdi-close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
    
</template>

<script>
console.log("Entra");
    export default {
        name: 'Success',
        data () {
            return {
                snackbar_success: false
            }
        },
        props: {
            successMessage: {
                type: String,
                required: true,
                default: 'Solicitud exitosa'
            },
        },
        computed: {
            validationSuccessMessage(){
                console.log(this.successMessage);
                this.successMessage.length ? this.snackbar_success = true : this.snackbar_success = false
                return this.successMessage
            },
        }
    }
</script>