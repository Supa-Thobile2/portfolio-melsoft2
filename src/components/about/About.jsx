import { useState } from 'react'
import Image from '../images/sky.jfif'
import { FaLinkedin, FaGithub, FaDiscord, FaFileDownload, FaEnvelope } from 'react-icons/fa'



function About() {
  

  return (

    <>
       <div className='border-2 rounded-3xl md:flex justify-center items-center mx-4 p-1'>
        
            <img src={Image} alt="astranaut" srcset="" className='w-100 rounded-4xl' />
      

        <div className='p-3 md:w-2/3 mx-auto text-center md:m-0'>
              <h1 className='text-3xl text-white py-3 '>Thobile Nontenja</h1>
              <p className='text-start tracking-wide leading-6 text-white'>I wrote my first line of code in 2019—and unlike most things I tried that year, I actually stuck with it. Since then, I’ve been deep in the trenches of syntax, semicolons, and stack traces, turning coffee into code and bugs into (eventual) features.</p>
              <p className='text-start ltracking-wide leading-6 text-white'>What started as a curiosity quickly evolved into a full-blown passion, and now I build clean, efficient, and occasionally magical software solutions. Whether it’s front-end finesse, back-end wizardry, or just wrestling with version control, I’m always up for a challenge—as long as it doesn’t involve Internet Explorer.</p>
                <div className='flex justify-evenly items-center py-3'>
                  <button className='flex justify-evenly items-center py-2 px-4  bg-blue-200 rounded-3xl  outline-0 border sha'> Contact Me<FaEnvelope/></button>
                  <button className='flex justify-evenly items-center py-2 px-4 bg-blue-200 rounded-3xl '> Hire Me <FaFileDownload/></button>

                </div>
        </div>

        
              

       </div>
    </>
    

  )
}

export default About