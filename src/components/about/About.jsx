import { useState } from 'react'
import Image from '../images/sky.jfif'




function About() {
  

  return (

    <>
       <div className='md:flex justify-center items-center border-2'>

        <div className=''>
              <h1 className='text-2xl py-2'>Thobile Nontenja</h1>
              <p>I wrote my first line of code in 2019—and unlike most things I tried that year, I actually stuck with it. Since then, I’ve been deep in the trenches of syntax, semicolons, and stack traces, turning coffee into code and bugs into (eventual) features.</p>
              <p>What started as a curiosity quickly evolved into a full-blown passion, and now I build clean, efficient, and occasionally magical software solutions. Whether it’s front-end finesse, back-end wizardry, or just wrestling with version control, I’m always up for a challenge—as long as it doesn’t involve Internet Explorer.</p>
        </div>

        <div className=''>
            <img src={Image} alt="astranaut" srcset="" />
        </div>

       </div>
    </>
    

  )
}

export default About