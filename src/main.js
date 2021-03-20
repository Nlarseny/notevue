import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  notes: [{
    id: 1,
    name: "me",
    content: "lalalalalala",
    day: 20,
    month: 3,
    year: 2021,
    hour: 5,
    min: 21
  }],
  fav: []
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
