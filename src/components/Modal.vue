<script setup>
import Fire from './logo/Fire.vue';

defineProps({
  result: Object
});

const emit = defineEmits('start')

const start = () => {
  emit('start');
};
</script>
<template>
  <div class="modal">
    <div class="modal__overlay" />
    <section class="modal__container">
      <div class="modal__decor">
        <Fire />
      </div>
      <h2 class="modal__title">{{ result.title }}</h2>
      <div class="modal__result">{{ result.result }}/10 гойды</div>
      <div class="modal__pic">
        <img :src="result.kostya">
      </div>
      <button @click="start()" class="button button--modal">
        <span>
          Гойда
        </span>
      </button>
    </section>
  </div>
</template>
