<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <p>{{product.content}}</p>
      </div>
      <div class="price">
        <button class="auto" v-on:click="remove(product)">Delete</button>
        <button class="auto" v-on:click="add_to(product)">Add to Favorites</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    add_to(product) {
      this.$root.$data.fav.push(product);
      console.log(product);
    },
    remove(product) {
    const index = this.$root.$data.notes.map(item => item.id).indexOf(product.id);
    console.log(index);
    if (index > -1) {
      this.$root.$data.notes.splice(index, 1);
    }
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #ffffb3;
  color: #000;
  padding: 10px 30px;

}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 15px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
