
   
   "use client";
   import Card from '@/components/features/card';
   import { useState } from 'react';

const VbCards = () => {

    const initialCards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];
  const [cards, setCards] = useState(initialCards);

  const handleCardClick = (index) => {
    // Move the selected card to the front
    const newCards = [...cards];
    const selectedCard = newCards.splice(index, 1)[0];
    newCards.unshift(selectedCard);
    
    setCards(newCards);
  };


  const nextCard = () => {
    const newCards = [...cards];
    const lastCard = newCards.pop();
    newCards.unshift(lastCard);
    setCards(newCards);
  };

  const prevCard = () => {
    const newCards = [...cards];
    const firstCard = newCards.shift();
    newCards.push(firstCard);
    setCards(newCards);
  };

    return(
    <div className="h-dvh">

<main className="flex items-center justify-center h-screen">
        {/* Left arrow */}
        <button onClick={nextCard} className="p-4">
          &#8592;
        </button>

        {/* Cards */}
        <div className="flex">
          {cards.map((card, index) => (
            <Card
              key={card}  // Using card content as the key because the order changes
              isActive={index === 0}
              content={card}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button onClick={prevCard} className="p-4">
          &#8594;
        </button>
      </main>

                    
    </div>
    )
}


export default VbCards;