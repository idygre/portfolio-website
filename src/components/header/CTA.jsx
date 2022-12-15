import React from "react";
import Resume from "../../assets/resume.pdf";

const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href="https://greydiresume.netlify.app/" className="btn">
          Online Resume
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
      <div className="cta">
        <a href={Resume} download className="btn btn-primary">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default CTA;
