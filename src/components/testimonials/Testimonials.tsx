import React from 'react'
import "./testimonilas.css"
import Image from 'next/image'



const Testimonials = () => {
  const tesmonialsdata=[
    {
      name:"Danny moonsoon",
      designation:"CEO & Founder",
      desc:"I found my dream job within days of using ApplyAI. The personalized job recommendations were spot-on, and the application process was seamless.",
      photo:"/image/person1.png"
    },{
      name:"Abby hollis",
      designation:"Lead at uniting vic",
      desc:"Thanks to ApplyAI, I landed a job that perfectly matches my skills and aspirations. Highly recommend it to anyone looking for their next career move",
      photo:"/image/person3.png"
    },{
      name:"Omar farooq ",
      designation:"Vp of product design",
      desc:"Thanks to ApplyAI, I landed a job that perfectly matches my skills and aspirations. Highly recommend it to anyone looking for their next career move",
      photo:"/image/person2.png"
    }
  ]
  return (
    <div className='testimonials_container' >
               <div className='testimonials_title' id="Testimonials">
                Testimonials
                </div>     
                <div className='testimonials_cards'>
                 {
                  tesmonialsdata.map((card)=>(
                    <div className='tesimonials_card' key={card.name}>
                      <div className='profilewrapper'>
                        <Image src={card.photo} width={56} height={56} className='testimonialphoto' alt="profilephoto"></Image>
                        <div className='headers'>
                          <div className='header1'>{card.name}</div>
                          <div className='header2'>{card.designation}</div>

                        </div>
                      </div>
                      <div className='testimonial_desc'>{card.desc}</div>
                    </div>
                  ))
                 }
                  
                
                  </div> 
    </div>
  )
}

export default Testimonials
