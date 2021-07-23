<template>
  <div>
    <h1>Menu</h1>
    <ul>
<!--      v-bind으로 값 넣기-->
        <li v-for="item in menus" :key="item.id"><a :href="'/menus/' + item.id">{{ item.name }}</a></li>
<!--      2번째 방법 : 메소드 활용-->
      <li v-for="item in menus" :key="item.id"><a :href="menuAddress(item.id)">{{ item.name }}</a></li>
    </ul>
    <h1>{{ menu_name }}</h1>
    <p>{{ searched_menu }}</p>
  </div>
</template>

<script>
export default {
  name: "Memus",
  data() {
    return {
      menu_num: null,
      menus: [
          {id:1 ,
        name:'아메리카노',
          price:1000},{id:2 ,
          name:'카페라떼',
          price:2000} ,{id:3 ,
          name:'초코라떼',
          price:3000}]=-09
    }
  },
  methods:{
    menuAddress(id){
     return '/menus/' + id;
    }
  },
  computed: {
    menu_name() {
      const id = this.$route.params.menu_id
      if (id == '1')
        return '아이스 아메리카노'
      else if (id == '2')
        return '카페라떼'
      else
        return ''
    },
    searched_menu() {
      const id = this.$route.query.menu_id
      if (id == '1')
        return '아이스 아메리카도'
      else if (id == '2')
        return '카페라떼'
      else
        return ''
    }
  }
}
</script>

<style scoped>

</style>