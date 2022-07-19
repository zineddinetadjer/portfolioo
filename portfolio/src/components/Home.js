import React from "react";
import Emoji from "./Emoji";
import "../styles/home.css";
import hum from "../photo.png";

const Home = () => {
  return (
    <div className="home">
      <div className="description">
        <h1>
          Hallo, it's Zineddine
          <Emoji symbol="👋" label="hand" />
        </h1>
      </div>
      <div className="pic">
        <img src={hum} alt="picture" />
      </div>
    </div>
  );
};

export default Home;
