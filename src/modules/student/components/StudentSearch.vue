<template>
    <div>
        <v-row align="center" justify="center">
            <v-col cols="9" class="text-center">
                <v-card
                    class="mx-auto px-3"
                    max-width="800"
                >
                    <v-row align="center" justify="center">
                            <v-col>
                                <h5 class="corte-module-subtitle">BÚSQUEDA DE ESTUDIANTE</h5>
                            </v-col>
                    </v-row>
                    <v-form >
                        <v-row>
                            <v-col cols="6">
                                <v-text-field class="document" label="Número de documento"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-select 
                                    :items="profession"
                                    item-text="name"
                                    item-value="id"
                                    label="Programa">
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field label="Primer apellido"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="Primer nombre"></v-text-field>
                            </v-col>
                        </v-row>
                        <div style="display:none;">
                            <v-row>
                                <v-col class="d-flex">
                                    <v-btn 
                                        
                                        dark
                                        class="mx-auto"
                                        color="blue darken-3">BUSCAR ESTUDIANTE</v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col class="d-flex">
                                    <v-alert
                                    prominent
                                    text
                                    type="info"
                                    >
                                    La consulta mostrará los primeros 5 registros. Si el resultado de
                                    la búsqueda no fué exitoso, por favor elija otros criterios de búsqueda.
                                    </v-alert>
                                </v-col>
                            </v-row>
                        </div>
                        <div>
                            <v-row>
                                <v-col class="d-flex">
                                    <v-card
                                        class="mx-auto px-3 py-4 mt-6"
                                        max-width="400"
                                        color="light-green darken-3"
                                        dark
                                    >
                                        <p class="font-weight-black">El estudiante no ha sido registrado. Si desea inicar el 
                                            registro digite nuevamente el número de documento y haga 
                                            clic en registrar.</p>
                                        <v-text-field
                                        class="font-weight-black document" height="20"></v-text-field>
                                        <v-row class="mt-6">
                                            <v-col class="d-flex">
                                                <v-btn 
                                                    dark
                                                    class="mx-auto"
                                                    color="blue darken-3">REGISTRAR</v-btn>
                                                    <v-btn 
                                                    dark
                                                    class="mx-auto"
                                                    color="blue darken-3">CANCELAR</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'StudentSearch',
    data: () => ({
        profession: [
        {
          name: 'Tecnico Auxiliar Enfermeria',
          id: '1',
        },
        {
          name: 'Curso soporte vital básico',
          id: '2',
        },
        ]
    })
}
</script>

<style lang="css" scoped>

.document {
    font-size: 1.3em;
    font-weight: 100;
    color: #F9FBE7;
}
</style>