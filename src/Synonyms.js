import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div>
        <strong>Synonym:</strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span className="synonym" key={index}>
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
