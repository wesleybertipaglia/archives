<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  title: String,
  price: Number,
  desc: String,
  img: String,
});

const emit = defineEmits(['add-to-cart']);
</script>

<template>
  <div class="card">
    <img :src="img" :alt="title">
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
    <p>U$ {{ price }}</p>
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<style scoped>
.card {
  border: solid 1px #ccc;
  border-radius: 0.25rem;
  padding: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  width: 100%;
}

img {
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>

<script>
export default {
  methods: {
    addToCart() {
      emit('add-to-cart', { title: this.title, price: this.price, desc: this.desc, img: this.img });
    }
  }
};
</script>
