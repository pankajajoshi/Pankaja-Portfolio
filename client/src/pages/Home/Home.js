import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/PK_Resume.pdf";

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
            <a className="btn btn-cv" href={Resume} download="PK_Resume.pdf">
              PK Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
