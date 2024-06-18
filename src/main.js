import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/index.js' // Vuex 저장소 불러오기

Vue.config.productionTip = false

Vue.filter('truncate', function (text, length, suffix) {
  suffix = suffix || '....';
  length = length || 10;
  return text.length > length ? text.substring(0, length) + suffix : text;
}
);

new Vue({
  store, // Vuex 저장소 연결 
  router,
  render: h => h(App)
}).$mount('#app')
