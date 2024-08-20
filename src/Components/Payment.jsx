import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'


const Payment = () => {
    const { getTotalCartAmount } = useContext(shopContext);
    return (
        <div className='my-20 w-2/3'>
            <div className='flex flex-col gap-7'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{`₹${getTotalCartAmount()}`}</p>
                </div>
                <hr className='border-black' />
                <div className='flex justify-between '>
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <hr className='border-black' />
                <div className='flex justify-between'>
                    <p>Total</p>
                    <p>{`₹${getTotalCartAmount()}`}</p>
                </div>

                <div className='flex gap-1 items-center '><input type="radio" name="paymentOption" id="Bank" /><label htmlFor="Bank">Bank</label></div>
                <div className='flex gap-1 items-center '><input type="radio" name="paymentOption" id="COD"  /><label htmlFor="COD">COD</label></div>
            </div>

            <div className='mt-10 flex gap-8'>
                <input type="text" placeholder='Coupon Code' className=' px-5 border-2 border-black' />
                <button className='bg-red-500 px-10 text-base font-medium text-white rounded-md'>Apply Coupon</button>
            </div>
        </div>
    )
}

export default Payment
