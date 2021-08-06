import Vue from 'vue'
import VueRouter from 'vue-router'
import books from "@/views/books";
import bookdetail from "@/views/bookdetail";

Vue.use(VueRouter)

const routes = [
{
    path: '/',
    name: 'books',
    component: books
    },
    {
        path: '/books/:bookId',
        name: 'bookdetail',
        component: bookdetail,
        props:true
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
