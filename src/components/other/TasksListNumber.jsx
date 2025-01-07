import React from 'react'

function TasksListNumber({data}) {
  return (
    <div className='flex justify-between gap-4   mt-10 '>
        <div className='p-10 h-40 w-[45%] bg-red-400 rounded-xl '>
            <h2 className='text-2xl text-white'>{data.taskCounts.active}</h2>
            <h3 className='text-xl text-white font-medium'>Active</h3>
        </div>
        <div className='p-10 h-40 w-[45%] bg-blue-400 rounded-xl '>
            <h2 className='text-2xl text-white'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl text-white font-medium'>Completed</h3>
        </div>
        <div className='p-10 h-40 w-[45%] bg-yellow-400 rounded-xl '>
            <h2 className='text-2xl text-white'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl text-white font-medium'>New Tasks</h3>
        </div>
        <div className='p-10 h-40 w-[45%] bg-green-400 rounded-xl '>
            <h2 className='text-2xl text-white'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl text-white font-medium'>Failed</h3>
        </div>
        
    </div>
  )
}

export default TasksListNumber