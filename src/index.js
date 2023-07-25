/* eslint-disable no-unused-vars */
import BootStrap from "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/styles.css";
import FooterSection from "./components_js/footerSec";
import Header from "./components_js/headerSec";
import MainSection from "./components_js/mainSec";
import Navbar from "./components_js/navbar";
import ProjectsSection from "./components_js/projectsSec";
import SkillSection from "./components_js/skillSec";
import reportWebVitals from "./reportWebVitals";

const navbar = ReactDOM.createRoot(document.getElementById("my-navbar"));
navbar.render(<Navbar />);

const header = ReactDOM.createRoot(document.getElementById("img-header"));
header.render(<Header />);

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(<MainSection />)

const projects = ReactDOM.createRoot(document.getElementById("projects"))
projects.render(<ProjectsSection />)

const skill = ReactDOM.createRoot(document.getElementById("skills"))
skill.render(<SkillSection />)

const footer = ReactDOM.createRoot(document.getElementById("footer"))
footer.render(<FooterSection />)

export { header };

window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("main").className = "fadeIn";
    }
    if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
        document.getElementById("projects").className = "fadeIn";
    }
    if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
        document.getElementById("skills").className = "fadeIn";
    }
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

