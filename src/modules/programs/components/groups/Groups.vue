<template>
    <v-card class="mt-5">
        <v-card-title
        class="teal--text text--lighten-5 
        light-green darken-3 
        font-weight-black"
        >Grupos</v-card-title>
        <div v-if="addPay">
            <v-btn
            dark
            class="my-6 light-green darken-2"
            @click="addPay = !addPay"
            >
                Crear grupo
            </v-btn>
            <v-btn
            dark
            class="light-green--text text--darken-2 ml-6"
            text
            @click="$router.go(-1)"
            >
                Volver
            </v-btn>
        </div>
        <v-expand-x-transition>
        <v-card
        v-if="!addPay"
        width="450"
        class="mx-auto my-10"
        >
        <v-card-title 
        class="font-weight-black 
                light-blue--text 
                text--lighten-5
                light-blue darken-3
                justify-center"
        >Creación de grupo</v-card-title>
        <v-card-text>
            <v-form ref="main" @submit.prevent="createNewBook()">
                <v-row>
                    <v-col cols="6">
                        <v-autocomplete
                            v-model="values"
                            :items="items"
                            dense
                            label="Año"
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="6">
                        <v-autocomplete
                            v-model="values"
                            :items="items"
                            dense
                            label="Calendario"
                        ></v-autocomplete>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-autocomplete
                            v-model="values"
                            :items="items"
                            dense
                            label="Etapa"
                        ></v-autocomplete>
                        <label for="">Semestre</label>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="fecha_nacimiento"
                                label="Fecha de inicio"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            ref="picker"
                            v-model="fecha_nacimiento"
                            :max="new Date().toISOString().substr(0, 10)"
                            min="1950-01-01"
                            @change="save"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="6">
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="fecha_nacimiento"
                                label="Fecha final"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            ref="picker"
                            v-model="fecha_nacimiento"
                            :max="new Date().toISOString().substr(0, 10)"
                            min="1950-01-01"
                            @change="save"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-autocomplete
                            v-model="values"
                            :items="items"
                            dense
                            label="Etapa"
                        ></v-autocomplete>
                        <label for="">Semestre</label>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn
                color="blue darken-3"
                class="mx-auto"
                dark
            >
                Crear
            </v-btn>
            <v-btn
                color="blue darken-3"
                class="mx-auto"
                text
                dark
                @click="addPay = !addPay"
            >
                Cancelar
            </v-btn>
        </v-card-actions>
        
        </v-card>
        </v-expand-x-transition>

        <v-simple-table primary>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Año
                </th>
                <th class="text-left">
                    Periodo
                </th>
                <th class="text-left">
                    Calendario
                </th>
                <th class="text-left">
                    Fecha inicio
                </th>
                <th class="text-left">
                    Fecha final
                </th>
                <th class="text-left">
                    Estudiantes
                </th>
                <th class="text-left">
                    Pagos
                </th>
                <th class="text-left">
                    Estado
                </th>
                <th class="text-left">
                    Acciones
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in groups"
                :key="item.id"
                >
                <td>{{ item.anio }}</td>
                <td>{{ item.calendario }}</td>
                <td>{{ item.periodo }}</td>
                <td>{{ item.finicio }}</td>
                <td>{{ item.ffinal }}</td>
                <td>
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        v-bind="attrs"
                        v-on="on"
                        dark
                        x-small
                        class="brown ligthen-1"
                        to="/programs/program/groups/students"
                        >{{ item.estudiantes }}</v-btn>
                    </template>
                    <span>Ver estudiantes en este grupo</span>
                    </v-tooltip>
                </td>
                <td>
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        v-bind="attrs"
                        v-on="on"
                        dark
                        x-small
                        v-bind:class="{ green: item.pagos==0 }"
                        class="brown ligthen-1"
                        to="/student/student/programs/payments"
                        >{{ item.pagos }}</v-btn>
                    </template>
                    <span>Ver pagos en este grupo</span>
                    </v-tooltip>
                </td>
                <td>
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        v-bind="attrs"
                        v-on="on"
                        dark
                        x-small
                        v-bind:class="{ green: item.pagos==0 }"
                        class="brown ligthen-1"
                        to="/student/student/programs/payments"
                        >{{ item.estado }}</v-btn>
                    </template>
                    <span>Cambio estado de este grupo</span>
                    </v-tooltip>
                </td>
                <td>
                    <label for="">Editar/Eliminar</label>
                </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
        
    </v-card>
</template>

<script>

export default {
    name: 'Groups',
    data: () => ({
        expanded: 0,
        addPay: true,
        menu: false,
        headers: [
          {
            text: 'Año',
            align: 'left',
            sortable: false,
            value: 'anio'
          },
          { text: 'Calendario', value: 'calendario' },
          { text: 'Periodo', value: 'periodo' },
          { text: 'Fecha inicio', value: 'finicio' },
          { text: 'Fecha final', value: 'ffinal' },
          { text: 'Estudiantes', value: 'estudiantes' },
          { text: 'Pagos', value: 'pagos' },
          { text: 'Estado', value: 'estado' },
          { text: 'Acciones', value: 'acciones' }
        ],
        groups: [
            {
            anio: '2020',
            calendario: 'A',
            periodo: 'II Semestre',
            finicio: '01/02/2020',
            ffinal: '01/07/2020',
            estudiantes: 'Ver estudiantes',
            pagos: 'Ver pagos',
            estado: 'En curso',
            acciones: ''
          },
          {
            anio: '2019',
            calendario: 'B',
            periodo: 'I Semestre',
            finicio: '01/07/2019',
            ffinal: '01/12/2019',
            estudiantes: 'Ver estudiantes',
            pagos: 'Ver pagos',
            estado: 'Finalizado',
            acciones: ''
          }
        ]
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    }
}
</script>