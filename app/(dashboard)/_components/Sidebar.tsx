import Link from 'next/link'
// import SidebarRoutes from './SidebarRoutes'
import Logo from '@/components/Logo'

const Sidebar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-x-auto bg-white shadow-sm'>
      <div className='p-6'>
        <Link href={'/dashboard'} className='flex gap-2 items-center'>
          <Logo />
        </Link>
      </div>
      <div className='flex flex-col w-full'>
        {/* <SidebarRoutes /> */}
      </div>
    </div>
  )
}

export default Sidebar