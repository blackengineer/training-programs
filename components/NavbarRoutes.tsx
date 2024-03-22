'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { useCurrentUser } from '@/hooks/use-current-user'
import { UserButton } from './auth/UserButton'
import { SearchInput } from '@/components/SearchInput'

const NavbarRoutes = () => {
  const pathname = usePathname()
  const user = useCurrentUser()

  const isTeacherPage = pathname?.startsWith('/teacher')
  const isCoursePage = pathname?.includes('/courses')
  const isDocsPage = pathname?.includes('/docs')
  const isSearchPage = pathname === "/search"

  const isAdminUser = user?.role === 'ADMIN'

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
    
      <div className='flex gap-x-2 ml-auto'>
        {isTeacherPage || isCoursePage || isDocsPage ? (
          <Link href={'/dashboard'}>
            <Button variant={'ghost'} className='mt-0.5'>
              <LogOut className='h-4 w-4 mr-2'/>
              Exit
            </Button>
          </Link> 
        ): isAdminUser ? (
          <Link href={'/teacher/courses'}>
            <Button variant={'ghost'} className='mt-0.5'>
              Teacher mode
            </Button>
          </Link>
        ): null }
        <UserButton />
      </div>
    </>
  )
}

export default NavbarRoutes