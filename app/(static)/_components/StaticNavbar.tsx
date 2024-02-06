'use client'

import Logo from '@/components/Logo'
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
    </nav>
  )
}

export default StaticNavbar