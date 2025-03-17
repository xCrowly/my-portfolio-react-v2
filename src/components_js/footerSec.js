import React from "react";

function FooterSection() {

  function copyText() {
    navigator.clipboard.writeText("badawy.ca@gmail.com");
    window.setTimeout(
      () => alert("Email address has been copied successfully!"),
      200
    );
  }

  function copyNumber() {
    navigator.clipboard.writeText("+393928097565");
    window.setTimeout(
      () => alert("Number has been copied successfully!"),
      200
    );
  }

  return (
    <footer id="footer-sec" className="footer-sec p-5">


      <ul className="footer-item flex-colomn flex-md-row ">
        <li className="flex-row text-danger fw-bold">
          <a href="#img-header" className="text-decoration-none">
            <p className="fw-bold item-hover" style={{ color: "#ff1900" }}>Ahmed Eissa</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/xCrowly"
            target={"_blank"}
            className="flex-row fw-bold text-decoration-none"
            rel="noreferrer"
          >
            <p className="item-hover" style={{ color: "#FFF5EE" }}>
              GitHub
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ahmed-badawy-61bb7a213/"
            target={"_blank"}
            className="flex-row fw-bold text-decoration-none"
            rel="noreferrer"
          >
            <p className="item-hover" style={{ color: "#FFF5EE" }}>
              LinkedIn
            </p>
          </a>
        </li>

      </ul>

      <ul className="footer-item flex-colomn flex-md-row">
        <li>
          <div
            onClick={() => copyText()}
            className="flex-row fw-bold fa-container
                      text-decoration-none"
            rel="noreferrer"
          >
            <p className="item-hover" style={{ color: "#FFF5EE" }}>
              Email
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1PK71-hGAm0RgsdWJlFYfVPs8Zn8siB9m/view?usp=sharing"
            target={"_blank"}
            className="flex-row fw-bold fa-container
                      text-decoration-none"
            rel="noreferrer"
          >
            <p className="item-hover" style={{ color: "#FFF5EE" }}>
              Resume
            </p>
          </a>
        </li>
        <li>
          <div
            onClick={() => copyNumber()}
            className="flex-row fw-bold fa-container
                      text-decoration-none"
            rel="noreferrer"
          >
            <p className="item-hover fs-5" style={{ color: "#FFF5EE" }}>
              +393928097565
            </p>
          </div>
        </li>
      </ul>

      <p className="note">
        Made by "Html, Css, JavaScript, React, BootStrap, Sass/Scss"
      </p>
    </footer>
  );
}

export default FooterSection;
