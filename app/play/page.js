'use client';
import { useState } from 'react';

export default function Play() {
  const [pin, setPin] = useState('');
  const [joined, setJoined] = useState(false);

  return (
    <div className="card">
      <h2>Join Game</h2>
      {!joined ? (
        <>
          <input placeholder="Enter PIN" value={pin} onChange={e => setPin(e.target.value)} style={{padding: '10px', fontSize: '18px'}} />
          <button onClick={() => setJoined(true)}>Join</button>
        </>
      ) : (
        <p>Joined game {pin}! Waiting for host... (Demo mode)</p>
      )}
    </div>
  );
}
