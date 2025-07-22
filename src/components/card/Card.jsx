import React from 'react'
import Image from '../images/sky.jfif'



const Card = () => {
  return (
   
        <div className="flex items-center justify-center flex-col w-full mx-auto border-2 rounded-t-4xl my-4">
             <img src={Image} alt="astranaut"  className=' w-full rounded-t-4xl object-contain mb-3' />
            <div>
                <h1 className='text-4xl font-semibold tracking-wider md:text-6xl'>Title</h1>
            </div>
            <div>
                <p>Description</p>
            </div>
            <div>
                <button>Button</button>
            </div>
        </div>
    
  )
}

export default Card