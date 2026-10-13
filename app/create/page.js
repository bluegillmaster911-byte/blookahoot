'use client';
import { useState } from 'react';

export default function Create() {
  const [questions, setQuestions] = useState([]);
  const [q, setQ] = useState({ question: '', options: ['', '', '', ''], correct: 0 });

  const addQuestion = () => {
    setQuestions([...questions, q]);
    setQ({ question: '', options: ['', '', '', ''], correct: 0 });
  };

  return (
    <div className="card">
      <h2>Create Quiz</h2>
      <input placeholder="Question" value={q.question} onChange={e => setQ({...q, question: e.target.value})} style={{width: '100%', padding: '8px', margin: '5px 0'}} />
      {q.options.map((opt, i) => (
        <input key={i} placeholder={`Option ${i+1}`} value={opt} onChange={e => {
          const newOpts = [...q.options];
          newOpts[i] = e.target.value;
          setQ({...q, options: newOpts});
        }} style={{width: '100%', padding: '8px', margin: '5px 0'}} />
      ))}
      <label>Correct: <select value={q.correct} onChange={e => setQ({...q, correct: parseInt(e.target.value)})}>
        {[0,1,2,3].map(i => <option key={i} value={i}>{i+1}</option>)}
      </select></label>
      <button onClick={addQuestion}>Add Question</button>
      <h3>Questions ({questions.length})</h3>
      <ul>{questions.map((qq, i) => <li key={i}>{qq.question}</li>)}</ul>
      <p>Quizzes saved locally for demo. Full multiplayer coming soon!</p>
    </div>
  );
}
