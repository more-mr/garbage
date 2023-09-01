import React from "react";
import Avater from "./Avater";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        {props.id}
        <Avater img={props.img} />
      </div>
      <div className="bottom">
        <Details info={props.num} />
        <Details info={props.email} />
      </div>
    </div>
  );
}

export default Card;
