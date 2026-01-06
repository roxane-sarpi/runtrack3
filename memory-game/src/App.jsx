import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button';
import Card from './components/Card/Card';

const EMOJIS = ["🔴", "🔵", "🟢", "🟡", "🟣", "🟠"];

const generateDeck = () => {
  const deck = [...EMOJIS, ...EMOJIS];
  const shuffledDeck = deck.sort(() => Math.random() - 0.5);
  return shuffledDeck.map((emoji, index) => ({
    id: index,
    label: emoji,
    isFlipped: false,
    isMatched: false
  }));
};

function App() {
  const [cards, setCards] = useState(generateDeck());
  // On ajoute un état pour savoir si on est en train d'attendre (pendant la seconde de délai)
  const [isWait, setIsWait] = useState(false);

  const handleCardClick = (clickedCard) => {
    // 1. Si on est en attente (le délai de 1s), on empêche de cliquer ailleurs
    if (isWait) return;
    // 2. Si la carte est déjà retournée ou trouvée, on ne fait rien
    if (clickedCard.isFlipped || clickedCard.isMatched) return;

    // 3. On retourne la carte visuellement
    const newCards = cards.map((card) => {
      return card.id === clickedCard.id ? { ...card, isFlipped: true } : card;
    });
    setCards(newCards);

    // 4. On regarde combien de cartes sont retournées EN CE MOMENT (mais pas encore validées)
    // On filtre celles qui sont flipped mais PAS matched
    const flippedCards = newCards.filter(c => c.isFlipped && !c.isMatched);

    // 5. Si on a 2 cartes retournées, on compare !
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;

      if (card1.label === card2.label) {
        // --- CAS 1 : C'EST GAGNÉ (Même émoji) ---
        // On marque les cartes comme "Matched" (trouvées)
        setCards(prevCards => prevCards.map(c => 
          c.id === card1.id || c.id === card2.id ? { ...c, isMatched: true } : c
        ));
      } else {
        // --- CAS 2 : C'EST PERDU (Émojis différents) ---
        // On active le mode "Attente" pour bloquer les clics
        setIsWait(true);
        
        // On attend 1 seconde (1000ms) avant de les retourner face cachée
        setTimeout(() => {
          setCards(prevCards => prevCards.map(c => 
            c.id === card1.id || c.id === card2.id ? { ...c, isFlipped: false } : c
          ));
          setIsWait(false); // On débloque le jeu
        }, 1000);
      }
    }
  };

  const handleRestart = () => {
    setCards(generateDeck());
    setIsWait(false);
  };

  return (
    <div className="board">
      <div className="controls">
        <Button label="Relancer" onClick={handleRestart} />
      </div>

      <div className="grid">
        {cards.map((card) => (
          <Card 
            key={card.id} 
            label={card.label} 
            isFlipped={card.isFlipped} 
            // Attention : on passe maintenant tout l'objet "card" à la fonction, pas juste l'ID
            onClick={() => handleCardClick(card)} 
          />
        ))}
      </div>
    </div>
  )
}

export default App