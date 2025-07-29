import React from 'react'
import Image from '../images/sky.jfif'
import {MdPublic, MdCode} from 'react-icons/md'
import { FaHtml5, FaCss3, FaJs } from 'react-icons/fa'



const Card = () => {
  return (
   
        <div className="flex items-center justify-center flex-col w-60 mx-auto rounded-t-4xl my-4  shadow-lg border-1 border-white">
             <img src={Image} alt="astranaut"  className=' w-full rounded-t-4xl object-contain mb-3' />
            <div className='py-2'>
                <h1 className='text-2xl font-semibold tracking-wider md:text-6xl'>Recipe book</h1>
            </div>
            <div>
                <p className='text-base text-white'>Project about</p>
                <div className='flex items-center justify-center gap-2'>
                                                  <button className='py-2 px-2  bg-blue-600 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaHtml5/></button>
                                                  <button className='py-2 px-2 bg-white rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaCss3/></button>
                                                  <button className='py-2 px-2 bg-red-500 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaJs/></button>
                              
                </div>
            </div>
            <div className='flex items-center justify-evenly gap-2 my-4 p-2'>
                <button className='text-[8px] py-2 px-4 rounded-4xl bg-white flex items-center justify-evenly gap-2'><MdPublic size={9}/>live</button>
                <button className='text-[8px] py-2 px-4 rounded-4xl bg-white flex items-center justify-evenly gap-2'><MdCode size={9}/>Code </button>
            </div>
        </div>
    
  )
}

export default Card