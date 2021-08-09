<!--회원가입-->

<script src="../store/index.js"></script>
<template>
<div>
  <h1>Signup</h1>
  <form @submit.prevent="onSubmit(userid, name , password)">
    ID  : <input type="text" v-model="userid" placeholder="User ID" /><br>
    Name: <input type="text" v-model="name" placeholder="name" /><br>
    PW  : <input type="password" v-model="password" placeholder="Password" /><br>
    <input type="submit" value="signin" /><br>
  </form>
</div>
</template>

<script>

export default {
name: "Signup",
  data(){
    return{
      userid:'',
      name:'',
      password:'',
    }
  },
  methods:{
    onSubmit(userid, name, password){
      this.$store.dispatch('signup',{userid, name, password})
          .then(()=>{
            this.$router.push('/')
          })
          .catch(()=>{
            this.message='Signup please.'
          })
    }
  }

}
</script>

<style scoped>

</style>