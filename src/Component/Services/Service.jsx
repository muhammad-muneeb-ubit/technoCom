import React from 'react'
import Cards from '../../utility/Cards'
import Code from '../../assets/code.png'
import Cloud from '../../assets/cloud-service.png'
import Setting from '../../assets/Settings.png'
const Service = () => {
    const servicesList = [
        {
            icon: Code,
            name: "Web Development",
            desc: "TechnoCom designing and developing world-class websites that enhance your web presence and engage visitors through appealing visuals and latest technologies that helps in your business objectives."},
            {
            icon: Cloud,
            name: "ERP Software Solutions",
            desc: "TechnoCom’s ERP solutions are fully integrated with all your systems, bringing value to every functional area, from finance to customer service to management and if you’re in manufacturing, this includes your engineering, design and supply chain teams as well."},
            {
            icon: Setting,
            name: "Support and Maintenance",
            desc: "TechnoCom offering extended support and maintenance services for faultless development. Our technical staff ensures uninterrupted performance and business continuity. TechnoCom provide all our service and support in all over the world."},
            
    ]
  return (
    <div className='my-12 mx-12 flex flex-col justify-center items-center'>
        <div className='text-green-600 text-xl border-l-6 px-4 py-2 '>Services</div>
        <div className='text-4xl py-4'>Professional Software Development House</div>
        <div className='text-xl px-12'>TechnoCom delivers trusted excellent quality services using New & Enhance development technologies. Customer oriented to the full. From big projects to small ones from complex sophisticated solutions to more simple tools. We evaluate the strategies, throwing light on the Effectiveness and efficiency of the plans in Achieving results. Because it’s of the utmost importance to examine the overall well-being of the company and the goals it follows. We never stay in the same place. Constant and perpetual improving drives our company from the very beginning. We try to get better and better every single day. It`s our way to excellence!</div>
        <div className='cards flex justify-center  gap-6 mt-12' >
          { servicesList.map((ser) => {
            return <Cards key={ser.name} icon={ser.icon} name={ser.name} desc={ser.desc} />
           })}
        </div>
    </div>
  )
}

export default Service