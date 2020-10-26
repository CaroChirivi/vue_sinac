<template>
    <v-row align="center" justify="center" v-if="errorMessage.length">
        <v-col cols="10">
            <v-alert
                border="bottom"
                dense
                elevation="3"
                text
                type="error"
            > 
                {{ errorMessage }}
                <!-- {{ fullText }} -->
                <ul>
                    <li v-for="(value, key, index) in validationErrors" :key="index">
                        {{ value }}
                    </li>
                </ul>
            </v-alert>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'Errors',
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
            fullText() {
                return this.errorMessage + " Full text"
            },
            validationErrors() {
                //let errors = Object.values(this.errors)
                let errors = this.errors.flat()
                return errors
            }
        }
    }
</script>