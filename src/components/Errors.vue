<template>
    <v-snackbar 
        v-model="snackbar"
        color="red darken-4"
        top 
        right
        timeout=-1
    >
        {{ validationMessage }}
        <ul>
            <li v-for="(value, key, index) in validationErrors" :key="index">
                {{ value }}
            </li>
        </ul>
        <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar = false"
            >
             <v-icon >mdi-close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
    
</template>

<script>
    export default {
        name: 'Errors',
        data () {
            return {
                snackbar: false
            }
        },
        props: {
            errorMessage: {
                type: String,
                required: true,
                default: 'Corrija los siguientes errores: '
            },
            errors: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            validationMessage(){
                console.log(this.errorMessage);
                this.errorMessage.length ? this.snackbar = true : this.snackbar = false
                return this.errorMessage
            },
            validationErrors() {
                //let errors = Object.values(this.errors)
                const errors = this.errors.flat()
                return errors
            }
        }
    }
</script>