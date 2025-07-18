import { useState } from 'react'
import Image from '../images/sky.jfif'
import { FaCode, FaGlobe } from 'react-icons/fa'
import Card from './src/components/card/Card'



function Project() {
  

  return (

    <section className='border-2'>
       <div className='text-center shadow-2xl'>
            <h1 className='text-3xl text-white py-2 '>Projects</h1>
        <div className='md:grid grid-cols-2   2xl:grid-cols-4 p-10 '>


            
             <Card />

          

          
            
             

        </div>

       </div>
    </section>
    

  )
}

export default Project