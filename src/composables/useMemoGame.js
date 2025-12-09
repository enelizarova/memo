import { ref, computed } from 'vue'
import { useCardsLogic } from './cardsLogic'
import { getAllAlbumImages, getResultByType } from '@/config/images'

const GOOD_RESULT = 6;

export function useMemoGame() {
  const albumImages = getAllAlbumImages()
  
  const { getInitialCards, shuffleCards } = useCardsLogic()
  
  const gameStarted = ref(false)
  const showModal = ref(false)
  const result = ref({})
  const count = ref(0)
  const lockBoard = ref(false)

  const cards = ref(shuffleCards(getInitialCards(albumImages)))

  const startGame = () => {
    gameStarted.value = true
  }
  
  const flipCard = (card) => {
    if (lockBoard.value || card.flipped || card.matched) return

    count.value += 1
    card.flipped = true
    
    const flippedCards = cards.value.filter(c => c.flipped && !c.matched)
    
    if (flippedCards.length === 2) {
      lockBoard.value = true
      const [first, second] = flippedCards
      
      if (first.value === second.value) {
        first.matched = true
        second.matched = true
        lockBoard.value = false
      } else {
        setTimeout(() => {
          first.flipped = false
          second.flipped = false
          lockBoard.value = false
        }, 500)
      }
    }
    
    checkGameCompletion()
  }
  
  const checkGameCompletion = () => {
    const allMatched = cards.value.every(card => card.matched)
    if (allMatched) {
      showResult()
    }
  }
  
  const showResult = () => {
    const minPossibleMoves = albumImages.length * 3
    const efficiency = Math.min(Math.floor((minPossibleMoves / count.value) * 10), 10)
    
    const resultType = efficiency > GOOD_RESULT ? 'good' : 'bad'
    const resultData = getResultByType(resultType)
    
    result.value = {
      title: resultData.title,
      result: `${efficiency}`,
      kostya: resultData.image,
      rating: resultType,
      moves: count.value,
      minPossible: minPossibleMoves,
      description: resultData.description
    }
    
    setTimeout(() => {
      showModal.value = true
    }, 500)
  }
  
  const newGame = () => {
    cards.value = shuffleCards(getInitialCards(albumImages))
    count.value = 0
    result.value = {}
    showModal.value = false
  }
  
  const closeModal = () => {
    showModal.value = false
  }
  
  const progress = computed(() => {
    const matchedPairs = cards.value.filter(card => card.matched).length / 2
    return Math.round((matchedPairs / albumImages.length) * 100)
  })
  
  return {
    gameStarted,
    showModal,
    result,
    count,
    cards,
    lockBoard,
    
    progress,
    
    startGame,
    flipCard,
    newGame,
    closeModal
  }
}