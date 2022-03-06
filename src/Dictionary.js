import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function showWord(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function showImage(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(showWord);

    let apiKeyPexel =
      "563492ad6f9170000100000114595e0a9826414d89bbab0cc0c622b2";
    let headers = {
      Authorization: "Bearer " + apiKeyPexel,
    };

    let pexUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexUrl, { headers: headers }).then(showImage);
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
          <h2>Search for a word</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              placeholder={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            Suggestions: spark, sunray, mindset, tent, fire
          </div>
        </div>

        <div className="Results">
          <Results results={results} />
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    Loaded();
    return "...Loading";
  }
}
