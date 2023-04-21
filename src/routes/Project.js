import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2.js'
import Work from '../components/Work'

const Project = () => {
  return (
    <div className='Projects'>
      <Navbar></Navbar>
      <HeroImg2 heading="PROJECT" text="This is my Final Year Project."></HeroImg2>
      <Work></Work>
     <Footer></Footer>
    </div>
  )
}

export default Project