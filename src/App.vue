<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/smallnote.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/fav">
        <div class="menu-item browse">
          <img src="/notepad_plain_paper.png" height="50">
          <p>Favorites</p>
        </div>
      </router-link>
    </div>
    <div>
    <h1>Create a note here:</h1>
    <form v-on:submit.prevent="addComment">
        <textarea v-model="addedComment"></textarea>
        <br />
        <button>Make Note</button>
    </form>
    </div>
  </div>
  <div>
  </div>
  <router-view />
  <footer class="bottom">
    <div class="text-center p-3" style="background-color: #bad4f7">
      2021 Copyright (maybe):
      <a class="text-dark" href="https://github.com/Nlarseny/notevue" target="_blank">Github Classroom Link</a>
    </div>
  </footer>
</div>
</template>

<script>

export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods:{
  addComment() {
    var currentdate = new Date();
    var cur_month = currentdate.getMonth();
    var cur_year = currentdate.getFullYear();
    var cur_day = currentdate.getDay();

    var cur_min = currentdate.getMinutes();
    var cur_hour = currentdate.getHours();

    this.$root.$data.notes.push({
      id: this.$root.$data.notes.length + 1,
      name: "You",
      content: this.addedComment,
      month: cur_month + 1,
      day: cur_day,
      year: cur_year,
      min: cur_min,
      hour: cur_hour,
    });
    console.log(this.$root.$data.notes)
  },
}
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
