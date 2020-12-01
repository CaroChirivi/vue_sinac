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
        font-weight-black">Auxiliar de enfermería</v-card-title>
        <v-tabs
          class="tabs"
          centered
          grow
          height="60px"
        >
          <v-tab to="/programs/program/">Programa</v-tab>
          <v-tab to="/programs/program/groups">Grupos</v-tab>
        </v-tabs>
        <router-view></router-view>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'Program'
}
</script>