<template>
  <v-app>
    <v-content>
      <v-main>
        <Spinner :start="spin.val"/>
        <v-app-bar
          scroll-threshold="500"
          color="#FFF"
          shrink-on-scroll
          prominent
          height="200px"
          scroll-target="#scrolling-techniques-7"
          v-if="$store.getters['login/isUserConnected']"
        >
          <v-row>
            <v-col cols="2">
              <router-link to="/">
              <template>
                <v-img
                  class="mx-2"
                  src="@/assets/images/logo.jpg"
                  max-height="120"
                  max-width="120"
                  contain
                ></v-img>
              </template>
              </router-link>
              <v-row class="ml-8">
                <v-col>
                  <v-menu :close-on-content-click="false" open-on-hover bottom offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        class="blue darken-4 rounded"
                        color="white"
                        small
                        dark
                        v-on="on"
                      >
                        <v-icon
                        >mdi-menu</v-icon>
                      </v-btn>
                    </template>
              
                    <v-list>
                        <v-list-group
                          v-for="father in menu.fathers"
                          :key="father.id"
                          :prepend-icon="father.icon"
                          no-action
                        >
                          <template v-slot:activator>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title v-if="father.url" link @click="$router.push({path: father.url})">{{ father.description }}
                                </v-list-item-title>
                                <v-list-item-title v-else >{{ father.description }}
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </template>
              
                          <v-list-item
                            v-for="child in menu.children"
                            :key="child.id"
                            @click=""
                            v-if="child.menu_id === father.id"
                          >
                            <v-list-item-content>
                              <v-list-item-title link @click="$router.push({path: child.url})">{{ child.description }}</v-list-item-title>
                            </v-list-item-content>
              
                            <v-list-item-action>
                              <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                          </v-list-item>
                        </v-list-group>
                      </v-list>
                  </v-menu>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="d-flex justify-lg-space-around">
              <v-toolbar-title>
                    <div align="center" class="font-weight-black">
                        <div>
                        <h1 class="blue-grey--text text--darken-2">SISTEMA INTEGRAL
                            <span class="light-green--text text--darken-3">ADMINISTRATIVO</span>
                        </h1>
                        <h1 class="blue-grey--text text--darken-2">CORTEORINOQUIA
                            <span class="light-green--text text--darken-3">SINAC</span>
                        </h1>
                        </div>
                    </div>
              </v-toolbar-title>
            </v-col>
            <v-col cols="2" class="d-flex justify-end">
              <v-row class="px-6 py-16">
                <v-menu
                  bottom
                  right
                  transition="scale-transition"
                  origin="top left"
                >
                  <template v-slot:activator="{ on }">
                    <v-chip
                      pill
                      v-on="on"
                    >
                      <v-avatar 
                        color="blue darken-4" 
                        left
                      >
                        <v-icon dark>
                          mdi-account-circle
                        </v-icon>
                      </v-avatar>
                      {{ userAuth.name  }}
                    </v-chip>
                  </template>
                  <v-card width="300">
                    <v-list light color="blue darken-3">
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-avatar 
                            color="blue lighten-1"
                          >
                            <v-icon dark left>
                              mdi-account-circle
                            </v-icon>
                          </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title class="white--text">{{ userAuth.name }}</v-list-item-title>
                          <v-list-item-subtitle class="white--text">{{ userAuth.mail }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-btn
                            icon
                            @click="menu = false" 
                          >
                            <v-icon color="white">mdi-close-circle</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                    <v-list>
                      <v-list-item @click="() => {}">
                        <v-list-item-action>
                          <v-icon color="blue darken-4">mdi-account-key</v-icon>
                        </v-list-item-action>
                        <v-list-item-subtitle>Cambiar contraseña</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item v-on:click="logout">
                        <v-list-item-action>
                          <v-icon color="blue darken-4">mdi-logout</v-icon>
                        </v-list-item-action>
                        <v-list-item-subtitle>Cerrar sesión</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-menu>
              </v-row>
            </v-col>
          </v-row>
        </v-app-bar>
        <v-sheet 
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="800"
        color="#F1F0F1">
        <v-container fluid style="height: 1500px;">
          <Errors
            :error-message="errorMessages.message" 
            :errors="errorMessages.array"     
            ref="errors"                 
          ></Errors>
          <Success
            :success-message="successMessage"     
            ref="success"                 
          ></Success>
          <router-view />
        </v-container>
        </v-sheet>
        <Footer />      
      </v-main>
    </v-content>
  </v-app>
</template>

<script>

 // import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import eventBus from '@/eventBus'

  import LogoutServices from '@/modules/logout/services';

  export default {
    name: 'App',
    data: () => ({
      userAuth: {
        name: '',
        mail: ''
      },
      menu: {
        fathers: [],
        children: []
      },
      spin: {
        val: false
      },
      errorMessages: {
        message: '',
        array: []
      },
      successMessage: ''
    }),
    created () {
      console.log("entra created app");
        eventBus.$on('changeUserName', (event) => {
            this.userAuth.name = event.name
            this.userAuth.mail = event.email
        })
        eventBus.$on('loadMenu', (event) => {
          console.log(event);
            this.menu.fathers = event.fathers
            this.menu.children = event.children
        })
    },
    provide() {
      return {
        mySpinner: this.spin,
        errorMessages: this.errorMessages,
        successMessage: this.successMessage,
      }
    },
    components: {
      //Header,
      Footer
    },
    methods: {
      // changeUserName (newUserName) {
      //   console.log("Change name function");
      //   this.userName = newUserName
      // },
      goMenu(url){
          console.log("Go menu " + url);
            this.$router.push(url)
        },
      async logout () {
        try {
            this.spin.val = true
            // this.errorMessages.message = ''
            // this.errorMessages.array = []

            await LogoutServices.logout()
            .then(response => {
                console.log(response);
                this.$store.dispatch('login/signIn', null)
                this.$router.push('/signin')
                this.spin.val = false
                this.successMessage = response.data.message
            })
        }catch (error){
           // this.errorMessages.message = `Consulte a la administradora: ${error}`
            console.log("Error de afuera " + error);
        }

        //this.mySpinner.val = false
      },
    }
  };
</script>