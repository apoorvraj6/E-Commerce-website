import React from 'react'
import mail from '../Components/Assets/mail.png'
import phone from '../Components/Assets/phone.png'

const ContactDetails = () => {
  return (
    <div className='my-32 shadow-2xl border-2 w-1/4 ml-40 p-10 font-inter'>

        <div className='flex flex-col gap-3 mb-10'>
            <div className='flex items-center gap-2'>
                <img src={phone} alt="" className='w-10 h-10 '/>
                <p className='font-medium text-lg'>Call to Us</p>
            </div>
            <p>We are available 24/7</p>
            <p>Phone : +91 74800 XXXXX</p>
        </div>

        <hr className="bg-black h-0.5 w-full border-none my-2" />

        <div className='flex flex-col gap-3 my-10'>
            <div className='flex items-center gap-2'>
                <img src={mail} alt="" className='w-10 h-10 '/>
                <p className='font-medium text-lg'>Write to Us</p>
            </div>
            <p>Fill out our form and we will connect you within 24 hour</p>
            <p>E-mail : apoorvrajxyz@raj.com</p>
        </div>
      
    </div>
  )
}

export default ContactDetails
