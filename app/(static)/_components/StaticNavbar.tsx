'use client'

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
        <div className='absolute h-40 w-40'>
          <Image 
            fill
            alt='logo'
            src='logo.svg'
          />
        </div>
      </Link>
    </nav>
  )
}

export default StaticNavbar