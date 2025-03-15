function MainSection() {
  return (
    <div
      id="main-sec"
      className="fs-5 d-flex align-items-center justify-content-center"
    >
      <div id="intro-container" className="text-center px-3 px-md-5">
        <div id="intro-text" className="mx-auto" style={{ maxWidth: "800px" }}>
          <h1 className="fs-1 mb-4 animate__animated animate__fadeIn">Hello,</h1>
          <p className="lead animate__animated animate__fadeIn animate__delay-1s">
            I'm a passionate <strong>frontend developer</strong> with an insatiable thirst for learning and growth. I thrive on solving problems, paying attention to detail, and collaborating effectively to drive team success.
          </p>
          <h2 className="fs-2 fw-normal mt-4 animate__animated animate__fadeIn animate__delay-2s" style={{ color: "var(--steelblue)" }}>
            Why choose me?
          </h2>
          <p className="mt-3 animate__animated animate__fadeIn animate__delay-3s">
            I bring <strong>motivation</strong>, <strong>dedication</strong>, and a commitment to continuous improvement. Whether it's mastering new technologies or delivering high-quality solutions, I'm always ready to excel and contribute.
          </p>
          <a href="#footer" className="btn btn-primary mt-4 animate__animated animate__fadeIn animate__delay-4s">
            Let's Work Together
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
