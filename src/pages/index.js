import Vue from 'vue'
import {
  Button,
  Select,
  Menu,
  Submenu,
  MenuItem,
  Container,
  Header,
  Main,
  Footer,
  Message,
} from 'element-ui'
import store from '../store'
import router from '../router'
import Frame from '../layout/frame'

Vue.config.productionTip = false

const plugins = [Button, Select, Menu, Submenu, MenuItem, Container, Header, Main, Footer]

plugins.forEach((item) => {
  // Vue.component(item.name, item)
  Vue.use(item)
})

Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: (h) => h(Frame),
}).$mount('#app')
