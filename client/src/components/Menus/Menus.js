import React from 'react'
import "./Menus.css";
import { FcHome } from 'react-icons/fc';

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
                    
                </div>
            </div>
        </>
        ) : (
        
         <h1>Icons</h1>
         )}

    </>
  );
};

export default Menus;