import { useState } from 'react'
import Image from '../images/sky.jfif'
import { FaLinkedin, FaGithub, FaDiscord, FaFileDownload, FaEnvelope } from 'react-icons/fa'
import {Container} from 'react-bootstrap'



function Hero() {
  

  return (

    <>
        
        <div className=' flex items-center justify-center flex-col mx-auto w-100vw h-[100vh] mt-14 p-8 text-center border-2'>
               
                        <img src={Image}  alt='astranaut image' className='w-35 rounded-full shadow-lg mx-auto  md:mx-auto' />
                 
                      
                      
                        <h1 className='text-[14px] text-white my-1 md:text-4xl lg:text-3xl '>Thobile Nontenja</h1>
                        <span className='text-white pb-1 text-[8px] md:text-base lg:text-base'>Full Stack Developer</span>
                  
                  <div className='flex items-center justify-between gap-2'>
                    <button className='py-2 px-2  bg-blue-600 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaLinkedin/></button>
                    <button className='py-2 px-2 bg-black rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaGithub/></button>
                    <button className='py-2 px-2 bg-red-500 rounded-full hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaDiscord/></button>

                  </div>
                  <div className='w-full  flex items-center justify-center flex-col px-4 py-2 mx-10 my-1'>
                    <p className='text-[8px] pb-1 tracking-wide leading-4 text-white  md:text-center '>Hey there! It's a me Thobile Nontenja, a software engineer based in South Africa with a passion for building innovative digital solutions.
                       </p>
                    <p className='text-[8px] pb-1 text-white tracking-wide leading-4 text-start   md:text-center lg:text-base'>Since starting my coding journey in 2019, I've developed a strong foundation in front-end development, with expertise in HTML, CSS, and JavaScript.</p>
                    <span className='text-[6px] leading-4 tracking-wide  text-base  text-white italic bold md:text-center block lg:text-base'>'First rule at Melsoft club: Talk about code. The second rule of the melsoft club: You don't think about Errors'</span>
                  </div>

                  <div className='flex items-center justify-evenly gap-2'>
                    <button className='flex justify-evenly items-center gap-2 text-[8px] py-2 px-4 bg-blue-100 rounded-2xl hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaFileDownload size={9}/>Hire Me</button>
                    <button className='flex justify-evenly items-center gap-2 text-[8px]  py-2 px-4 bg-blue-100 rounded-2xl hover:translate-y-[10px] hover:shadow-md transition duration-300'><FaEnvelope size={9}/>Contact Me</button>

                  </div>
                  
            </div>
        
        
      
    </>
    

  )
}

export default Hero