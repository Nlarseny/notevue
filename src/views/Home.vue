<template>
<div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/NoteList.vue"
export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
    return {
    }
  },
  computed: {
    products() {
      return this.$root.$data.notes;
    }
  },
}
</script>
