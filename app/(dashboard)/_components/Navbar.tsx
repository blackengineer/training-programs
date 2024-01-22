// import NavbarRoutes from '@/components/NavbarRoutes'
// import MobileSidebar from './MobileSidebar'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { auth } from '@/auth'
import MobileSidebar from './MobileSidebar'
import NavbarRoutes from '@/components/NavbarRoutes'
// import UserAccountNav from './UserAccountNav'

const Navbar = async () => {
  const session = await auth()

  return (
    <div className='p-4 border-b h-full flex items-center bg-white'>
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}

export default Navbar