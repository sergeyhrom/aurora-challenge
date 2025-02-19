<template>
  <div class="custom-select">
    <label v-if="label" for="customSelect">{{ label }}:</label>
    <select v-model="selectedItem" id="customSelect">
      <option v-for="{ title, value } in items" :value="value">
        {{ title }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineModel } from 'vue'

const { items } = defineProps({
  items: { type: Array, required: true },
  label: { type: String, default: '' },
})

const selectedItem = defineModel()
</script>

<style scoped lang="scss">
.custom-select {
  position: relative;
  display: inline-block;

  &:after {
    content: '▼';
    font-size: 12px;
    color: var(--white);
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  label {
    margin-right: 12px;
    font-size: 18px;
  }

  select {
    appearance: none;
    background: transparent;
    border: 1px solid var(--dark-blue);
    border-radius: 20px;
    padding: 10px 40px 10px 16px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    position: relative;
    transition: var(--base-transition);

    &:hover, &:focus {
      border-color: var(--white);
    }
  }
}
</style>
