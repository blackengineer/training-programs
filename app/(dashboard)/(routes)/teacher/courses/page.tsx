import { Button } from '@/components/ui/Button'
import { currentUser } from '@/lib/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const CoursesPage = async () => {
  const user = await currentUser()

  if (user?.role !== 'ADMIN') {
    return redirect('/dashboard')
  }

  return (
    <div className='p-4'>
      <Link href={'/teacher/create'}>
        <Button>
          New course
        </Button>
      </Link>
    </div>
  )
}

export default CoursesPage