/* eslint-disable no-unused-vars */
import BootStrap from "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/styles.css";
import Certification from "./components_js/certificationSec";
import FooterSection from "./components_js/footerSec";
import Header from "./components_js/headerSec";
import MainSection from "./components_js/introSec";
import Loading from "./components_js/loading";
import Navbar from "./components_js/navbar";
import ProjectsSection from "./components_js/projectsSec";
import SkillSection from "./components_js/skillSec";

const loading = ReactDOM.createRoot(document.getElementById("loading"));
loading.render(<Loading />);

const navbar = ReactDOM.createRoot(document.getElementById("my-navbar"));
navbar.render(<Navbar />);

const header = ReactDOM.createRoot(document.getElementById("img-header"));
header.render(<Header />);

const main = ReactDOM.createRoot(document.getElementById("main"));
main.render(<MainSection />);

const certification = ReactDOM.createRoot(
  document.getElementById("certification")
);
certification.render(<Certification />);

const projects = ReactDOM.createRoot(document.getElementById("projects"));
projects.render(<ProjectsSection />);

const skill = ReactDOM.createRoot(document.getElementById("skills"));
skill.render(<SkillSection />);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(<FooterSection />);

window.onscroll = () => myFunction();

// chech if the window is loaded
document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") {
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
      document
        .getElementById("header-image")
        .classList.add("animate__animated", "animate__fadeInDown");
      document
        .getElementById("header-text")
        .classList.add("animate__animated", "animate__fadeInUp");
    }, 2500);
  }
});

function myFunction() {
  // navbar Animation
  if (document.documentElement.scrollTop > 10) {
    document
      .getElementById("header-image")
      .classList.remove("animate__animated", "animate__fadeInDown");
  }
  // navbar Animation
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.getElementById("navbar").classList.add("nav-animation");
    document
      .getElementById("navbar")
      .classList.remove("navbar-styling", "nav-animationReverse");
  } else {
    document.getElementById("navbar").classList.remove("nav-animation");
    document
      .getElementById("navbar")
      .classList.add("navbar-styling", "nav-animationReverse");
  }

  // header image animation
  if (document.documentElement.scrollTop < 550) {
    document.getElementById("header-image").style.filter = `blur(${
      document.documentElement.scrollTop / 100
    }px)`;
  }
  if (
    document.documentElement.scrollTop <
    document.documentElement.clientHeight * 2
  ) {
    document.getElementById("header-image").style.transform = `translateY(${
      1 - document.documentElement.scrollTop / 2
    }px)`;
  }

  // intro text animation
  if (
    document.documentElement.scrollTop >
    document.getElementById("main").offsetTop - 550
  ) {
    document
      .getElementById("intro-container")
      .classList.add("animate__animated", "animate__bounceInDown");
    document.getElementById("intro-container").style.opacity = `1`;
  }

  // certification items animation
  if (
    document.documentElement.scrollTop >
    document.getElementById("certification").offsetTop - 550
  ) {
    document
      .getElementById("certification-title")
      .classList.add("animate__animated", "animate__fadeInDown");
      document
      .getElementById("certification")
      .classList.add("animate__animated", "animate__fadeInUp");
      document
      .getElementById("certification-1")
      .classList.add("animate__animated", "animate__fadeInUp");
      document
      .getElementById("certification-2")
      .classList.add("animate__animated", "animate__fadeInUp");
      document
      .getElementById("certification-3")
      .classList.add("animate__animated", "animate__fadeInUp");
      document
        .getElementById("certification-4")
        .classList.add("animate__animated", "animate__backInUp");
  }

  // // projects animations
  Object.values(document.getElementById("projects-container").childNodes).map(
    // eslint-disable-next-line array-callback-return
    (item) => {
      if (
        document.documentElement.scrollTop >
        document.getElementById(`${item.attributes.id.nodeValue}`).offsetTop -
          350
      ) {
        document
          .getElementById(`${item.attributes.id.nodeValue}`)
          .classList.add("animate__animated", "animate__fadeInUp");
        document.getElementById(
          `${item.attributes.id.nodeValue}`
        ).style.opacity = "1";
      }
    }
  );

  if (
    document.documentElement.scrollTop >
    document.getElementById("skills").offsetTop - 550
  ) {
    document.getElementById("skills-sec").className = "fadeIn";
    document.getElementById("skills-sec").style.opacity = "1";
  }
}
