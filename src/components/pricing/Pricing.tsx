import React,{useState} from 'react'

import "./pricing.css"

const Pricing = () => {
    const [selected,setselected]=useState<number>(1);

    const subscriptiontypes=[
        {name:"Basic",
          amount:50,
          desc:"Access essential features for free with our Basic plan. Get started on your job search journey without any cost, including personalized job matching, effortless application process, and real-time job updates"  
        },{
            name:"Premium",
            amount:100,
            desc:"Access essential features for free with our Basic plan. Get started on your job search journey without any cost, including personalized job matching, effortless application process, and real-time job updates"
        },
        
            {
                name:"Enterprise",
                amount:150,
                desc:"Access essential features for free with our Basic plan. Get started on your job search journey without any cost, including personalized job matching, effortless application process, and real-time job updates"
            }
        
    ]

    const changedesign=(index:number)=>{
        console.log(index)
              setselected(index);
    }
  return (
    <div className='pricing_container' >
          <div className='pricing_text' id="Pricing">Pricing</div>
          <div className='pricingshow_wrapper'>
            {
                subscriptiontypes.map((type,index)=>(<div key={type.name} onMouseEnter={()=>{changedesign(index)}} className={'subscribecard'}>
                    <div className={'subscribename'}>{type.name}</div>
                    <div className='subscribeamount'>{`${type.amount}$`}</div>
                    <div className='subscribe_desc'>{type.desc}</div>
                    <button className='buybutton'>Buy Now</button>

                </div>))
            }
          </div>
      
    </div>
  )
}

export default Pricing
