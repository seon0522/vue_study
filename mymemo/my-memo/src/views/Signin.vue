<script src="../../vue.config.js"></script>
<template>
 <div>
   <h1>Signin</h1>
   <form @submit.prevent="onSubmit(userid, password)">
     <input type="text" v-model="userid" placeholder="User ID" />
     <input type="password" v-model="password" placeholder="Password" />
     <input type="submit" value="Signin" />
   </form>
   <li>
     <p>{{message}}</p>
   </li>
 </div>
</template>

<script>
export default {
name: "Signin",
  data(){
  return{
    userid:'',
    password:'',
    message:''
  }
  },
  methods:{
    onSubmit(userid, password){
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