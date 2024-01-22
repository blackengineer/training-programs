import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import { getProgress } from '@/actions/get-progress'
import { CourseSidebar } from './_components/CourseSidebar'
import { CourseNavbar } from './_components/CourseNavbar'
import { currentUser } from '@/lib/auth'

const CourseLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { courseId: string};
}) => {
  const user = await currentUser()

  if(!user) {
    return redirect("/dashboard")
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId: user.id,
            }
          }
        },
        orderBy: {
          position: "asc"
        }
      }
    }
  });

  if (!course) {
    return redirect("/dashboard")
  }

  const progressCount = await getProgress(user.id, course.id)

  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <CourseNavbar 
          course={course}
          progressCount={progressCount}
        />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar 
          course={course}
          progressCount={progressCount}
        />
      </div>
      <main className="md:pl-80 pt-[80px] h-full dark:bg-zinc-950">
        {children}
      </main>
    </div>
  )
}

export default CourseLayout