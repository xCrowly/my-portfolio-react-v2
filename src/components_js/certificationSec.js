import cert_Library from "../assets/images/FreeCodeCamp_FrontEnd_Libraries.png";
import cert_javascript from "../assets/images/FreeCodeCamp_JavaScript_cert.png";
import cert_resp from "../assets/images/FreeCodeCamp_Responsive_web_design.png";
import cert_IELTS from "../assets/images/IELTS.jpg";
import cert_Marketing from "../assets/images/UC-marketing.jpg";

function Certification() {
  return (
    <div className="certification-sec p-md-5 pt-4">
      <h1 id="certification-title" className="text-center fw-bold pt-md-3 pt-5">
        Certifications
      </h1>
      <div className="d-flex row justify-content-around align-items-center container m-auto">
        <div id="certification-4" className="col-md-6 p-2">
          <a
            href="https://drive.google.com/file/d/1IMw3Wfh7SRbGsNmATrr2jU--vsb6iUyS/view?usp=sharing"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="tr"></div>
            <div className="tl"></div>
            <div className="br"></div>
            <div className="bl"></div>
            <img
              src={cert_IELTS}
              className="certification-img-IELTS w-100"
              alt="IELTS Certification"
            />
          </a>
        </div>
        <div id="certification-3" className="col-md-6 p-2">
          <a
            href="https://www.freecodecamp.org/certification/Crowly/front-end-development-libraries"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="tr"></div>
            <div className="tl"></div>
            <div className="br"></div>
            <div className="bl"></div>
            <img
              src={cert_Library}
              className="certification-img w-100"
              alt="Front end development library"
            />
          </a>
        </div>
        <div id="certification-1" className="col-md-6 p-2">
          <a
            href="https://www.freecodecamp.org/certification/Crowly/responsive-web-design"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="tr"></div>
            <div className="tl"></div>
            <div className="br"></div>
            <div className="bl"></div>
            <img
              src={cert_resp}
              className="certification-img w-100"
              alt="Responsive web design cert"
            />
          </a>
        </div>
        <div id="certification-2" className="col-md-6 p-2">
          <a
            href="https://www.freecodecamp.org/certification/Crowly/javascript-algorithms-and-data-structures"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="tr"></div>
            <div className="tl"></div>
            <div className="br"></div>
            <div className="bl"></div>
            <img
              src={cert_javascript}
              className="certification-img w-100"
              alt="Responsive web design cert"
            />
          </a>
        </div>
        <div id="certification-5" className="col-md-6 p-2">
          <a
            href="https://drive.google.com/file/d/1iBIiPB_cZV4_wFrc0BWqrFz8HgucHM1K/view?usp=sharing"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="tr"></div>
            <div className="tl"></div>
            <div className="br"></div>
            <div className="bl"></div>
            <img
              src={cert_Marketing}
              className="certification-img w-100"
              alt="Marketing cert"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certification;
