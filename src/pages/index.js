import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { Button, Select, Menu, Submenu, MenuItem, Container, Header, Main, Footer } from 'element-ui'

import router from '../router'
import Frame from '../layout/frame'

Vue.config.productionTip = false

const plugins = [
  Button, Select, Menu, Submenu, MenuItem, Container, Header, Main, Footer
]

plugins.forEach(item => {
  // Vue.component(item.name, item)
  Vue.use(item)
})

Vue.use(Vuex)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(Frame),
}).$mount('#app')
