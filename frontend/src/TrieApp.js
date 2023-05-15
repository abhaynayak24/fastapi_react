import React, { useState } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('');
  const [result, setResult] = useState('');

  const handleInsert = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/insert/${word}`, {
      method: 'POST',
    });
    const data = await response.json();
    setResult(data.message);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/search/${word}`);
    if (response.ok) {
        const data = await response.json();
        setResult(data.message);
    }
    else {
        setResult("Word not in Trie");
    }
  };

  const handleStartsWith = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/startswith/${word}`);
    if (response.ok) {
        const data = await response.json();
        setResult(data.message);
    }
    else {
        setResult("No such prefix in Trie");
    }
  };

  return (
    <div className="App">
      <h3>208. Implement Trie (Prefix Tree)</h3>
      <form>
        <label htmlFor="word">Enter Word: </label>
        <input
          type="text"
          id="word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={handleInsert}>Insert</button>
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleStartsWith}>Starts With</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;
