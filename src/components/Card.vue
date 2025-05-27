<script setup>
defineProps({
  card: Object
});
</script>

<template>
  <div 
    class="card size-[4.75rem] md:size-[7.125rem]" 
    :class="{ flipped: card.flipped, matched: card.matched }"
    @click="$emit('click')"
  >
    <div class="card-front">
      <img :src="card.value" alt="Card image" class="card-image" />
    </div>
    <div class="card-back">
      <img src="@/assets/img/logo-min.svg" />
    </div>
  </div>
</template>

<style scoped>
.card {
  perspective: 1000px;
  cursor: pointer;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 8px;
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 8px;
  transition: transform 0.6s, color 0.3s ease;
}

.card-front {
  background: #f0f0f0;
  transform: rotateY(180deg);
}

.card-back {
  background: #BE1622;
  color: white;
}

.card-back:hover {
  background: #880A13;
}

.card.flipped .card-front {
  transform: rotateY(0deg);
}

.card.flipped .card-back {
  transform: rotateY(180deg);
}

.card.matched {
  opacity: 0.5;
  cursor: default;
}
</style>