// // MemoryGame.js
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { Link } from 'react-router-dom';
// import piece1 from './pictures/piece1.png';
// import piece2 from './pictures/piece2.png';
// import piece3 from './pictures/piece3.png';
// import piece4 from './pictures/piece4.png';
// import piece5 from './pictures/piece5.png';
// import piece6 from './pictures/piece6.jpg';
// import piece7 from './pictures/piece7.jpg';
// import piece9 from './pictures/piece9.jpg';
// import piece10 from './pictures/piece10.jpg';
// import hideImage from './hideImage.jpg';
// import correctAudio from './احسنت احسنت اجابة صحيحة بدون موسيقي.mp3';
// import wrongAudio from './Correct sound effect and wrong sound effect.mp3';

// const pairs = [piece1, piece1, piece2, piece2, piece3, piece3, piece4, piece4, piece5, piece5, piece6, piece6, piece7, piece7, piece9, piece9, piece10, piece10];

// const shuffleArray = array => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// };

// shuffleArray(pairs);

// const MemoryGame = () => {
//   const [cards, setCards] = useState(pairs.map((image, index) => ({ id: index, image, flipped: false, found: false })));
//   const [firstCard, setFirstCard] = useState(null);
//   const [secondCard, setSecondCard] = useState(null);
//   const [pairsFound, setPairsFound] = useState(0);
//   const [audioSrc, setAudioSrc] = useState('');
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     const checkPair = () => {
//       if (!firstCard || !secondCard) return;
//       if (firstCard.image === secondCard.image) {
//         setScore(prevScore => prevScore + 1);
//         setAudioSrc(correctAudio);
//         setTimeout(() => {
//           setCards(prevCards => prevCards.map(card => {
//             if (card.id === firstCard.id || card.id === secondCard.id) {
//               return { ...card, found: true };
//             }
//             return card;
//           }));
//           setFirstCard(null);
//           setSecondCard(null);
//           setPairsFound(prevPairsFound => prevPairsFound + 1);
//         }, 1000);
//       } else {
//         setAudioSrc(wrongAudio);
//         setTimeout(() => {
//           setCards(prevCards => prevCards.map(card => {
//             if (card.id === firstCard.id || card.id === secondCard.id) {
//               return { ...card, flipped: false };
//             }
//             return card;
//           }));
//           setFirstCard(null);
//           setSecondCard(null);
//         }, 1000);
//       }
//     };

//     checkPair();
//   }, [firstCard, secondCard]);

//   const flipCard = card => {
//     if (card.flipped || card.found) return;

//     setCards(prevCards => prevCards.map(prevCard => {
//       if (prevCard.id === card.id) {
//         return { ...prevCard, flipped: true };
//       }
//       return prevCard;
//     }));

//     if (!firstCard) {
//       setFirstCard(card);
//     } else {
//       setSecondCard(card);
//     }
//   };

//   useEffect(() => {
//     if (audioSrc) {
//       const audio = new Audio(audioSrc);
//       audio.play();
//       audio.onended = () => {
//         setAudioSrc('');
//       };
//     }
//   }, [audioSrc]);

//   const displayVictoryMessage = () => {
//     if (pairsFound === pairs.length / 2) {
//       return <div className="victory-message">Bravo ! Vous avez trouvé toutes les paires.</div>;
//     }
//     return null;
//   };

//   return (
//     <div className="memory-game">
//       {cards.map((card) => (
//         <div key={card.id} className={`card ${card.flipped ? 'flipped' : ''} ${card.found ? 'found' : ''}`} onClick={() => flipCard(card)}>
//           <div className={`back piece-color-${card.id % 5 + 1}`}>
//             {card.flipped || card.found ? <img src={card.image} alt="Piece" /> : <img src={hideImage} alt="Hide" />}
//           </div>
//         </div>
//       ))}
//       {displayVictoryMessage()}
//       <br />
//       <br />
//       <div className="score score-button">Score: {score}</div>
//       <br />
//       <br />
//       <Link to="/" className="start-button">Back to Home</Link>
//     </div>
//   );
// };

// export default MemoryGame;












// import React, { useState, useEffect } from 'react';
// import './App.css'; 

// // Import des images
// import piece1 from './pictures/piece1.png';
// import piece2 from './pictures/piece2.png';
// import piece3 from './pictures/piece3.png';
// import piece4 from './pictures/piece4.png';
// import piece5 from './pictures/piece5.png';
// import piece6 from './pictures/piece6.jpg';
// import piece7 from './pictures/piece7.jpg';
// import piece9 from './pictures/piece9.jpg';
// import piece10 from './pictures/piece10.jpg';

// // import backgroudJeux from './backgroudJeux.png';
// import hideImage from './hideImage.jpg'; 



// import correctAudio from './احسنت احسنت اجابة صحيحة بدون موسيقي.mp3';
// import wrongAudio from './Correct sound effect and wrong sound effect.mp3';

// const pairs = [piece1, piece1, piece2, piece2, piece3, piece3, piece4, piece4, piece5, piece5 ,piece6,piece6,piece7,piece7,piece9,piece9,piece10,piece10];


// const shuffleArray = array => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// };

// shuffleArray(pairs);

// const MemoryGame = () => {
//   const [cards, setCards] = useState(pairs.map((image, index) => ({ id: index, image, flipped: false, found: false })));
//   const [firstCard, setFirstCard] = useState(null);
//   const [secondCard, setSecondCard] = useState(null);
//   const [pairsFound, setPairsFound] = useState(0);
//   const [audioSrc, setAudioSrc] = useState(''); // State for audio source
//   const [score, setScore] = useState(0); // State for score



//   useEffect(() => {
//     const checkPair = () => {
//       if (!firstCard || !secondCard) return;
//       if (firstCard.image === secondCard.image) {
//         setScore(prevScore => prevScore + 1); 
//         setAudioSrc(correctAudio); // Set audio source for correct pair
//         setTimeout(() => {
//           setCards(prevCards => prevCards.map(card => {
//             if (card.id === firstCard.id || card.id === secondCard.id) {
//               return { ...card, found: true };
//             }
//             return card;
//           }));
//           setFirstCard(null);
//           setSecondCard(null);
//           setPairsFound(prevPairsFound => prevPairsFound + 1);
//         }, 1000);
//       } else {
//         setAudioSrc(wrongAudio); // Set audio source for wrong pair
//         setTimeout(() => {
//           setCards(prevCards => prevCards.map(card => {
//             if (card.id === firstCard.id || card.id === secondCard.id) {
//               return { ...card, flipped: false };
//             }
//             return card;
//           }));
//           setFirstCard(null);
//           setSecondCard(null);
//         }, 1000);
//       }
//     };

//     checkPair();
//   }, [firstCard, secondCard]);

//   const flipCard = card => {
//     if (card.flipped || card.found) return;

//     setCards(prevCards => prevCards.map(prevCard => {
//       if (prevCard.id === card.id) {
//         return { ...prevCard, flipped: true };
//       }
//       return prevCard;
//     }));

//     if (!firstCard) {
//       setFirstCard(card);
//     } else {
//       setSecondCard(card);
//     }
//   };

//   useEffect(() => {
//     // Play audio when audio source is set
//     if (audioSrc) {
//       const audio = new Audio(audioSrc);
//       audio.play();
//       // Clear audio source after playing
//       audio.onended = () => {
//         setAudioSrc('');
//       };
//     }
//   }, [audioSrc]);

//   const displayVictoryMessage = () => {
//     if (pairsFound === pairs.length / 2) {
//       return <><div className="victory-message">أحسنت ! لقد وجدت كل الأزواج.  </div></>;
//     } else {
//       return null;
//     }
  
//   };
  

//   return (
//     <div className="memory-game">
     
//       {cards.map((card) => (
//         <div key={card.id} className={`card ${card.flipped ? 'flipped' : ''} ${card.found ? 'found' : ''}`} onClick={() => flipCard(card)}>
       
//           <div className={`back piece-color-${card.id % 5 + 1}`}>
//             {card.flipped || card.found ? <img src={card.image} alt="Piece" />
//              : <img src={hideImage} alt="Hide" />}
             
//           </div>
          
//         </div>
//       ))}
     
     
//        {displayVictoryMessage()}
//       <br></br>
//       <br></br>
//       <div className="score score-button">Score: {score}</div>
//     </div>
//   );
// };

// export default MemoryGame;


// import React, { useState, useEffect } from 'react';
// import './App.css'; 
// import hideImage from './hideImage.jpg'; 
// import piece1 from './pictures/piece1.png';
// import piece2 from './pictures/piece2.png';
// import piece3 from './pictures/piece3.png';
// import piece4 from './pictures/piece4.png';
// import piece5 from './pictures/piece5.png';
// import piece6 from './pictures/piece6.jpg';
// import piece7 from './pictures/piece7.jpg';
// import piece9 from './pictures/piece9.jpg';
// import piece10 from './pictures/piece10.jpg';
// import correctAudio from './احسنت احسنت اجابة صحيحة بدون موسيقي.mp3';
// import wrongAudio from './Correct sound effect and wrong sound effect.mp3';

// const pairs = [
//   piece1, piece1, piece2, piece2, piece3, piece3, piece4, piece4, piece5, piece5,
//   piece6, piece6, piece7, piece7, piece9, piece9, piece10, piece10
// ];

// const shuffleArray = array => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// };

// shuffleArray(pairs);

// const MemoryGame = () => {
//   const [cards, setCards] = useState([]); // Etat pour les cartes
//   const [firstCard, setFirstCard] = useState(null); // Etat pour la première carte sélectionnée
//   const [secondCard, setSecondCard] = useState(null); // Etat pour la deuxième carte sélectionnée
//   const [pairsFound, setPairsFound] = useState(0); // Etat pour le nombre de paires trouvées
//   const [audioSrc, setAudioSrc] = useState(''); // Etat pour la source audio
//   const [score, setScore] = useState(0); // Etat pour le score

//   // Effet pour initialiser les cartes
//   useEffect(() => {
//     shuffleArray(pairs); // Mélanger les cartes
//     setCards(pairs.map((image, index) => ({ id: index, image, flipped: false, found: false }))); // Créer les cartes
//   }, []);

//   // Effet pour vérifier si les paires sont trouvées
//   useEffect(() => {
//     const checkPair = () => {
//       if (!firstCard || !secondCard) return;
//       if (firstCard.image === secondCard.image) {
//         setScore(prevScore => prevScore + 1); 
//         setAudioSrc(correctAudio); // Source audio pour la paire correcte
//         setTimeout(() => {
//           setCards(prevCards => prevCards.map(card => {
//             if (card.id === firstCard.id || card.id === secondCard.id) {
//               return { ...card, found: true };
//             }
//             return card;
//           }));
//           setFirstCard(null);
//           setSecondCard(null);
//           setPairsFound(prevPairsFound => prevPairsFound + 1);
//         }, 1000);
//       } else {
//         setAudioSrc(wrongAudio); // Source audio pour la paire incorrecte
//         setTimeout(() => {
//           setCards(prevCards => prevCards.map(card => {
//             if (card.id === firstCard.id || card.id === secondCard.id) {
//               return { ...card, flipped: false };
//             }
//             return card;
//           }));
//           setFirstCard(null);
//           setSecondCard(null);
//         }, 1000);
//       }
//     };

//     checkPair();

//     // Rediriger vers la page GameOver lorsque toutes les paires sont trouvées
//     if (pairsFound + 1 === pairs.length / 2) {
//       setTimeout(() => {
//         window.location.href = '/game-over';
//       }, 1000);
//     }
//   }, [firstCard, secondCard, pairsFound]);

//   // Fonction pour retourner une carte
//   const flipCard = card => {
//     if (card.flipped || card.found) return;

//     setCards(prevCards => prevCards.map(prevCard => {
//       if (prevCard.id === card.id) {
//         return { ...prevCard, flipped: true };
//       }
//       return prevCard;
//     }));

//     if (!firstCard) {
//       setFirstCard(card);
//     } else {
//       setSecondCard(card);
//     }
//   };

//   // Effet pour jouer le son
//   useEffect(() => {
//     if (audioSrc) {
//       const audio = new Audio(audioSrc);
//       audio.play();
//       audio.onended = () => {
//         setAudioSrc('');
//       };
//     }
//   }, [audioSrc]);

//   // Afficher le message de victoire
//   const displayVictoryMessage = () => {
//     if (pairsFound === pairs.length / 2) {
//       return <div className="victory-message">أحسنت ! لقد وجدت كل الأزواج.</div>;
//     } else {
//       return null;
//     }
//   };

//   return (
//     <div className="memory-game">
//       {cards.map((card) => (
//         <div key={card.id} className={`card ${card.flipped ? 'flipped' : ''} ${card.found ? 'found' : ''}`} onClick={() => flipCard(card)}>
//           <div className={`back piece-color-${card.id % 5 + 1}`}>
//             {card.flipped || card.found ? <img src={card.image} alt="Piece" />:<img src={hideImage} alt="Hide" />}
//           </div>
//         </div>
//       ))}
//       {displayVictoryMessage()}
//       <br />
//       <br />
//       <div className="score score-button">Score: {score}</div>
//     </div>
//   );
// };

// export default MemoryGame;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css'; 
import hideImage from './hideImage.jpg'; 
import piece1 from './pictures/piece1.png';
import piece2 from './pictures/piece2.png';
import piece3 from './pictures/piece3.png';
import piece4 from './pictures/piece4.png';
import piece5 from './pictures/piece5.png';
import piece6 from './pictures/piece6.jpg';
import piece7 from './pictures/piece7.jpg';
import piece9 from './pictures/piece9.jpg';
import piece10 from './pictures/piece10.jpg';
import correctAudio from './احسنت احسنت اجابة صحيحة بدون موسيقي.mp3';
import wrongAudio from './Correct sound effect and wrong sound effect.mp3';

const generatePairs = (numberOfCards) => {
  const allCards = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece9, piece10];
  const selectedCards = allCards.slice(0, numberOfCards / 2);
  const pairs = selectedCards.concat(selectedCards);
  shuffleArray(pairs);
  return pairs;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const MemoryGame = () => {
  const { numberOfCards } = useParams();
  const [cards, setCards] = useState([]); 
  const [firstCard, setFirstCard] = useState(null); 
  const [secondCard, setSecondCard] = useState(null); 
  const [pairsFound, setPairsFound] = useState(0); 
  const [audioSrc, setAudioSrc] = useState(''); 
  const [score, setScore] = useState(0); 

  useEffect(() => {
    const pairs = generatePairs(parseInt(numberOfCards));
    setCards(pairs.map((image, index) => ({ id: index, image, flipped: false, found: false })));
  }, [numberOfCards]);
  
  useEffect(() => {
    const checkPair = () => {
      if (!firstCard || !secondCard) return;
      if (firstCard.image === secondCard.image) {
        setScore(prevScore => prevScore + 1); 
        setAudioSrc(correctAudio); 
        setTimeout(() => {
          setCards(prevCards => prevCards.map(card => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, found: true };
            }
            return card;
          }));
          setFirstCard(null);
          setSecondCard(null);
          setPairsFound(prevPairsFound => prevPairsFound + 1);
        }, 1000);
      } else {
        setAudioSrc(wrongAudio); 
        setTimeout(() => {
          setCards(prevCards => prevCards.map(card => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, flipped: false };
            }
            return card;
          }));
          setFirstCard(null);
          setSecondCard(null);
        }, 1000);
      }
    };

    checkPair();

    if (pairsFound + 1 === cards.length / 2) {
      setTimeout(() => {
        window.location.href = '/game-over';
      }, 1000);
    }
  }, [firstCard, secondCard, pairsFound, cards]);

  const flipCard = (card) => {
    if (card.flipped || card.found) return;

    setCards(prevCards => prevCards.map(prevCard => {
      if (prevCard.id === card.id) {
        return { ...prevCard, flipped: true };
      }
      return prevCard;
    }));

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
    }
  };

  useEffect(() => {
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
      audio.onended = () => {
        setAudioSrc('');
      };
    }
  }, [audioSrc]);

  const displayVictoryMessage = () => {
    if (pairsFound === cards.length / 2) {
      return <div className="victory-message">أحسنت ! لقد وجدت كل الأزواج.</div>;
    } else {
      return null;
    }
  };

  return (
    <div className="memory-game">
      {cards.map((card) => (
        <div key={card.id} className={`card ${card.flipped ? 'flipped' : ''} ${card.found ? 'found' : ''}`} onClick={() => flipCard(card)}>
          <div className={`back piece-color-${card.id % 5 + 1}`}>
            {card.flipped || card.found ? <img src={card.image} alt="Piece" />:<img src={hideImage} alt="Hide" />}
          </div>
        </div>
      ))}
      {displayVictoryMessage()}
      <br />
      <br />
      <div className="score score-button">Score: {score}</div>
    </div>
  );
};

export default MemoryGame;

