import React from 'react'
import Image from 'next/image'
import curve from "../../images/curve.png"
import photo1 from "../../images/photo1.png"

import "./homepage.css"

const Homepage = () => {
  return (
    <div className='homecontainer_wrapper' id={"Home"}>
    <div className='home_container'>
        <div className='home_text'>Your Perfect Career Match Awaits</div>
        <div className='main_text'>
            <div className='text'>Unlock Your Dream Job with ApplyAI</div>
            <Image src={curve} alt="curve" className='curve' ></Image>
            
        </div>
        <div className='subtext'>Streamline Your Job Search Effortlessly and Land Your Ideal Role Faster</div>
        <button className='subscribe'>Try It Now</button>

    </div>
    <Image className='previewimage' src={photo1} alt="previewimage"></Image>

    </div>
    
  )
}

export default Homepage
