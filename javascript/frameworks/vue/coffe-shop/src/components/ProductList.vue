<script setup>
import { defineProps } from 'vue';
import Product from './Product.vue';
import stock from '../data/stock.js';

const { cart } = defineProps(['cart']);
</script>

<template>
  <div class="products">
    <Product v-for="product in stock" :key="product.id" :title="product.title" :price="product.price"
      :desc="product.desc" :img="product.img" @add-to-cart="addToCart(product)" />
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1.5rem;
}
</style>

<script>
export default {
  methods: {
    addToCart(product) {
      cart.addToCart(product);
    }
  }
};
</script>
