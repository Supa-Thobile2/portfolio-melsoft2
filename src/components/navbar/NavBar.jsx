import { useState } from 'react'
import './NavBar.css'

function NavBar() {
  
const [isOpen, setIsOpen] = useState(false)

const toggleMenu = () =>{
  setIsOpen(!isOpen)
}
  return (
    
<div>
       <div className='flex justify-between items-center md:didden' onClick={toggleMenu}>
        <h1>Thobile N.</h1>
        <button className='b-white px-4 py-2 rounded-md'>X</button>
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