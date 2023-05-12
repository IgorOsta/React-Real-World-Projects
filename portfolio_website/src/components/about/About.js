import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card ">
          <img
            src="https://ee.nd.edu/wp-content/uploads/sites/8/2020/09/grant-800x800.jpg"
            alt="engineer in laboratory"
            className="about-image"
          />
        </div>
      </div>
      <div className="about-right">About Right</div>
    </div>
  );
}

export default About;
