import Link from 'next/link'
import Navbar from './Navbar'
import { Button } from './button'
import MobileNav from './MobileNav'
function Header() {
  return (
   <header className='py-8 xl:py-12 text-white font-semibold'>
    <div className='container flex mx-auto justify-between items-center'>
      <Link href={'/'}>
      <h1 className='text-4xl font-semibold '>
        Devansh<span className='text-accent-default'> .</span>
      </h1>
      </Link>
      {/* desktopNav       */}
      <div className='hidden xl:flex gap-8 items-center'>
      <Navbar></Navbar>
      <Link  href={"/contact"}>
      <Button className='bg-accent-default hover:bg-accent-hover rounded-3xl text-black'> Hire Me!</Button>
      </Link>
      </div>
      {/* {} */}
      <div className=' xl:hidden '>

      <MobileNav ></MobileNav>
      </div>
    </div>
   </header>
  )
}

export default Header