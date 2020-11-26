<template>
    <v-card class="mt-5">
        <v-card-title
        class="teal--text text--lighten-5 
        light-green darken-3 
        font-weight-black"
        >Pagos Programa auxiliar enfermería. Grupo 2020 A II semestre</v-card-title>
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
                                <td>R104</td>
                                <td>Paga el total del pago inicial</td>
                                <td>Efectivo</td>
                                <td>$320.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="deep-orange--text 
                                    text--darken-1">Total pagos</td>
                                    <td class="deep-orange--text 
                                    text--darken-1">$320.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="deep-orange--text 
                                    text--darken-1
                                    font-weight-black">Saldo</td>
                                    <td class="deep-orange--text 
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
                                <td>25/03/2020</td>
                                <td>R30</td>
                                <td>Abono del primer corte de pago</td>
                                <td>Efectivo</td>
                                <td>$50.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="deep-orange--text 
                                    text--darken-1">Total pagos</td>
                                    <td class="deep-orange--text 
                                    text--darken-1">$100.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="deep-orange--text 
                                    text--darken-1
                                    font-weight-black">Saldo</td>
                                    <td class="deep-orange--text 
                                    text--darken-1
                                    font-weight-black">$6.000</td>
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
                                <td>R104</td>
                                <td>Paga el total del pago inicial</td>
                                <td>Efectivo</td>
                                <td>$320.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="deep-orange--text 
                                    text--darken-1">Total pagos</td>
                                    <td class="deep-orange--text 
                                    text--darken-1">$320.000</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="deep-orange--text 
                                    text--darken-1
                                    font-weight-black">Saldo</td>
                                    <td class="deep-orange--text 
                                    text--darken-1
                                    font-weight-black">$0</td>
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
        expanded: 0
    })
}
</script>

<style lang="css" scoped>
    .v-expansion-panel-header--active{
        background-color:#DCEDC8;
    }
</style>