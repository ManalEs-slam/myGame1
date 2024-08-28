import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from './backgroudJeux.png';

const GameSetupPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  };
  const navigate = useNavigate();
  const [numberOfCards, setNumberOfCards] = useState(6);

  const handleStartGame = () => {
    navigate(`/memory-game/${numberOfCards}`);
  };

  return (
    <div style={backgroundStyle}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h2>اختر عدد البطاقات</h2>
        <label>
          <button className={`borderYellow ${numberOfCards === 6 ? 'selected' : ''}`} onClick={() => setNumberOfCards(6)}>6 بطاقات</button>
        </label>
        <label>
          <button className={`borderRed ${numberOfCards === 8 ? 'selected' : ''}`} onClick={() => setNumberOfCards(8)}>8 بطاقات</button>
        </label>
        <label>
          <button className={`borderYellow ${numberOfCards === 12 ? 'selected' : ''}`} onClick={() => setNumberOfCards(12)}>12 بطاقات</button>
        </label>
        <label>
          <button className={`borderRed ${numberOfCards === 16 ? 'selected' : ''}`} onClick={() => setNumberOfCards(16)}>16 بطاقات</button>
        </label>
        <label>
          <button className={`borderYellow ${numberOfCards === 18 ? 'selected' : ''}`} onClick={() => setNumberOfCards(18)}>18 بطاقات</button>
        </label>
        <button
          onClick={handleStartGame}
          style={{
            backgroundColor: '#5bca5f',
            border: 'none',
            color: 'white',
            padding: '20px 50px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          ابدأ اللعبة
        </button>
      </div>
    </div>
  );
};

export default GameSetupPage;


