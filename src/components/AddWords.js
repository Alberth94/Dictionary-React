import { useState } from 'react';
import './AddWords.css';

const AddWords = ({wordToList, setWordToList}) => {
    const [word, setWord] = useState('');
    const [displayMessage, setDisplayMessage] = useState('');

    const wordInList = () => {
        if (!wordToList.includes(word) && word !== "") {
            setWordToList(wordToList.concat(word));
            setDisplayMessage('The word "' + word + '", was successfully added to the dictionary.')
            setWord('');
        } else if (wordToList.includes(word) && word !== "") {
            setDisplayMessage('The word "' + word + '", has already been added to the dictionary.')
        }
    };

    return (
        <div className='words-input'>
            <p>Add a word to the dictionary.</p>
            <input type='text' value={word} onChange={(e) => {setWord(e.target.value)}}/>
            <button className='button1' type='submit' onClick={wordInList} >Submit</button>
            <p>{displayMessage}</p>
        </div>
    );
};


export default AddWords;
