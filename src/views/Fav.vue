<template>
<div>
<h1> Your Favorite Notes </h1>
  <FavList :products="fav" />
    <p>{{empty}}</p>
</div>
</template>

<script>
import FavList from "../components/FavList.vue"
export default {
  name: 'Browse',
  components: {
    FavList
  },
  data() {
    return {
    }
  },
  computed: {
    fav() {
      return this.$root.$data.fav;
    },
    empty() {
      if (this.$root.$data.fav.length == 0) {
        return "You really don't like any of your notes? ...";
      }
      else {
        return "";
      }
    }
  },
  methods: {
  }
}
</script>
