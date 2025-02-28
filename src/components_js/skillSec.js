function SkillSection() {
  return (
    <section id="skills-sec" className="skills-sec">
      {/* Header */}
      <p className="text-center fs-1 skills-text">Skills</p>

      <div className="d-flex flex-row justify-content-center text-black align-items-center flex-md-nowrap flex-wrap container">
        {/* Column one */}
        <div className="skills-column">
          <div className="flex-row skill-item">
            <div className="fs-md-1 fs-2">HTML</div>
          </div>
          <div className="flex-row skill-item">
            <div className="fs-md-1 fs-2">CSS</div>
          </div>
          <div className="flex-row skill-item">
            <div className="fs-md-1 fs-2">JavaScript</div>
          </div>
          <div className="flex-row skill-item">
            <div className="fs-md-1 fs-2">jQuery</div>
          </div>
          <div className="flex-row skill-item">
            <div className="fs-md-1 fs-2">Git & GitHub</div>
          </div>
          <div className="flex-row skill-item">
            <div className="fs-md-1 fs-2">Responsive design</div>
          </div>
          <div className="flex-row skill-item">
            <div className="fs-md-1 fs-2">Adobe Premiere</div>
          </div>
        </div>

        {/* Column two */}
        <div className="skills-column">
          <div className="flex-row skill-item">
            <div className=" fs-md-1 fs-2">React.js</div>
          </div>
          <div className="flex-row skill-item">
            <div className=" fs-md-1 fs-2">React Routers</div>
          </div>
          <div className="flex-row skill-item">
            <div className=" fs-md-1 fs-2">BootStrap</div>
          </div>
          <div className="flex-row skill-item">
            <div className=" fs-md-1 fs-2">Sass/Scss</div>
          </div>
          <div className="flex-row skill-item">
            <div className=" fs-md-1 fs-2">Mobile-first Design</div>
          </div>
          <div className="flex-row skill-item">
            <div className=" fs-md-1 fs-2">Davinci Resolve</div>
          </div>
          <div className="flex-row skill-item">
            <div className=" fs-md-1 fs-2">Canva</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SkillSection;
