import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary () {
    let [keyword, setKeyword] = useState("");

    function showWord(response) {
        console.log(response.data[0]);

    }

    function Search(event) {
       
        event.preventDefault();
        alert(`Searching for ${keyword} definition`); 
      
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(showWord)
    }

    

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary"> 
        <form onSubmit={Search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
        </form>
        </div>
        );
}