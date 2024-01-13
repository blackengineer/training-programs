'use client'

import Link from 'next/link'
import TypewriterComponent from 'typewriter-effect'
import { Button } from '@/components/ui/Button'
import { Progress } from '@/components/ui/Progress'
import LoginButton from '@/components/auth/LoginButton'

const LandingHero = () => {
  return (
    <div className='font-bold py-36 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1 className='text-secondary'>
          develop your
        </h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600'>
          <TypewriterComponent 
            options={{
              strings: [
                'muscular endurance',
                'muscular strength',
                'muscular power',
                'muscular hypertrophy',
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      <div className='text-sm md:text-base font-light text-secondary'>
        Develop the full spectrum of muscle.
      </div>
      <div className='grid md:grid-cols-3'>
        <div></div>
        <div>
          <Progress value={100} variant={'premium'} />
        </div>
        <div></div>
      </div>
      <p className='text-secondary'>
        💪 100%
      </p>
      <div>
        <LoginButton>
          <Button variant='premium'>
            Start developing
          </Button>
        </LoginButton>
      </div>
    </div>
  )
}

export default LandingHero