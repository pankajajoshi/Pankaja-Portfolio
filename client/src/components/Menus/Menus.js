import React from 'react'
import "./Menus.css";
import { FcHome } from 'react-icons/fc';
import {FcAbout} from 'react-icons/fc';
import { FcBriefcase } from 'react-icons/fc';
import { FcAutomatic } from 'react-icons/fc';
import { FcGraduationCap } from 'react-icons/fc'
import { FcBullish } from 'react-icons/fc'
import { FcBusinessContact } from 'react-icons/fc';
import{FcVoicePresentation} from 'react-icons/fc';

const Menus = ({toggle}) => {
  return (
    <>
        {toggle ? (
        <>
         
        
         <div className="navbar-profile-pic">

            <img 
            src="https://allthings.how/content/images/wordpress/2020/10/allthings.how-how-to-change-your-profile-picture-on-google-meet-profile-photo.png" alt="profile pic" 
            />
        </div>
            <div className="nav-items">
                <div className="nav-item">
                    <div className="nav-link">
                    <FcHome /> Home
                    </div>
                    <div className="nav-link">
                    <FcAbout />About
                    </div>
                    <div className="nav-link">
                    <FcBriefcase /> Work Experience
                    </div>
                    <div className="nav-link">
                    <FcAutomatic /> Tech Stack
                    </div>
                    <div className="nav-link">
                    <FcGraduationCap /> Education 
                    </div>
                    <div className="nav-link">
                    <FcBullish /> Projects
                    </div>
                    <div className="nav-link">
                    <FcVoicePresentation /> Testomonials
                    </div>
                    <div className="nav-link">
                    <FcBusinessContact /> Contact
                    </div>
                    
                    
                    
                </div>
            </div>
        </>
        ) : (
            <>
                <div className="nav-items">
                <div className="nav-item">
                    <div className="nav-link">
                    <FcHome title="Home"/> 
                    </div>
                    <div className="nav-link">
                    <FcAbout title="About"/>
                    </div>
                    <div className="nav-link">
                    <FcBriefcase title="Work Experience"/> 
                    </div>
                    <div className="nav-link">
                    <FcAutomatic title="Tech Stack"/> 
                    </div>
                    <div className="nav-link">
                    <FcGraduationCap title="Education"/>  
                    </div>
                    <div className="nav-link">
                    <FcBullish title="Projects"/> 
                    </div>
                    <div className="nav-link">
                    <FcVoicePresentation title="Testomonials"/> 
                    </div>
                    <div className="nav-link">
                    <FcBusinessContact title="Contact"/> 
                    </div>
                    
                    
                    
                </div>
            </div>

            </>
        
         )}

    </>
  );
};

export default Menus;