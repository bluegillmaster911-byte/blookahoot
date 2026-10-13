'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const sampleQuestions = [
  { q: 'What is 2 + 2?', opts: ['3', '4', '5', '6'], correct: 1 },
  { q: 'Capital of France?', opts: ['London', 'Paris', 'Berlin', 'Madrid'], correct: 1 },
  { q: 'Largest planet?', opts: ['Earth', 'Mars', 'Jupiter', 'Saturn'], correct: 2 },
];

export default function Game() {
  const params = useParams();
  const mode = params.mode;
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  const answer = (idx) => {
    const correct = sampleQuestions[current].correct === idx;
    if (correct) {
      setScore(score + 100);
      setMessage('Correct! +100');
    } else {
      setMessage('Wrong!');
    }
    setTimeout(() => {
      if (current < sampleQuestions.length - 1) {
        setCurrent(current + 1);
        setMessage('');
      } else {
        setMessage(`Game Over! Score: ${score + (correct ? 100 : 0)}`);
      }
    }, 1000);
  };

  const modeNames = {
    classic: 'Classic Kahoot Quiz',
    treasure: 'Treasure Quest',
    alien: 'Alien Defense',
    factory: 'Factory Frenzy',
    space: 'Space Race',
  };

  return (
    <div className="card">
      <h2>{modeNames[mode] || 'Game'}</h2>
      <p>Score: {score}</p>
      {current < sampleQuestions.length && !message.includes('Game Over') ? (
        <>
          <h3>{sampleQuestions[current].q}</h3>
          {sampleQuestions[current].opts.map((opt, i) => (
            <button key={i} onClick={() => answer(i)} style={{display: 'block', width: '100%', margin: '5px 0'}}>{opt}</button>
          ))}
        </>
      ) : null}
      <p>{message}</p>
      <p style={{marginTop: '20px', fontStyle: 'italic'}}>Demo version. Full real-time multiplayer with Socket.io and unique game mechanics (resource systems, visuals, power-ups) coming in next iterations. New modes designed to be more strategic and exciting than standard Blooket!</p>
    </div>
  );
}
