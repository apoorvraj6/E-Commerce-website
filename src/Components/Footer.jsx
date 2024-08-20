import React from 'react';
import send_icon from './Assets/send_icon.png';
import qr_code from './Assets/qr_code.png';
import google_play from './Assets/google_play.png';
import app_store from './Assets/app_store.png';
import twitter from './Assets/twitter.png';
import instagram from './Assets/instagram.png';
import facebook from './Assets/facebook.png';
import linkedin from './Assets/linkedin.png';

const Footer = () => {
  return (
    <div className='bg-black text-white p-8 md:p-14 font-inter flex flex-col md:flex-row justify-evenly items-start text-sm md:text-base'>
      
      <ul className='flex flex-col gap-3 mb-6 md:mb-0'>
        <li className='text-xl md:text-2xl font-bold'>Exclusive</li>
        <li className='text-lg md:text-xl font-semibold'>Subscribe</li>
        <li>Get off on your first order</li>
        <li className='flex relative items-center'>
          <input
            type="text"
            placeholder='Enter your email'
            className='outline-none border-white border-2 border-solid bg-black placeholder-[#959595] p-2 w-full'
          />
          <img src={send_icon} alt="" className='h-6 invert-image absolute right-2'/>
        </li>
      </ul>

      <ul className='flex flex-col gap-3 mb-6 md:mb-0'>
        <li className='text-xl md:text-2xl font-bold'>Support</li>
        <li><p>RKGIT, 5KM Stone Road,</p><p>Raj Nagar Extension, Ghaziabad</p></li>
        <li>apoorvraj2003@gmail.com</li>
        <li>+91 7480046248</li>
      </ul>

      <ul className='flex flex-col gap-3 mb-6 md:mb-0'>
        <li className='text-xl md:text-2xl font-bold'>Account</li>
        <li>My Account</li>
        <li>Login/Register</li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>Shop</li>
      </ul>

      <ul className='flex flex-col gap-3 mb-6 md:mb-0'>
        <li className='text-xl md:text-2xl font-bold'>Quick Links</li>
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>

      <ul className='flex flex-col gap-3'>
        <li className='text-xl md:text-2xl font-bold'>Download App</li>
        <li><p>Save 300 with App New user only</p></li>
        <li className='flex justify-start gap-3'> 
          <img src={qr_code} alt="" className='invert-image h-16 md:h-20'/>
          <div className='flex flex-col justify-start'>
            <img src={google_play} alt="" className='h-8 md:h-10' />
            <img src={app_store} alt="" className='h-8 md:h-10' />
          </div>
        </li>
        <li className='flex justify-start gap-4 md:gap-10 mt-5'>
          <img src={facebook} alt="" className='h-5 md:h-6 invert-image'/>
          <img src={twitter} alt="" className='h-5 md:h-6 invert-image'/>
          <img src={instagram} alt="" className='h-5 md:h-6 invert-image'/>
          <img src={linkedin} alt="" className='h-5 md:h-6 invert-image'/>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
