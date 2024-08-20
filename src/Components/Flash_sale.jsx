import React from 'react'
import sale_data from './Assets/sale_data.js'
import CountdownTimer from './Countdown.jsx'
import Items from './Items.jsx'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import watch from './Assets/watch.jpg'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const item = sale_data.map((item)=>(
    <Items className='shadow-3xl p-4 my-5 cursor-pointer' id={item.id} image={item.image} name={item.name} newPrice={item.new_price} oldPrice={item.old_price} rating={item.rating} reviews={item.reviews} discount={item.discount}/>
))


const Flash_sale = () => {
    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-28 mb-16 sm:mb-32 lg:mb-40 font-inter flex flex-col '>
            <div className='flex gap-5 items-center'>
                <span className='w-5 h-8 bg-[#DB4444] block rounded-md'></span>
                <p className='font-semibold text-[#DB4444]'>Today's</p>
            </div>

            <div className='flex gap-20 items-start'>
                <h1 className='font-semibold '>Flash Sales</h1>
                <CountdownTimer targetDate={"08/22/2024"  /*MM/DD/YYYY */} />
            </div>

            <Carousel responsive={responsive} className='mt-20 -mx-32' infinite={true}>
            {item}
            
            </Carousel>

            <div className='bg-[#DB4444] text-white w-48 py-3 rounded-lg  text-center m-auto mt-10 hover:bg-red-700 cursor-pointer'>
                <p>View All Products</p>
            </div>


        </div>


    )
}

export default Flash_sale
