import React from 'react'

const Message = () => {
  return (
    <div className='border-2 shadow-2xl h-full p-10 flex flex-col gap-10'>

        <div className='flex gap-20'>
            <input type="text" name="name" id="name" className='bg-[#eeeeee] h-8 pl-2' placeholder='Your Name'/>
            <input type="email" name="email" id="email" className='bg-[#eeeeee] h-8 pl-2' placeholder='Your Email'/>
            <input type='text' name="number" id="number" className='bg-[#eeeeee] h-8 pl-2' placeholder='Your Number'/>
        </div>

        <div>
            <textarea name="" id="" cols="94" rows="10" placeholder='Your Message' className='bg-[#eeeeee] resize-none p-2' ></textarea>

        </div>
        <div className='flex justify-end'>
            <button className='bg-red-500 py-4 text-white rounded-md px-6'>Send Message</button>
        </div>
      
    </div>
  )
}

export default Message
