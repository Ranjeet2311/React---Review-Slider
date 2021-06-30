import React, { useState } from "react";
import Review from "./components/Review";
// import img1 from "./components/images/jos.png";

function App() {
  // const displayReviews = reviews.map((review) => review);

  return (
    <div className="App">
      <Review />
      {/* <img src={img1} alt="pic" /> */}
    </div>
  );
}

export default App;
