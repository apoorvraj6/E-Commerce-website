import React, { useState, useContext, useEffect } from 'react';
import ProductCarousel from '../Components/ProductDisplayCorousel';
import add_wishlist_icon from '../Components/Assets/add_wishlist_icon.png'
import added_wishlist_icon from '../Components/Assets/added_wishlist_icon.png'
import fast_delivery from '../Components/Assets/fast_delivery.png'
import recycle from '../Components/Assets/recycle.png'
import { shopContext } from '../Context/ShopContext'
import ToastNotification from './ToastNotification';

const ProductDetails = (props) => {

    const {product} = props;
  const images = [
    product.image,
    product.image,
    product.image,
    product.image
    // Add more images
  ];

  
  const [wishlist,setWishlist] = useState(false)


  useEffect(()=>{
    window.scrollTo(0,0);
  },[])



  

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const addwishlist =()=>{
    setWishlist(prev=>!prev);
  }

  const {addToCart,addToWishlist,addquantity,removequantity,quantity,setQuantity,wishlistItem,removeFromWishlist} = useContext(shopContext);

  useEffect(()=>{
    setQuantity(1)
  },[setQuantity,product])

  


 


  return (
    <div className="product-details-container flex my-24 mx-32 gap-32 font-inter" >
      <div className="product-images w-1/3 m">
        <ProductCarousel images={images} />
      </div>
      <div className="product-info flex gap-3 flex-col w-2/3 pl-10">
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <div className="rating-and-reviews my-2">
            <span className='text-yellow-500'>
            {Array(Math.floor(product.rating)).fill("★").join("")}
            {Array(5 - Math.floor(product.rating)).fill("☆").join("")}
            </span>
          <span className="text-gray-600 ml-2">({product.reviews})</span>
          <span className="text-green-500 ml-4">In Stock</span>
        </div>
        
        <div className="text-2xl font-bold text-red-500 my-4">{product.new_price}

        <span className="text-sm font-base text-gray-500 mx-2 line-through">{product.old_price}</span>
        <span className="text-sm font-base text-green-600 mx-2 font-bold ">{`${product.discount} Off`}</span>
        </div>

        <div className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, assumenda nam nobis ducimus libero iusto odit quibusdam ratione, quasi dicta quam tempore ex, qui eum nisi cum adipisci. Tenetur, dicta!</div>

        <hr className='bg-black border-0.25 border-black'/>

       
        <div className=" my-4">
         
        <div className="flex gap-7 my-2">
            <span className="text-gray-800 text-xl font-semibold">Size:</span>
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`border-2 p-1 rounded-md w-10 ${
                  selectedSize === size ? 'bg-red-500 text-white border-black' : 'border-black'
                }`}
              >
                {size}
              </button>
            ))}
            
          </div>

        </div>
        <div className="flex">
            
            <div className={`w-10 h-10 border-2  border-r-0 text-white bg-red-500 border-black text-center text-2xl rounded-s-md cursor-pointer `} onClick={removequantity}>-</div>
            <div className='w-20 h-10 border-2 border-black text-center text-2xl'>{quantity}</div>
            <div className={`w-10 h-10 border-2 border-l-0 text-white bg-red-500 rounded-e-md border-black text-center text-2xl cursor-pointer `} onClick={addquantity} >+</div>
            <div><img src={wishlistItem[product.id] === true?added_wishlist_icon:add_wishlist_icon} alt="wishlist icon" className='h-10 w-10 ml-40 border-8 border-black cursor-pointer' onClick={()=>{wishlistItem[product.id] === true?removeFromWishlist(product.id):addToWishlist(product.id)}}/></div>
        </div>

        <div className='flex gap-10 mt-5'>
            <div className='bg-red-500 inline py-3 px-10 text-white font-medium text-lg rounded-md cursor-pointer'>Buy Now</div>
            <div className='bg-red-500 inline py-3 px-10 text-white font-medium text-lg rounded-md cursor-pointer' onClick={()=>{addToCart(product.id)}} >Add to Cart
           

            </div>
            

        </div>
        <div className="my-10 flex flex-col  ">
          <div className='flex gap-5 items-center border-2 p-4 border-black'>
            <img src={fast_delivery} alt="fast delivery" className='h-10 w-10'/>
            <div className='flex flex-col gap-2'>
                <p>Free Delivery</p>
                <p className='underline cursor-pointer'>Enter Your Postal Code To Check Delivery Availability</p>
            </div>
          </div>
         
          <div className='flex gap-5 items-center border-2 p-4 border-black border-t-0'>
            <img src={recycle} alt="recycle" className='h-10 w-10'/>
            <div className='flex flex-col gap-2'> 
                <p>Return Delivery</p>
                <p>Free 7 Days Delivery Refund</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
