import React, { useState } from "react";
import Item from "./TodoItem";

function App() {
  const [initVal, setInitVal] = useState("");
  const [initItems, setInitItems] = useState([]);

  function changedTo(event) {
    const value = event.target.value;
    setInitVal(value);
  }

  function addItem() {
    setInitItems((preChange) => [...preChange, initVal]);
    setInitVal("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={changedTo} value={initVal} type="text" />

        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          <Item lists={initItems} />
          {/* {initItems.map(item => <li>{item}</li> )} */}
        </ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.

//1. When new text is written into the input, its state should be saved.

//2. When the add button is pressed, the current data in the input should be
//added to an array.

//3. The <ul> should display all the array items as <li>s
