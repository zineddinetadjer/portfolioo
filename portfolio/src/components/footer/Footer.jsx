import React from "react";
import "./footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>zinedinetadjer1@gmail.com</span>
        <span>(+213) 661 410 052</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/dzcoder__/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/tadjer-abderraouef-zineddine-5b376623b/">
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/zineddinetadjer">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
