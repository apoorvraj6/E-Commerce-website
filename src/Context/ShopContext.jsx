import React,{createContext, useState} from 'react'
import all_data from '../Components/Assets/all_data';

export const shopContext = createContext(null);

const defaultCart =()=>{
    let cart = {};
    for(let index=0;index<all_data.length+1;index++)
    {
        cart[index] = 0;
    }
    return cart;
}

const defaultlist = () =>{
    let list = {};
    
    for(let index = 0 ;index<all_data.length;index++)
    {
        list[index] = false;
    }

    return list;
}


const ShopContextProvider = (props)=>{


    const [cartItems,setCartItem] = useState(defaultCart);
    const [wishlistItem,setWishlistItem] = useState(defaultlist)
    const [quantity,setQuantity] = useState(1);

    const addToCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+quantity}))
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:0}))
    }

    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let iteminfo = all_data.find((product)=>product.id === Number(item))

                totalAmount += iteminfo.new_price.slice(1).replace(",","") * cartItems[item];
            }
        }

        return totalAmount;
    }

    const getTotalCartItem = () =>{
        let count = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                count+=cartItems[item];
            }
        }
        return count;
    }

    const getTotalWishlistItem = () =>{
        let count = 0 ;

        for(const item in wishlistItem)
        {
            if(wishlistItem[item]===true){
                count+=wishlistItem[item];
            }
                
        }
        return count;
    }

    const addToWishlist = (itemId) =>{
        setWishlistItem((prev)=>({...prev,[itemId]:!prev[itemId]}))

    }
    const removeFromWishlist = (itemId) =>{
        setWishlistItem((prev)=>({...prev,[itemId]:!prev[itemId]}))

    }

    const addquantity=()=>{
        if(quantity>=10)
            setQuantity(10)
        else
        setQuantity(quantity+1);
      }
    
      const removequantity=()=>{
        if(quantity<=1)
            setQuantity(1)
        else
        setQuantity(quantity-1);
      }



    const contextValue={
        getTotalCartAmount,
        all_data,
        getTotalCartItem,
        addToCart,
        removeFromCart,
        cartItems,
        getTotalWishlistItem,
        addToWishlist,
        removeFromWishlist,
        wishlistItem,
        addquantity,
        removequantity,
        quantity,
        setQuantity,
        removeFromWishlist

    }

    return (
        <shopContext.Provider value ={contextValue}>
            {props.children}
        </shopContext.Provider>
    );
};

export default ShopContextProvider;
