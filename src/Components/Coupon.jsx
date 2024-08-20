import React from 'react'

const Coupon = () => {
  return (
    <div className='mt-44 flex gap-16'>
        <input type="text" placeholder='Coupon Code' className='py-4 px-10 border-2 border-black'/>
        <button className='bg-red-500  py-4 px-8 text-lg font-medium text-white rounded-md'>Apply Coupon</button>
      </div>
  )
}

export default Coupon
