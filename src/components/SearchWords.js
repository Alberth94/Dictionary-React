import { useState } from 'react';
import "./SearchWords.css";

const SearchWords = ({listOfWords}) => {
    const [findWord, setFindWord] = useState('');
    const [displayMessage, setDisplayMessage] = useState('');

    const findWords = () => {
        if (listOfWords.includes(findWord)) {
            setDisplayMessage('The word "' + findWord + '", exist in the dictionary');
        } else {
            setDisplayMessage('The word "' + findWord + '", does not exist in the dictionary.');
        }
        setFindWord('');
    };
    return (
        <div className='find-word'>
            <p>Search the word in the dictionary.</p>
            <input type='text' value={findWord} onChange={(e) => {setFindWord(e.target.value)}}/>
            <button className='button2' type='submit' onClick={findWords} >Submit</button>
            <p>{ displayMessage }</p>
        </div>
    );
}

export default SearchWords;
