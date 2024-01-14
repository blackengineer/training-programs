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
      <UserButton />
    </div>
  )
}

export default NavbarRoutes