import React from "react";
import Synonyms from "./Synonyms";
//import Examples from "./Examples";
import "./Meaning.css";
import "./Synonyms.css";

export default function Meaning(props) {
  //console.log(props.meaning);
  return (
    <div className="Meaningblock">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Definition">
              {index + 1}
              {"."} {definition.definition}
            </div>
            <div className="Example">{definition.example}</div>
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
