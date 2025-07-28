import { useState } from 'react'
import Image from '../images/sky.jfif'
import { FaLinkedin, FaGithub, FaDiscord, FaFileDownload, FaEnvelope } from 'react-icons/fa'



function About() {
  

  return (

    <>
       <div className='rounded-3xl flex justify-center items-center flex-col h-[100vh] p-8 md:flex-row border-2 shadow-lg'>
        
            <img src={Image} alt="astranaut"  className='w-70 mx-auto rounded-4xl object-contain my-2' />
      

        <div className=' md: mx-auto text-center'>
              <h1 className='text-lg text-white py-1 '>Thobile Nontenja</h1>
               <div className='flex items-center justify-center gap-2'>
                                  <button className='py-2 px-2  bg-blue-600 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaLinkedin/></button>
                                  <button className='py-2 px-2 bg-black rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaGithub/></button>
                                  <button className='py-2 px-2 bg-red-500 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaDiscord/></button>
              
              </div>
              <div className='py-1 mx-2'>
                  <p className='text-start text-[8px] tracking-wide leading-4 text-white md:text-center'>I wrote my first line of code in 2019—and unlike most things I tried that year, I actually stuck with it. Since then, I’ve been deep in the trenches of syntax, semicolons, and stack traces, turning coffee into code and bugs into (eventual) features.</p>
              <p className='text-start text-[8px] tracking-wide leading-4 text-white py-1 md:text-center'>What started as a curiosity quickly evolved into a full-blown passion, and now I build clean, efficient, and occasionally magical software solutions. Whether it’s front-end finesse, back-end wizardry, or just wrestling with version control, I’m always up for a challenge—as long as it doesn’t involve Internet Explorer.</p>
              </div>
              
                <div className='flex justify-evenly items-center w-full my-2 '>
                  <button className='flex justify-evenly items-center  text-[8px] py-2 px-4 bg-blue-200 rounded-3xl gap-2 outline-0 border hover:translate-y-[10px] hover:shadow-md transition duration-300'> <FaEnvelope size={9}/>Contact Me</button>
                  <button className='flex justify-evenly items-center  text-[8px] py-2 px-4 bg-blue-200 rounded-3xl gap-2 hover:translate-y-[10px] hover:shadow-md transition duration-300'>  <FaFileDownload size={9}/>Hire Me</button>

                </div>
        </div>

        
              

       </div>
    </>
    

  )
}

export default About