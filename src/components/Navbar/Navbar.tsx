"use client"
import React,{Fragment,useState} from 'react'
import "./navbar.css"
import Image from 'next/image'
import logo from "../../images/logo.png"
import { useRouter } from 'next/navigation'
import { SignedIn, SignedOut, UserButton, UserProfile } from '@clerk/nextjs'
const Navbar = () => {
  const router=useRouter();
  const [selected,setselected]=useState<string>("");
  const options=[
    {
      name:"Home"
    },{
      name:"About"
    },{
      name:"Features"
    },
    {
      name:"Pricing"
    },
    {
      name:"Testimonials"
    }
  ]

  
  return (
    <Fragment>
    <div className='Navbarwrapper' >
      <div className='Navbar'>
        <Image className='logo' src={logo} alt="aiapplylogo" onClick={()=>{location.reload()}}>

        </Image>
        <div className='optionswrapper'>
        <div className='options'>
               {
                options.map((option,index)=>(<a href={`#${option.name}`}  key={option.name} className={selected===option.name?"option colorchange":"option"} onClick={()=>{setselected(options[index].name)}}>{option.name}</a>))
               }
        </div>
        <SignedOut>
        <button className='subscribe' onClick={()=>{router.push("/sign-in")}}>Log In</button>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
        </div>

      </div>
    </div>
    </Fragment>
  )
}

export default Navbar
