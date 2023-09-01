import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      {props.logged === true && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {/* OR */}
      {/* {props.logged === true ? <input type="password" placeholder="Confirm Password" /> : null}    */}
      <button type="submit">
        {props.logged === true ? "Register" : "login"}
      </button>
    </form>
  );
}

export default Form;
