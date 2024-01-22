'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Lock } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useConfettiStore } from '@/hooks/use-confetti-store'

interface MovementOneVideoPlayerProps {
  courseId: string
  chapterId: string
  isLocked: boolean
  title: string
}

export const MovementOneVideoPlayer = ({
  isLocked,
  title,
}: MovementOneVideoPlayerProps) => {
  const [isReady, setIsReady] = useState(false)
  const router = useRouter()
  const confetti = useConfettiStore()

  return (
    <div className='relative aspect-video'>
      {!isReady && !isLocked && (
        <div className='absolute inset-0 flex items-center justify-center bg-slate-800'>
          <Loader2 className='h-8 w-8 animate-spin text-secondary' />
        </div>
      )}
      {isLocked && (
        <div className='absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary'>
          <Lock className='h-8 w-8' />
          <p className='text-sm'>
            This session is locked.
          </p>
        </div>
      )}
    </div>
  )
}