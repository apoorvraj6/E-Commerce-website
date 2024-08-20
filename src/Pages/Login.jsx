import React,{useState} from 'react'
import login_image from '../Components/Assets/login_image.jpg';
import eye_hide from '../Components/Assets/eye_hide.png'
import eye_view from '../Components/Assets/eye_view.png'
import google_icon from '../Components/Assets/google.png'
import { Link } from 'react-router-dom';

const Login = () => {

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
                <h1 className='text-4xl font-normal mb-4'>Login to Exclusive</h1>
                <p className='text-gray-600 mb-8'>Enter your details below</p>

    
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

                <div className='flex  justify-between'>
                <button className='bg-[#E47171] text-white py-2 rounded-md mb-4 h-12 w-2/5'>Log In</button>
                <p className='text-[#E47171] pt-2 cursor-pointer'>Forgot Password?</p>

                </div>
                

            </div>


        </div>

    )
}

export default Login
