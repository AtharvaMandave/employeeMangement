import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

function Header(props) {

  // const [username,setUserName] = useState('')
  // if(!data){
  //   setUserName('admin')
  // }
  // else{
  //   setUserName(data.firstName)
  // }

  const logOut = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between '>
    <h1 className='text-white text-2xl'>Hello <span className='text-3xl font-bold'>xyz</span></h1>
    <button onClick={logOut} className='bg-red-500 text-white font-bold py-2 px-3 rounded-xl'>Log Out</button>
    </div>
  )
}

export default Header