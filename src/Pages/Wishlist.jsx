import React,{useContext} from 'react'
import { shopContext } from '../Context/ShopContext'
import Items from '../Components/Items';


const Wishlist = () => {
  const {all_data,wishlistItem} = useContext(shopContext);
  return (
    <div className='my-20 mx-20 font-inter text-2xl font-normal'>

      <h1 className='mb-20 '>Wishlist</h1>

      <div className='grid grid-cols-4 relative'>
        {all_data.map((item,i)=>{
          if(wishlistItem[item.id] === true){
            return (
              <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              oldPrice={item.old_price}
              newPrice={item.new_price}
              discount={item.discount}
              rating={item.rating}
              reviews={item.reviews}
              className={null}
              />
            )
            
          }
          else 
          return null;
        })}
      </div>
      
      
    </div>
  )
}

export default Wishlist
