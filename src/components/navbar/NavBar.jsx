import { useState } from 'react'
import './NavBar.css'

function NavBar() {
  
const [isOpen, setIsOpen] = useState(false)

const toggleMenu = () =>{
  setIsOpen(!isOpen)
}
  return (
    
<div className=''>
       <div className='flex justify-between items-center px-6  fixed top-0 w-full md:hidden' onClick={toggleMenu} >
        <h1 className='text-[1.3rem] text-amber-50'>Thobile N.</h1>
        <button className='b-white px-4 py-2 rounded-md text-white text-[1rem]'>X</button>
      {isOpen && (
<div className='absolute top-16 inset-0 w-full bg-gradient-to-b from-[#1a1d23] via-[#2c3e50] to-[#000] shadow-lg py-2 flex justify-center items-center'>
        <ul className='text-white '>
          <li className='text-[20px] my-4'>Home</li>
          <li className='text-[20px] my-4'>About</li>
          <li className='text-[20px] my-4'>Projects</li>
          <li className='text-[20px] my-4'>Contact</li>
        </ul>
        </div>

      )}
        

       </div>
       

</div>

    
  )
}

export default NavBar