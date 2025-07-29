import { useState } from 'react'
import Image from '../images/sky.jfif'
import { FaCode, FaGlobe } from 'react-icons/fa'
import Card from '../card/Card'
import { projects } from '../constants/constants'



function Project() {
  

  return (

    
       <div className='flex justify-center items-center flex-col p-4 shadow-2xl rounded-4xl '>
            <h1 className='text-3xl text-white py-1'>Projects</h1>
            <p className='text-white text-[8px] text-center'>As a bootcamp student, Ive had the opportunity  to work on various projects that shocase my skills in HTML, CSS, JS, React,Vite, and Tailwindcss.</p>
        <div className=' gap-2 mx-auto md:grid grid-cols-4'>

          {/* {projects.map((project)=>{
               <Card
               key={project.id}
               title={project.title}
               description={project.description}
               />
          })} */}
            
             <Card className='justify-self-center items-center' title={'Recipe book2'}/>
             <Card className='justify-self-center items-center' />
             <Card className='justify-self-center items-center'/>
             <Card className='justify-self-center items-center'/> 

          

          
            
             

        </div>

       </div>
    
    

  )
}

export default Project