'use client'

import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { useTransition } from 'react'

const Social = () => {
  const [isPending, startTransition] = useTransition()
  
  const onClick = (provider: 'google') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })
  }

  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
        isPending={isPending}
        size={'lg'}
        className='w-full'
        variant={'outline'}
        onClick={() => onClick('google')}
      >
        <FcGoogle className='h-5 w-5'/>
      </Button>
    </div>
  )
}

export default Social