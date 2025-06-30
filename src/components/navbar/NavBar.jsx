import { useState } from 'react'
import './NavBar.css'

function NavBar() {
  

  return (
    

        <nav className="top-0 fixed flex justify-between align-center border w-full p-3">

          <div className='text-2xl'>
                  <h1 className='text-bold md:text-3xl lg:text-4xl'>Thobile N.</h1>
          </div>
          <div className='text-2xl'>
          
                <ul className='hidden md:flex justify-between items-center'>
                  <li className='mx-2'>Home</li>
                  <li className='mx-2'>About</li>
                  <li className='mx-2'>Projects</li>
                  <li className='mx-2'>Contact</li>
                  <li className='mx-2'>Hire</li>
                </ul>
          </div>
      
        </nav>


    
  )
}

export default NavBar