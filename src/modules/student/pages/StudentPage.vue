<template>
    <v-row align="center" justify="center">
        <v-col cols="10" class="text-center">
            <h1 class="corte-module-title">ADMINISTRACION DE ESTUDIANTES</h1>
            <StudentSearch />
            <router-view>
            </router-view>
        </v-col>
    </v-row>
</template>

<script>
    import StudentSearch from '@/modules/student/components/StudentSearch'
export default {
    name: 'StudentPage',
    components: {
        StudentSearch
    }
}
</script>