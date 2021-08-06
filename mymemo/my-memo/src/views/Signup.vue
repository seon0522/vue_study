<template>
<div>
  <h1>Signin</h1>
  <form @submit.prevent="onSubmit(userid, password)">
    <input type="text" v-model="userid" placeholder="User ID" />
    <input type="password" v-model="password" placeholder="Password" />
    <textarea v-model="message" cols="30" rows="10"></textarea>
    <input type="submit" value="Signin" />
  </form>
</div>
</template>

<script>
export default {
name: "Signup",
  data(){
    return{
      userid:'',
      password:'',
      message:''
    }
  },
  methods:{
    onSubmit(userid, password, message){
      this.$store.dispatch('signin', {userid, password})
          .then(()=>{
            this.$router.push('/')
          })
          .catch(()=>{
            this.message='Signin Failed.'
          })
    }
  }

}
</script>

<style scoped>

</style>