import { useState } from 'react'
import NavBar from '../navbar/NavBar'
import About from '../about/About'
import Project from '../projects/Projects'
import Hero from '../hero/Hero'



function Home() {
  

  return (

    <>
        <NavBar />
        
        <Hero />
        <About/>
        <Project/>
    </>
    

  )
}

export default Home