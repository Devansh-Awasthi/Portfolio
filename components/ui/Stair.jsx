import { animate,delay,easeIn,motion } from 'framer-motion'
import React from 'react'

function Stair() {
    const stairAnimate ={ 
        initial:{
            top:"0%",
        },
        animate:{
            top:"100%",
        },
        exit:{
            top:["0%","100%"],
        },
    }
    const rev =(i)=>{
        const ind = 6;
        return ind-i-1;
    }
  return (
    <>
{
    [...Array(6)].map((_,id)=>{
        return(
<motion.div key={id} variants={stairAnimate} initial="initial" animate="animate" exit="exit" transition={
    {
        duration:0.4,
        ease:['easeInOut'],
        delay:rev(id)*0.1,
   
    }
} className='h-full w-full bg-white relative'>

</motion.div>)
    })
}
    </>
  )
}

export default Stair