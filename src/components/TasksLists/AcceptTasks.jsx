import React from 'react'

function AcceptTasks({data}) {
  return (
    
        <div className='h-full p-4 flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl'>
           <div className=' flex justify-between items-center'>
                <h3 className='bg-red-400 px-3 text-white  py-1 rounded-xl'>{data.category}</h3>
                <h4>{data.date}</h4>
            </div> 
            <h2 className='mt-5 text-white font-medium text-xl'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-white'>{data.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-400 py-2 px-2 text-sm rounded-xl '>Marked as completed</button>
                <button className='bg-red-400 py-2 px-2 text-sm rounded-xl'>Marked as failed</button>
            </div>
           </div>
    
  )
}

export default AcceptTasks