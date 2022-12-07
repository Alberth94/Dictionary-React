
import './App.css';
import AddWords from './components/AddWords';
import SearchWords from './components/SearchWords';
import React from 'react';

function App() {
  const allWords = [];

  return (
    <div>
      <h1>Dictionary</h1>
      <AddWords list={allWords} />
      <SearchWords list={allWords} />
    </div>
  );
}

export default App;