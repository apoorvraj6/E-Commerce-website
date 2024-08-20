import React, { useState } from 'react';
import login_image from '../Components/Assets/login_image.jpg';
import eye_hide from '../Components/Assets/eye_hide.png'
import eye_view from '../Components/Assets/eye_view.png'
import google_icon from '../Components/Assets/google.png'
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className='my-14 mx-10 flex justify-between items-center h-full'>
      <div className='w-1/2'>
        <img src={login_image} alt="Login" className='w-full h-auto' />
      </div>

      <div className='w-1/2 max-w-md  flex flex-col justify-center  bg-white p-8 rounded-md shadow-2xl'>
        <h1 className='text-4xl font-normal mb-4'>Create an Account</h1>
        <p className='text-gray-600 mb-8'>Enter your details below</p>

        <input type="text" name="name" id="name" placeholder="Name" className='border-b-1 outline-none border-gray-300 p-2 mb-4 w-full ' />
        <input type="email" name="email" id="email" placeholder="Email " className='border-b-1 outline-none border-gray-300 p-2 mb-4 w-full ' />
        
        <div className='relative mb-4'>
          <input type={showPassword ? 'password' : 'text'} name='password' id='password' placeholder="Password" className='border-b-1 outline-none border-gray-300 p-2 mb-4 w-full ' />
          <button 
            type="button" 
            onClick={togglePasswordVisibility} 
            className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-600'>
            {showPassword ? <img src={eye_view} alt="show" className='h-6 w-6 mb-1' /> : <img src={eye_hide} alt="hide" className='h-6 w-6 mb-1' />}
          </button>
        </div>

        <button className='bg-[#E47171] text-white py-2 rounded-md mb-4 h-12 w-full'>Create Account</button>
        <button className='py-2 rounded-md mb-4 h-12 w-full border-2 flex items-center justify-center gap-5 text-lg'><img src={google_icon} alt="google_icon" className='h-9 w-9' />Sign up with Google </button>

        <p className='mx-auto mt-4 text-[#787878]'>Already have an Account? <Link to='/login' className='font-medium underline'>Log in</Link></p>


       

        
      </div>
    </div>
  );
};

export default SignUp;
