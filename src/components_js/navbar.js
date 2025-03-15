import React, { useState } from "react";

const styles = {
  backgroundColor: "#ffffff",
  backdropFilter: "blur(5px)",
  color: "var(--bs-primary)",
};

// dark mode colors
function returnDark(s) {
  s.style.setProperty("--bs-primary", "#1E2022");
  s.style.setProperty("--bs-secondary", "#FFF5EE");
  s.style.setProperty("--bs-body-color", "#ffffff");
  s.style.setProperty("--bs-body-bg", "#1E2022");
  s.style.setProperty("--footer", "#111111");
  s.style.setProperty("--header", "#ffffff");
  s.style.setProperty("--projects", "#ffffff");
  s.style.setProperty("--card", "#1E2022");
  s.style.setProperty("--intro", "#F0F0F0 ");
  s.style.setProperty("--intro-bg", "#ffffff");
  s.style.setProperty("--certification", "#1E2022");
  s.style.setProperty("--skills", "#1E2022");
  // s.style.setProperty("--navbar", "#F0F0F0");
  s.style.setProperty("--dark-toggle", "#ff1900");
  s.style.setProperty("--dark-toggle-hover", "#FFF5EE80");
  s.style.setProperty("--header-text-glow", "#ff1900");
}

function returnLight(s) {
  s.style.setProperty("--bs-primary", "#F0F0F0");
  s.style.setProperty("--bs-secondary", "#334155");
  s.style.setProperty("--bs-body-color", "#01579B");
  s.style.setProperty("--bs-body-bg", "#F0F0F0");
  s.style.setProperty("--footer", "#01579B");
  s.style.setProperty("--header", "#F0F0F0");
  s.style.setProperty("--projects", "#FFFFFF");
  s.style.setProperty("--card", "#E3F2FD");
  s.style.setProperty("--intro", "#FFFFFF");
  s.style.setProperty("--intro-bg", "#ffffff");
  s.style.setProperty("--certification", "#E3F2FD");
  s.style.setProperty("--skills", "#E3F2FD");
  // s.style.setProperty("--navbar", "#01579B");
  s.style.setProperty("--dark-toggle", "#ff1900");
  s.style.setProperty("--dark-toggle-hover", "#38434F80");
  s.style.setProperty("--header-text-glow", "#01579B");
}

function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useState(localStorage.getItem("themeMode"));

  var getRoot = document.querySelector(":root");

  // function set_dark() {
  //   setDarkMode((darkMode) => {
  //     if (darkMode === "false" || darkMode === "null") {
  //       returnDark(getRoot);
  //       localStorage.setItem("themeMode", "true");
  //       return (darkMode = localStorage.getItem("themeMode"));
  //     } else {
  //       returnLight(getRoot);
  //       localStorage.setItem("themeMode", "false");
  //       return (darkMode = localStorage.getItem("themeMode"));
  //     }
  //   });
  // }

  function checkDarkMode(darkMode) {
    if (darkMode === "false" || darkMode === "null") {
      returnLight(getRoot);
      return;
    } else {
      returnDark(getRoot);
      return;
    }
  }
  checkDarkMode(darkMode);

  return (
    <div>
      <nav
        id="navbar"
        className="navbar-styling nav-animationReverse navbar navbar-expand-md fixed-top shadow"
        style={styles}
      >
        <div className="container">
          <a
            className="navbar-brand fw-bolder nav-item-name "
            style={{ color: "var(--body-color)" }}
            href="#img-header"
          >
            AHMED BADAWY
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100">
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "var(--bs-primary)" }}
                  aria-current="page"
                  href="#main"
                >
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "var(--bs-primary)" }}
                  aria-current="page"
                  href="#certification"
                >
                  Certification
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "var(--bs-primary)" }}
                  href="#projects-sec"
                >
                  My projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "var(--bs-primary)" }}
                  href="#skills-sec"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "var(--bs-primary)" }}
                  href="#footer-sec"
                >
                  Contact me
                </a>
              </li>
              {/* <li className="nav-item nav-theme">
                <button className="nav-dark-toggle" onClick={set_dark}>
                  {darkMode === "true"
                    ? "Light"
                    : darkMode === null
                    ? "Light"
                    : "Dark"}
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
