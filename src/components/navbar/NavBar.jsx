import { useState } from 'react'
import './NavBar.css'

function NavBar() {
  
const [isOpen, setIsOpen] = useState(false)

const toggleMenu = () =>{
  setIsOpen(!isOpen)
}
  return (
    
<div className=''>
       <div className='flex justify-between items-center p-2   md:didden' onClick={toggleMenu} >
        <h1 className='text-[1.3rem] text-amber-50'>Thobile N.</h1>
        <button className='b-white px-4 py-2 rounded-md text-white text-[1rem]'>X</button>
      {isOpen && (
<div className='absolute top-16 inset-0 w-full bg-white shadow-lg py-2'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        </div>

      )}
        

       </div>
       

</div>

    
  )
}

export default NavBar