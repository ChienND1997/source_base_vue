import Vue from 'vue'
import App from './App.vue'
// main.js
import VueI18n from 'vue-i18n'
import router from './router'
import store from './store'

Vue.use(VueI18n)

import { languages } from './locales/index'
import { defaultLocale } from './locales/index'

const messages = Object.assign(languages)

var i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'vn',
  messages
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
