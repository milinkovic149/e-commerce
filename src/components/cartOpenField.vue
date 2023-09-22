<script setup>
import {useCartStore} from "@/stores/cartStore";
const cartStore = useCartStore();
</script>

<template>
  <div class="cart"   @click="cartStore.openCart()">
    <img src="../assets/img/icons/cart-icon.svg" alt="" width="30" height="30">
    <div class="cart__items">
      {{ cartStore.count }}
    </div>
  </div>
</template>

<style scoped lang="scss">
  .cart {
    cursor: pointer;
    position: relative;

    &__items {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: #d32626;
      width: 20px;
      font-size: 12px;
      position: absolute;
      bottom: 24px;
      left: 19px;
      color: white;
    }

    img {
      width: 30px;
    }
  }
</style>