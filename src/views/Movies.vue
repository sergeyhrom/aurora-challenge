<template>
  <div class="movies">
    <MoviesPagination :total="moviesTotal" @paginationChanged="setMovies" />

    <div v-if="convertedMovies.length">
      <MovieItem v-for="movie in convertedMovies" :key="movie.id" :movie="movie" />
    </div>
    <div v-else class="no-items">No data available</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { loadMovies } from '@/api/index.js'
import MovieItem from '@/components/movies/MovieItem.vue'
import MoviesPagination from '@/components/movies/MoviesPagination.vue'

const movies = ref([])
const moviesTotal = ref(0)

const convertedMovies = computed(() => {
  return movies.value.map((movie, index) =>
    ({ ...movie, fullTitle: `${index + 1}. ${movie.title}` }))
})

const setMovies = async (pagination) => {
  try {
    const { total, items } = await loadMovies(pagination)
    moviesTotal.value = total
    movies.value = items
  } catch (err) {
    // we could put some error notification here
    // or use handle it in axios interceptors
  }
}
</script>

<style scoped lang="scss">
.movies {
  padding: 16px;
  border: 2px solid var(--dark-blue);
  border-radius: 12px;

  .no-items {
    color: var(--grey);
    text-align: center;
  }
}
</style>
