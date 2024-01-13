'use client'

import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import LoginButton from '@/components/auth/LoginButton'

const font = Montserrat({
  weight: '600',
  subsets: ['latin']
})

const LandingNavbar = () => {
  return (
    <nav className='p-4 bg-transparent flex items-center justify-between'>
      <Link href='/' className='flex items-center'>
        <div className='absolute h-40 w-40'>
          <Image 
            fill
            alt='logo'
            src='dark-logo.svg'
          />
        </div>
      </Link>
      <div className='flex items-center gap-x-2'>
        <LoginButton>
          <Button variant={'premium'}>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </nav>
  )
}

export default LandingNavbar