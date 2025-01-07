import React from 'react';
import Header from '../other/Header';
import Createtask from '../other/Createtask';
import Alltasks from '../other/Alltasks';

function AdminDashboard(props) {
  return (
    <div className='h-screen  bg-gray-900 p-10'>
      <Header changeUser={props.changeUser}/>
      <div className='flex gap-4'>
     
        <div className='w-[90%]'>
          <Createtask />
        </div>
        <div className='w-[50%] mt-5 px-6'>
          <Alltasks />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
