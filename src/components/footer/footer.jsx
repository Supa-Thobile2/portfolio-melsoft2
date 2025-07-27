import { useState } from 'react'
import NavBar from '../navbar/NavBar'
import Image from '../images/sky.jfif'
import About from '../about/About'
import Project from '../projects/Projects'



function Footer() {
  

  return (

    <>
        
<footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 ">
  <nav className=' md:flex justify-center items-center flex-wrap gap-2 text-white'>
    <h6 className="block py-2">Home</h6>
    <a className="block py-2">About</a>
    <a className="block py-2">Project</a>
    <a className="block py-2">Education</a>
    <a className="block">Contact Me</a>
  </nav>
  
 
</footer>
        
        
      
    </>
    

  )
}

export default Footer