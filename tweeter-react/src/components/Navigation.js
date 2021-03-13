import React from "react";
import "./Navigation.css"

export const Navigation = () => {
  return (
    <nav id="navbar">
      <div>
        <span className="logo">tweeter</span>
      </div>
      <div className="birdie-container">
        <span id="compose-tweet">Compose your thoughts!</span>
        <img
          className="birdie"
          src="https://i.ibb.co/thvDwQs/bird-head.png"
          alt="bird"
          width="120"
        />
      </div>
    </nav>
  )
};
