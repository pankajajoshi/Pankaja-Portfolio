import React from "react";
import "./Menus.css";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcAutomatic } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={require("./PK_IMG.jpeg")} alt="profile_pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome size={30} /> Home
              </div>
              <div className="nav-link">
                <FcAbout size={30} />
                About
              </div>
              <div className="nav-link">
                <FcBriefcase size={30} /> Work Experience
              </div>
              <div className="nav-link">
                <FcAutomatic size={30} /> Tech Stack
              </div>
              <div className="nav-link">
                <FcGraduationCap size={30} /> Education
              </div>
              <div className="nav-link">
                <FcBullish size={30} /> Projects
              </div>
              <div className="nav-link">
                <FcVoicePresentation size={30} /> Testomonials
              </div>
              <div className="nav-link">
                <FcBusinessContact size={30} /> Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome size={30} title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout size={30} title="About" />
              </div>
              <div className="nav-link">
                <FcBriefcase size={30} title="Work Experience" />
              </div>
              <div className="nav-link">
                <FcAutomatic size={30} title="Tech Stack" />
              </div>
              <div className="nav-link">
                <FcGraduationCap size={30} title="Education" />
              </div>
              <div className="nav-link">
                <FcBullish size={30} title="Projects" />
              </div>
              <div className="nav-link">
                <FcVoicePresentation size={30} title="Testomonials" />
              </div>
              <div className="nav-link">
                <FcBusinessContact size={30} title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
