"use client"
import React,{Fragment,useState,MouseEvent} from 'react'
import "./navbar.css"
import Image from 'next/image'
import logo from "/image/logo.png"
import { useRouter } from 'next/navigation'
import { SignedIn, SignedOut, UserButton, UserProfile } from '@clerk/nextjs'
const Navbar = () => {
  const [show,setshow]=useState(false);
  const router=useRouter();


  const navbarhandler=()=>{
    
    setshow(!show);
    let bar1=document.getElementById("bar1");
      let bar2=document.getElementById("bar2");

      let bar3=document.getElementById("bar3");
    if(!show){
      
      if(bar2 && bar1 && bar3){
             bar2.style.display="none";
             bar1.style.rotate="45deg";
             bar1.style.marginBottom="-4px";
             bar1.style.transformOrigin="center";

             bar3.style.rotate="-45deg"
             bar3.style.marginTop="-4px";
             bar3.style.transformOrigin="center";



      }
     


    }
    else{
      if(bar2 && bar1 && bar3){
        bar2.style.display="block";
        bar1.style.rotate="0deg";
        bar1.style.marginBottom="0px";
        bar1.style.transformOrigin="center";

        bar3.style.rotate="0deg"
        bar3.style.marginTop="0px";
        bar3.style.transformOrigin="center";



 }

    }
  }
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
        <img className='logo' src={"/image/logo.png"}   alt="aiapplylogo" onClick={()=>{location.reload()}}>

        </img>
        <div className='optionswrapper'>
        <div className='options'>
               {
                options.map((option,index)=>(<a href={`#${option.name}`} key={option.name} className={selected===option.name?"option colorchange":"option"} onClick={()=>{setselected(options[index].name)}}>{option.name}</a>))
               }
        </div>
        <SignedOut>
        <button className='subscribe' onClick={()=>{router.push("/sign-in")}}>Log In</button>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
        <div className='navbar_side' onClick={()=>{navbarhandler()}}>
          <div className='bar' id="bar1"></div>
          <div className='bar' id="bar2"></div>
          <div className='bar' id="bar3"></div>


        </div>
        </div>
       { show && (<div className='options2'>
               {
                options.map((option,index)=>(<a href={`#${option.name}`}  key={option.name} className={selected===option.name?"optionside colorchange":"optionside"} onClick={()=>{setselected(options[index].name);setshow(false);navbarhandler()}}>{option.name}</a>))
               }
        </div>)}

      </div>
    </div>
    </Fragment>
  )
}

export default Navbar
