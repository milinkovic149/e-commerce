<script setup>
const props = defineProps({
  btnClass: String
})
</script>

<template>
  <button :class="`button button__${btnClass}`">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  width: 130px;
  height: 50px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 10px;
  border: 0;

  &__add-to-cart {
    background: #d32626;
    color: white;

    &:hover {
      background: #cc4a4a;
      transition: 0.3s ease;
    }
  }

  &__checkout {
    background: var(--light-green);
    color: white;

    &:hover {
      background: #338f66;
      transition: 0.3s ease;
    }
  }

  &__clear-cart {
    background-color: #252525;
    color: white;

    &:hover {
      background: #3b3b3b;
      transition: 0.3s ease;
    }
  }
}

.disabled {
  opacity: 0.7;
  pointer-events: none;
}
</style>