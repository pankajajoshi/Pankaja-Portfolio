import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 about-img">
            <img src={require("./PK_IMG.jpeg")} alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-8 col-xs-6 about-content">
            {" "}
            <h1>About Me</h1>
            <p>
              A passionate software engineer dedicated to crafting robust,
              scalable solutions through technology. Leveraging a strong
              foundation in JavaScript, React and Node along with proficiency in
              HTML/CSS, MongoDB and Express, I thrive within fast-paced Agile
              environments where I can continuously improve product quality and
              deliver value through meaningful contributions. Certified in Scrum
              and experienced with tools like Jira, my creative problem-solving
              skills and obsession with clean, maintainable code empower me to
              transform business needs into elegant web applications that exceed
              expectations and help organizations grow. I seek a challenging
              role where our shared success depends upon my individual
              excellence and ability to steadily improve both the product and
              me.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
