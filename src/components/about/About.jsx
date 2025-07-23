import { useState } from 'react'
import Image from '../images/sky.jfif'
import { FaLinkedin, FaGithub, FaDiscord, FaFileDownload, FaEnvelope } from 'react-icons/fa'



function About() {
  

  return (

    <>
       <div className='rounded-3xl h-full md:flex justify-center items-center p-6'>
        
            <img src={Image} alt="astranaut"  className='w-100 rounded-4xl object-contain mb-2' />
      

        <div className='p-2 md: mx-auto text-center'>
              <h1 className='text-lg text-white py-2 '>Thobile Nontenja</h1>
               <div className='flex items-center justify-center gap-2 p-1'>
                                  <button className='py-2 px-2  bg-blue-600 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaLinkedin/></button>
                                  <button className='py-2 px-2 bg-black rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaGithub/></button>
                                  <button className='py-2 px-2 bg-red-500 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaDiscord/></button>
              
              </div>
              <p className='text-start text-[12px] tracking-wide leading-6 text-white md:text-center'>I wrote my first line of code in 2019—and unlike most things I tried that year, I actually stuck with it. Since then, I’ve been deep in the trenches of syntax, semicolons, and stack traces, turning coffee into code and bugs into (eventual) features.</p>
              <p className='text-start text-[12px] tracking-wide leading-6 text-white py-2 md:text-center'>What started as a curiosity quickly evolved into a full-blown passion, and now I build clean, efficient, and occasionally magical software solutions. Whether it’s front-end finesse, back-end wizardry, or just wrestling with version control, I’m always up for a challenge—as long as it doesn’t involve Internet Explorer.</p>
                <div className='flex justify-evenly items-center w-full gap-3 my-3 '>
                  <button className='flex justify-evenly items-center py-1 px-2  bg-blue-200 rounded-3xl gap-4 outline-0 border hover:translate-y-[10px] hover:shadow-md transition duration-300'> Contact Me<FaEnvelope/></button>
                  <button className='flex justify-evenly items-center py-1 px-2 bg-blue-200 rounded-3xl gap-4 hover:translate-y-[10px] hover:shadow-md transition duration-300'> Hire Me <FaFileDownload/></button>

                </div>
        </div>

        
              

       </div>
    </>
    

  )
}

export default About