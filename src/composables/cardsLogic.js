export function useCardsLogic() {
  const getInitialCards = (images) => {    
    const cards = []
    let id = 1
    images.forEach(img => {
      cards.push({ 
        id: id++, 
        value: img, 
        flipped: false, 
        matched: false 
      })
      cards.push({ 
        id: id++, 
        value: img, 
        flipped: false, 
        matched: false 
      })
    })
    return cards
  }

  const shuffleCards = (cards) => {
    const shuffled = [...cards]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  return {
    getInitialCards,
    shuffleCards
  }
}