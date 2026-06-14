import React from 'react';
import { Gamepad2, Zap, Trophy, ChevronRight } from 'lucide-react';
import './index.css';

const ARCADE_URL = "https://www.hellyeah-games.com";

const FEATURED_GAMES = [
  {
    title: "Moto X3M",
    image: "https://img.gamedistribution.com/b28276f571fa4f97bc8a1005fbc3538a-512x512.jpeg",
    tag: "Action",
    url: `${ARCADE_URL}/game/b28276f571fa4f97bc8a1005fbc3538a`
  },
  {
    title: "EvoWars.io",
    image: "https://img.gamedistribution.com/e2bd5fc2fb1d471d87e07b81781b0a88-512x512.jpeg",
    tag: "Multiplayer",
    url: `${ARCADE_URL}/game/e2bd5fc2fb1d471d87e07b81781b0a88`
  },
  {
    title: "Venge.io",
    image: "https://img.gamedistribution.com/2b5247db15f24f5ebd80e224e7569106-512x512.jpeg",
    tag: "Shooter",
    url: `${ARCADE_URL}/game/2b5247db15f24f5ebd80e224e7569106`
  },
  {
    title: "Fireboy & Watergirl",
    image: "https://img.gamedistribution.com/58c35391e4fc46b1bcad2d19213fb25a-512x512.jpeg",
    tag: "Puzzle",
    url: `${ARCADE_URL}/game/58c35391e4fc46b1bcad2d19213fb25a`
  }
];

function App() {
  const handleRedirect = (url = ARCADE_URL) => {
    window.location.href = url;
  };

  return (
    <div 
      onClick={() => handleRedirect()}
      style={{ 
        width: '100vw', 
        height: '100vh', 
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Fallback text in case the image hasn't been saved yet */}
      <h1 style={{ 
        color: 'transparent', 
        textShadow: '0 0 20px rgba(0, 243, 255, 0)',
        fontSize: '1px'
      }}>
        ENTER CYBORG GAMERS
      </h1>
    </div>
  );
}

export default App;
