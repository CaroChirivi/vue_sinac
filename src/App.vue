<template>
  <v-app>
    <v-content>
      <Spinner :start="spin.val"/>
      <Header />
      <v-main>
        <v-container fill-height fluid>
          <Errors
            :error-message="errorMessages.message" 
            :errors="errorMessages.array"     
            ref="errors"                 
          ></Errors>
          <router-view />
        </v-container>
        <Footer />      
      </v-main>
    </v-content>
  </v-app>
</template>

<script>

  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default {
    name: 'App',
    data: () => ({
      spin: {
        val: false
      },
      errorMessages: {
        message: '',
        array: []
      }
    }),
    provide() {
      return {
        mySpinner: this.spin,
        errorMessages: this.errorMessages
      }
    },
    components: {
      Header,
      Footer
    }
  };
</script>