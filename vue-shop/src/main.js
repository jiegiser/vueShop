import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(vuex);
new Vue({
  render: h => h(App),
}).$mount('#app')
