import React from 'react';
import BillingDetails from '../Components/BillingDetails';
import Payment from '../Components/Payment';
import Coupon from '../Components/Coupon';

const CheckOut = () => {
  return (
    <div className='flex justify-start mx-10 my-10 items-center'>
      {/* Billing Details Component */}
      <div className='w-2/3 '>
        <BillingDetails />
      </div>

      {/* Payment Component */}
      <div className='w-1/3 '>
      <Payment/>
      
      </div>
    </div>
  );
};

export default CheckOut;
