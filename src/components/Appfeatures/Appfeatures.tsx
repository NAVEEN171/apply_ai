import React from 'react'
import vector from "../images/vector.png"
import vector2 from "../images/vector2.png"

import vector3 from "../images/vector3.png"
import Image from 'next/image'

import "./appfeatures.css"



const Appfeatures = () => {
    const carddetails= [
        {
            name:"Personalized Job Matching",
            desc:"Our intelligent algorithm matches you with job opportunities that align with your skills, experience, and career goals",
            logo:vector
        },
        {
            name:"Effortless Application Process",
            desc:"Apply to multiple jobs with just a few clicks, saving you time and effort.",
            logo:vector2
        },
        {
            name:"User-Friendly Interface",
            desc:"Our intuitive interface makes navigating the job search process a breeze, even for beginners.",
            logo:vector3
        }
    ]
  return (
    <div className='appfeatures_container' id="Features">
      <div className='appfeatures'>App Features</div>
      <div className='cardswrapper'>
          {carddetails.map((card)=>(<div key={card.name} className='featurecard'>
            <div className='featurephoto_wrapper'>
                 <Image className="featurephoto" src={card.logo} alt="features"></Image>
            </div>
            <div className='featurename'>{card.name}</div>
            <div className='featuredesc'>{card.desc}</div>


          </div>))}
      </div>
    </div>
  )
}

export default Appfeatures
