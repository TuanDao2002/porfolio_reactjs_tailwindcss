import React from 'react'
import { Links } from "../links/links";

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <div action="" className='flex flex-col max-w-[600px] w-full text-gray-300'>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            </div>
            <div>
              <p>Phone number: (84) 908309768</p>
              <p>Email: tuan09092002@gmail.com</p>
              <p>Linkedin: {Links.LinkedinUrl}</p>
            </div>
        </div>
    </div>
  )
}

export default Contact