import { useState } from 'react'
import './NavBar.css'

function NavBar() {
  

  return (
    <header className='fixed top-0 mb-8'>

        <nav className="relative w-screen fixed top-0  pb-6 flex justify-between align-center md:pb-8">

          <div className='text-2xl'>
                  <h1 className='text-bold md:text-3xl lg:text-4xl'>Thobile N.</h1>
          </div>
          <div className='text-2xl'>
            <div className='md: hidden'>
                      <span className='bg-black w-10 p-4 mb-4'>-</span>
                      <span className='bg-black w-10 p-4 mb-4'>-</span>
                      <span className='bg-black w-10 p-4 mb-4'>-</span>
            </div>
                <ul className='hidden md:flex justify-between items-center gap-2 mx-4'>
                  <li className='mb-10'>Home</li>
                  <li className='mb-10'>About</li>
                  <li className='mb-10'>Projects</li>
                  <li className='mb-10'>Contact</li>
                  <li className='mb-10'>Hire</li>
                </ul>
          </div>
      
        </nav>


    </header>
  )
}

export default NavBar