<template>
<div>
  hello
  {{ memo }}
</div>
</template>

<script>
import memoApi from '../api/memos'

export default {
  name: "ReadMemo",
  data(){
    return{
      memo:{}
    }
  },
  mounted() {
    memoApi.getMemo(this.$route.params.memoId)
    .then(res=>{
      this.memo = res.data
      console.log(this.memo)
    })
    .catch(()=>{
    })
  }
}
</script>

<style scoped>

</style>