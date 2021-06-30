import React, { useState } from "react";
import reviews from "./Data";
import "./Review.css";

function Review() {
  const [index, setIndex] = useState(0);

  const { name, Job, text } = reviews[index];

  const nextClickHandler = () => {
    setIndex(function () {
      let newIndex = index + 1;
      if (newIndex > 3) {
        newIndex = 0;
      }
      return newIndex;
    });
  };
  const prevClickHandler = () => {
    setIndex(function () {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = 3;
      }
      return newIndex;
    });
  };

  return (
    <div className="Container">
      <div className="wrapper">
        <div className="emp-slide">
          <h2>Reviews project</h2>

          <h1> {name}</h1>
          <hr />
          <h2>{Job} </h2>
          <p>" {text} " </p>
        </div>

        <div className="buttons">
          <button onClick={prevClickHandler}>
            <i class="fas fa-arrow-left"> </i>
          </button>
          <button onClick={nextClickHandler}>
            <i class="fas fa-arrow-right"> </i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
