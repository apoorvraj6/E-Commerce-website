import React from 'react'

const BillingDetails = () => {
    return (
        <div className='font-inter mx-32 my-20 '>

            <h1 className='mb-10'>Billing Details</h1>

            <div className='flex flex-col gap-7'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='text-[#b1b1b1]'>Name <span className='text-red-500'>*</span></label>
                    <input type="text" id='name' className='w-8/12 py-2 bg-[#eceaea]' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="company" className='text-[#b1b1b1]'>Company Name </label>
                    <input type="text" id='company' className='w-8/12 py-2 bg-[#eceaea]' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="street-address" className='text-[#b1b1b1]'>Street Address <span className='text-red-500'>*</span></label>
                    <input type="text" id='street-address' className='w-8/12 py-2 bg-[#eceaea]' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="Apartment" className='text-[#b1b1b1]'>Apartment,Floor etc.(optional)</label>
                    <input type="text" id='Apartment' className='w-8/12 py-2 bg-[#eceaea]' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="Town" className='text-[#b1b1b1]'>Town/City <span className='text-red-500'>*</span></label>
                    <input type="text" id='Town' className='w-8/12 py-2 bg-[#eceaea]' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="number" className='text-[#b1b1b1]'>Phone Number <span className='text-red-500'>*</span></label>
                    <input type="text" id='number' className='w-8/12 py-2 bg-[#eceaea]' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="mail" className='text-[#b1b1b1]'>Email Address <span className='text-red-500'>*</span></label>
                    <input type="text" id='mail' className='w-8/12 py-2 bg-[#eceaea]' />
                </div>


            </div>

        </div>
    )
}

export default BillingDetails
