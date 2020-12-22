<template>
  <v-row align="center" justify="center">
    <v-col cols="8">
      <v-card
        width="1000"
        text-center>
        <v-card-title 
        class="teal--text text--lighten-5 
        light-blue darken-3 
        justify-center
        font-weight-black">Sandra Milena Gomez Hernandez</v-card-title>
        <v-tabs
          class="tabs"
          centered
          grow
          height="60px"
        >
          <v-tab to="/student/student/">Estudiante</v-tab>
          <v-tab to="/student/student/histories">Historial</v-tab>
          <v-tab to="/student/student/programs">Programas</v-tab>
        </v-tabs>
        <router-view></router-view>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Student',
  data: () => ({
  })
}
</script>