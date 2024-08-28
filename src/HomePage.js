// // HomePage.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './App.css';

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <Link to="/memory-game" className="start-button">Start</Link>
//     </div>
//   );
// };

// export default HomePage;

// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import background from './backgroudJeux.png';

const HomePage = () => {
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
      <h1>مرحبا بكم في لعبة الذاكرة</h1>
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
       transition: 'background-color 0.3s ease' }}> ابدأ</button>
      </Link>
    </div>
  );
};

export default HomePage;