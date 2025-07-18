import { useState } from 'react'
import Image from '../images/sky.jfif'
import { FaLinkedin, FaGithub, FaDiscord, FaFileDownload, FaEnvelope } from 'react-icons/fa'




function Hero() {
  

  return (

    <>
        
        <div className=' flex items-center justify-center flex-col mx-auto w-full h-full p-6  mt-14 text-center md:p-10'>
                  
                      <img src={Image}  alt='astranaut image' className='w-60 rounded-full mx-auto md:mx-auto' />
                      
                        <h1 className='text-white text-2xl py-1 md:text-4xl lg:text-3xl '>Thobile Nontenja</h1>
                        <span className='text-white text-base py-1  md:text-base lg:text-base'>Full Stack Developer</span>
                  
                  <div className='flex items-center justify-between gap-2 py-1'>
                    <button className='py-4 px-4  bg-blue-600 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaLinkedin/></button>
                    <button className='py-4 px-4 bg-black rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaGithub/></button>
                    <button className='py-4 px-4 bg-red-500 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaDiscord/></button>

                  </div>
                  <div className='container items-center p-2 '>
                    <p className='text-base tracking-wide leading-7.5 text-white text-start md:text-center py-2 lg:text-'>Hey there! It's a me Thobile Nontenja, a software engineer based in South Africa with a passion for building innovative digital solutions.
                       </p>
                    <p className='text-white tracking-wide leading-7.5 text-start py-2  md:text-center pt-2 lg:text-base'>Since starting my coding journey in 2019, I've developed a strong foundation in front-end development, with expertise in HTML, CSS, and JavaScript.</p>
                    <span className='leading-8 tracking-wide py-2 text-base text-start text-white italic bold md:text-center block lg:text-base'>'First rule at Melsoft club: Talk about code. The second rule of the melsoft club: You don't think about Errors'</span>
                  </div>

                  <div className='flex items-center justify-between gap-4 py-4'>
                    <button className='flex justify-evenly items-center gap-4 py-2 px-4 bg-blue-100 rounded-2xl hover:translate-y-[10px] hover:shadow-md transition duration-300'>Hire Me<FaFileDownload/></button>
                    <button className='flex justify-evenly items-center gap-4 py-2 px-4 bg-blue-100 rounded-2xl hover:translate-y-[10px] hover:shadow-md transition duration-300'>Contact Me<FaEnvelope/></button>

                  </div>
                  
            </div>
        
        
      
    </>
    

  )
}

export default Hero