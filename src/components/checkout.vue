<script setup>
import {useCartStore} from "@/stores/cartStore";
import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";
const cartStore = useCartStore();
const el = ref()
onClickOutside(el, cartStore.closeCheckout)
</script>

<template>
  <div class="checkout" ref="el">
    <div class="checkout__img-div">
      <img src="../assets/images/icons/x.svg" alt="" @click="cartStore.closeCheckout">
    </div>
    <p class="checkout__title">Thank you for shopping with us!</p>
    <div class="checkout__products">
        <p v-for="(items, name) in cartStore.grouped">{{name}} X{{cartStore.groupCount(name)}} <span>${{items[0].price * cartStore.groupCount(name)}}</span></p>
    </div>
    <p class="checkout__total">Total: ${{ cartStore.total }}</p>
  </div>
</template>

<style scoped lang="scss">
.checkout {
  display: flex;
  flex-direction: column;
  position: fixed;
  height: auto;
  width: 350px;
  z-index: 15;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  padding: 12px;

  &__img-div {
    display: flex;
    justify-content: end;

    img {
      width: 30px;
      cursor: pointer;
    }
  }

  &__title {
    text-align: center;
    font-size: 21px;
    margin-top: 12px;
    color: var(--dark-green);
  }

  &__total {
    text-align: center;
    font-size: 18px;
    margin-top: 12px;
    color: var(--dark-green);
  }

  &__products {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    p {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
    }

    span {
      color: #d32626;
    }
  }

  &__btn-div{
    display: flex;
    justify-content: center;
    margin-top: 20px;;
  }
}
</style>