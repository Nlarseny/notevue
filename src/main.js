import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css'

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
    min: 21,
  },
  {
    id: 2,
    name: "you",
    content: "this is a message",
    day: 20,
    month: 3,
    year: 2021,
    hour: 5,
    min: 21,
  },
  {
    id: 3,
    name: "me",
    content: "hey hey",
    day: 20,
    month: 3,
    year: 2021,
    hour: 5,
    min: 11,
  },
  {
    id: 4,
    name: "me",
    content: "so, what now?",
    day: 21,
    month: 1,
    year: 2021,
    hour: 8,
    min: 21,
  },
  {
    id: 5,
    name: "me",
    content: "there is nothing to see here",
    day: 20,
    month: 3,
    year: 2021,
    hour: 6,
    min: 23,
  },
  {
    id: 6,
    name: "m2e",
    content: "i wanna be free!!!",
    day: 16,
    month: 8,
    year: 2021,
    hour: 7,
    min: 21,
  },
  {
    id: 7,
    name: "me",
    content: "et tu brutus?",
    day: 15,
    month: 3,
    year: 2021,
    hour: 9,
    min: 11,
  },
  {
    id: 8,
    name: "me",
    content: "Nickleback",
    day: 20,
    month: 3,
    year: 2021,
    hour: 2,
    min: 21,
  },
  {
    id: 9,
    name: "me",
    content: "screamo baby",
    day: 20,
    month: 9,
    year: 2020,
    hour: 5,
    min: 22,
  },
  {
    id: 10,
    name: "me",
    content: "la da dee",
    day: 22,
    month: 11,
    year: 2020,
    hour: 9,
    min: 11,
  }
],
  fav: []
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
