<template>
    <v-row>
        <v-col cols="4">
        <v-card
            class="mx-auto"
            max-width="250"
            color="light-green lighten-5"
        >
            <v-img
            class="white--text align-end"
            height="150px"
            src="@/assets/images/enfermeria.png"
            >
            </v-img>
            <v-card-title>Auxiliar en Enfermería</v-card-title>
            <v-card-subtitle class="pb-0">
            Técnico
            </v-card-subtitle>

            <v-card-text class="text--primary">
            <div>II semestre</div>

            <v-chip
                class="ma-2"
                color="brown ligthen-1"
                text-color="white"
            >
                En curso
            </v-chip>
            </v-card-text>

            <v-card-actions>

            <v-btn
                color="light-blue darken-3"
                text
                to="/student/student/programs/historial"
            >
                Explorar
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
        <v-col cols="4">
        <v-card
            class="mx-auto"
            max-width="250"
            color="light-green lighten-5"
        >
            <v-img
            class="white--text align-end"
            height="150px"
            src="@/assets/images/svb.png"
            >
            </v-img>
            <v-card-title>Soporte Vital Básico</v-card-title>
            <v-card-subtitle class="pb-0">
            Curso
            </v-card-subtitle>

            <v-card-text class="text--primary">
            <div></div>

            <v-chip
                class="ma-2"
                color="green"
                text-color="white"
            >
                Terminado
            </v-chip>
            </v-card-text>

            <v-card-actions>

            <v-btn
                color="light-blue darken-3"
                text
            >
                Explorar
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Programs'
}
</script>