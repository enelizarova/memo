// gameImages.js - простой и рабочий вариант
const albumsPath = '/src/assets/img/albums/'
const resultsPath = '/src/assets/img/results/'

// Массив имен файлов альбомов
export const ALBUM_FILENAMES = [
  '206.jpg',
  'ada.jpg',
  'cirk.jpg',
  'duren.jpg',
  'energiya.jpg',
  'excess.jpeg',
  'izgoy.jpg',
  'jazz.jpg',
  'lesnichiy.jpg',
  'metka.jpg',
  'moon.jpg',
  'posolon.jpg',
  'pozdnee.jpg',
  'puls.jpg',
  'sabotaz.jpg',
  'sever.jpg',
  'shabash.jpeg',
  'Solncevorot.jpg',
  'tantsevat.jpg',
  'znak.jpg',
  'dudka.jpg',
  'goida.jpg',
  '2012.jpg'
]

// Импортируем изображения правильно для Vue
import d206Img from '@/assets/img/albums/206.jpg'
import adaImg from '@/assets/img/albums/ada.jpg'
import cirkImg from '@/assets/img/albums/cirk.jpg'
import durenImg from '@/assets/img/albums/duren.jpg'
import energiyaImg from '@/assets/img/albums/energiya.jpg'
import excessImg from '@/assets/img/albums/excess.jpeg'
import izgoyImg from '@/assets/img/albums/izgoy.jpg'
import jazzImg from '@/assets/img/albums/jazz.jpg'
import lesnichiyImg from '@/assets/img/albums/lesnichiy.jpg'
import metkaImg from '@/assets/img/albums/metka.jpg'
import moonImg from '@/assets/img/albums/moon.jpg'
import posolonImg from '@/assets/img/albums/posolon.jpg'
import pozdneeImg from '@/assets/img/albums/pozdnee.jpg'
import pulsImg from '@/assets/img/albums/puls.jpg'
import sabotazImg from '@/assets/img/albums/sabotaz.jpg'
import severImg from '@/assets/img/albums/sever.jpg'
import shabashImg from '@/assets/img/albums/shabash.jpeg'
import solncevorotImg from '@/assets/img/albums/Solncevorot.jpg'
import tantsevatImg from '@/assets/img/albums/tantsevat.jpg'
import znakImg from '@/assets/img/albums/znak.jpg'
import dudkaImg from '@/assets/img/albums/dudka.jpg'
import goidaImg from '@/assets/img/albums/goida.jpg'
import d2012Img from '@/assets/img/albums/2012.jpg'

// Массив импортированных изображений для игры
export const ALBUM_IMAGES = [
  d206Img, adaImg, cirkImg, durenImg, energiyaImg,
  excessImg, izgoyImg, jazzImg, lesnichiyImg, metkaImg,
  moonImg, posolonImg, pozdneeImg, pulsImg, sabotazImg,
  severImg, shabashImg, solncevorotImg, tantsevatImg,
  znakImg, dudkaImg, goidaImg, d2012Img
]

// Импорт изображений для результатов
import goodKostya from '@/assets/img/results/goodKostya.png'
import badKostya from '@/assets/img/results/badKostya.png'

// Конфигурация результатов
export const RESULTS_CONFIG = {
  good: {
    title: 'молодец',
    image: goodKostya,
    description: 'Отличный результат!'
  },
  bad: {
    title: 'тоже мне алисоман',
    image: badKostya,
    description: 'Можно лучше!'
  }
}

// Получить результат по типу
export const getResultByType = (type) => {
  return RESULTS_CONFIG[type] || RESULTS_CONFIG.bad
}

// Получить все изображения альбомов для игры
export const getAllAlbumImages = () => {
  return ALBUM_IMAGES // Просто возвращаем массив импортированных изображений
}