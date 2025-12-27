import React from 'react'
import Cloud from '../assets/cloud-service.png'
const ServicesCards = ({ icon, name, desc }) => {
  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className='w-1/4 p-3  flex flex-col justify-center items-center gap-4 hover:shadow-xl hover:scale-105 hover:cursor-pointer transition-all duration-300'>
        <div className="icon w-2/3"><img src={icon} alt="" /></div>
        <div className="name text-3xl mx-4 text-green-600">{name}</div>
        <div className="desc mx-4 text-md">{desc}</div>
    </div>
  )
}

export default ServicesCards