import { columns } from './_components/Columns'
import { DataTable } from './_components/DataTable'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { currentUser } from '@/lib/auth'

const CoursesPage = async () => {
  const user = await currentUser()

  if (user?.role !== 'ADMIN') {
    return redirect("/dashboard")
  }

  const courses = await db.course.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  return (
    <div className='p-6'>
      <DataTable columns={columns} data={courses} />
    </div>
  )
}

export default CoursesPage