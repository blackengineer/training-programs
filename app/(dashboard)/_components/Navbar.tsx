// import NavbarRoutes from '@/components/NavbarRoutes'
// import MobileSidebar from './MobileSidebar'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'
import { auth } from '@/auth'
// import UserAccountNav from './UserAccountNav'

const Navbar = async () => {
  const session = await auth()

  return (
    <div className='p-4 border-b h-full flex items-center bg-white'>
      {/* <MobileSidebar />
      <NavbarRoutes />
      <div className='ml-4'>
        {session ? (
          <UserAccountNav user={session.user} />
        ): (
          <Link href={'/sign-in'} className={buttonVariants({ variant: 'premium'})}>
            Sign in
          </Link>
        )}
      </div> */}
    </div>
  )
}

export default Navbar