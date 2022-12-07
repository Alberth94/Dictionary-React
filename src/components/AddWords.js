import { useState } from 'react';
import './AddWords.css';

const AddWords = (props) => {
    const [word, setWord] = useState('');
    const [displayMessage, setDisplayMessage] = useState('');

    const wordToList = () => {
        if (!props.list.includes(word) && word !== "") {
            props.list.push(word);
            setDisplayMessage('The word "' + word + '", was successfully added to the dictionary.')
            setWord('');
        } else if (props.list.includes(word) && word !== "") {
            setDisplayMessage('The word "' + word + '", has already been added to the dictionary.')
        }
    };

    return (
        <div className='words-input'>
            <p>Add a word to the dictionary.</p>
            <input type='text' value={word} onChange={(e) => {setWord(e.target.value)}}/>
            <button className='button1' type='submit' onClick={wordToList} >Submit</button>
            <p>{displayMessage}</p>
        </div>
    );
};


export default AddWords;