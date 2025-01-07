import React from 'react'

function FailedTasks({data}) {
  return (
    <div className='h-full p-4 flex-shrink-0 w-[300px] bg-blue-400 rounded-xl'>
           <div className=' flex justify-between items-center'>
                <h3 className='bg-red-400 px-3 text-white  py-1 rounded-xl'>{data.category}</h3>
                <h4>{data.date}</h4>
            </div> 
            <h2 className='mt-5 text-white font-medium text-xl'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-white'>  {data.taskDescription}</p>

            <div className='mt-2'>
                         <button className='bg-green-300 rounded-xl py-1 px-2'>Completed</button>
            </div>
           </div>
  )
}

export default FailedTasks