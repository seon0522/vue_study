import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import reviews from "./modules/reviews";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        user,
        reviews
    }
})