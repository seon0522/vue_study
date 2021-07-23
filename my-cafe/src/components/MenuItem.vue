<template>
<div>
  <h1>MenuItem</h1>
  <p>{{menu_list}}</p>
</div>
</template>

<script>
export default {
  name: "MenuItem",
  computed:{
    menu_list() {
      const id = this.$route.params.menu_id
      if (id == '1')
        return '아이스 아메리카노'
      else if (id == '2')
        return '카페라떼'
      else
        return ''
    },
  }
}
</script>

<style scoped>

</style>