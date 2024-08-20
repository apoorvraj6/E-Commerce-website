import React from 'react'
import { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import Coupon from '../Components/Coupon'
import { Link } from 'react-router-dom'

const Cart = () => {

  const { getTotalCartAmount, getTotalCartItem, addToCart, removeFromCart, cartItems, all_data } = useContext(shopContext)


  return (
    <div className='mx-20 my-28 font-inter'>

      <div className='grid pl-6 grid-cols-custom border-2 shadow-2xl py-6'>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>SubTotal</p>
      </div>

      {all_data.map((item, i) => {

        if (cartItems[item.id] > 0) {
          return (
            <div key={i} className='grid grid-cols-custom items-center gap-20 mt-12 border-2 shadow-2xl relative'>
              <div className='h-full'>
                <button className='bg-red-500 absolute px-2 py-1 -top-3 -left-3 text-white font-bold ' onClick={() => { removeFromCart(item.id) }}>x</button>
                <img src={item.image} alt="product-image" className='w-3/12  inline bg-green-400' />
                {item.name}
              </div>
              <p>{item.new_price}</p>
              <p>{cartItems[item.id]}</p>
              <p>{`₹${item.new_price.slice(1).replace(",", "") * cartItems[item.id]}`}</p>

            </div>
          )
        }
        return null
      })}

      <div className='flex justify-start items-start'>

        <Coupon />

        <div className='mt-44 ml-auto flex flex-col gap-4 border-2 w-2/6 p-4 border-black '>
          <div><p className='text-xl font-medium'>Cart Total</p></div>
          <div className='flex justify-between'>
            <p>Subtotal:</p>
            <p>{`₹${getTotalCartAmount()}`}</p>
          </div>
          <hr className='border-black' />
          <div className='flex justify-between'>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr className='border-black' />
          <div className='flex justify-between'>
            <p>Total</p>
            <p>{`₹${getTotalCartAmount()}`}</p>
          </div>

          <Link to='/checkout'><button className='bg-red-500 px-6 m-auto mt-5 text-white text-lg font-medium rounded-md py-4'>Process to checkout</button>
          </Link>

        </div>

      </div>





    </div>


  )
}

export default Cart
