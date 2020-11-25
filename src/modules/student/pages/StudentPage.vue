<template>
    <v-row align="center" justify="center">
        <v-col cols="10" class="text-center">
            <h1 class="corte-module-title mb-2">ADMINISTRACIÓN DE ESTUDIANTES</h1>
            <router-view>
            </router-view>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'StudentPage'
}
</script>