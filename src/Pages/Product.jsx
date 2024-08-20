import React from 'react'
import { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay'


const Product = () => {

    const {all_data} = useContext(shopContext)
    const {productId} = useParams();
    const product = all_data.find((e)=>e.id === Number(productId));
  return (
    <div>
        {console.log(product)}
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
