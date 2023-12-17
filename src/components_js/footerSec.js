// import { faAt } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line no-unused-vars
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function FooterSection() {
  // const [toast, setToast] = React.useState("");

  // // to add the toast element to the scene
  // // function triggerToast() {
  // //   setToast(
  // //     (t) =>
  // //       (t = (
  // //         <div
  // //           className="toast fade show toast-welcome zoomIn"
  // //           role="alert"
  // //           aria-live="assertive"
  // //           aria-atomic="true"
  // //         >
  // //           <div
  // //             className="toast-header"
  // //             style={{ backgroundColor: "var(--bs-primary)", color: "#FFFFFF" }}
  // //           >
  // //             <strong className="me-auto">Ahmed Badawy</strong>
  // //             <button
  // //               type="button"
  // //               className="btn-close"
  // //               data-bs-dismiss="toast"
  // //               aria-label="Close"
  // //             ></button>
  // //           </div>
  // //           <div className="toast-body bg-secondary rounded-bottom">
  // //             <strong style={{ color: "var(--steelblue)" }}>Copied </strong>
  // //             Successfully
  // //           </div>
  // //         </div>
  // //       ))
  // //   );
  // // }

  // function removeToast() {
  //   setToast((r) => (r = undefined));
  // }

  function copyText() {
    navigator.clipboard.writeText("badawy.ca@gmail.com");
    window.setTimeout(
      () => alert("Email address has been copied successfully!"),
      200
    );
  }

  // timer for lateInit
  // function toastCountDown() {
  //   copyText();
  //   window.setTimeout(() => triggerToast(), 100);
  //   window.setTimeout(() => removeToast(), 4000);
  // }

  return (
    <footer id="footer-sec" className="footer-sec p-md-5 pb-3">
      <ul className=" flex-colomn p-2 my-5">
        <li className="flex-row text-danger fw-bold">
          <a href="#img-header" className="text-decoration-none ">
            <p className="fw-bold fs-1 text-danger item-hover">AHMED BADAWY</p>
          </a>
        </li>
        {/* {toast} */}
      </ul>

      <ul className="footer-item flex-colomn">
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
        <li>
          <a
            href="https://www.youtube.com/@tikkawi"
            target={"_blank"}
            className="flex-row fw-bold text-decoration-none"
            rel="noreferrer"
          >
            <p className="item-hover" style={{ color: "#FFF5EE" }}>
              YouTube
            </p>
          </a>
        </li>
      </ul>

      <ul className="footer-item flex-colomn">
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
            href="https://drive.google.com/file/d/1qot0IL_DSyxshDmXSFPT-3YBgEXPOjAO/view?usp=sharing"
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
      </ul>

      <p className="note">
        Made by "Html, Css, JavaScript, React, BootStrap, Sass/Scss"
      </p>
    </footer>
  );
}

export default FooterSection;
