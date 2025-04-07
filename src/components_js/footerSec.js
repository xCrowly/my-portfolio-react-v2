import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FooterSection() {
  const handleCopy = (text, message) => {
    navigator.clipboard.writeText(text);
    toast.success(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const footerLinks = [
    {
      name: "Ahmed Eissa",
      href: "#img-header",
      isInternal: true,
      color: "#ff1900",
    },
    {
      name: "GitHub",
      href: "https://github.com/xCrowly",
      isInternal: false,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmed-badawy-61bb7a213/",
      isInternal: false,
    },
  ];

  const footerActions = [
    {
      name: "Email",
      action: () => handleCopy("badawy.ca@gmail.com", "Email copied to clipboard!"),
    },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1PK71-hGAm0RgsdWJlFYfVPs8Zn8siB9m/view?usp=sharing",
      isInternal: false,
    },
    {
      name: "+39 392 8097565",
      action: () => handleCopy("+393928097565", "Phone number copied to clipboard!"),
    },
  ];

  return (
    <footer id="footer-sec" className="footer-sec">
      <div className="footer-content">
        <ul className="footer-links">
          {footerLinks.map((link, index) => (
            <li key={index}>
              {link.isInternal ? (
                <a href={link.href} className="footer-link">
                  <p style={{ color: link.color || "#FFF5EE" }}>{link.name}</p>
                </a>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <p style={{ color: link.color || "#FFF5EE" }}>{link.name}</p>
                </a>
              )}
            </li>
          ))}
        </ul>

        <ul className="footer-actions">
          {footerActions.map((item, index) => (
            <li key={index}>
              {item.action ? (
                <div className="footer-action" onClick={item.action}>
                  <p>{item.name}</p>
                </div>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <p>{item.name}</p>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <p className="footer-note">
        Built with: HTML, CSS, JavaScript, React, Bootstrap, Sass
      </p>

      <ToastContainer />
    </footer>
  );
}

export default FooterSection;