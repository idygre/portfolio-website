import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/greydi-lora-62193519b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>

      <a href="https://github.com/idygre" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
