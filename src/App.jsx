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
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="cyber-grid"></div>
      
      {/* Navbar */}
      <nav style={{ padding: '20px', borderBottom: '1px solid rgba(0, 243, 255, 0.2)', backgroundColor: 'var(--card-bg)', backdropFilter: 'blur(10px)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Gamepad2 size={32} color="var(--neon-blue)" />
            <h1 style={{ fontSize: '1.5rem', margin: 0, color: 'white', letterSpacing: '2px' }}>CYBORG GAMERS</h1>
          </div>
          <div>
            <button className="cyber-button" onClick={() => handleRedirect()} style={{ fontSize: '0.9rem', padding: '10px 20px' }}>
              ACCESS ARCADE
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <div className="container">
          <h2 className="glitch-text" style={{ fontSize: '4rem', marginBottom: '20px', textTransform: 'uppercase' }}>
            The Future of <br/><span style={{ color: 'var(--neon-blue)' }}>Browser Gaming</span>
          </h2>
          <p style={{ fontSize: '1.5rem', color: '#aaa', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
            No downloads. No installations. Just pure, unadulterated adrenaline. Connect to the Hell Yeah Games network now.
          </p>
          <button className="cyber-button" onClick={() => handleRedirect()} style={{ fontSize: '1.5rem', padding: '20px 40px' }}>
            ENTER THE GRID <ChevronRight size={24} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />
          </button>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '60px 20px', backgroundColor: 'var(--card-bg)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center', flex: '1', minWidth: '250px' }}>
            <Zap size={48} color="var(--neon-green)" style={{ margin: '0 auto 20px auto' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Instant Play</h3>
            <p style={{ color: '#aaa' }}>Jump straight into the action with zero load times.</p>
          </div>
          <div style={{ textAlign: 'center', flex: '1', minWidth: '250px' }}>
            <Trophy size={48} color="var(--neon-pink)" style={{ margin: '0 auto 20px auto' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>800+ Games</h3>
            <p style={{ color: '#aaa' }}>The largest collection of premium browser games.</p>
          </div>
          <div style={{ textAlign: 'center', flex: '1', minWidth: '250px' }}>
            <Gamepad2 size={48} color="var(--neon-blue)" style={{ margin: '0 auto 20px auto' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Cross-Platform</h3>
            <p style={{ color: '#aaa' }}>Play on your PC, tablet, or cybernetic implant.</p>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section style={{ padding: '80px 20px' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center', color: 'var(--neon-blue)' }}>TOP PROTOCOLS</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {FEATURED_GAMES.map((game, index) => (
              <div key={index} style={{ 
                backgroundColor: 'var(--card-bg)', 
                border: '1px solid rgba(0, 243, 255, 0.2)',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease'
              }}
              className="game-card"
              >
                <img src={game.image} alt={game.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <span style={{ color: 'var(--neon-pink)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{game.tag}</span>
                  <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{game.title}</h3>
                  <button className="cyber-button" onClick={() => handleRedirect(game.url)} style={{ width: '100%', padding: '10px', fontSize: '1rem', marginTop: '10px' }}>
                    INITIALIZE
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button className="cyber-button" onClick={() => handleRedirect()} style={{ backgroundColor: 'rgba(0, 243, 255, 0.1)' }}>
              VIEW ALL 800+ PROTOCOLS
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 20px', backgroundColor: '#000', borderTop: '1px solid rgba(0, 243, 255, 0.2)', textAlign: 'center' }}>
        <p style={{ color: '#666' }}>© 2026 Cyborg Gamers Network. Powered by Hell Yeah Games.</p>
      </footer>
    </div>
  );
}

export default App;
