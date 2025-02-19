import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCommonStore = defineStore('common', () => {
  const isLoading = ref(false)
  const setLoading = (value = false) => isLoading.value = value

  return { isLoading, setLoading }
})

export default useCommonStore
