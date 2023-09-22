<script setup>
import AppCountInput from './appCountInput.vue'

defineProps({
  product: { type: Object, required: true },
  count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);

</script>
<template>
  <div class="item">
    <div class="item__products">
      <img :src="product.img" alt="" class="item__products__product-img" width="373" height="373">
      <span>{{ product.name }}</span>
    </div>

    <div class="item__buttons">
      <AppCountInput
          :model-value="count"
          @update:modelValue="$emit('updateCount', $event)"
      />
      <p class="item__buttons__price">
        ${{ count * product.price }}
      </p>
      <img src="../assets/img/icons/trash.svg" alt="" class="item__buttons__trash-img" @click="$emit('clear')">
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  padding: 8px;
  border-radius: 5px;
  background-color: #eaeaea;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__products {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__product-img {
      width: 80px
    }
    span {
      font-size: 22px;
      margin-left: 20px;
    }
  }

  &__buttons {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;

    &__trash-img {
      width: 30px;
      cursor: pointer;
    }

    &__price {
      font-size: 26px;
    }
  }
}
</style>