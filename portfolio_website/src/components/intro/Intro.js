import "./intro.css";
import React from "react";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is </h2>
          <h1 className="i-name">John Smith</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front End Developer</div>
              <div className="i-title-item">UI/UX Developer</div>
              <div className="i-title-item">Engineer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <div className="i-description">
            I'm a front-end software engineer with a strong focus on developing
            cutting-edge web applications using the React library. With a
            passion for crafting exceptional user experiences, I strive to
            create visually appealing and responsive interfaces that seamlessly
            blend creativity and functionality.
          </div>
        </div>
      </div>
      <div className="i-right">Right</div>
    </div>
  );
}

export default Intro;
