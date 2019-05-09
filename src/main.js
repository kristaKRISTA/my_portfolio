import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'

import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)

Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
