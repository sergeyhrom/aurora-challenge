<template>
  <div v-if="isLoading" class="spinner">
    <div class="spinner-lines"></div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useCommonStore from '@/stores/common'

const commonStore = useCommonStore()

const { isLoading } = storeToRefs(commonStore)
</script>

<style scoped lang="scss">
.spinner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(2px);
  z-index: 999;

  &-lines {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &:after {
      content: '';
      display: block;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border-width: 8px;
      border-style: solid;
      border-color: var(--orange) transparent var(--orange) transparent;
      animation: rotation 1s linear infinite;
    }
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
