import React, { useState } from 'react'

function Login({handleLogin}) {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }




  return (
        <div className='flex items-center justify-center h-screen w-screen bg-black'>
            <div className='border-2 border-blue-900 rounded-xl'>
                <span className='text-white font-bold flex justify-center mt-5 text-lg '>Login In your Account</span>
                <form  onSubmit={(e) => {
                    submitHandler(e)
                }} className='p-10 flex flex-col items-center justify-center'>  
                    <input  value={email} onChange={(e) => {
                                setEmail(e.target.value)
                    }}    required className='rounded-xl border-2 border-gray-200 m-5 p-2 w-80 outline-none ' type='email' placeholder='Email'></input>
                    <input required  value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}  className='rounded-xl border-2 border-gray-200 m-5 p-2 w-80 outline-none'  type='password' placeholder='password'></input>
                    <button className='p-2 rounded-xl bg-green-600 text-white font-bold m-5 w-80'>Login</button>
                </form>
            </div>
        </div>
    
  )
}

export default Login