'use client'

import Logo from '@/components/Logo'
import { Button } from '@/components/ui/Button'
import { LogOut } from 'lucide-react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const font = Montserrat({
  weight: '600',
  subsets: ['latin']
})

const StaticNavbar = async () => {
  return (
    <nav className='p-4 bg-white border-b flex items-center justify-between h-[82px]'>
      <Link href='/dashboard' className='flex items-center'>
        <div>
          <Logo />
        </div>
      </Link>
      <div className='flex gap-x-2 ml-auto'>
        <Link href={'/'}>
          <Button variant={'ghost'} className='mt-0.5'>
              <LogOut className='h-4 w-4 mr-2'/>
              Home
            </Button>
        </Link> 
      </div>
    </nav>
  )
}

export default StaticNavbar