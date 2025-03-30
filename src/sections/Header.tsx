"use client";

import { useState, useEffect } from 'react'
import LogoIcon from '@/assets/logo_white.svg';
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
     <header className={`sticky top-0 z-50 w-full sm:w-[95%] md:w-5/6 lg:w-6/12 mx-auto transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
          <div className={`w-full rounded-lg border border-white/15 transition-all duration-300 overflow-hidden px-4 sm:px-2 lg:px-8 backdrop-blur`}>
               <div className="flex items-center justify-between py-2 sm:py-4">
                    <div className='h-10 w-10 rounded-lg inline-flex justify-center items-center '>
                         <a href="/">
                         <img
                              src="/circleplus.png"
                              width={35}
                              height={35}
                              alt="Logo"
                         />
                         </a>
                    </div>
                    <nav className="hidden md:flex items-center justify-between space-x-6">
                         <Link href="/#Features" className="text-sm font-medium text-gray-300 hover:text-white">
                              Features
                         </Link>
                         <Link href="/resources" className="text-sm font-medium text-gray-300 hover:text-white">
                              Resources
                         </Link>
                         <Link href="/#Pricing" className="text-sm font-medium text-gray-300 hover:text-white">
                              Pricing
                         </Link>
                    </nav>
                    <Link href='https://calendly.com/circleplus-io/demo' target='_blank'>
                         <Button
                              variant="ghost"
                              className="hidden md:block bg-[linear-gradient(120deg,#04F9FF,#3FADFF,#BE08FF)] text-black px-4 rounded-md text-sm font-semibold"
                         >
                              Book Demo
                         </Button>
                    </Link>
                    <div className="md:hidden">
                         <Sheet>
                              <SheetTrigger asChild>
                                   <Button variant="ghost" size="icon" className="text-white">
                                        <Menu className="h-6 w-6" />
                                   </Button>
                              </SheetTrigger>
                              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-950 text-white">
                                   <nav className="flex flex-col space-y-4 mt-6">
                                        <Link href="/#Features" className="text-sm font-medium text-gray-300 hover:text-white">
                                             Features
                                        </Link>
                                        <Link href="/resources" className="text-sm font-medium text-gray-300 hover:text-white">
                                             Resources
                                        </Link>
                                        <Link href="/#Pricing" className="text-sm font-medium text-gray-300 hover:text-white">
                                             Pricing
                                        </Link>
                                        <Link href="https://calendly.com/circleplus-io/demo" target='_blank'>
                                             <Button className="w-full bg-[linear-gradient(120deg,#04F9FF,#3FADFF,#BE08FF)] text-black">Book Demo</Button>
                                        </Link>
                                   </nav>
                              </SheetContent>
                         </Sheet>
                    </div>
               </div>
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-gray-700 to-gray-100 rounded-full filter blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
          </div>
     </header>
  )
}