import React from "react";
import "./Photos.css";

export default function Photos(props) {
  //console.log(props);
  if (props.photos) {
    return (
      <div className="Photodisplay">
        <h2 className="text-center mb-3">Looks like...</h2>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4">
                <img
                  src={photo.src.landscape}
                  key={index}
                  className="img-fluid"
                  alt="looks-like"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
