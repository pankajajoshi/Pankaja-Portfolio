import React from 'react'
import Home from '../../pages/Home/Home'
import { AiOutlineDoubleLeft } from 'react-icons/ai';
 
const Layout = () => {
  return (
    <>
    
    <div className=".sidebar-section"></div>
    <div className='sidebar'></div>
        <div className='sidebar-toggle-icons'>
           <p>
            <AiOutlineDoubleLeft size={30} />
           </p>
        </div>
        <div className='container'></div>
        <Home />
    </>
  )
}

export default Layout