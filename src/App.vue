<template>
  <v-app>
    <v-content>
      <h1>Hello Pacha Mama</h1>
      
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
