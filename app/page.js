'use client';
import Link from 'next/link';

export default function Home() {
  const modes = [
    { name: 'Classic Kahoot', desc: 'Live timed quiz with real-time leaderboard', path: '/game/classic' },
    { name: 'Treasure Quest', desc: 'Dig for gold by answering correctly. Avoid traps!', path: '/game/treasure' },
    { name: 'Alien Defense', desc: 'Defend Earth! Correct answers power your lasers.', path: '/game/alien' },
    { name: 'Factory Frenzy', desc: 'Build production lines. Answers give resources.', path: '/game/factory' },
    { name: 'Space Race', desc: 'Race to the stars. Speed + accuracy boost your ship.', path: '/game/space' },
  ];

  return (
    <div>
      <div className="card">
        <h2>Create or Play</h2>
        <p>Host a quiz or jump into exciting game modes.</p>
        <Link href="/create"><button>Create Quiz</button></Link>
        <Link href="/play"><button>Join Game</button></Link>
      </div>
      <h2 style={{color: 'white', textAlign: 'center'}}>Exciting Game Modes</h2>
      <div className="game-grid">
        {modes.map(m => (
          <div key={m.name} className="mode-card">
            <h3>{m.name}</h3>
            <p>{m.desc}</p>
            <Link href={m.path}><button>Play Demo</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
