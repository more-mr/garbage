import React from "react";

let date = new Date();

function Footer() {
  return (
    <footer>
      <p>Copy right Morena {date.getFullYear()} </p>
    </footer>
  );
}

export default Footer;
