import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './sheet'

import {CiMenuFries} from "react-icons/ci"
function MobileNav() {
      const str =[{
    name:"Home",
    path:"/"
  }
,
{
    name:"Services",
    path:"/services"
  },
  {
    name:"Resume",
    path:"/resume"
  }
  ,
  {
    name:"Work",
    path:"/work"
  }
  ,
  {
    name:"Contact",
    path:"/contact"
  }
]
  return (
<Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className='text-[32px] text-accent-default'></CiMenuFries>
    </SheetTrigger>
    <SheetContent></SheetContent>
</Sheet>
)
}

export default MobileNav