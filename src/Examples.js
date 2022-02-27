import React from "react";

export default function Examples(props) {
  console.log(props.examples);
  if (props.examples) {
    return (
      <div>
        <strong>Example:</strong>
        <ul>
          {props.examples.map(function (example, index) {
            return <li key={index}>{example}</li>;
          })}{" "}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
