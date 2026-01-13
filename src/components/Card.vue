<script setup>
defineProps({
  card: Object
});
</script>

<template>
  <div class="card" :class="{ flipped: card.flipped, matched: card.matched }" @click="$emit('click')">
    <div class="card-front">
      <img :src="card.value" alt="Card image" class="card-image" />
    </div>
    <div class="card-back">
      <img src="@/assets/img/logo-min.svg" />
    </div>
  </div>
</template>
