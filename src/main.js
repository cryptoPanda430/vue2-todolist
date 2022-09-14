import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VeeValidate from "vee-validate";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(VeeValidate)

Vue.use(VeeValidate, {
  // this is the default
  inject: true,
  // important to name this something other than 'fields'
  fieldsBagName: "veeFields"
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
