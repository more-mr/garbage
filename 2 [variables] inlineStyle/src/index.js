import React from "react";
import ReactDOM from "react-dom";

let pretty = {
  color: "purple",
  fontSize: "100px", //CSS font-size to JSX fontSize
  borader: "1px solid black"
};

ReactDOM.render(
  <div>
    <h1 style = {{color : "red"}}> Hello World!</h1>
    <h2 style = {pretty}>The world is huge</h2>
  </div>, 
document.getElementById("root"));
