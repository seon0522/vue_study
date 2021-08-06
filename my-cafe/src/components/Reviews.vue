<template>
  <div id="app">
    <h1>Reviews</h1>
    <ul>
      <li v-for="c in comments" :key="c.id">
        <p>{{c.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Reviews",
  data(){
    return { comments:[] }
  },
  mounted() {
    axios.get('/api/comments')
    .then(respone=>{
      console.log(respone)
      this.comments = respone.data
    }).catch(
        err=>{
          console.log(err)
        })
  }
};
</script>

<style scoped>

</style>