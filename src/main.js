import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  preLoad: 1
})

FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
