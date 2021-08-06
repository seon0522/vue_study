<template>
  <div id="app">
    <h1>Welcome {{ userId }}</h1>
    <template>
      <v-text-field :rules="rules" v-model="newId"></v-text-field>
    </template>
    <v-btn
        @click="saveUserId"
        block
        elevation="2"
        outlined
    >save
    </v-btn>
    <v-btn
        block
        color="accent"
        elevation="5"
        @click="updateReviews"
    >Update
    </v-btn>
    <h1>{{ reviewCount }}</h1>
    <v-simple>
      <template v-slot:default>
        <thead>
        <tr>
          <th>Email</th>
          <th>Comment</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="r in reviews" :key="r.id">
          <td>{{ r.email }}</td>
          <td>{{ r.body }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  data() {
    return {newId: ''}
  },
  computed: {
    //namespace 없는 경우
    ...mapState({
      userId: state => state.user.userId
    }),
    ...mapState('reviews', {
      reviews: state => state.reviews
    }),
    ...mapGetters('reviews', ['reviewCount'])
  },
  //단순히 값을 바꿀 때는
  methods: {
    ...mapMutations(['updateUserId']),
    ...mapActions('reviews', ['getReviews']),
    saveUserId() {
      this.updateUserId(this.newId)
    },
    updateReviews() {
      this.getReviews()
    }

  }
}
</script>

<style scoped>

</style>