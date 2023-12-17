import React from "react";

function Header() {
  return (
    <div className="header-section">
      <div className="container">
        <h1 id="header-text" className="header-text">
          <i>
            <b className="header-text-glow">HI THERE!</b>
          </i>
          <br />
          Welcome to my website.
        </h1>
      </div>
      <img
        id="header-image"
        className="header-image"
        src={require("../assets/images/IMG_20230207_160156.jpg")}
        alt=""
      />
    </div>
  );
}

export default Header;
