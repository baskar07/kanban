import React, { useState } from 'react';
import { BsTrello } from 'react-icons/bs';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {


  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
   
  }
  return (
    <div className="flex min-h-full flex-1 mt-10 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     
      <Link className='flex justify-center items-center gap-2 '>
        <BsTrello className='text-2xl font-bold bg-white  text-blue-500' />
        <h1 className='text-3xl font-bold'>Trello</h1>
      </Link>
      <h2 className="mt-2 text-center text-lg font-medium leading-9 tracking-tight text-gray-900">
        Log in to continue
      </h2>
    </div>

    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
        
          <div className="mt-2">
            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-sm  border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-[#0c66e4] focus:transition-all sm:text-sm sm:leading-6"
              placeholder='Enter your email'
            />
          </div>
        

    

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-sm bg-[#0c66e4] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#124ea1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Continue
          </button>
        </div>
      </form>

    
        
      <p className='text-center my-6 text-sm  text-gray-500 '>Or continue with</p>
        <div>
            <button  className="flex w-full justify-center items-center gap-1 rounded-sm border border-gray-400 px-3 py-1 text-lg font-bold leading-6 text-black shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
               <FcGoogle className='text-3xl' /> Google
            </button>
        </div>
    </div>
  </div>
  )
}

export default Login