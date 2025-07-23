import { useState } from 'react'
import Image from '../images/sky.jfif'
import { FaLinkedin, FaGithub, FaDiscord, FaFileDownload, FaEnvelope } from 'react-icons/fa'
import {Container} from 'react-bootstrap'



function Hero() {
  

  return (

    <>
        
        <div className=' flex items-center justify-center flex-col mx-auto w-full h-full mt-14 text-center p-4 mb-4 '>
               
                        <img src={Image}  alt='astranaut image' className='w-25 rounded-full shadow-lg mx-auto mb-1 md:mx-auto' />
                 
                      
                      
                        <h1 className='text-lg text-white my-1 md:text-4xl lg:text-3xl '>Thobile Nontenja</h1>
                        <span className='text-white  py-1  md:text-base lg:text-base'>Full Stack Developer</span>
                  
                  <div className='flex items-center justify-between gap-2'>
                    <button className='py-2 px-2  bg-blue-600 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaLinkedin/></button>
                    <button className='py-2 px-2 bg-black rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaGithub/></button>
                    <button className='py-2 px-2 bg-red-500 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaDiscord/></button>

                  </div>
                  <div className='container items-center px-2 my-2'>
                    <p className='text-base tracking-wide leading-7 text-white text-start md:text-center '>Hey there! It's a me Thobile Nontenja, a software engineer based in South Africa with a passion for building innovative digital solutions.
                       </p>
                    <p className='text-white tracking-wide leading-7 text-start   md:text-center lg:text-base'>Since starting my coding journey in 2019, I've developed a strong foundation in front-end development, with expertise in HTML, CSS, and JavaScript.</p>
                    <span className='leading-7 tracking-wide  text-base text-start text-white italic bold md:text-center block lg:text-base'>'First rule at Melsoft club: Talk about code. The second rule of the melsoft club: You don't think about Errors'</span>
                  </div>

                  <div className='flex items-center justify-between gap-4 my-2 p-2'>
                    <button className='flex justify-evenly items-center gap-4  px-4 py-2 bg-blue-100 rounded-2xl hover:translate-y-[10px] hover:shadow-md transition duration-300'>Hire Me<FaFileDownload/></button>
                    <button className='flex justify-evenly items-center gap-4  px-4 py-2 bg-blue-100 rounded-2xl hover:translate-y-[10px] hover:shadow-md transition duration-300'>Contact Me<FaEnvelope/></button>

                  </div>
                  
            </div>
        
        
      
    </>
    

  )
}

export default Hero