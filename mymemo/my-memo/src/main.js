// index.html에 어떤 element를 붙일 지

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/index'

Vue.config.productionTip = false

//#app이라는 어떤 element를 붙여야 하는지 설정
new Vue({
  router,
  vuetify,
  store,
  beforeCreate() {
    this.$store.commit('getAccessToken')
  },
  render: h => h(App)
}).$mount('#app')
