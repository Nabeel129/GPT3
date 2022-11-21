import React from "react";
import "./feature.css";

function Feature({ title, text }) {
  return (
    <div className="gpt__feature-container">
      <div className="gpt__feature-container-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt__feature-container-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature;
