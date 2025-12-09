<script setup>
import { watch } from 'vue'
import Logo from './Logo.vue'
import { animate, spring, stagger } from 'animejs'

const props = defineProps({
  gameStarted: Boolean
})

watch(() => props.gameStarted, () => {
  play()
})

const play = () => {
  spring({ bounce: 0.83, duration: 628 })
  animate('.game-header__logo', {
    width: '21rem',
    duration: 500,
    ease: spring({
      bounce: 0.83,
      duration: 628
    })
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