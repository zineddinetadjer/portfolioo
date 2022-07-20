import React from "react";
import "../styles/home.css";
import hum from "../photo.png";

const Home = () => {
  return (
    <div className="home">
      <div className="description">
        <h1>
          Hallo, it's Zineddine
          <span className="emoji">
            <img
              alt="😋"
              draggable="false"
              src="https://twemoji.maxcdn.com/v/latest/svg/1f60b.svg"
            />
          </span>
        </h1>
        <p>
          I'am a FullStack JavaScript WebDev, I create powerfull web
          applications using REACTJS, NODEJS and MONGODB
        </p>
      </div>
      <div className="pic">
        <div className="light"></div>
        <img src={hum} alt="picture" />
      </div>
    </div>
  );
};

export default Home;
