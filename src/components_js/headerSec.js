import React from "react";

function Header() {
  return (
    <div className="header-section">
      <div className="container">
        <h1 className="header-text animate__animated animate__fadeInUp">
          <i>
            <b>Hi there!,</b>
          </i>
          <br />
          welcome to my website.
        </h1>
      </div>
      <img
        id="header-image"
        className="header-image animate__animated animate__fadeInDown"
        src={require("../assets/images/IMG_20230207_160156.png")}
        alt=""
      />
    </div>
  );
}

export default Header;
