import React from "react";

function Header() {
  return (
    <div className="header-section">
      <div className="container">
        <h1 id="header-text" className="header-text">
          <i>
            <b>Hi there!,</b>
          </i>
          <br />
          welcome to my website.
        </h1>
      </div>
      <img
        id="header-image"
        className="header-image "
        src={require("../assets/images/IMG_20230207_160156.jpg")}
        alt=""
      />
    </div>
  );
}

export default Header;
