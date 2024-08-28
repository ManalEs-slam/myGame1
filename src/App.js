




























// import React, { useState, useEffect } from 'react';
// import './App.css'; // Fichier CSS pour le style du jeu

// // Import des images
// import piece1 from './pictures/piece1.png';
// import piece2 from './pictures/piece2.png';
// import piece3 from './pictures/piece3.png';
// import piece4 from './pictures/piece4.png';
// import piece5 from './pictures/piece5.png';


// const pairs = [piece1 , piece1, piece2, piece2, piece3, piece3, piece4, piece4, piece5, piece5];

// // Fonction pour mélanger les images dans le tableau
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

//   useEffect(() => {
//     const checkPair = () => {
//       if (!firstCard || !secondCard) return;
//       if (firstCard.image === secondCard.image) {
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

//   const displayVictoryMessage = () => {
//     if (pairsFound === pairs.length / 2) {
//       return <div className="victory-message">Bravo ! Vous avez trouvé toutes les paires.</div>;
//     }
//     return null;
//   };

//   return (
//     <div className="memory-game">
//       {cards.map(card => (
//         <div key={card.id} className={`card ${card.flipped ? 'flipped' : ''} ${card.found ? 'found' : ''}`} onClick={() => flipCard(card)}>
//           <img src={card.image} alt="Piece"/>
//         </div>
//       ))}
//       {displayVictoryMessage()}
//     </div>
//   );
// };
// export default MemoryGame;






// import React, { useState, useEffect } from 'react';
// import './App.css'; // Import du fichier CSS pour le style du jeu

// // Import des images
// import piece1 from './pictures/piece1.png';
// import piece2 from './pictures/piece2.png';
// import piece3 from './pictures/piece3.png';
// import piece4 from './pictures/piece4.png';
// import piece5 from './pictures/piece5.png';
// import backgrooudJeux from './backgroudJeux.png';

// // Import des fichiers audio
// import correctAudio from './احسنت احسنت اجابة صحيحة بدون موسيقي.mp3';
// import wrongAudio from './Correct sound effect and wrong sound effect.mp3';

// const pairs = [piece1, piece1, piece2, piece2, piece3, piece3, piece4, piece4, piece5, piece5];

// // Fonction pour mélanger les images dans le tableau
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
//   const [imageSrc, setImageSrc] = useState(backgrooudJeux); // State for image source
//   const [audioSrc, setAudioSrc] = useState(''); // State for audio source

//   // Function to change image source
//   const changeImage = () => {
//     setImageSrc(prevSrc => prevSrc === backgrooudJeux ? piece1 : backgrooudJeux);
//   };

//   useEffect(() => {
//     const checkPair = () => {
//       if (!firstCard || !secondCard) return;
//       if (firstCard.image === secondCard.image) {
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
//       return <div className="victory-message">Bravo ! Vous avez trouvé toutes les paires.</div>;
//     }
//     return null;
//   };

//   return (
//     <div className="memory-game">
//       {cards.map((card) => (
//         <div key={card.id} className={`card ${card.flipped ? 'flipped' : ''} ${card.found ? 'found' : ''}`} onClick={() => flipCard(card)}>
//           <div className={`back piece-color-${card.id % 5 + 1}`}>
//             <img src={card.image} alt="Piece" />
//           </div>
//         </div>
//       ))}
//       <div>
//         <img id="image1" src={imageSrc} alt="" onClick={changeImage} />
//       </div>
//       {displayVictoryMessage()}
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
//       return <div className="victory-message">أحسنت ! لقد وجدت كل الأزواج.
//       </div>;
//     }
//     return null;
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
     
//       {displayVictoryMessage()}
//       <br></br>
//       <br></br>
//       <div className="score score-button">Score: {score}</div>
//     </div>
//   );
// };

// export default MemoryGame;













import React from 'react'; // Importez React une seule fois
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import GameSetupPage from './GameSetupPage';
import MemoryGame from './MemoryGame';
import GameOverPage from './GameOverPage'; // Importez la page GameOverPage

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/game-setup" element={<GameSetupPage />} />
        <Route path="/memory-game/:numberOfCards" element={<MemoryGame />} />
        <Route path="/game-over" element={<GameOverPage />} /> {/* Ajoutez cette route pour GameOverPage */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
