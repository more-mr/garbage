import React, { useState } from "react";

function CreateArea(props) {
  const [conComponet, setConComponet] = useState({ title: "", content: "" });

  function cVal(event) {
    const val = event.target.value;
    const nam = event.target.name;

    setConComponet(function (prev) {
      return { ...prev, [nam]: val };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={cVal}
          value={conComponet.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={cVal}
          value={conComponet.content}
        />

        <button
          onClick={(event) => {
            props.addCon(conComponet);
            event.preventDefault(); // since its a form
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
