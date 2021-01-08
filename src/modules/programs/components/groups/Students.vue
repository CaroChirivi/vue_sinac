<template>
    <v-card class="mt-5">
        <v-card-title
        class="teal--text text--lighten-5 
        light-green darken-3 
        font-weight-black"
        >Estudiantes grupo 2020 A II semestre</v-card-title>
        <div v-if="addPay">
            <v-btn
            dark
            class="my-6 light-green darken-2"
            @click="addPay = !addPay"
            >
                Inscribir estudiantes
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
        width="800"
        class="mx-auto my-10"
        >
        <v-card-title 
        class="font-weight-black 
                light-blue--text 
                text--lighten-5
                light-blue darken-3
                justify-center"
        >Inscripción de estudiantes</v-card-title>
        <v-card-text>
            <v-form ref="main" @submit.prevent="createNewBook()">
                <v-row>
                    <v-col cols="12">
                        <v-autocomplete
                            v-model="friends"
                            :disabled="isUpdating"
                            :items="people"
                            filled
                            chips
                            color="blue-grey lighten-2"
                            label="Seleccione los estudiantes"
                            item-text="name"
                            item-value="name"
                            multiple
                            >
                            <template v-slot:selection="data">
                                <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                close
                                @click="data.select"
                                @click:close="remove(data.item)"
                                >
                                <v-avatar left>
                                    <v-img :src="data.item.avatar"></v-img>
                                </v-avatar>
                                {{ data.item.name }}
                                </v-chip>
                            </template>
                            <template v-slot:item="data">
                                <template v-if="typeof data.item !== 'object'">
                                <v-list-item-content v-text="data.item"></v-list-item-content>
                                </template>
                                <template v-else>
                                <v-list-item-avatar>
                                    <img :src="data.item.avatar">
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                                    <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                                </v-list-item-content>
                                </template>
                            </template>
                            </v-autocomplete>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions class="mt-5">
            <v-btn
                color="blue darken-3"
                class="mx-auto"
                dark
            >
                Inscribir estudiantes
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
                    Tipo documento
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
                    Correo
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
                <td>{{ item.tipodoc }}</td>
                <td>{{ item.document }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.celular }}</td>
                <td>{{ item.correo }}</td>
                <td>
                    <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        v-bind="attrs"
                        v-on="on"
                        dark
                        x-small
                        class="brown ligthen-1"
                        to="/programs/program/group/students"
                        >{{ item.estado }}</v-btn>
                    </template>
                    <span>Cambiar estado estudiante</span>
                    </v-tooltip>
                </td>
                <td>
                    <label for="">Ver/Editar/Eliminar</label>
                </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
        
    </v-card>
</template>

<script>

export default {
    name: 'Students',
    data: () => ({
        expanded: 0,
        addPay: true,
        menu: false,
        friends: [],
        isUpdating: false,
        people: [
          { header: 'Group 1' },
          { name: 'Sandra Adams', group: 'Group 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { name: 'Ali Connors', group: 'Group 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { name: 'Trevor Hansen', group: 'Group 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { name: 'Tucker Smith', group: 'Group 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          { divider: true },
          { header: 'Group 2' },
          { name: 'Britta Holt', group: 'Group 2', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
        ],
        headers: [
          {
            text: 'Tipo documento',
            align: 'left',
            sortable: false,
            value: 'tipodoc'
          },
          { text: 'Documento', value: 'document' },
          { text: 'Nombre', value: 'name' },
          { text: 'Fecha inicio', value: 'finicio' },
          { text: 'Fecha final', value: 'ffinal' },
          { text: 'Estudiantes', value: 'estudiantes' },
          { text: 'Pagos', value: 'pagos' },
          { text: 'Estado', value: 'estado' },
          { text: 'Acciones', value: 'acciones' }
        ],
        groups: [
            {
                tipodoc: 'C',
                document: '1121254963',
                name: 'Andrea Suarez',
                celular: '315 2513843',
                correo: 'andreasuarez@gmail.com',
                estado: 'Inscrito',
                acciones: ''
            },
            {
                tipodoc: 'C',
                document: '52978634',
                name: 'Elkin Daza',
                celular: '321 4569874',
                correo: 'elkind@gmail.com',
                estado: 'Matriculado',
                acciones: ''
            },
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
      remove (item) {
        const index = this.friends.indexOf(item.name)
        if (index >= 0) this.friends.splice(index, 1)
      },
    }
}
</script>