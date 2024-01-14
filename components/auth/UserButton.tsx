'use client'

import { LogOut, User } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/DropdownMenu'

import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from '@/components/ui/Avatar'
import { useCurrentUser } from '@/hooks/use-current-user'
import { LogoutButton } from '@/components/auth/LogoutButton'
import Link from 'next/link'

export const UserButton = () => {
  const user = useCurrentUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""}/>
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40' align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user?.name && 
              <p className='font-medium text-sm'>
                {user?.name}
              </p>
            }
            {user?.email && 
              <p className='w-[200px] truncate text-xs text-zinc-700'>
                {user?.email}
              </p>
            }
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link
            href='/search'
          >
            Courses
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href='/dashboard'
          >
            Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <LogoutButton>
          <DropdownMenuItem>
            <LogOut className='h-4 w-4 mr-2' />
            Sign out
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}