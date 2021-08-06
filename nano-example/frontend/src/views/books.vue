<template>
  <div id="app">
        <div v-for="s in booklist" :key="s.bookId"    class="pa-2"
                  outlined
                  tile>
    <v-card
        class="pa-2"
        elevation="7"
        width="auto"
    >
      <v-img
          max-width="300px"
          :src="s.cover"
      ></v-img>

      <v-card-text>
<!--        {{s.bookId}}-->
        <router-link :to="`/books/${s.bookId}`">
          <h2
              class="text-h6 primary--text"
              disabled>
            {{ s.title }}
          </h2>
        </router-link>
      </v-card-text>

      <v-card-text
          class="text--primary">
        <div>{{ s.author }}</div>
      </v-card-text>
    </v-card>
        </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: "books",
  data() {
    return {booklist: []}
  },
  mounted() {
    axios.get('/api/books').then(response => {
      console.log(response)
      this.booklist = response.data
    }).catch(err => {
      console.log(err)
    })
  },
  methods:{
    clickBook(){
      return this.$route.params.bookId
    }
  }
}
</script>

<style scoped>

</style>