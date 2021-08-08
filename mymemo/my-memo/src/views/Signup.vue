!--회원가입-->
<+
*-script src="../store/index.js"></script>
<template>
<div>
  <h1>Signup</h1>
  <form @submit.prevent="onSubmit(userid, password, name)">
    <input type="text" v-model="userid" placeholder="User ID" />
    <input type="password" v-model="password" placeholder="Password" />
    <textarea v-model="name" cols="30" rows="10"></textarea>
    <input type="submit" value="signin" />
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
      name:''
    }
  },
  methods:{
    onSubmit(userid, password, name){
      this.$store.dispatch('signup',{userid, password, name})
          .then(()=>{
            this.$router.push('/signin')
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