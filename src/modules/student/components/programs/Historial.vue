<template>
    <v-card class="mt-5">
        <v-card-title
        class="teal--text text--lighten-5 
        light-green darken-3 
        font-weight-black"
        >Historial Académico Programa Técnico Auxiliar de Enfermería</v-card-title>
        <v-simple-table primary>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Año
                </th>
                <th class="text-left">
                    Calendario
                </th>
                <th class="text-left">
                    Periodo
                </th>
                <th class="text-left">
                    Estado
                </th>
                <th class="text-left">
                    Pagos
                </th>
                <th class="text-left">
                    Registro matrícula
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
                <td>
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        v-bind="attrs"
                        v-on="on"
                        dark
                        x-small
                        class="brown ligthen-1"
                        to="/student/student/programs/historial/states"
                        >{{ item.estado }}</v-btn>
                    </template>
                    <span>Ver historial estados en este grupo</span>
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
                        class="red darken-1"
                        to="/student/student/programs/payments"
                        >{{ item.pagos }}</v-btn>
                    </template>
                    <span>Ver pagos en este grupo</span>
                    </v-tooltip>
                </td>
                <td>
                    <v-tooltip bottom v-if="item.matricula">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        v-bind="attrs"
                        v-on="on"
                        @click="showVoucher"
                        dark
                        x-small
                        class="brown ligthen-1"
                        >
                        Matrícula
                        </v-btn>
                    </template>
                    <span>Ver registro de matrícula</span>
                    </v-tooltip>
                </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </v-card>
</template>

<script>

export default {
    name: 'Historial',
    data () {
      return {
        headers: [
          {
            text: 'Año',
            align: 'left',
            sortable: false,
            value: 'anio'
          },
          { text: 'Calendario', value: 'calendario' },
          { text: 'Periodo', value: 'periodo' },
          { text: 'Estado', value: 'estado' },
          { text: 'Pagos', value: 'pagos' },
          { text: 'Regístro matrícula', value: 'matricula' }
        ],
        groups: [
            {
            anio: '2020',
            calendario: 'A',
            periodo: 'II Semestre',
            estado: 'En curso',
            pagos: '200000',
            matricula: ''
          },
          {
              anio: '2019',
            calendario: 'B',
            periodo: 'I Semestre',
            estado: 'Terminado',
            pagos: '0',
            matricula: ''
          },
            {
            anio: '2019',
            calendario: 'A',
            periodo: 'I Semestre',
            estado: 'Aplazado',
            pagos: '0',
            matricula: 'Matrícula'
            },
          
        ]
      }
    },
    methods: {
        showVoucher: function(){
            var pdf = require('@/assets/docs/actamatricula.pdf')
            window.open(pdf, '_blank');
        }
    }
}
</script>