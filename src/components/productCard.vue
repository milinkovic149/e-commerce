<script setup>
import AppCountInput from './appCountInput.vue'
import {computed, ref} from "vue";
import Button from "./button.vue"

const props = defineProps({
  product: Object
})

const emit = defineEmits();

const count = ref(0);

const buttonText = ref("Add to Cart");
const specialClass = ref(false);

const changeText = () => {
  buttonText.value = "Added";
  setTimeout(() => {
    buttonText.value = "Add to Cart";
  }, 500);
}

const handleAddToCartClick = () => {
  if (count.value > 0) {
    emit('addToCart', count.value);
    changeText();
    specialClass.value = false;
  } else {
    specialClass.value = true;
  }
  count.value = 0;
};
</script>

<template>
  <div class="product-card">
    <img :src="product.img" alt="" width="373" height="373" class="product-card__desktop-img">
    <img :src="product.img" alt="" width="250" height="250" class="product-card__responsive-img">
    <div class="product-card__text">
      {{product.name}}<span>${{product.price}}</span>
    </div>
    <div class="product-card__buttons">
      <AppCountInput v-model="count"/>
      <Button btnClass="add-to-cart" @click="handleAddToCartClick">{{buttonText}}</Button>
    </div>
    <p class="product-card__warn" :class="{ 'product-card__warn_show': (specialClass) }">
      *Please choose a size
    </p>
  </div>
</template>

<style scoped lang="scss">
  .product-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 373px;
    outline: 1px solid rgba(0, 128, 0, 0.1);
    border-radius: 20px;

    @include tablet-down {
      max-width: 250px;
    }

    @include phone-down {
      width: 100%;
    }

    &:hover {
      box-shadow: 0 0 10px 2px rgba(163,163,163,0.5);
      transition: 0.3s;
    }

    img {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    &__desktop-img {
      display: flex;

      @include tablet-down {
        display: none;
      }
    }

    &__responsive-img {
      display: none;

      @include tablet-down {
        display: flex;
      }
    }

    &__text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 8px;
      font-size: 23px;

      span {
        color: var(--dark-green);
        font-size: 40px;
      }
    }

    &__buttons {
      display: flex;
      justify-content: space-between;
      padding: 10px 8px 20px;
      gap: 7px;
      flex-wrap: wrap;

      @include tablet-down {
        justify-content: center;
        gap: 20px;
      }
    }

    &__warn {
      opacity: 0;
      position: absolute;
      bottom: 0;
      left: 15px;
      font-size: 12px;
      color: #d32626;
      transition: 0.3s ease;

      &_show {
        opacity: 1;
        transition: 0.3s ease;
      }
    }
  }
</style>
