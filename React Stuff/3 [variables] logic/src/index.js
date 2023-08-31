//Create a React app from scratch.
let React = require("react");
let ReactDOM = require("react-dom");

let time = new Date();
let hours = time.getHours("US-en");
let say = "nothing";
let colors = {
  color: "yellow"
};
if (hours < 12 && hours > 0) {
  say = "Good morning";
  colors.color = "red";
} else if (hours > 12 && hours < 18) {
  say = "Good Afternoon";
  colors.color = "green";
} else if (hours > 18) {
  say = "Good Evening";
  colors.color = "blue";
}

//Show a single h1 that says "Good morning" if between midnight and 12PM.
ReactDOM.render(
  <div>
    <h1 style = {colors} className="heading">{say}</h1>
  </div>,
  document.querySelector("#root")
);
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
