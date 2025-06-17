import { useState } from 'react'
import Image from '../images/sky.jfif'




function Project() {
  

  return (

    <>
       <div className=''>
            <h1 className='text-2xl py-4'>Projects</h1>
        <div className=''>

            <div className='block md:flex justify-center items-center border-2 shadow-3xl rounded m-8 p-8'>

                <img src={Image} alt="" srcset="" />
                <h3>Word Scramble</h3>
                <p>Who knew words could be this fun and frustrating? This JavaScript-powered game lets users scramble and unscramble letters like linguistic gymnasts. It's a mix of logic, interactivity, and just enough chaos to keep things interesting. Warning: may cause mild addiction and spontaneous vocabulary growth.</p>

            </div>

             <div className='block md:flex justify-center items-center border-2 shadow-3xl rounded m-8 p-8'>

                <img src={Image} alt="" srcset="" />
                <h3>Travel Site</h3>
                <p>My first stop on the developer journey: building a travel blog without ever leaving my desk. Armed with nothing but HTML, CSS, and a dream, I created a clean and colorful space to share adventures I haven’t taken (yet). It's like backpacking—except the only bugs I encountered were in my code</p>

            </div>

              <div className='block md:flex justify-center items-center border-2 shadow-3xl rounded m-8 p-8'>

                <img src={Image} alt="" srcset="" />
                <h3>Business Design</h3>
                <p>Imagine if a dated business website walked into a salon and said, "Make me fabulous." That’s what this project was all about. Using Bootstrap, I gave a real-world business a modern, mobile-friendly makeover—think of it as a digital glow-up with a grid system and zero downtime</p>

            </div>
             <div className='block md:flex justify-center items-center border-2 shadow-3xl rounded m-8 p-8'>

                <img src={Image} alt="" srcset="" />
                <h3>Recipe Book</h3>
                <p>A full-course experience, built from scratch—no frameworks, no microwave shortcuts. This project combined the elegance of good design with the structure of a well-prepped meal. HTML set the table, CSS brought the garnish, and the result was a deliciously responsive recipe page. Bon appétit!</p>

            </div>

        </div>

       </div>
    </>
    

  )
}

export default Project