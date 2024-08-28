import React from 'react';
import { Link } from 'react-router-dom';
import background from './backgroudJeux.png';

const GameOverPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', // Hauteur de la page
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  };

  return (
    <div style={backgroundStyle}>
      <h2>لقد انتهت اللعبة!</h2>
      <Link to="/game-setup">
        <button style={{ backgroundColor: '#5bca5f',
       border: 'none',
       color: 'white',
       padding: '10px 32px',
       textAlign: 'center',
       textDecoration: 'none',
       display: 'inline-block',
       fontSize: '16px',
       borderRadius: '8px',
       cursor: 'pointer',
       transition: 'background-color 0.3s ease' }}>ابدأ مرة أخرى</button>
      </Link>
    </div>
  );
};

export default GameOverPage;
