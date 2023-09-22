<script setup>
import {useCartStore} from "@/stores/cartStore"
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import CartItem from "./cartItem.vue"
import Button from './button.vue'

const cartStore = useCartStore();
const el = ref()
onClickOutside(el, cartStore.closeCart)
</script>

<template>
  <div class="cart-wrapper" :class="{'cart-wrapper_active': cartStore.isCartOpen}" ref="el">
    <div class="cart-wrapper__img-div">
      <img class="cart-wrapper__img-div__img" src="../assets/img/icons/x.svg" alt="" @click="cartStore.closeCart" :class="{'cart-wrapper__img-div__img_active': cartStore.isCartOpen}" width="30" height="30">
    </div>
    <div class="cart-wrapper__total" v-if="!cartStore.isEmpty">
      <p>Total: </p>
      <p class="cart-wrapper__total__price">${{ cartStore.total }}</p>
    </div>
    <div v-else class="cart-wrapper__empty-message">Cart is empty!</div>
    <CartItem
      v-for="(items, name) in cartStore.grouped"
      :count="cartStore.groupCount(name)"
      :key="name"
      :product="items[0]"
      @updateCount="cartStore.setItemCount(items[0], $event)"
      @clear="cartStore.clearItem(name)"
    />
    <div class="cart-wrapper__buttons" v-if="!cartStore.isEmpty">
      <Button btnClass="clear-cart" @click="cartStore.clearItems">Clear Cart</Button>
      <Button btnClass="checkout" @click="cartStore.checkout">Checkout</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .cart-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0 0;
    position: fixed;
    background: white;
    height: 100%;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 400px;
    z-index: 10;
    transform: translateX(100%);
    transition: padding 0.3s, transform 0.4s ease;
    overflow: scroll;

    &_active {
      padding: 10px 20px 0;
      transition: padding 0.3s, transform 0.4s;
      transform: translateX(0);
    }

    &__img-div {
      display: flex;
      justify-content: end;

      &__img {
        max-width: 0;
        height: 30px;

        &_active {
          max-width: 30px;
          cursor: pointer;
        }
      }
    }

    &__total {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 30px;
      }
      &__price {
        color: var(--dark-green);
      }
    }

    &__empty-message {
      text-align: center;
    }

    &__buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
</style>