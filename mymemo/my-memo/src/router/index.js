import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/AddMemo'
import Read from '../views/ReadMemo'
import Signin from '../views/Signin'
import Signup from '../views/Signup'

Vue.use(VueRouter)


//로컬이랑 전역이랑 섞어 쓸 때 편하려고 만들어 둠.
const auth=(to, from, next)=>{
  if(to.matched.some((record)=>record.meta.requiresAuth)){
    if(localStorage.getItem('accessToken')==null){
      alert('Signin please')
      next('/signin');
    }
  }
  next();
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{requiresAuth:true}
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    meta:{requiresAuth:true}
  },
  {
    path: '/memos/:memoId',
    name: 'Read',
    component   : Read,
    meta:{requiresAuth: true}
  },  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next)=>{
//   //let url = '';
//
//   if(to.matched.some((record)=>record.meta.requiresAuth)){
//     alert('Signin please')
//     next('/signin');
//   } else
//     next();
// });
router.beforeEach(auth);  //교수님의 의도

export default router
