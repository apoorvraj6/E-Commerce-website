import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import laptop_image from './Assets/laptop_image.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import samsung from './Assets/samsung_image.png'
import earbuds from './Assets/earbuds_image.png'
import boat from './Assets/boat_image.png'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 mb-16 sm:mb-32 lg:mb-40 mt-8 sm:mt-16 flex relative '>
      <div className='flex flex-col gap-5 font-inter font-medium w-1/4 h-full'> {/* This is for category */}
        <p className='cursor-pointer hover:underline'> <Link to='/women-fashion'>Woman's Fashion</Link></p>
        <p className='cursor-pointer hover:underline'><Link to='/mens-fashion'>Mens's Fashion</Link></p>
        <p className='cursor-pointer hover:underline'><Link to='/electronics'>Electronics</Link></p>
        <p className='cursor-pointer hover:underline'><Link to='/home-lifestyle'>Home & LifeStyle</Link></p>
        <p className='cursor-pointer hover:underline'><Link to='/sports'>Sports</Link></p>
        <p className='cursor-pointer hover:underline'><Link to='/beauty'>Beauty</Link></p>
      </div>

      <div className="h-96 border-l border-solid border-[#B3B3B3] absolute left-1/4"></div>

      <div className='w-3/4 pl-16'> {/* This is for the carousel */}
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src={laptop_image} alt="Slide 1" className='h-full object-cover'/>
          </div>
          <div>
            <img src={boat} alt="Slide 2" className='h-full object-cover' />
          </div>
          <div>
            <img src={samsung} alt="Slide 3" className='h-full object-cover' />
          </div>
          <div>
            <img src={earbuds} alt="Slide 3" className='h-full object-cover'/>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Main;