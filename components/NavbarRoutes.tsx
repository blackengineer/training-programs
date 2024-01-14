'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { useCurrentUser } from '@/hooks/use-current-user'
import { UserButton } from './auth/UserButton'
// import { SearchInput } from '@/components/SearchInput'

const NavbarRoutes = () => {
  const pathname = usePathname()
  const user = useCurrentUser()

  const isTeacherPage = pathname?.startsWith('/teacher')
  const isCoursePage = pathname?.includes('/courses')
  const isSearchPage = pathname === "/search"

  // const isAdminUser = user?.role === 'ADMIN'

  return (
    <div className='flex gap-x-2 ml-auto'>
      {isTeacherPage || isCoursePage ? (
        <Link href={'/dashboard'}>
          <Button variant={'ghost'} className='mt-0.5'>
            <LogOut className='h-4 w-4 mr-2'/>
            Exit
          </Button>
        </Link> 
      ): (
        <Link href={'teacher/courses'}>
          <Button variant={'ghost'} className='mt-0.5'>
            Teacher mode
          </Button>
        </Link>
      )}
      <UserButton />
    </div>
  )
}

export default NavbarRoutes