import React from 'react'

const Stats = () => {
    const statsData = [
        {label: 'Projects Accomplished', value: '100%' },
        {label: 'Efficent Software Solutions', value: 10 },
        {label: 'Support & Maintenance', value: '100%' },
        {label: 'Valuable Customer', value: '70+' },
    ];
  return (
    <div className=' flex flex-col justify-center items-center my-12 gap-6'>
        <div className='text-4xl'>We have something to be proud of !</div>
             <div className="py-12 px-24 grid grid-cols-4 gap-6 w-full">
                {statsData.map((stat, index) => (
                <div key={index}>
                    <div className='text-4xl text-green-500 font-bold'>{stat.value}</div>
                    <div className='text-lg'>{stat.label}</div>
                </div>
                ))}
             </div>
    </div>
  )
}

export default Stats