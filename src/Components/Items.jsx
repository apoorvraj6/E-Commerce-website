import React from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
    return (
        <div className='mx-10 '>

            <div className=' duration-500 hover:shadow-3xl'>
                <div className={props.className ? props.className : 'p-4 my-5  cursor-pointer'} >
                    <Link to={`/product/${props.id}`}>
                        <img src={props.image} alt={props.name} className="product-image mb-2 h-60 mx-auto" />
                    </Link>
                    <div className='flex flex-col gap-1'>
                        <div className=" bg-red-500 text-white inline p-1 rounded-md w-12 text-center text-base">{props.discount}</div>
                        <h2 className=" text-lg font-medium text-ellipsis whitespace-nowrap overflow-hidden">{props.name}</h2>
                        <div className="">
                            <span className=" text-red-600 text-base">{props.newPrice}</span>
                            <span className=" line-through text-gray-500 ml-2 text-base">{props.oldPrice}</span>
                        </div>
                        <div className=" text-yellow-500 text-base">
                            {Array(Math.floor(props.rating)).fill("★").join("")}
                            {Array(5 - Math.floor(props.rating)).fill("☆").join("")}
                            <span className=" text-gray-600 ml-2">({props.reviews})</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Items
