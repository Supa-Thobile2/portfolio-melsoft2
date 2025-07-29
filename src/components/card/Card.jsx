import React from 'react'
import Image from '../images/sky.jfif'
import {MdPublic, MdCode} from 'react-icons/md'
import { FaHtml5, FaCss3, FaJs } from 'react-icons/fa'



const Card = () => {
  return (
   
        <div className="flex items-center justify-center flex-col w-55 mx-auto rounded-t-4xl my-4  shadow-2xl border-amber-50 p-1">
             <img src={Image} alt="astranaut"  className=' w-full rounded-t-4xl object-contain' />
            <div className=''>
                <h1 className='text-[14px] font-semibold tracking-wider '>Recipe book</h1>
            </div>
            <div>
                <p className='text-[10px] text-white py-1'>Project about</p>
                <div className='flex items-center justify-center gap-2 py-2'>
                                                  <button className='py-2 px-2  bg-blue-600 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaHtml5 size={9}/></button>
                                                  <button className='py-2 px-2 bg-white rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaCss3 size={9}/></button>
                                                  <button className='py-2 px-2 bg-red-500 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaJs size={9}/></button>
                              
                </div>
            </div>
            <div className='flex items-center justify-evenly gap-2 my-2'>
                <button className='text-[8px] py-2 px-4 rounded-4xl bg-white flex items-center justify-evenly gap-2'><MdPublic size={9}/>live</button>
                <button className='text-[8px] py-2 px-4 rounded-4xl bg-white flex items-center justify-evenly gap-2'><MdCode size={9}/>Code </button>
            </div>
        </div>
    
  )
}

export default Card