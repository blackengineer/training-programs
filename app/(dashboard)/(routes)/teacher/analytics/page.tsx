import { getAnalytics } from '@/actions/get-analytics'
import { redirect } from 'next/navigation'
import { DataCard } from './_components/DataCard'
import Chart from './_components/Chart'
import { currentUser } from '@/lib/auth'

const AnalyticsPage = async () => {
  const user = await currentUser()

  if (user?.role !== 'ADMIN') {
    return redirect("/dashboard")
  }

  const {
    data,
    totalRevenue,
    totalSales,
  } = await getAnalytics(user.id)

  return (
    <div className='p-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <DataCard 
          label='Total Revenue'
          value={totalRevenue}
          shouldFormat
        />
        <DataCard 
          label='Total Sales'
          value={totalSales}
        />
      </div>
      <Chart 
        data={data}
      />
    </div>
  )
}

export default AnalyticsPage