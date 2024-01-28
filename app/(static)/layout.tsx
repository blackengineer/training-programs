import Footer from '@/components/Footer'
import StaticNavbar from './_components/StaticNavbar'

interface StaticLayoutProps {
  children: React.ReactNode
}

const StaticLayout = ({
  children
}: StaticLayoutProps) => {
  return (
    <div className='h-full'>
      <div className='h-[82px] fixed inset-y-0 w-full z-50'>
        <StaticNavbar />
      </div>
      
      <main className='pt-[82px] h-full'>
        {children}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default StaticLayout