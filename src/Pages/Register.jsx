import React, { useState } from 'react'
import { registerApi } from '../services/allApi'

function Register() {

const [userDetails, setuseDetails] = useState({
  username:"",
  email:"",
  password:""
})

const handleRegister =async(e)=>{
  e.preventDefault()
  const {username,email,password}=userDetails
  if(!username || !email || !password){
    alert("Please fill the fields")
  }else{
    const result = await registerApi({username,email,password})
    console.log(result);
    
  }
}
console.log(userDetails);


  return (
   <div className="flex min-h-[calc(100vh-76px)]
    items-center justify-center bg-white px-6">

      <div className="w-full max-w-md rounded-2xl
      border border-orange-900/60 bg-black
      p-8 shadow-xl">

        <h1 className="text-center text-white text-3xl font-bold">
          Create Account
        </h1>

        <p className="mt-2 text-center text-white">
          Start your study abroad journey
        </p>


        <form
          className="mt-8 flex flex-col gap-5"
        >

          <input
          onChange={(e)=>{setuseDetails({...userDetails,username:e.target.value})}}
            type="text"
            name="name"
            placeholder="Full Name"
           
            required
            className="rounded-lg border border-gray-600
            bg-white px-4 py-3 text-black
            outline-none focus:border-orange-400"
          />


          <input
          onChange={(e)=>{setuseDetails({...userDetails,email:e.target.value})}}
            type="email"
            name="email"
            placeholder="Email Address"
            
            required
            className="rounded-lg border border-gray-600
            bg-white px-4 py-3 text-black
            outline-none focus:border-orange-400"
          />


          <input
          onChange={(e)=>{setuseDetails({...userDetails,password:e.target.value})}}
            type="password"
            name="password"
            placeholder="Password"
            
            required
            className="rounded-lg border border-gray-600
            bg-white px-4 py-3 text-black
            outline-none focus:border-orange-400"
          />


          <button
          onClick={handleRegister}
            type="submit"
            className="rounded-lg bg-gradient-to-r
            from-yellow-500 to-orange-400
            py-3 font-bold text-white"
          >
            Create Account
          </button>

        </form>

      </div>

    </div>
  )
}

export default Register