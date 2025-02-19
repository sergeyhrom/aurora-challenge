<template>
  <div class="movie-item">
    <div class="container">
      <img
        :src="movie.image_url"
        class="movie-image"
        width="100"
        height="130"
        alt="movie-img"
      />
      <div>
        <div class="title">{{ movie.fullTitle }}</div>
        <div class="rating">
          <img :src="starIcon" alt="star">
          <span class="rating">{{ movie.rating }}</span>
        </div>
      </div>
    </div>
    <div class="description">{{ movie.description }}</div>
  </div>
</template>

<script setup>
import starIcon from '@/assets/images/star.svg';

const { movie } = defineProps({
  movie: { type: Object, required: true }
})
</script>

<style scoped lang="scss">
.movie-item {
  border-bottom: 2px solid var(--dark-blue);
  padding: 20px 0;

  .movie-image {
    margin-right: 12px;
    object-fit: cover;
    border-radius: 8px;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .title {
    font-weight: 500;
    font-size: 18px;
  }

  .rating {
    margin-top: 8px;

    span {
      color: var(--grey);
      margin-left: 4px;
    }
  }

  .description {
    margin-top: 12px;
    font-size: 15px;
    color: #9b9898;
    font-weight: 300;
  }
}
</style>
