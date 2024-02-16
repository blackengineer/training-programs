'use client'

import Link from 'next/link'
import TypewriterComponent from 'typewriter-effect'
import { Button } from '@/components/ui/Button'
import { Progress } from '@/components/ui/Progress'
import RegisterButton from '@/components/auth/RegisterButton'

const LandingHero = () => {
  return (
    <div className='p-4 font-bold py-36 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold mb-10'>
        <h1>
          how to train for
        </h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600'>
          <TypewriterComponent 
            options={{
              strings: [
                '5k',
                'basketball',
                '10k',
                'baseball',
                'half marathon',
                'lean mass',
                'football',
                'marathon',
                'HYROX',
                'soccer',
                'pickleball',
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      <div className='text-sm md:text-base font-light'>
        Level up your athletic performance and compete with confidence.
      </div>
      <div>
        <Progress value={100} variant={'premium'} />
      </div>
      <div className='flex justify-between text-2xl'>
        <div>
          😬
        </div>
        <div>
          😅
        </div>
        <div>
          😤
        </div>
      </div>
      
      <div>
        <RegisterButton mode='modal' asChild>
          <Button variant='premium'>
            Explore courses
          </Button>
        </RegisterButton>
      </div>
    </div>
  )
}

export default LandingHero