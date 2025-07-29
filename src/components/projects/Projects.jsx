import { useState } from 'react'
import Image from '../images/sky.jfif'
import { FaCode, FaGlobe } from 'react-icons/fa'
import Card from '../card/Card'



function Project() {
  

  return (

    <section className=''>
       <div className='text-center shadow-2xl mt-30 '>
            <h1 className='text-3xl text-white py-2 '>Projects</h1>
        <div className=' gap-2 mx-auto md:grid grid-cols-2  2xl:grid-cols-4 '>


            
             <Card className='justify-self-center items-center'/>
             <Card className='justify-self-center items-center' />
             <Card className='justify-self-center items-center'/>
             <Card className='justify-self-center items-center'/>

          

          
            
             

        </div>

       </div>
    </section>
    

  )
}

export default Project