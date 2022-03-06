import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="phonetic">
      <span className="phoText">{props.phonetic.text}</span>
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
    </div>
  );
}
