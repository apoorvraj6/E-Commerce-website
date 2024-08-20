import React, { useState,useEffect,useContext } from 'react';
import cart_icon from './Assets/cart_icon.png';
import search_icon from './Assets/search_icon.png';
import wishlist_icon from './Assets/wishlist_icon.png';
import { Link,useLocation} from 'react-router-dom';
import { shopContext } from '../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const location = useLocation();

  useEffect(()=>{
    switch (location.pathname) {
      case '/contact':
        setMenu('contact')
        break;

        case '/about':
        setMenu('about')
        break;

        case '/signup':
        setMenu('signup')
        break;

    
      default:
        setMenu('home')
        break;
    }
  },[location.pathname])

  const {getTotalCartItem,getTotalWishlistItem} = useContext(shopContext);

  return (
    <div>
    <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 font-inter py-4">
      <div>
        {/* This will include logo */}
        <h1 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">Exclusive</h1>
      </div>

      <div className="hidden md:block">
        <ul className="flex gap-4 sm:gap-6 md:gap-10 font-medium">
          <li className="cursor-pointer" onClick={() => setMenu("home")}>
            <Link to='/'>
            Home
            </Link>
            {menu === "home" ? (
              <hr className="border-none w-full h-0.5 rounded-sm bg-black mt-1" />
            ) : (
              <></>
            )}
          </li>
          <li className="cursor-pointer" >
          <Link to='/contact'>
            Contact
            </Link>
            {menu === "contact" ? (
              <hr className="border-none w-full h-0.5 rounded-sm bg-black mt-1" />
            ) : (
              <></>
            )}
          </li>
          <li className="cursor-pointer" >
          <Link to='/about'>
            About
            </Link>
            {menu === "about" ? (
              <hr className="border-none w-full h-0.5 rounded-sm bg-black mt-1" />
            ) : (
              <></>
            )}
          </li>
          <li className="cursor-pointer" >
          <Link to='/signup'>
            SignUp
            </Link>
            {menu === "signup" ? (
              <hr className="border-none w-full h-0.5 rounded-sm bg-black mt-1" />
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>

      <div className="flex items-center relative gap-2 sm:gap-4 md:gap-5">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="bg-[#f0eded] w-36 sm:w-64 md:w-64 lg:w-72 rounded-lg placeholder-[#959595] p-2 pl-6"
        />
        <img
          src={search_icon}
          alt="Search"
          className="h-4 sm:h-6 md:h-6 absolute sm:left-56 md:left-56 lg:left-60 cursor-pointer hidden sm:block"
        />
        <Link to='/wishlist' className='relative'><p className='absolute bg-red-500 text-white text-sm px-2 py-1 rounded-full -top-4 left-4'>{getTotalWishlistItem()}</p><img src={wishlist_icon} alt="Wishlist" className="h-4 sm:h-5 md:h-6 cursor-pointer" /></Link>
        <Link to='/cart' className='relative'><p className='absolute bg-red-500 text-white text-sm px-2 py-1 rounded-full -top-4 left-4'>{getTotalCartItem()}</p><img src={cart_icon} alt="Cart" className="h-4 sm:h-5 md:h-6 cursor-pointer" /></Link>
        
        
      </div>
      
    </div>
    <hr className='w-full h-0.25 border-none bg-[#B3B3B3]'/>
    </div>
  );
};

export default Navbar;