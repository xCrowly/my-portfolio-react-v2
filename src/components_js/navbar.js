import React, { useState } from "react";

const styles = {
    backgroundColor: 'var(--navbar)',
    backdropFilter: 'blur(5px)',
    color: 'var(--bs-primary)'
}

function returnDark(s) {
    s.style.setProperty("--bs-primary", "#3C486B")
    s.style.setProperty("--bs-secondary", "#FFF5EE")
    s.style.setProperty("--bs-body-color", "#F0F0F0")
    s.style.setProperty("--bs-body-bg", "#F0F0F0")
    s.style.setProperty("--footer", "#242a3f")
    s.style.setProperty("--header", "#F0F0F0")
    s.style.setProperty("--projects", "#242a3f")
    s.style.setProperty("--card", "#303955")
    s.style.setProperty("--intro", "#242a3f")
    s.style.setProperty("--certification", "#303955")
    s.style.setProperty("--skills", "#303955")
    s.style.setProperty("--navbar", "#F0F0F0")
    s.style.setProperty("--dark-toggle", "#F45050")
    s.style.setProperty("--dark-toggle-hover", "#FFF5EE80")
}
function returnLight(s) {
    s.style.setProperty("--bs-primary", "#F0F0F0")
    s.style.setProperty("--bs-secondary", "#334155")
    s.style.setProperty("--bs-body-color", "#3C486B")
    s.style.setProperty("--bs-body-bg", "#3C486B")
    s.style.setProperty("--footer", "#3C486B")
    s.style.setProperty("--header", "#F0F0F0")
    s.style.setProperty("--projects", "#FFFFFF")
    s.style.setProperty("--card", "#dadbeb")
    s.style.setProperty("--intro", "#FFFFFF")
    s.style.setProperty("--certification", "#dadbeb")
    s.style.setProperty("--skills", "#dadbeb")
    s.style.setProperty("--navbar", "#3C486B")
    s.style.setProperty("--dark-toggle", "#F45050")
    s.style.setProperty("--dark-toggle-hover", "#38434F80")
}

function Navbar() {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('themeMode'));

    var getRoot = document.querySelector(":root")
    function set_dark() {

        setDarkMode((darkMode) => {
            if (darkMode === 'true' || darkMode === 'null') {
                returnLight(getRoot)
                localStorage.setItem('themeMode', 'false')
                return darkMode = localStorage.getItem('themeMode');
            } else {
                returnDark(getRoot)
                localStorage.setItem('themeMode', 'true')
                return darkMode = localStorage.getItem('themeMode');
            }
        })
    }

    function checkDarkMode(darkMode) {
        if (darkMode === 'true' || darkMode === 'null') {
            returnLight(getRoot)
            return;
        } else {
            returnDark(getRoot)
            return;
        }
    }
    checkDarkMode(darkMode)

    return (
        <div>

            <nav id="navbar"
                className="navbar-styling nav-animationReverse navbar navbar-expand-md fixed-top shadow" style={styles}>

                <div className="container">

                    <a className="navbar-brand fw-bolder nav-item-name" style={{ color: "var(--body-color)" }} href="#img-header">Ahmed Badawy</a>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100">
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "var(--bs-primary)" }} aria-current="page" href="#main">About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "var(--bs-primary)" }} aria-current="page" href="#certification">Certification</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "var(--bs-primary)" }} href="#projects-sec">My projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "var(--bs-primary)" }} href="#skills-sec">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "var(--bs-primary)" }} href="#footer-sec">Contact me</a>
                            </li>
                            <li className="nav-item nav-theme">
                                <button className="nav-dark-toggle"
                                    onClick={set_dark}>
                                    {darkMode === 'false' ? 'Light'
                                        : darkMode === null ? 'Light'
                                            : 'Dark'}
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        </div>

    );
}

export default Navbar;

