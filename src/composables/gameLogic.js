import { ref} from 'vue'

export function useGameLogic(images) {
  const gameStarted = ref(false)
  const showModal = ref(false)
  const result = ref({})
  const count = ref(0)
  const lockBoard = ref(false)
  
  const startGame = () => {
    gameStarted.value = true
  }
  
  return {
    gameStarted,
    showModal,
    result,
    count,
    lockBoard,
    startGame
  }
}