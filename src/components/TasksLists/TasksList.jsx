import React from 'react'
import AcceptTasks from './AcceptTasks'
import NewTasks from './NewTasks'
import CompleteTasks from './CompleteTasks'
import FailedTasks from './FailedTasks'

function TasksList({data}) {
  return (
    <div id='tasklist' className=' h-[55%] overflow-x-auto flex items-center justify-start gap-5 py-5 w-full   mt-10 flex-nowrap ' >
          {data.tasks.map((e,idx) => {
            if(e.active){
              return <AcceptTasks key={idx} data={e}/>
            }
            if(e.newTask){
              return <NewTasks key={idx} data={e}/>
            }
            if(e.completed){
              return <CompleteTasks key={idx} data={e}/>
            }
            if(e.failed){
              return <FailedTasks key={idx} data={e}/>
            }
          })}
         
    </div>
  )
}

export default TasksList