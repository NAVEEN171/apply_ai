"use client"
import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Homepage from '@/components/Homepage/Homepage'
import About from '@/components/about/About'
import "../globals.css"
import Appfeatures from '@/components/Appfeatures/Appfeatures'
import Pricing from '@/components/pricing/Pricing'
import Testimonials from '@/components/testimonials/Testimonials'
import { UserButton } from '@clerk/nextjs'

const Landingpage = () => {
  return (
    <div>
      <Navbar/>
      <div className='bottomcontainer'>
      <Homepage />
      <About/>
      <Appfeatures/>
      <Pricing/>
      <Testimonials/>
      </div>

    
    </div>
  )
}

export default Landingpage;
