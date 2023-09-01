import React, { useState } from "react";

function Item(props) {
  const [init, setinit] = useState(true);

  function clicked() {
    setinit((prev) => !prev);
  }

  return (
    <li
      onClick={clicked}
      style={
        init ? { textDecoration: "line-through" } : { textDecoration: null }
      }
    >
      {" "}
      {props.lists}
    </li>
  );
}

export default Item;
