import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h1>Hi i am PK</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer !",
                  "Software Engineer !",
                  "React Developer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <button className="btn btn-cv">PK-Resume</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
