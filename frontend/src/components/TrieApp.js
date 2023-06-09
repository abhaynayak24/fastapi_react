import React, { useState } from 'react';

function TrieApp() {
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
    <div className="flex flex-col items-center h-screen w-screen">
        <h2 className="my-4 p-4">208. Implement Trie (Prefix Tree)</h2>
        <div className='p-8 border-x border-y'>
          <form className="my-4">
            <label className="mx-4 justify-center" htmlFor="word">
              Enter Word:
            </label>
            <input className='text-gray-900 font-mono p-1 bg-gray-300'
              type="text"
              id="word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <div className='justify-between space-x-8 my-8 mx-4'>
              <button className='hover:bg-gray-700 rounded-md text-md px-4 py-2' onClick={handleInsert}>Insert</button>
              <button className='hover:bg-gray-700 rounded-md text-md px-4 py-2' onClick={handleSearch}>Search</button>
              <button className='hover:bg-gray-700 rounded-md text-md px-4 py-2' onClick={handleStartsWith}>Starts With</button>
            </div>
          </form>
      </div>
      <div className='justify-center my-8'> {result && <p>{result}</p>}</div>
    </div>

  );
}

export default TrieApp;
