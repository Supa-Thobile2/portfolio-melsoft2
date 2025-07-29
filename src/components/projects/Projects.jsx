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
            
             <Card className='justify-self-center items-center' title={'Word Scramble'} description={"Who knew words could be this fun and frustrating? This JavaScript-powered game lets users scramble and unscramble letters like linguistic gymnasts. It's a mix of logic, interactivity, and just enough chaos to keep things interesting. Warning: may cause mild addiction and spontaneous vocabulary growth."}/>
             <Card className='justify-self-center items-center ' title={'Travel Site'} description={"My first stop on the developer journey: building a travel blog without ever leaving my desk. Armed with nothing but HTML, CSS, and a dream, I created a clean and colorful space to share adventures I haven’t taken (yet). It's like backpacking—except the only bugs I encountered were in my code."} />
             <Card className='justify-self-center items-center' title={'Business Redesign'} description={'Imagine if a dated business website walked into a salon and said, "Make me fabulous.'}/>
             <Card className='justify-self-center items-center' title={'Recipe Book'} description={'A full-course experience, built from scratch—no frameworks, no microwave shortcuts. This project combined the elegance of good design with the structure of a well-prepped meal. HTML set the table, CSS brought the garnish, and the result was a deliciously responsive recipe page. Bon appétit!'}/> 

          

          
            
             

        </div>

       </div>
    
    

  )
}

export default Project