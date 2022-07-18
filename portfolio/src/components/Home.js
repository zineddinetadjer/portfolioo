import React from "react";
import "../styles/home.css";
import hum from "../photo.png";

const Home = () => {
  return (
    <div className="home">
      <div className="description">
        <h1>
          Hallo, it's Zineddine
          <span role="img" aria-label="hi" className="emoji">
            👋
          </span>
        </h1>
      </div>
      <div className="pic">
        <img src={hum} alt="picture" />
      </div>
    </div>
  );
};

export default Home;
