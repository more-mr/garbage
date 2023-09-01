import React, { useState } from "react";

function Item(props) {
  return (
    <li
      onClick={() => {
        props.c(props.id);
      }}
    >
      {props.lists}
    </li>
  );
}

export default Item;
