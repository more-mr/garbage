import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changed(event) {
    const name = event.target.name;
    const value = event.target.value;
    // OR
    // const {name , value} = event.target

    setContact(function (preValue) {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        };
      } else {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        };
      }
      // OR
      // return {
      //   ...preValue ,    //spread operator
      //   [name]:value     //dynamic key in key value
      // }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>

      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={changed}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={changed}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={changed}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
