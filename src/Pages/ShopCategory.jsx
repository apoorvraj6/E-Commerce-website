import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import Items from '../Components/Items'


const ShopCategory = (props) => {

  const {all_data} = useContext(shopContext)
  return (
    <div>
      <div >
        <img src={props.banner} alt="" className='h-96 w-full mb-32 '/>
      </div>
      
      <div className='grid grid-cols-4 '>
        {all_data.map((item,i)=>{
          if(props.category === item.category){
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

export default ShopCategory
