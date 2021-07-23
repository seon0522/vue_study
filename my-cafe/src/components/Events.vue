<template>
  <div>
    <h1>hello</h1>
    <h1>{{ event_title }}</h1>
    <p>{{ searched_event}}</p>
  </div>
</template>

<script>
export default {
  name: "Events",
  props: ['event_id', 'query_id'],
  computed: {
    event_title() {
      if (this.event_id == '1') {
        return '1+1'
      } else if (this.event_id == '2') {
        return 'Free cookies'
      } else {
        return ''
      }
    },
    searched_event(){
      if(this.query_id){
        return '2+1'
      }else
        return ''
    }
  }
}
</script>

<style scoped>

</style>