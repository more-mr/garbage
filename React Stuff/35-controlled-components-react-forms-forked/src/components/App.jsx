import React, { useState } from "react";

function App() {
  const [isHover, isHoverState] = useState(false);
  const [name, setName] = useState("");
  const [subName, setSubName] = useState("Hello");

  function is() {
    isHoverState(true);
  }

  function isNot() {
    isHoverState(false);
  }

  function handelChange(event) {
    //controlled component (value of element)
    setName(event.target.value);
  }

  function upDateTitle() {
    setSubName(name);

    // Forms usually reloads the page when clicked, this will wipe
    // the page of the information entered . . . when using Forms
    // it needs to be "onSubmit = {upDateTitle}" then in the
    // upDateTitle(event){} after everything is done to change
    // state you need to have event.preventDefault to prevent reload
  }

  return (
    <div className="container">
      <h1>{subName}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handelChange}
        value={name}
      />

      <button
        style={
          isHover ? { backgroundColor: "black" } : { backgroundColor: "white" }
        }
        onMouseOver={is}
        onMouseOut={isNot}
        onClick={upDateTitle}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
