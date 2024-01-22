import { db } from '@/lib/db'
import { Chapter, Course, UserProgress } from '@prisma/client'
import { redirect } from 'next/navigation'
import { CourseSidebarItem } from './CourseSidebarItem'
import { CourseProgress } from '@/components/CourseProgress'
import { currentUser } from '@/lib/auth'

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null
    })[]
  }
  progressCount: number
}

export const CourseSidebar = async ({
  course,
  progressCount
}: CourseSidebarProps) => {
  const user = await currentUser()

  if (!user) {
    return redirect("/dashboard")
  }

  const purchase = await db.purchase.findUnique({
    where: {
      userId_courseId: {
        userId: user.id,
        courseId: course.id,
      }
    }
  })

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold">
          {course.title}
        </h1>
        {purchase && (
          <div className="mt-5">
            <CourseProgress
              variant="success"
              value={progressCount}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        {course.chapters.map((chapter) => (
          <CourseSidebarItem 
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
            courseId={course.id}
            isLocked={!chapter.isFree && !purchase}
          />
        ))}
      </div>
    </div>
  )
}