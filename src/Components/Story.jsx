import React from 'react'
import women_shopping from '../Components/Assets/women_shopping.jpg'

const Story = () => {
    return (


        <div className='flex mt-20 ml-40 gap-40 mb-32 font-inter'>

            <div className='w-3/4 flex items-start flex-col justify-center'>
                <h1 className='text-5xl font-medium'>Our Story</h1>
                <p className='text-base'>Welcome to my e-commerce platform, a project built using the MERN stack to deliver a seamless shopping experience. With a passion for web development and a background in creating dynamic React applications, I embarked on this project to bring together the power of modern web technologies. This platform is designed to be scalable, user-friendly, and efficient, offering both customers and administrators a comprehensive toolset for managing their online shopping experience. As a dedicated developer, I continually strive to learn and implement the latest in web development to create innovative and effective solutions.</p>
            </div>

            <div className='w-1/4'>
                <img src={women_shopping} alt="shopping" className='h-96 w-full' />
            </div>
        </div>

    )
}

export default Story
