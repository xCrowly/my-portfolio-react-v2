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

  // intro text animation
  function mainObserver() {
    // Target the element
    let element = document.getElementById("main");

    // Set up the Intersection Observer
    let observer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          // If the target element is in view
          if (entry.isIntersecting) {
            document
              .getElementById("intro-text")
              .classList.add("animate__animated", "animate__bounceInDown");
            document.getElementById("intro-text").style.opacity = `1`;

            // Stop observing once the effect is applied (optional)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    ); // Adjust the threshold as needed

    // observing the target element
    observer.observe(element);
  }
  mainObserver();

  // certification items animation
  function projectsObserver() {
    // Target the element
    let element2 = document.getElementById("certification-title");

    // Set up the Intersection Observer
    let observer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          // If the target element is in view
          if (entry.isIntersecting) {
            console.log(entries, observer);
            // Apply the desired effect (e.g., remove the 'hidden' class)
            document
              .getElementById("certification-title")
              .classList.add("animate__animated", "animate__fadeInDown");
            document
              .getElementById("certification")
              .classList.add("animate__animated", "animate__pulse");

            document.getElementById("certification-1").style.display = `block`;
            document
              .getElementById("certification-1")
              .classList.add("animate__animated", "animate__fadeInUp");

            document.getElementById("certification-2").style.display = `block`;
            document
              .getElementById("certification-2")
              .classList.add("animate__animated", "animate__fadeInUp");

            document.getElementById("certification-3").style.display = `block`;
            document
              .getElementById("certification-3")
              .classList.add("animate__animated", "animate__fadeInUp");

            document.getElementById("certification-4").style.display = `block`;
            document
              .getElementById("certification-4")
              .classList.add("animate__animated", "animate__fadeInUp");
            document.getElementById("certification-5").style.display = `block`;
            document
              .getElementById("certification-5")
              .classList.add("animate__animated", "animate__fadeInUp");
            // Stop observing once the effect is applied (optional)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    ); // Adjust the threshold as needed

    // Start observing the target element
    observer.observe(element2);
  }
  projectsObserver();

  // // projects animations
  Object.values(document.getElementById("projects-container").children).map(
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
    document
      .getElementById("skills-sec")
      .classList.add("animate__animated", "animate__pulse");
  }
}
