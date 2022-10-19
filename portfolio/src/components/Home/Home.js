import React from "react";
import Typical from "react-typical";

const Home = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.instagram.com/dzcoder__/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/tadjer-abderraouef-zineddine-5b376623b/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/zineddinetadjer">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCV9PQR1UEKh288DujMcn3TA">
              <i className="fa fa-youtube-square"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Zineddine</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={["Full Stack Developer", 1000, "MERN Stack dev", 1000]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Build applications using front and back end technologies.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
