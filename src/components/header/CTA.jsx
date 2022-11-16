import React from "react";
import Resume from "../../assets/resume.pdf";

const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href={Resume} download className="btn">
          Download Resume
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
      <div className="cta">
        <a href="#portfolio" className="btn btn-primary">
          See My Work
        </a>
      </div>
    </div>
  );
};

export default CTA;
