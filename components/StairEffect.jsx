"use client";
import { AnimatePresence , motion} from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import Stair from './ui/Stair';

function StairEffect() {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
    <div className='h-screen w-screen fixed top-0 pointer-events-none left-0 z-40 right-0 flex'>
    <Stair></Stair>
    </div>
    <motion.div className='h-screen w-screen fixed top-0 pointer-events-none' initial={{opacity:1}} animate={{opacity:0,
      transition:{delay:0.4,duration:1,ease:"easeInOut"}
    }}>

    </motion.div>
      </div>

    </AnimatePresence>
  )
}

export default StairEffect