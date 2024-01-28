import Footer from '@/components/Footer'
import Navbar from './_components/Navbar'
import Sidebar from './_components/Sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({
  children
}: DashboardLayoutProps) => {
  return (
    <div className='h-full'>
      <div className='h-[82px] md:pl-56 fixed inset-y-0 w-full z-50'>
        <Navbar />
      </div>
      <div className='hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50'>
        <Sidebar />
      </div>
      <main className='md:pl-56 pt-[82px] h-full'>
        {children}
      </main>
      <div className='md:pl-56'>
        <Footer />
      </div>
    </div>
  )
}

export default DashboardLayout