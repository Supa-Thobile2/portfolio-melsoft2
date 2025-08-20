import React from 'react'
import Image from '../images/sky.jfif'
import {MdPublic, MdCode} from 'react-icons/md'
import { FaHtml5, FaCss3, FaJs } from 'react-icons/fa'



const Card = ({description, title}) => {
  return (
   
        <div className="flex items-center justify-center flex-col w-[250px] mx-auto rounded-t-4xl my-4  shadow-2xl border-amber-50 p-1">
             <img src={Image} alt="astranaut"  className=' w-full rounded-t-4xl object-contain' />
            <div className='my-2'>
                <h1 className='text-[24px] font-semibold tracking-wider '>{title}</h1>
            </div>
            <div className='mx-4'>
                <p className='text-[12px] text-white py-1'>{description}</p>
                <div className='flex items-center justify-center gap-4 py-2'>
                                                  <button className='py-2 px-2  bg-blue-600 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaHtml5 size={11}/></button>
                                                  <button className='py-2 px-2 bg-white rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaCss3 size={11}/></button>
                                                  <button className='py-2 px-2 bg-red-500 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaJs size={11}/></button>
                              
                </div>
            </div>
            <div className='flex items-center justify-evenly gap-4 my-2'>
                <button className='text-[8px] py-2 px-4 rounded-4xl bg-white flex items-center justify-evenly gap-4 border-2'><MdPublic size={13}/>live</button>
                <button className='text-[8px] py-2 px-4 rounded-4xl bg-white flex items-center justify-evenly gap-4 border-2'><MdCode size={13}/>Code </button>
            </div>
        </div>
    
  )
}

export default Card