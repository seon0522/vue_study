<template>
  <div>
    <div>
      <input type="text" v-model="title"><br>
      <input type="text" v-model="content"><br>
      <input type="file" @change="selectFile" ref="file"><br>
      <button @click="addMEmo">Save</button>
    </div>
  </div>
</template>

<script>
import memoApi from '../api/memos'
export default {
  name: "AddMemo",
  data(){
    return{
      title:'',
      content:'',
      file:''
    }
  },
  methods:{
    selectFile(){
      this.file = this.$refs.file.files[0]
    },
    addMemo(){
      const data = new FormData();
      data.append('title',this.title)
      data.append('content', this.content)
      data.append('file', this.file)

      memoApi.addMemo(data)
      .then(response=>{
        console.log(response.status)
        this.$router.push('/')
      })
      .catch(error=>{
        console.log(error)
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>

</style>