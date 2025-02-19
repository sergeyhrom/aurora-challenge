<template>
  <div class="movies-pagination">
    <CustomSelect
      v-model="pagination.page"
      label="Page"
      :items="pageSelectItems"
    />

    <CustomSelect
      v-model="pagination.perPage"
      label="Items per page"
      :items="perPageSelectItems"
    />

    <button @click="clearPagination" class="clear-btn">Clear</button>
  </div>
</template>

<script setup>
// I'm not fan of doing a pagination this way via select,
// however 2 hours is not enough to cover everything, including styling pagination
import { ref, computed, watch, onMounted } from 'vue'
import CustomSelect from '../../components/common/CustomSelect.vue'

const { total } = defineProps({
  total: { type: Number, default: 0 }
})
const emit = defineEmits(['paginationChanged'])

const pagination = ref({ page: 0, perPage: 5 })
const convertedPagination = computed(() => {
  const { page, perPage } = pagination.value
  return {
    limit: perPage,
    skip: perPage * page
  }
})

const clearPagination = () => pagination.value = { page: 0, perPage: 5 }

const pageSelectItems = computed(() => {
  const totalPages = Math.ceil(total / pagination.value.perPage)
  return Array.from({ length: totalPages }, (_, i) => ({ value: i, title: i + 1 }))
})
const perPageSelectItems = [3, 5, 10].map(item => ({ title: `${item} items`, value: item }))

// when change perPage, set page to zero
watch(() => pagination.value.perPage, () => {
  if (pagination.value.page !== 0) pagination.value.page = 0
});

watch(convertedPagination, (value) => {
  emit('paginationChanged', value);
});

onMounted(() => emit('paginationChanged', convertedPagination.value))
</script>

<style scoped lang="scss">
.movies-pagination {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
  gap: 20px;
}

.clear-btn {
  background: transparent;
  border: 1px solid var(--orange);
  color: var(--orange);
  padding: 10px 16px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--base-transition);
  outline: none;

  &:hover {
    background: var(--orange);
    color: var(--dark-blue);
  }
}
</style>
