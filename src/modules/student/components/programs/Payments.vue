<template>
    <v-card class="mt-5">
        <v-card-title
        class="teal--text text--lighten-5 
        light-green darken-3 
        font-weight-black"
        >Pagos Programa auxiliar enfermería. Grupo 2020 A II semestre</v-card-title>
        <div v-if="addPay">
            <v-btn
            dark
            class="my-6 light-green darken-2"
            @click="addPay = !addPay"
            >
                Agregar Pago
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
        >Registrar pago</v-card-title>
        <v-card-text>
            <v-form ref="main" @submit.prevent="createNewBook()">
                <v-row>
                    <v-col cols="12">
                        <v-autocomplete
                            v-model="values"
                            :items="items"
                            dense
                            label="Elija un pago"
                        ></v-autocomplete>
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
                                label="Fecha"
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
                        <v-text-field label="Valor"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-select
                        :items="items"
                        label="Forma de pago"
                        ></v-select>
                    </v-col>
                    <v-col cols="6">
                        <v-file-input
                            accept="image/*"
                            label="Evidencia pago"
                        ></v-file-input>
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
                Registrar
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
        <v-expansion-panels 
        inset 
        :value="expanded"
        active-class="activePanel"
        >
            <v-expansion-panel>
                <v-expansion-panel-header 
                class="font-weight-black 
                light-green--text 
                text--darken-4"
                >
                    Pagos obligatorios
                    <v-chip
                    class="ml-15 mr-15"
                    color="green"
                    outlined
                    >
                    Saldo total: $200.000
                    </v-chip>
                </v-expansion-panel-header>
                <v-expansion-panel-content >
                    <v-card
                        class="mt-5"
                        color="blue-grey lighten-4"
                    >
                        <v-card-text class="text--primary text-left">
                            <div class="font-weight-black">Inicial matrícula: $320.000</div>
                            <div>Pago inicial para poder matricular al estudiante.
                                Corresponde a la mitad del valor total de la matrícula.
                            </div>
                            <div>Fecha vencimiento: 01/02/2021</div>
                            <div class="mt-5 font-weight-black" style="font-size: 1.3em;">Pagos realizados</div>
                            <v-simple-table primary>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">
                                    Fecha
                                </th>
                                <th class="text-left">
                                    Recibo
                                </th>
                                <th class="text-left">
                                    Descripción
                                </th>
                                <th class="text-left">
                                    Forma de pago
                                </th>
                                <th class="text-left">
                                    Valor
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>25/01/2021</td>
                                <td>
                                    <v-btn
                                    text
                                    dark
                                    @click="showVoucher"
                                    class="light-green--text text--darken-2"
                                    >
                                        R104
                                    </v-btn>
                                </td>
                                <td>Paga el total del pago inicial</td>
                                <td>Efectivo</td>
                                <td>$320.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="green--text 
                                    text--darken-1">Total pagos</td>
                                    <td class="green--text 
                                    text--darken-1">$320.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="green--text 
                                    text--darken-1
                                    font-weight-black">Saldo</td>
                                    <td class="green--text 
                                    text--darken-1
                                    font-weight-black">$0</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                        </v-card-text>
                    </v-card>
                    <v-card
                        class="mt-5"
                        color="blue-grey lighten-4"
                    >
                        <v-card-text class="text--primary text-left">
                            <div class="font-weight-black">Carnet: $14.000</div>
                            <div>Pago del carnet estudiantil.
                            </div>
                            <div>Fecha vencimiento: 01/02/2021</div>
                            <div class="mt-5 font-weight-black" style="font-size: 1.3em;">Pagos realizados</div>
                            <v-simple-table primary>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">
                                    Fecha
                                </th>
                                <th class="text-left">
                                    Recibo
                                </th>
                                <th class="text-left">
                                    Descripción
                                </th>
                                <th class="text-left">
                                    Forma de pago
                                </th>
                                <th class="text-left">
                                    Valor
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>25/01/2021</td>
                                <td>
                                    <v-btn
                                    text
                                    dark
                                    @click="showVoucher"
                                    class="light-green--text text--darken-2"
                                    >
                                        R104
                                    </v-btn>
                                </td>
                                <td>Paga del carnet</td>
                                <td>Efectivo</td>
                                <td>$140.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="green--text 
                                    text--darken-1">Total pagos</td>
                                    <td class="green--text 
                                    text--darken-1">$14.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="green--text 
                                    text--darken-1
                                    font-weight-black">Saldo</td>
                                    <td class="green--text 
                                    text--darken-1
                                    font-weight-black">$0</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                        </v-card-text>
                    </v-card>
                    <v-card
                        class="mt-5"
                        color="blue-grey lighten-4"
                    >
                        <v-card-text class="text--primary text-left">
                            <div class="font-weight-black">Seguro: $10.000</div>
                            <div>Pago del seguro estudiantil.
                            </div>
                            <div>Fecha vencimiento: 01/02/2021</div>
                            <div class="mt-5 font-weight-black" style="font-size: 1.3em;">Pagos realizados</div>
                            <v-simple-table primary>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">
                                    Fecha
                                </th>
                                <th class="text-left">
                                    Recibo
                                </th>
                                <th class="text-left">
                                    Descripción
                                </th>
                                <th class="text-left">
                                    Forma de pago
                                </th>
                                <th class="text-left">
                                    Valor
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>25/01/2021</td>
                                <td>
                                    <v-btn
                                    text
                                    dark
                                    @click="showVoucher"
                                    class="light-green--text text--darken-2"
                                    >
                                        R104
                                    </v-btn>
                                </td>
                                <td>Paga del seguro estudiantil</td>
                                <td>Efectivo</td>
                                <td>$10.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="green--text 
                                    text--darken-1">Total pagos</td>
                                    <td class="green--text 
                                    text--darken-1">$10.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="green--text 
                                    text--darken-1
                                    font-weight-black">Saldo</td>
                                    <td class="green--text 
                                    text--darken-1
                                    font-weight-black">$0</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                        </v-card-text>
                    </v-card>
                    <v-card
                        class="mt-5"
                        color="blue-grey lighten-4"
                    >
                        <v-card-text class="text--primary text-left">
                            <div class="font-weight-black">Saldo matrícula (primer corte): $106.000</div>
                            <div>Primer pago del saldo por pagar de la mitad del valor de la matrícula.
                            </div>
                            <div>Fecha vencimiento: 10/03/2021</div>
                            <div class="mt-5 font-weight-black" style="font-size: 1.3em;">Pagos realizados</div>
                            <v-simple-table primary>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">
                                    Fecha
                                </th>
                                <th class="text-left">
                                    Recibo
                                </th>
                                <th class="text-left">
                                    Descripción
                                </th>
                                <th class="text-left">
                                    Forma de pago
                                </th>
                                <th class="text-left">
                                    Valor
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>25/02/2020</td>
                                <td>R10</td>
                                <td>Abono del primer corte de pago</td>
                                <td>Efectivo</td>
                                <td>$50.000</td>
                                </tr>
                                <tr>
                                <td>09/03/2020</td>
                                <td>R30</td>
                                <td>Abono del primer corte de pago</td>
                                <td>Efectivo</td>
                                <td>$56.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="green--text 
                                    text--darken-1">Total pagos</td>
                                    <td class="green--text 
                                    text--darken-1">$106.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="green--text 
                                    text--darken-1
                                    font-weight-black">Saldo</td>
                                    <td class="green--text 
                                    text--darken-1
                                    font-weight-black">$0</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                        </v-card-text>
                    </v-card>
                    <v-card
                        class="mt-5"
                        color="blue-grey lighten-4"
                    >
                        <v-card-text class="text--primary text-left">
                            <div class="font-weight-black">Saldo matrícula (segundo corte): $106.000</div>
                            <div>Segundo pago del saldo por pagar de la mitad del valor de la matrícula.
                            </div>
                            <div>Fecha vencimiento: 10/04/2021</div>
                            <div class="mt-5 font-weight-black" style="font-size: 1.3em;">Pagos realizados</div>
                            <v-simple-table primary>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">
                                    Fecha
                                </th>
                                <th class="text-left">
                                    Recibo
                                </th>
                                <th class="text-left">
                                    Descripción
                                </th>
                                <th class="text-left">
                                    Forma de pago
                                </th>
                                <th class="text-left">
                                    Valor
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>28/03/2020</td>
                                <td>R10</td>
                                <td>Abono del segundo corte de pago</td>
                                <td>Efectivo</td>
                                <td>$14.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="deep-orange--text 
                                    text--darken-1">Total pagos</td>
                                    <td class="deep-orange--text 
                                    text--darken-1">$14.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="deep-orange--text 
                                    text--darken-1
                                    font-weight-black">Saldo</td>
                                    <td class="deep-orange--text 
                                    text--darken-1
                                    font-weight-black">$92.000</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                        </v-card-text>
                    </v-card>
                    <v-card
                        class="mt-5"
                        color="blue-grey lighten-4"
                    >
                        <v-card-text class="text--primary text-left">
                            <div class="font-weight-black">Saldo matrícula (tercer corte): $108.000</div>
                            <div>Tercer pago del saldo por pagar de la mitad del valor de la matrícula.
                            </div>
                            <div>Fecha vencimiento: 10/05/2021</div>
                            <div class="mt-5 font-weight-black" style="font-size: 1.3em;">Pagos realizados</div>
                            <v-simple-table primary>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">
                                    Fecha
                                </th>
                                <th class="text-left">
                                    Recibo
                                </th>
                                <th class="text-left">
                                    Descripción
                                </th>
                                <th class="text-left">
                                    Forma de pago
                                </th>
                                <th class="text-left">
                                    Valor
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="deep-orange--text 
                                    text--darken-1">Total pagos</td>
                                    <td class="deep-orange--text 
                                    text--darken-1">$0</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="deep-orange--text 
                                    text--darken-1
                                    font-weight-black">Saldo</td>
                                    <td class="deep-orange--text 
                                    text--darken-1
                                    font-weight-black">$108.000</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header class="font-weight-black light-green--text text--darken-4">Pagos opcionales</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card
                        class="mt-5"
                        color="blue-grey lighten-4"
                    >
                        <v-card-text class="text--primary text-left">
                            <div class="font-weight-black">Arl primera práctica: $10.000</div>
                            <div>Pago arl práctica hospital.
                            </div>
                            <div>Fecha vencimiento: 28/04/2021</div>
                            <div class="mt-5 font-weight-black" style="font-size: 1.3em;">Pagos realizados</div>
                            <v-simple-table primary>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">
                                    Fecha
                                </th>
                                <th class="text-left">
                                    Recibo
                                </th>
                                <th class="text-left">
                                    Descripción
                                </th>
                                <th class="text-left">
                                    Forma de pago
                                </th>
                                <th class="text-left">
                                    Valor
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="deep-orange--text 
                                    text--darken-1">Total pagos</td>
                                    <td class="deep-orange--text 
                                    text--darken-1">$10.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="deep-orange--text 
                                    text--darken-1
                                    font-weight-black">Saldo</td>
                                    <td class="deep-orange--text 
                                    text--darken-1
                                    font-weight-black">$10.000</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card>
</template>

<script>
export default {
    name: 'Payments',
    data: () => ({
        expanded: 0,
        addPay: true,
        menu: false,
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
        showVoucher: function(){
            var pdf = require('@/assets/docs/voucher.pdf')
            window.open(pdf, '_blank');
        }
    },
}
</script>

<style lang="css" scoped>
    .v-expansion-panel-header--active{
        background-color:#DCEDC8;
    }
</style>