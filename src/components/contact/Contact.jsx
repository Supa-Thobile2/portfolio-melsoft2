import { useState } from 'react'
import Image from '../images/sky.jfif'




function Contact() {
  const [firstName, setFirstName] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')

  const handleOnChange = (e) =>{
    
    setFirstName(e.target.value)
    setPassword(e.target.value)
    setCity(e.target.value)

    console.log(firstName)
    console.log(password)
    console.log(city)
  }

  const handleClick = (e) =>{
    e.preventDefault()

    console.log('Button clicked')
  }

  const handleOnSubmit = (event) =>{
      event.preventDefault()
       console.log('Form submitted')
  }

  return (

    <>
        
        <div className='flex items-center justify-center flex-col mx-auto w-full   p-8 shadow-lg bg-r-[ #2C5364, #203A43, #0F2027]'>

                <h1 className='text-3xl text-white py-2 '>Contact Me</h1>
                <p className=' text-white py-2 text-[11px]'>I am excited to colloborate to collobarate with like-minded individuals and organizations to build innovative and scalable solutions. </p>
                <p className=' text-white text-[11px] mb-2'>If you are ready to build somethin amazin, et in touch and let us discuss how I can help. Im lookin forward tohearin from you!.</p>
                  
                 <form class="w-full max-w-lg shadow-lg py-3" onSubmit={handleOnSubmit} >
  <div class="flex flex-wrap mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" onChange={handleOnChange}/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" onChange={handleOnChange}/>
    </div>
  </div>
  <div class="flex flex-wrap  mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-label text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-label border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" onChange={handleOnChange}/>
      <p class="text-white text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" onChange={handleOnChange}/>
    </div>
    {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div> */}
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" onChange={handleOnChange}/>
    </div>
     <button class="w-full bg-white mt-4 hover:bg-teal-700 border-none hover:border-none text-sm border-4 text-black py-4 px-6 rounded" type="button" onClick={handleClick}>
      Sign Up
    </button>
  </div>
</form>  
                  
                
                  
        </div>
        
        
      
    </>
    

  )
}

export default Contact