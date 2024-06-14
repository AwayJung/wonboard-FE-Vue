import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/index.js' // Vuex 저장소 불러오기

Vue.config.productionTip = false

new Vue({
  store, // Vuex 저장소 연결 
  router,
  render: h => h(App)
}).$mount('#app')
