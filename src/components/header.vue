<script setup>
import CartOpenField from './cartOpenField.vue'
</script>

<template>
  <header>
    <div class="header-wrapper">
      <img src="../assets/img/icons/logo.svg" alt="">
      <nav>
        <div class="header-wrapper__cart-div">
          <CartOpenField/>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 30px 0 20px;
  box-shadow: 0 0 20px rgba(21, 21, 21, 0.15);

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    img {
      width: 40px;
    }

    nav {
      display: flex;
      gap: 30px;
      a {
        text-decoration: none;
        font-size: 18px;
        color: var(--dark-green);
      }
    }

    &__cart-div {
      display: none;

      @include tablet-up {
        display: flex;
      }
    }
  }
}

</style>
