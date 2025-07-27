import { useState } from 'react'
import Image from '../images/sky.jfif'
import { FaCode, FaGlobe } from 'react-icons/fa'
import Card from '../card/Card'



function Project() {
  

  return (

    <section className='p-2'>
       <div className='text-center shadow-2xl'>
            <h1 className='text-3xl text-white py-2 '>Projects</h1>
        <div className=' gap-2 mx-auto md:grid grid-cols-2  2xl:grid-cols-4 '>


            
             <Card />
             <Card />
             <Card />
             <Card />

          

          
            
             

        </div>

       </div>
    </section>
    

  )
}

export default Project