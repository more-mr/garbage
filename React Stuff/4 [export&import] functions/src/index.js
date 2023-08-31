import React from "react";
import ReactDOM from "react-dom";
import { add, multiply, subtract, divide } from "./calculator.js";
//if it was import defult
//appDefult, { add, multiply, subtract, divide }

//if it was a WildCard import * as finger from "./"
//{finger.add(5,7)} [call]

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
