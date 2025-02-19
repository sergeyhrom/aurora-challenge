<template>
  <header>
    <RouterLink class="logo" to="/">Movies</RouterLink>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
header {
  border-bottom: 2px solid var(--dark-blue);
  padding: 24px 80px;
}

a {
  text-decoration: none;
  transition: var(--base-transition);
  font-size: 32px;
  font-weight: 700;
  border-bottom: 2px solid transparent;
  border-radius: 2px;

  &:hover {
    color: var(--orange);
    border-color: var(--orange);
  }
}
</style>
