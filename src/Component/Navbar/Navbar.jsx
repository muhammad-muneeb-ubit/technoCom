import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import Logo from '../../assets/logo-wo.png'
const Navbar = () => {
    const links = ["Home","Services", "About", "Products","Clients", "Teams", "Contact"];
  return (
    <div className="navbar bg-green-200 w-full  flex items-center justify-between p-6  text-xl ">
        <div className="logo mx-12"><img className='max-w-36' src={Logo} alt="Logo" /></div>
        <div className="nav-links mx-12 flex gap-6 text-green-700 font-medium">
            {links.map((link)=>{
                return <a href={"#"+link.toLowerCase()} className='hover:underline hover:text-green-400' key={link}>{link}</a>
            })}
        </div>
    </div>
  )
}

export default Navbar