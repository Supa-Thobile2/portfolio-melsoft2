import { useState } from 'react'
import NavBar from '../navbar/NavBar'
import Image from '../images/sky.jfif'
import About from '../about/About'
import Project from '../projects/Projects'



function Hero() {
  

  return (

    <>
        <NavBar />
        <div className='flex items-center justify-center flex-col mx-auto w-screen'>
                  <div className='flex items-center justify-center flex-col mx-auto py-4'>
                      <img src={Image}  alt='astranaut image' className='rounded-full ' />
                      <div className='py-1'>
                        <h1 className='text-2xl'>Thobile Nontenja</h1>
                  </div>
                  
                  <div className='container items-center m-1 p-2'>
                    <p className='text-xl mb-2'>Hey there! It's a me Thobile Nontenja, a software engineer based in South Africa with a passion for building innovative digital solutions. Since starting my coding journey in 2019, I've developed a strong foundation in front-end development, with expertise in HTML, CSS, and JavaScript.</p>
                    <span className='text-xl italic bold'>'First rule at Melsoft club: Talk about code. The second rule of the melsoft club: You don't think about Errors'</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <button className='py-4 mx-aut bg-red-500 rounded-circle w-20'>LinkedIn</button>
                    <button className='py-4 mx-2 bg-red-500 rounded-circle w-20'>Github</button>
                    <button className='py-4 mx-2 bg-red-500 rounded-circle w-20'>Discord</button>

                  </div>
            </div>
        </div>
        <About />
        <Project/>
    </>
    

  )
}

export default Hero