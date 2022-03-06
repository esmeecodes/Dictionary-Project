import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function showWord(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(showWord);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function Loaded() {
    setLoaded(true);
    Search();
  }
  if (loaded) {
    return (
      <div className="Search">
        <div className="Zoekgedeelte">
          <h2>Dictionary</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              placeholder="Type a word..."
            />
          </form>
          <div className="hint">
            Suggestions: spark, sunray, mindset, tent, fire
          </div>
        </div>

        <div className="mt-5">
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    Loaded();
    return "...Loading";
  }
}
