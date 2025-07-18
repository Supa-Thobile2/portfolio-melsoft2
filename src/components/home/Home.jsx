import { useState } from 'react'
import NavBar from '../navbar/NavBar'
import About from '../about/About'
import Project from '../projects/Projects'
import Hero from '../hero/Hero'
import Contact from '../contact/Contact'
import Footer from '../footer/footer'



function Home() {
  

  return (

    <>
        <NavBar />
        
        <Hero />
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
    </>
    

  )
}

export default Home