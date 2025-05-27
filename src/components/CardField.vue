<script setup>
import { ref, reactive } from 'vue';
import Card from './Card.vue';
import Modal from './Modal.vue';

import Logo from './Logo.vue';

import d206Img from '@/assets/img/206.jpg';
import adaImg from '@/assets/img/ada.jpg';
import cirkImg from '@/assets/img/cirk.jpg';
import durenImg from '@/assets/img/duren.jpg';
import energiyaImg from '@/assets/img/energiya.jpg';
import excessImg from '@/assets/img/excess.jpeg';
import izgoyImg from '@/assets/img/izgoy.jpg';
import jazzImg from '@/assets/img/jazz.jpg';
import lesnichiyImg from '@/assets/img/lesnichiy.jpg';
import metkaImg from '@/assets/img/metka.jpg';
import moonImg from '@/assets/img/moon.jpg';
import posolonImg from '@/assets/img/posolon.jpg';
import pozdneeImg from '@/assets/img/pozdnee.jpg';
import pulsImg from '@/assets/img/puls.jpg';
import sabotazImg from '@/assets/img/sabotaz.jpg';
import severImg from '@/assets/img/sever.jpg';
import shabashImg from '@/assets/img/shabash.jpeg';
import solncevorotImg from '@/assets/img/Solncevorot.jpg';
import tantsevatImg from '@/assets/img/tantsevat.jpg';
import znakImg from '@/assets/img/znak.jpg';
import dudkaImg from '@/assets/img/dudka.jpg';
import goidaImg from '@/assets/img/goida.jpg';
import d2012Img from '@/assets/img/2012.jpg';

import goodKostya from '@/assets/img/goodKostya.png';
import badKostya from '@/assets/img/badKostya.png';

const images = [
  d206Img, adaImg, cirkImg, durenImg, energiyaImg,
  excessImg, izgoyImg, lesnichiyImg, metkaImg, moonImg,
  posolonImg, pozdneeImg, pulsImg, sabotazImg, severImg,
  shabashImg, solncevorotImg, tantsevatImg, znakImg, dudkaImg, jazzImg,
  goidaImg, d2012Img
];

const gameStarted = ref(false);
const showModal = ref(false);
const result = ref({});
const count = ref(0);

const showField = () => {
  gameStarted.value = true;
}

const getInitialCards = () => {
  const cards = [];
  let id = 1;
  images.forEach(img => {
    cards.push({ id: id++, value: img, flipped: false, matched: false });
    cards.push({ id: id++, value: img, flipped: false, matched: false });
  });
  return cards;
};

const cards = reactive(getInitialCards());

const shuffleCards = () => {
  cards.sort(() => Math.random() - 0.5);
};

const flipCard = (card) => {
  if (card.flipped || card.matched) return;

  count.value += 1;

  card.flipped = true;
  const flippedCards = cards.filter(c => c.flipped && !c.matched);

  if (flippedCards.length === 2) {
    const [first, second] = flippedCards;
    if (first.value === second.value) {
      first.matched = true;
      second.matched = true;
    } else {
      setTimeout(() => {
        first.flipped = false;
        second.flipped = false;
      }, 1000);
    }
  }

  finalCounter();
};

const close = () => {
  showModal.value = false;
}

const countPercent = () => {
  const minPossibleMoves = images.length * 3;
  const efficiency = (minPossibleMoves / count.value) * 10;
  return Math.min(Math.floor(efficiency), 10);
};

const finalCounter = () => {
  if (cards.every(card => card.matched)) {
    showModal.value = true;
    showResult();
  }
}

shuffleCards();

const newGame = () => {
  Object.assign(cards, getInitialCards());
  shuffleCards();
  close();
}

const showResult = () => {
  if (countPercent() > 6) {
    result.value = {
      title: 'молодец',
      result: `${countPercent()}`,
      kostya: goodKostya
    }
  } else {
    result.value = {
      title: 'тоже мне алисоман',
      result: `${countPercent()}`,
      kostya: badKostya
    }
  }
}
</script>

<template>
  <h1 class="flex flex-col justify-center items-center text-center text-xl xl:text-3xl mb-6 xl:mb-10">
    <Logo class="max-w-[90%]" :class="gameStarted ? 'w-[14.5rem]' : 'w-[30rem] mb-[4.125rem] '" />
    <div class="max-w-[19rem] mx-auto" v-if="!gameStarted">Насколько <br /> ты алисоман</div>
  </h1>
  <button
    class="button mx-auto p-5 rounded-2xl text-[#BE1622] bg-[#BE1622] text-3xl border border-[#BE1622] text-center uppercase"
    @click="showField()" v-if="!gameStarted">
    <span class="relative z-10 bebas">Гойда</span>
  </button>
  <Transition name="fade">
    <Modal @close="close" @start="newGame()" v-if="showModal" :result="result"></Modal>
  </Transition>

  <section class="justify-center grid grid-cols-4 sm:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-4" v-if="gameStarted">
    <Card v-for="(card, index) in cards" :key="index" :card="card" @click="flipCard(card)" />
  </section>
</template>

<style>
.button {
  position: relative;
  transition: color 0.5s 0.1s ease-out;
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 15rem;
  height: 15rem;
  background-color: #181818;
  border-radius: 50%;
  transition: transform 0.5s ease;
}

.button:hover {
  color: #fff;
}

.button:hover::before {
  transform: translate(-50%, -50%) scale(0);
}
</style>