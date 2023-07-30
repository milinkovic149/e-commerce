<script setup>
import {RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/main.scss';
.main {
  background: white;
  color: black;
}
</style>
