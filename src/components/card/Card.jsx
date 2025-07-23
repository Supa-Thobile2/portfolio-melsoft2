import React from 'react'
import Image from '../images/sky.jfif'
import {MdPublic, MdCode} from 'react-icons/md'



const Card = () => {
  return (
   
        <div className="flex items-center justify-center flex-col w-75 mx-auto rounded-t-4xl my-4">
             <img src={Image} alt="astranaut"  className=' w-full rounded-t-4xl object-contain mb-3' />
            <div className='py-2'>
                <h1 className='text-2xl font-semibold tracking-wider md:text-6xl'>Recipe book</h1>
            </div>
            <div>
                <p className='text-base text-white'>Project about</p>
            </div>
            <div className='flex items-center justify-evenly gap-2 my-4 p-2'>
                <button className='py-2 px-8 rounded-4xl bg-white flex items-center justify-evenly gap-2'><MdPublic/>live</button>
                <button className='py-2 px-8 rounded-4xl bg-white flex items-center justify-evenly gap-2'><MdCode/>Code </button>
            </div>
        </div>
    
  )
}

export default Card