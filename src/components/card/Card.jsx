import React from 'react'
import Image from '../images/sky.jfif'
const Card = () => {
  return (
   
        <div className="flex items-center justify-center flex-col border-2 bg-red h-[100vh] p-4">
             <img src={Image} alt="astranaut"  className='w-100 rounded-4xl ' />
            <div>
                <h1 className='text-2xl md:text-6xl'>Title</h1>
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