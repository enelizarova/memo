import { computed } from 'vue'

export function useGameRules(images) {
  const calculateMinPossibleMoves = (imageCount) => {
    return imageCount * 3
  }

  const calculateEfficiency = (movesCount, imagesCount) => {
    const minPossibleMoves = calculateMinPossibleMoves(imagesCount)
    const efficiency = (minPossibleMoves / movesCount) * 10
    return Math.min(Math.floor(efficiency), 10)
  }

  const getResultMessage = (efficiency) => {
    return efficiency > 6 
      ? { title: 'молодец', rating: 'высокий' }
      : { title: 'тоже мне алисоман', rating: 'низкий' }
  }

  const calculateResult = (movesCount, imagesCount, goodKostya, badKostya) => {
    const efficiency = calculateEfficiency(movesCount, imagesCount)
    const message = getResultMessage(efficiency)
    
    return {
      title: message.title,
      result: `${efficiency}`,
      kostya: efficiency > 6 ? goodKostya : badKostya,
      rating: message.rating,
      moves: movesCount,
      minPossible: calculateMinPossibleMoves(imagesCount)
    }
  }

  return {
    calculateResult,
    calculateEfficiency,
    getResultMessage
  }
}