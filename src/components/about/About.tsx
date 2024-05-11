import React from 'react'
import "./about.css"
import Image from 'next/image'



const About = () => {
  let circle="/image/circle.png";
  let groups="/image/groups.svg";
  let monitoring="/image/monitoring.svg";
  return (
    <div className='aboutcontainerwrapper' id={"About"}>
    <div className='about_container'>
        <div className='modelbox'>
            <img className='circle' src={circle} alt="circle">
            </img>
            <div className='percentage'>75K</div>
            <div className='about_text'>Jobs Matching Your Skills</div>
            <div className='svgbox leftsvg'>
            <svg fill="white " className='groups ' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
            </div>
            <div className='svgbox rightsvg'>
            <svg fill="white" className='monitor' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/></svg>
            </div>
            

            
        </div>
        <div className='textbox'>
          <div className='heading'>About The App</div>
          <div className='mainheading'>Introducing ApplyAI</div>
          <div className='sub_text'>Our platform is designed to revolutionize the way you discover and apply for jobs tailored to your unique skills and preferences. Whether you're a seasoned professional or just starting your career, APPLY AI empowers you to find the perfect job match effortlessly. Say goodbye to endless job listings and hello to personalized job recommendations that match your expertise and aspirations.</div>
          <button className='subscribe'>View Pricing</button>

        </div>

      
    </div>
    </div>
  )
}

export default About
