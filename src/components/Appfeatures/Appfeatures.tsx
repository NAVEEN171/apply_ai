import React from 'react'

import Image from 'next/image'

import "./appfeatures.css"



const Appfeatures = () => {
    const carddetails= [
        {
            name:"Personalized Job Matching",
            desc:"Our intelligent algorithm matches you with job opportunities that align with your skills, experience, and career goals",
            logo:"/image/vector.png"
        },
        {
            name:"Effortless Application Process",
            desc:"Apply to multiple jobs with just a few clicks, saving you time and effort.",
            logo:"/image/vector2.png"
        },
        {
            name:"User-Friendly Interface",
            desc:"Our intuitive interface makes navigating the job search process a breeze, even for beginners.",
            logo:"/image/vector3.png"
        }
    ]
  return (
    <div className='appfeatures_container' >
      <div className='appfeatures' id="Features">App Features</div>
      <div className='cardswrapper'>
          {carddetails.map((card)=>(<div key={card.name} className='featurecard'>
            <div className='featurephoto_wrapper'>
                 <Image height={35} width={35} className="featurephoto" src={card.logo} alt="features"></Image>
            </div>
            <div className='featurename'>{card.name}</div>
            <div className='featuredesc'>{card.desc}</div>


          </div>))}
      </div>
    </div>
  )
}

export default Appfeatures
