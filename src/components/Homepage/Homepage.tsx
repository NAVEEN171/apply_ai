import React from 'react'
import Image from 'next/image'


import "./homepage.css"

const Homepage = () => {
  return (
    <div className='homecontainer_wrapper' id={"Home"}>
    <div className='home_container'>
        <div className='home_text'>Your Perfect Career Match Awaits</div>
        <div className='main_text'>
            <div className='text'>Unlock Your Dream Job with ApplyAI</div>
            <img src={"/image/curve.png"} alt="curve" className='curve' ></img>
            
        </div>
        <div className='subtext'>Streamline Your Job Search Effortlessly and Land Your Ideal Role Faster</div>
        <button className='subscribe'>Try It Now</button>

    </div>
    <img className='previewimage' src={"/image/photo1.png"} alt="previewimage"></img>

    </div>
    
  )
}

export default Homepage
