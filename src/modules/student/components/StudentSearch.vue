<template>
    <div>
        <v-row align="center" justify="center">
            <v-col cols="9" class="text-center">
                <v-card
                    class="mx-auto px-3"
                    max-width="850"
                >
                    <v-row align="center" justify="center">
                            <v-col>
                                <h5 class="corte-module-subtitle">BÚSQUEDA DE ESTUDIANTE</h5>
                            </v-col>
                    </v-row>
                    <v-form >
                        <v-row>
                            <v-col cols="6">
                                <v-text-field 
                                v-model="cedula"
                                class="document" 
                                label="Número de documento">
                                </v-text-field>
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
                                <v-text-field v-model="apellido" label="Primer apellido"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="Primer nombre"></v-text-field>
                            </v-col>
                        </v-row>
                        <div class="mt-8" v-if="search">
                            <v-row>
                                <v-col class="d-flex">
                                    <v-btn 
                                        @click="newStudent"
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
                                    Nota: La consulta mostrará los primeros 5 registros. Si el resultado de
                                    la búsqueda no fué exitoso, por favor elija otros criterios de búsqueda.
                                    </v-alert>
                                </v-col>
                            </v-row>
                            <v-row v-if="students.length">
                                <v-col>
                                    <v-simple-table primary>
                                        <template v-slot:default>
                                        <thead>
                                            <tr>
                                            <th class="text-left">
                                                Programa
                                            </th>
                                            <th class="text-left">
                                                Documento
                                            </th>
                                            <th class="text-left">
                                                Nombre
                                            </th>
                                            <th class="text-left">
                                                Celular
                                            </th>
                                            <th class="text-left">
                                                Acciones
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                            v-for="item in students"
                                            :key="item.id"
                                            >
                                            <td>{{ item.programa }}</td>
                                            <td>{{ item.cedula }}</td>
                                            <td>{{ item.nombre }}</td>
                                            <td>{{ item.celular }}</td>
                                            <td>
                                                <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    dark
                                                    fab
                                                    x-small
                                                    class="green darken-1"
                                                    >
                                                    <v-icon>mdi-account-arrow-right</v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Ver estudiante</span>
                                                </v-tooltip>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-col>
                            </v-row>
                        </div>
                        <div v-else>
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
                                                    to="/student/create"
                                                    dark
                                                    class="mx-auto"
                                                    color="blue darken-3">REGISTRAR</v-btn>
                                                    <v-btn 
                                                    @click="cancel"
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
        search: true,
        cedula: '',
        apellido: '',
        profession: [
        {
          name: 'Tecnico Auxiliar Enfermeria',
          id: '1',
        },
        {
          name: 'Curso soporte vital básico',
          id: '2',
        },
        ],
        students: [
        
        ]
    }),
    methods: {
        newStudent () {
            this.students = []
            if(this.apellido){
                console.log(this.cedula);
                this.students = this.loadStudents()
                //this.search = this.cedula ? true: false
            }else{
                this.search = this.cedula ? false: true
            }
        },
        cancel () {
            this.search = true
        },
        loadStudents () {
            return [
                {
                    id: '1',
                    programa: 'Tec. Aux. Enfermería',
                    cedula: '80850596',
                    nombre: 'Juan Jose Mendoza Leon',
                    celular: '321 2047527',
                },
                {
                    id: '2',
                    programa: 'Tec. Aux. Enfermería',
                    cedula: '1023244656',
                    nombre: 'Jose Antonio Mendoza Tarapues',
                    celular: '321 4021654',
                },
            ]
        }
    }
}
</script>

<style lang="css" scoped>

    .document {
        font-size: 1.3em;
        font-weight: 100;
        color: #F9FBE7;
    }

    th{
        font-size: 1em!important;
        color: #0288D1!important;
    }

    td{
        text-align: left;
    }
</style>

