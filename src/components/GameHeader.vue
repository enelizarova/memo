<script setup>
import { watch } from 'vue'
import Logo from './logo/Logo.vue'
import { animate, spring, cubicBezier } from 'animejs'

const props = defineProps({
  gameStarted: Boolean
})

watch(() => props.gameStarted, () => {
  play()
})

const play = () => {
  spring({ bounce: 0.83, duration: 628 })
  animate('.game-header__logo', {
    width: '9rem',
    marginBottom: '1rem',
    duration: 300,
    ease: cubicBezier(0, 0.668, 0.889, 0.713)
  })
}
</script>

<template>
  <header class="game-header">
    <Logo class="game-header__logo" width="30.5rem" style="transform: translateY(70)" />
    <h1 class="game-header__title" style="transform: translateY(70)" v-if="!gameStarted">
      Насколько <br /> ты алисоман
    </h1>
  </header>
</template>