import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from "vue-touch"
import "./lib/loading/index.js"
import VueCookies from 'vue-cookies'
import {Toast} from 'vant';

Vue.use(Toast);

Vue.use(VueCookies);

Vue.use(VueTouch,{name:"v-touch"});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
