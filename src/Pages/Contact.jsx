import React from 'react'
import ContactDetails from '../Components/ContactDetails'
import Message from '../Components/Message'


const Contact = () => {
  return (
    <div className='flex items-center gap-20'>
    <ContactDetails/>
    <Message/>
     
    </div>
  )
}

export default Contact
