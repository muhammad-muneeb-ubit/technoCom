import React from 'react'


const Navbar = () => {
    const links = ["Home","Services", "About", "Products","Clients", "Teams", "Contact"];
  return (
    <div className="navbar mx-1 w-full flex items-center justify-between p-6  text-xl ">
        <div className="logo "><img src="./logo.png" alt="Logo" /></div>
        <div className="nav-links flex gap-6 ">
            {links.map((link)=>{
                return <a href={"#"+link.toLowerCase()} className='hover:underline hover:text-green-400' key={link}>{link}</a>
            })}
        </div>
    </div>
  )
}

export default Navbar