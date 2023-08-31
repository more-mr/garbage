//Create a react app from scratch.
let React = require("react");
let ReactDom = require("react-dom");

let today = new Date();
let opt = { year: "numeric" };
let year = today.toLocaleDateString("en-US", opt);

//It should display 2 paragraph HTML elements.
ReactDom.render(
  <div>
    <p>Created by Morena</p>
    <p>Copyright {year}</p>
  </div>,
  document.querySelector("#root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
