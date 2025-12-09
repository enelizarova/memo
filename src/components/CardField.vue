<script setup>
import { onMounted } from 'vue'

import { useMemoGame } from '@/composables/useMemoGame'
import Card from './Card.vue'
import Modal from './Modal.vue'
import GameHeader from './GameHeader.vue'
import ChatLogo from './ChatLogo.vue'

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
  closeModal,
  progress
} = useMemoGame()

onMounted(() => {
  animate(['.game-header__logo', '.game-header__title', '.button', '.link'], {
    translateY: [70, 0],
    opacity: [0, 1],
    duration: 1000,
    ease: spring({
      bounce: 0.83,
      duration: 628
    }),
    delay: stagger(50)
  })
})
</script>

<template>
  <GameHeader :game-started="gameStarted" />
  <button
    class="button button--main mx-auto mb-12 xl:mb-32 p-5 rounded-2xl text-[#BE1622] bg-[#BE1622] text-3xl border border-[#BE1622] text-center uppercase"
    @click="startGame" v-if="!gameStarted">
    <span class="relative z-10 font-bebas">Гойда</span>
  </button>

  <Transition name="fade">
    <Modal @close="closeModal" @start="newGame" v-if="showModal" :result="result" />
  </Transition>

  <section v-if="gameStarted" class="justify-center grid grid-cols-4 sm:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-4">
    <Card v-for="(card, index) in cards" :key="card.id || index" :card="card" @click="flipCard(card)" />

    <div class="col-span-full text-center mt-4 text-sm text-gray-400" v-if="gameStarted">
      Прогресс: {{ progress }}% | Ходов: {{ count }}
    </div>
  </section>

  <a href="https://vk.com/alisa_chat" target="_blank" class="link block mx-auto mt-auto" v-if="!gameStarted">
    <ChatLogo class="w-[13.75rem]" />
  </a>
</template>