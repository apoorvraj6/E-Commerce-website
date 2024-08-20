import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductCarousel = ({ images }) => {
  return (
    <Carousel 
    showThumbs={true}
    showStatus={false}
    thumbWidth={100}
    className='w-11/12 '
    >
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Product ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
