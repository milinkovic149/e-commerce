<script setup>
import {useProductStore} from "@/stores/productStore";
import {storeToRefs} from 'pinia';
import Header from '../components/header.vue';
import ProductCard from '../components/productCard.vue';
import Cart from '../components/cart.vue'
import Checkout from '../components/checkout.vue'
import {useCartStore} from '@/stores/cartStore'
import CartOpenField from '../components/cartOpenField.vue'

const {products} = storeToRefs(useProductStore());
const cartStore = useCartStore();
</script>

<template>
  <main>
    <Header/>
    <div class="product-content">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItems($event, product)"
      />
    </div>
    <div class="outside-cart" v-if="cartStore.isCartOpen || cartStore.isCheckout"></div>
    <Cart/>
    <Checkout v-if="cartStore.isCheckout"/>
    <div class="floating-btn" v-if="!cartStore.isCartOpen && !cartStore.isCheckout"  @click="cartStore.openCart()">
      <CartOpenField/>
    </div>
  </main>
</template>

<style scoped lang="scss">

.product-content {
  padding: 100px 0;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  gap: 40px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

  @include desktop-down {
    justify-content: center;
  }

  @include phone-down {
    padding: 80px 24px;
  }
}

.outside-cart {
  position: absolute;
  background-color: rgba(0,0,0,0.3);
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 4;
}

.floating-btn {
  display: flex;
  padding-left: 18px;
  align-items: center;
  border-radius: 50%;
  position:fixed;
  height: 70px;
  padding-top: 7px;
  width: 70px;
  background-color: #78ddb0;
  z-index: 100;
  top: 3px;
  cursor: pointer;
  right: 20px;

  @include tablet-up {
    top: 50%;
    right: 50px;
  }
}
</style>



