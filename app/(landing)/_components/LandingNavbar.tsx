'use client'

import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import LoginButton from '@/components/auth/LoginButton'
import Logo from '@/components/Logo'

const font = Montserrat({
  weight: '600',
  subsets: ['latin']
})

const LandingNavbar = () => {
  return (
    <nav className='p-4 bg-transparent flex items-center justify-between'>
      <Link href='/' className='flex items-center'>
        <div>
          <Logo />
        </div>
      </Link>
      <div className='flex items-center gap-x-2'>
        <LoginButton mode='modal' asChild>
          <Button variant={'premium'}>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </nav>
  )
}

export default LandingNavbar