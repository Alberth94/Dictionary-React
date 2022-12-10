import './App.css';
import AddWords from './components/AddWords';
import SearchWords from './components/SearchWords';
import React, { useState } from 'react';

function App() {
  const [wordToList, setWordToList] = useState('');

  return (
    <div>
      <h1>Dictionary</h1>
      <AddWords wordToList={wordToList} setWordToList ={setWordToList} />
      <SearchWords listOfWords={wordToList} />
    </div>
  );
}

export default App;
