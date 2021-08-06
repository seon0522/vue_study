<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
<!--        <v-img-->
<!--          alt="Vuetify Logo"-->
<!--          class="shrink mr-2"-->
<!--          contain-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
<!--          transition="scale-transition"-->
<!--          width="40"-->
<!--        />-->
        <span class="mr-2"><h1>Books</h1></span>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container
          class="spacing-playground pa-6"
          fluid>
        <v-row>
          <v-col
              class="d-flex align-center"
              cols="12"
              sm="6">
            <router-view class="white text-center py-6"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
