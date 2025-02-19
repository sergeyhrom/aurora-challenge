<template>
  <Spinner />
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Spinner from './components/common/Spinner.vue'
import AppHeader from './components/common/AppHeader.vue'
</script>

<style scoped>
main {
  padding: 32px 80px;
}
</style>
