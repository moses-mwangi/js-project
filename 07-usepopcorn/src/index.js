import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={10} />
    <StarRating
      color="red"
      maxRating={5}
      messages={["poor", "bad", "average", "good", "amaizing"]}
    />
    {/* <App /> */}
  </React.StrictMode>
);
