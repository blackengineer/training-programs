import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import Categories from './_components/Categories'
import { SearchInput } from '@/components/SearchInput'
import { CoursesList } from '@/components/CoursesList'
import { getCourses } from '@/actions/get-courses'
import { currentUser } from '@/lib/auth'

interface SearchPageProps {
  searchParams: {
    title: string
    categoryId: string
  }
}

const SearchPage = async ({
  searchParams
}: SearchPageProps) => {
  const user = await currentUser()

  if (!user) {
    return redirect('/')
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc'
    }
  })

  const courses = await getCourses({
    userId: user.id,
    ...searchParams,
  })

  return ( 
    <>
      <div className='px-6 pt-6 md:hidden md:mb-0 block'>
        <SearchInput />
      </div>
      <div className='p-4 space-y-4'>
        <Categories 
          items={categories}
        />
        <CoursesList 
          items={courses}
        />
      </div>
    </>
   )
}
 
export default SearchPage