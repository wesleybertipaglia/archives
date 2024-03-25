<script setup>
import { ref } from 'vue';
import ProductList from './components/ProductList.vue';
const currentYear = new Date().getFullYear();

const cart = ref({
  items: [],

  get quantity() {
    return this.items.length;
  },

  get total() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  addToCart(item) {
    this.items.push(item);
  },

  removeFromCart(index) {
    this.items.slice(index, 1);
  }
})
</script>

<template>
  <header>
    <div class="container">
      <a href="/">Home</a>

      <ul>
        <li>
          <button class="cart">
            <span class="cart-title">Cart</span>
            <span class="cart-quantity">{{ cart.quantity }}</span>
          </button>
        </li>
      </ul>
    </div>
  </header>

  <main>
    <section>
      <div class="container">
        <ProductList :cart="cart" />
      </div>
    </section>

  </main>

  <footer>
    <div class="container">
      <p>&copy; {{ currentYear }} Coffe Shop</p>
    </div>
  </footer>
</template>

<style scoped>
header .container,
header ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

header ul {
  list-style: none;
}

.cart {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.cart-quantity {
  font-size: small;
  background: #111;
  padding: 0.25rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
