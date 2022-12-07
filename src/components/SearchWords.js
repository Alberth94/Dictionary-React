import { useState } from 'react';
import "./SearchWords.css";

const SearchWords = (props) => {
    const [find, setFind] = useState('');
    const [displayMessage, setDisplayMessage] = useState('');

    const findWord = () => {
        if (props.list.includes(find)) {
            setDisplayMessage('The word "' + find + '", exist in the dictionary');
            setFind('');
        } else {
            setDisplayMessage('The word "' + find + '", does not exist in the dictionary.');
            setFind('');
        }
    };
    return (
        <div className='find-word'>
            <p>Search the word in the dictionary.</p>
            <input type='text' value={find} onChange={(e) => {setFind(e.target.value)}}/>
            <button className='button2' type='submit' onClick={findWord} >Submit</button>
            <p>{ displayMessage }</p>
        </div>
    );
}

export default SearchWords;