import React from 'react'
import Image from 'next/image'


import "./homepage.css"

const Homepage = () => {
  return (
    <div className='homecontainer_wrapper' id={"Home"}>
    <div className='home_container'>
        <div className='home_text'>Your Perfect Career Match Awaits</div>
        <div className='main_text'>
            <div className='text'>Unlock Your Dream Job with
            <span className='text2'>ApplyAI
            <Image width={130} height={14} src={"/image/curve.png"} alt="curve" className='curve' ></Image>

            </span>
             </div>
          
            
        </div>
        <div className='subtext'>Streamline Your Job Search Effortlessly and Land Your Ideal Role Faster</div>
        <button className='subscribe'>Try It Now</button>

    </div>
    <Image className='previewimage' width={700} height={500} src={"/image/photo1.png"} alt="previewimage"></Image>

    </div>
    
  )
}

export default Homepage
