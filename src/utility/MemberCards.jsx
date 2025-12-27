import React from 'react'

const MemberCards = ({img, name, title}) => {
  return (
    <div className='w-[300px]  flex flex-col items-center justify-center mt-8 p-4 gap-4 rounded-lg hover:shadow-lg hover:scale-105 hover:border-green-500 hover:border border-transparent hover:cursor-pointer duration-300 '>
            <div className='border-green-400 border-2 rounded-full p-1'><img className='w-32 h-32 rounded-full' src={img} alt={name} /></div>
            <div className='text-md  font-bold  '>{name}</div>
            <div className='text-sm'>{title}</div>
      </div>
  )
}

export default MemberCards
