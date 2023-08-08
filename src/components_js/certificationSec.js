import cert_javascript from "../assets/images/FreeCodeCamp_JavaScript_cert.png";
import cert_resp from "../assets/images/FreeCodeCamp_Responsive_web_design.png";

function Certification() {
  return (
    <div className="certification-sec p-5">
      <h1 id="certification-title" className="text-center fw-bold pt-5">
        Certifications
      </h1>
      <div className="d-flex row justify-content-around align-items-center container m-auto">
        <div id="certification-1" className="col-md-6 p-3">
          <a
            href="https://www.freecodecamp.org/certification/Crowly/responsive-web-design"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={cert_resp}
              className="certification-img w-100"
              alt="Responsive web design cert"
            />
          </a>
        </div>
        <div id="certification-2" className="col-md-6 p-3">
          <a
            href="https://www.freecodecamp.org/certification/Crowly/javascript-algorithms-and-data-structures"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={cert_javascript}
              className="certification-img w-100"
              alt="Responsive web design cert"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certification;
