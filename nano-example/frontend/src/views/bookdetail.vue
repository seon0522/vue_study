<template>
  <div>
  <v-card
  >
    <span><h1>{{bookdetail.title}}</h1></span><span><h1>{{bookdetail.subtitle}}</h1></span>
    <v-img
        :src="bookdetail.cover"
        height="600px"
    ></v-img>

    <v-card-title>
      <h3>작가:{{bookdetail.author}}, 번역:{{bookdetail.translator}}</h3>
    </v-card-title>

    <v-card-subtitle>
      페이지:{{bookdetail.page}}, 가격:₩{{bookdetail.price}}, ISBN:{{bookdetail.ISBN}}

      <div>{{bookdetail.info}}</div>
    </v-card-subtitle>

<!--    <v-expand-transition>-->
<!--      <div v-show="show">-->
<!--        <v-divider></v-divider>-->

<!--        <v-card-text>-->
<!--          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.-->
<!--        </v-card-text>-->
<!--      </div>-->
<!--    </v-expand-transition>-->
  </v-card>
  <v-card>d</v-card>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "bookdetail",
  props:['bookId'],
  data() {
    return {bookdetail: {}}
  },
  //전부 랜더링이 되면 호출
  mounted() {
    let url = '/api/books/' + this.bookId;
    axios.get(url).then(response => {
      console.log(response)
      this.bookdetail = response.data
    }).catch(err => {
      console.log(err)
    })
  },
}
</script>

<style scoped>

</style>