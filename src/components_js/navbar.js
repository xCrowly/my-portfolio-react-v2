import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import imgMapDark from "../assets/svg/world_map_dark.svg";
import imgMapLight from "../assets/svg/world_map_light.svg";

const styles = {
    backgroundImage: 'none',
    backgroundColor: 'var(--navbar)',
    backdropFilter: 'blur(5px)'
}

function Navbar() {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('themeMode'));
    const mapDark = imgMapDark;
    const mapLight = imgMapLight;

    var s = document.querySelector(":root")
    function set_dark() {

        setDarkMode((darkMode) => {
            if (darkMode === 'true' || darkMode === 'null') {
                s.style.setProperty("--bs-primary", "#eb645f")
                s.style.setProperty("--bs-secondary", "#FFF5EE")
                s.style.setProperty("--bs-body-color", "#212529")
                s.style.setProperty("--bs-body-bg", "#FFF5EE")
                s.style.setProperty("--footer", "#162B45")
                s.style.setProperty("--header", "#FFDAB9")
                s.style.setProperty("--navbar", "#FFF5EE60")
                s.style.setProperty("--dark-toggle", "#38434F")
                s.style.setProperty("--dark-toggle-hover", "#38434F80")
                s.style.setProperty("--toast-bg", "#ffffff")
                s.style.setProperty("--steelblue", "#4682B4")

                localStorage.setItem('themeMode', 'false')
                return darkMode = localStorage.getItem('themeMode');
            } else {
                s.style.setProperty("--bs-primary", "#eb645f")
                s.style.setProperty("--bs-secondary", "#334155")
                s.style.setProperty("--bs-body-color", "#FFF5EE")
                s.style.setProperty("--bs-body-bg", "#334155")
                s.style.setProperty("--footer", "#1E293B")
                s.style.setProperty("--header", "#1E293B")
                s.style.setProperty("--navbar", "#33415560")
                s.style.setProperty("--dark-toggle", "#FFF5EE")
                s.style.setProperty("--dark-toggle-hover", "#FFF5EE80")
                s.style.setProperty("--toast-bg", "#ffffff")
                s.style.setProperty("--steelblue", "#38BDF8")

                localStorage.setItem('themeMode', 'true')
                return darkMode = localStorage.getItem('themeMode');
            }
        })
    }

    function checkDarkMode(darkMode) {
        if (darkMode === 'true' || darkMode === 'null') {
            s.style.setProperty("--bs-primary", "#eb645f")
            s.style.setProperty("--bs-secondary", "#FFF5EE")
            s.style.setProperty("--bs-body-color", "#212529")
            s.style.setProperty("--bs-body-bg", "#FFF5EE")
            s.style.setProperty("--footer", "#162B45")
            s.style.setProperty("--header", "#FFDAB9")
            s.style.setProperty("--navbar", "#FFF5EE60")
            s.style.setProperty("--dark-toggle", "#38434F")
            s.style.setProperty("--dark-toggle-hover", "#38434F80")
            s.style.setProperty("--toast-bg", "#ffffff")
            s.style.setProperty("--steelblue", "#4682B4")

            return;
        } else {
            s.style.setProperty("--bs-primary", "#eb645f")
            s.style.setProperty("--bs-secondary", "#334155")
            s.style.setProperty("--bs-body-color", "#FFF5EE")
            s.style.setProperty("--bs-body-bg", "#334155")
            s.style.setProperty("--footer", "#1E293B")
            s.style.setProperty("--header", "#1E293B")
            s.style.setProperty("--navbar", "#33415560")
            s.style.setProperty("--dark-toggle", "#FFF5EE")
            s.style.setProperty("--dark-toggle-hover", "#FFF5EE80")
            s.style.setProperty("--toast-bg", "#ffffff")
            s.style.setProperty("--steelblue", "#38BDF8")

            return;
        }
    }
    checkDarkMode(darkMode)

    function returnMap() {
        if (darkMode === 'true') {
            return (<img className="img-map img-fluid"
                src={mapLight}
                alt="My profile img"
            />)
        } else {
            return (<img className="img-map img-fluid"
                src={mapDark}
                alt="My profile img"
            />)
        }
    }

    return (
        <div >
            {returnMap()}

            <nav className="navbar navbar-expand-md fixed-top shadow w-100" style={styles}>

                <div className="container-fluid">

                    <div className="mx-2 text-info">
                        <FontAwesomeIcon icon={faCode} />
                    </div>

                    <a className="navbar-brand fw-bolder nav-item-name" style={{ color: "var(--bs-primary)" }} href="#img-header">Ahmed Badawy</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "var(--bs-body-color)" }} aria-current="page" href="#main">About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "var(--bs-body-color)" }} href="#projects-sec">My projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "var(--bs-body-color)" }} href="#skills-sec">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "var(--bs-body-color)" }} href="#footer-sec">Contact me</a>
                            </li>
                            <li className="nav-item">
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

