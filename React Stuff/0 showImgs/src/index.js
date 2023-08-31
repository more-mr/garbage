import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <div>
      <img
        className="img-s"
        src="https://www.gastronomiavasca.net/uploads/image/file/4425/w700_ramen.jpg"
      />
      <img
        className="img-s"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Mama_instant_noodle_block.jpg/1200px-Mama_instant_noodle_block.jpg"
      />
      <img
        className="img-s"
        src="https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg"
      />
    </div>
  </div>,
  document.querySelector("#root")
);
