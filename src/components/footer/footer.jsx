import { useState } from 'react'
import NavBar from '../navbar/NavBar'
import Image from '../images/sky.jfif'
import About from '../about/About'
import Project from '../projects/Projects'



function Footer() {
  

  return (

    <>
        
<footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <nav className='flex justify-center items-center flex-wrap gap-1'>
    <h6 className="footer-title">Home</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Project</a>
    <a className="link link-hover">Education</a>
    <a className="link link-hover">Contact Me</a>
  </nav>
  
 
</footer>
        
        
      
    </>
    

  )
}

export default Footer