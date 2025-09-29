"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
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
const pathName = usePathname();
  return (
    <nav className="flex  gap-5">
{str.map((link,id)=>{
return(
<Link href={link.path} className={`${pathName === link.path  && " text-accent-default border-b-2 border-accent-default " } font-medium hover:text-accent-default transition-all`}  key={id}> 
{link.name}
</Link>
)}
)}
    </nav>
  )
}
