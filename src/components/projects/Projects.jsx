import { useState } from 'react'
import Image from '../images/sky.jfif'
import { FaCode, FaGlobe } from 'react-icons/fa'



function Project() {
  

  return (

    <section className='border-2'>
       <div className='text-center shadow-2xl'>
            <h1 className='text-3xl text-white py-2 '>Projects</h1>
        <div className='md:grid grid-cols-2   2xl:grid-cols-4 p-10 '>


            
             <div className='block bg-blue-200  border shadow rounded-3xl mx-4 my-2 p-1'>

                <img src={Image} alt="" srcset="" className='w-full rounded-t-3xl' />
                <div className='px-4'>
                      <h3 className='text-4xl py-2'>Recipe Book</h3>
                      <p className='text-justify leading-7 tracking-wide'>A full-course experience, built from scratch—no frameworks, no microwave shortcuts. This project combined the elegance of good design with the structure of a well-prepped meal. HTML set the table, CSS brought the garnish, and the result was a deliciously responsive recipe page. Bon appétit!</p>

                </div>

                <div className='flex justify-between items-center px-2 m-4'>
                  <button className='py-2 px-4  bg-blue-500 rounded-3xl text-2xl'><FaCode/></button>
                  <button className='py-2 px-6 bg-blue-500 rounded-3xl text-2xl'><FaGlobe/></button>

                </div>
                
            </div>

            <div className='block bg-blue-200  border shadow rounded-3xl mx-4 my-2 p-1.5'>

                <img src={Image} alt="" srcset="" className='w-full rounded-t-3xl' />
                <div className='p-8'>
                      <h3 className='text-4xl'>Recipe Book</h3>
                      <p className='text-justify leading-7 tracking-wide'>A full-course experience, built from scratch—no frameworks, no microwave shortcuts. This project combined the elegance of good design with the structure of a well-prepped meal. HTML set the table, CSS brought the garnish, and the result was a deliciously responsive recipe page. Bon appétit!</p>

                </div>

                <div className='flex justify-between items-center px-2 m-4'>
                  <button className='py-2 px-4  bg-blue-500 rounded-3xl text-2xl'> Code</button>
                  <button className='py-2 px-6 bg-blue-500 rounded-3xl text-2xl'> Live</button>

                </div>
                
            </div>

            <div className='block bg-blue-200  border shadow rounded-3xl mx-4 my-2 p-1.5'>

                <img src={Image} alt="" srcset="" className='w-full rounded-t-3xl' />
                <div className='p-8'>
                      <h3 className='text-4xl'>Recipe Book</h3>
                      <p className='text-justify leading-7 tracking-wide'>A full-course experience, built from scratch—no frameworks, no microwave shortcuts. This project combined the elegance of good design with the structure of a well-prepped meal. HTML set the table, CSS brought the garnish, and the result was a deliciously responsive recipe page. Bon appétit!</p>

                </div>

                <div className='flex justify-between items-center px-2 m-4'>
                  <button className='py-2 px-4  bg-blue-500 rounded-3xl text-2xl'> Code</button>
                  <button className='py-2 px-6 bg-blue-500 rounded-3xl text-2xl'> Live</button>

                </div>
                
            </div>

            <div className='block bg-blue-200  border shadow rounded-3xl mx-4 my-2 p-1.5'>

                <img src={Image} alt="" srcset="" className='w-full rounded-t-3xl' />
                <div className='p-8'>
                      <h3 className='text-4xl'>Recipe Book</h3>
                      <p className='text-justify leading-7 tracking-wide'>A full-course experience, built from scratch—no frameworks, no microwave shortcuts. This project combined the elegance of good design with the structure of a well-prepped meal. HTML set the table, CSS brought the garnish, and the result was a deliciously responsive recipe page. Bon appétit!</p>

                </div>

                <div className='flex justify-between items-center px-2 m-4'>
                  <button className='py-2 px-4  bg-blue-500 rounded-3xl text-2xl'> Code</button>
                  <button className='py-2 px-6 bg-blue-500 rounded-3xl text-2xl'> Live</button>

                </div>
                
            </div>

          
            
             

        </div>

       </div>
    </section>
    

  )
}

export default Project