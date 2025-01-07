import React from 'react'
import Header from '../other/Header'
import TasksListNumber from '../other/TasksListNumber'
import TasksList from '../TasksLists/TasksList'
function EmployeeDashborad(props) {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header  changeUser={props.changeUser} data={props.data}/>
        <TasksListNumber data={props.data} />
        <TasksList data={props.data} />
    </div>
    
  )
}

export default EmployeeDashborad