import React from 'react';
import fast_delivery from './Assets/fast_delivery.png';
import verified_shield from './Assets/verified_shield.png';
import customer_support from './Assets/customer_support.png';

const Policy = () => {
  return (
    <div className='flex justify-evenly w-full p-4 font-inter mb-28 '>
      <div className='flex flex-col items-center gap-5 hover:scale-105 duration-500'>
        <img src={fast_delivery} alt="Fast Delivery" className='h-16 invert-image bg-white p-2 rounded-full' />
        <h2 className='text-2xl font-bold'>Free And Fast Delivery</h2>
        <p className='text-base'>Free Delivery for all Order Above ₹500</p>
      </div>
      <div className='flex flex-col items-center gap-5 hover:scale-105 duration-500'>
        <img src={verified_shield} alt="Verified Shield" className='h-16 invert-image bg-white p-2 rounded-full' />
        <h2 className='text-2xl font-bold'>24/7 Customer Service</h2>
        <p className='text-base'>Friendly 24/7 customer Service</p>
        </div>
      <div className='flex flex-col items-center gap-5 hover:scale-105 duration-500'>
        <img src={customer_support} alt="User" className='h-16 invert-image bg-white p-2 rounded-full' />
        <h2 className='text-2xl font-bold'>24/7 Customer Service</h2>
        <p className='text-base'>Friendly 24/7 customer Service</p>
        </div>
    </div>
  );
};

export default Policy;


