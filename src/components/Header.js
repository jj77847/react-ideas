import React from "react";
// Here we are importing a CSS file as a dependency
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>
        <span class="header is-primary">Jonathan</span>
        <span class="header is-success">Jefferies</span>
        <span class="header is-error">Portfolio</span>
      </h1>
    </header>
  );
}

export default Header;
