import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  notes: [{
    id: 1,
    name: "Egg Salad",
    content: "This is a test buddy boy",
  }, {
    id: 2,
    name: "different",
    content: "This boy",
  }],
  fav: [{
    id: 2,
    name: "different",
    content: "This boy",
  }]
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
