<script setup>
import { onMounted } from 'vue'

import { useMemoGame } from '@/composables/useMemoGame'
import Card from './Card.vue'
import Modal from './Modal.vue'
import GameHeader from './GameHeader.vue'
import ChatLogo from './logo/ChatLogo.vue'

import { animate, spring, stagger } from 'animejs'

const {
  gameStarted,
  showModal,
  result,
  count,
  cards,
  startGame,
  flipCard,
  newGame,
  progress
} = useMemoGame()

onMounted(() => {
  animate(['.game-header__logo', '.game-header__title', '.button', '.link'], {
    translateY: [70, 0],
    opacity: [0, 1],
    duration: 1000,
    ease: spring({
      bounce: 0.63,
      duration: 600
    }),
    delay: stagger(50)
  })
})
</script>

<template>
  <GameHeader :game-started="gameStarted" />
  <button class="button button--main" @click="startGame" v-if="!gameStarted">
    <span>Гойда</span>
  </button>

  <Transition name="fade">
    <Modal @start="newGame" v-if="showModal" :result="result" />
  </Transition>

  <section v-if="gameStarted" class="game-field">
    <Card v-for="(card, index) in cards" :key="card.id || index" :card="card" @click="flipCard(card)" />

    <div class="game-field__progress" v-if="gameStarted">
      Прогресс: {{ progress }}% | Ходов: {{ count }}
    </div>
  </section>

  <a href="https://vk.com/alisa_chat" target="_blank" class="link" v-if="!gameStarted">
    <ChatLogo />
  </a>
</template>