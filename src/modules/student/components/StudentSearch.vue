<template>
    <v-row align="center" justify="center">
        <v-col cols="9" class="text-center">
            <v-card
                class="mx-auto px-3"
            >
                <v-card-title class="corte-module-subtitle justify-center">
                    BÚSQUEDA DE ESTUDIANTE
                </v-card-title>
                <v-form >
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="name" label="Número de documento"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-select 
                            v-model="author_id" 
                            :items="authors"
                            item-text="name"
                            item-value="id"
                            label="Programa"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="name" label="Primer apellido"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="country" label="Primer nombre"></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'StudentSearch'
}
</script>