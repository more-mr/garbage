import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [listItems, setListItems] = useState([]);

  function addContent(returnParam) {
    setListItems(function (prev) {
      console.log(prev);
      return [...prev, returnParam];
    });
  }

  function getId(returnParam) {
    setListItems(
      listItems.filter((item, index) => {
        return index !== returnParam;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addCon={addContent} />
      {listItems.map(function (item, index) {
        return (
          <Note
            key={index}
            id={index}
            delete={getId}
            title={item.title}
            content={item.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
