import { redirect } from 'next/navigation'

import { db } from '@/lib/db'
import Link from 'next/link'
import { ArrowLeft, Eye, LayoutDashboard, LineChart, List } from 'lucide-react'
import { IconBadge } from '@/components/IconBadge'
import { currentUser } from '@/lib/auth'
import { ChapterTitleForm } from './_components/ChapterTitleForm'
import { AverageHeartRateForm } from './_components/AverageHeartRateForm'
import { ChapterAccessForm } from './_components/ChapterAccessForm'
import { ChapterActions } from './_components/ChapterActions'
import { MovementEightNameForm } from './_components/MovementEightNameForm'
import { CaloriesBurnedForm } from './_components/CaloriesBurnedForm'
import { MovementEightRepsForm } from './_components/MovementEightRepsForm'
import { MovementEightRestForm } from './_components/MovementEightRestForm'
import { MovementEightSetsForm } from './_components/MovementEightSetsForm'
import { MovementEightTempoForm } from './_components/MovementEightTempoForm'
import { MovementFiveNameForm } from './_components/MovementFiveNameForm'
import { MovementFiveRepsForm } from './_components/MovementFiveRepsForm'
import { MovementFiveRestForm } from './_components/MovementFiveRestForm'
import { MovementFiveSetsForm } from './_components/MovementFiveSetsForm'
import { MovementFiveTempoForm } from './_components/MovementFiveTempoForm'
import { MovementFourNameForm } from './_components/MovementFourNameForm'
import { MovementFourRepsForm } from './_components/MovementFourRepsForm'
import { MovementFourRestForm } from './_components/MovementFourRestForm'
import { MovementFourSetsForm } from './_components/MovementFourSetsForm'
import { MovementFourTempoForm } from './_components/MovementFourTempoForm'
import { MovementOneNameForm } from './_components/MovementOneNameForm'
import { MovementOneRepsForm } from './_components/MovementOneRepsForm'
import { MovementOneRestForm } from './_components/MovementOneRestForm'
import { MovementOneSetsForm } from './_components/MovementOneSetsForm'
import { MovementOneTempoForm } from './_components/MovementOneTempoForm'
import { MovementSevenNameForm } from './_components/MovementSevenNameForm'
import { MovementSevenRepsForm } from './_components/MovementSevenRepsForm'
import { MovementSevenRestForm } from './_components/MovementSevenRestForm'
import { MovementSevenSetsForm } from './_components/MovementSevenSetsForm'
import { MovementSevenTempoForm } from './_components/MovementSevenTempoForm'
import { MovementSixNameForm } from './_components/MovementSixNameForm'
import { MovementSixRepsForm } from './_components/MovementSixRepsForm'
import { MovementSixRestForm } from './_components/MovementSixRestForm'
import { MovementSixSetsForm } from './_components/MovementSixSetsForm'
import { MovementSixTempoForm } from './_components/MovementSixTempoForm'
import { MovementThreeNameForm } from './_components/MovementThreeNameForm'
import { MovementThreeRepsForm } from './_components/MovementThreeRepsForm'
import { MovementThreeRestForm } from './_components/MovementThreeRestForm'
import { MovementThreeSetsForm } from './_components/MovementThreeSetsForm'
import { MovementThreeTempoForm } from './_components/MovementThreeTempoForm'
import { MovementTwoNameForm } from './_components/MovementTwoNameForm'
import { MovementTwoRepsForm } from './_components/MovementTwoRepsForm'
import { MovementTwoRestForm } from './_components/MovementTwoRestForm'
import { MovementTwoSetsForm } from '../../_components/MovementTwoSetsForm'
import { MovementTwoTempoForm } from './_components/MovementTwoTempoForm'
import { SessionLengthForm } from './_components/SessionLengthForm'
import { HeartRateRangeForm } from './_components/HeartRateRangeForm'
import { MovementOneVideoForm } from './_components/MovementOneVideoForm'
import { MovementTwoVideoForm } from './_components/MovementTwoVideoForm'
import { MovementThreeVideoForm } from './_components/MovementThreeVideoForm'
import { MovementFourVideoForm } from './_components/MovementFourVideoForm'
import { MovementFiveVideoForm } from './_components/MovementFiveVideoForm'
import { MovementSixVideoForm } from './_components/MovementSixVideoForm'
import { MovementSevenVideoForm } from './_components/MovementSevenVideoForm'
import { MovementEightVideoForm } from './_components/MovementEightVideoForm'
import { ChapterDescriptionForm } from './_components/ChapterDescriptionForm'
import Banner from '@/components/Banner'

const ChapterIdPage = async ({
  params 
}: {
  params: { courseId: string; chapterId: string}
}) => {
  const user = await currentUser()

  if (user?.role !== 'ADMIN') {
    return redirect("/dashboard")
  }

  const chapter = await db.chapter.findUnique({
    where: {
      id: params.chapterId,
      courseId: params.courseId
    },
  })

  if (!chapter) {
    return redirect("/dashboard")
  }

  const requiredFields = [
    chapter.title,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length

  const completionText = `(${completedFields}/${totalFields})`

  const isComplete = requiredFields.every(Boolean)

  return ( 
    <>
    {!chapter.isPublished && (
      <Banner 
        variant="warning"
        label="This chapter is not published. It will not be visible in the course."
      />
    )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/teacher/courses/${params.courseId}`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2"/>
              Back to course setup
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-base font-medium">
                  Chapter Creation
                </h1>
                <span className="text-sm text-slate-700">
                  Complete all fields {completionText}
                </span>
              </div>
              <ChapterActions 
                disabled={!isComplete}
                courseId={params.courseId}
                chapterId={params.chapterId}
                isPublished={chapter.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-base font-medium">
                  Customize your chapter
                </h2>
              </div>
              <ChapterTitleForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
              <ChapterDescriptionForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={Eye} />
                <h2 className="text-base font-medium">
                  Access settings
                </h2>
              </div>
              <ChapterAccessForm 
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LineChart} />
                <h2 className="text-base font-medium">
                  Chapter metrics
                </h2>
              </div>
              <SessionLengthForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
              <CaloriesBurnedForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
              <AverageHeartRateForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
              <HeartRateRangeForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
            </div>
          </div>
          <div className='space-y-6'>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={List} />
              <h2 className="text-base font-medium">
                Set up movement one
              </h2>
            </div>
            <MovementOneNameForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementOneVideoForm 
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementOneSetsForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementOneRepsForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementOneTempoForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementOneRestForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <div className="flex items-center gap-x-2">
              <IconBadge icon={List} />
              <h2 className="text-base font-medium">
              Set up movement two
              </h2>
            </div>
            <MovementTwoNameForm 
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementTwoVideoForm 
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementTwoSetsForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementTwoRepsForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementTwoTempoForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementTwoRestForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <div className="flex items-center gap-x-2">
              <IconBadge icon={List} />
              <h2 className="text-base font-medium">
                Set up movement three
              </h2>
            </div>
            <MovementThreeNameForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementThreeVideoForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementThreeSetsForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementThreeRepsForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementThreeTempoForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementThreeRestForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <div className="flex items-center gap-x-2">
              <IconBadge icon={List} />
              <h2 className="text-base font-medium">
                Set up movement four
              </h2>
            </div>
            <MovementFourNameForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementFourVideoForm 
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementFourSetsForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementFourRepsForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementFourTempoForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementFourRestForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <div className="flex items-center gap-x-2">
              <IconBadge icon={List} />
              <h2 className="text-base font-medium">
                Set up movement five
              </h2>
            </div>
            <MovementFiveNameForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementFiveVideoForm 
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementFiveSetsForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementFiveRepsForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementFiveTempoForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementFiveRestForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <div className="flex items-center gap-x-2">
              <IconBadge icon={List} />
              <h2 className="text-base font-medium">
                Set up movement six
              </h2>
            </div>
            <MovementSixNameForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementSixVideoForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementSixSetsForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementSixRepsForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementSixTempoForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementSixRestForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <div className="flex items-center gap-x-2">
              <IconBadge icon={List} />
              <h2 className="text-base font-medium">
                Set up movement seven
              </h2>
            </div>
            <MovementSevenNameForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementSevenVideoForm 
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementSevenSetsForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementSevenRepsForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementSevenTempoForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementSevenRestForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />
  
            <div className="flex items-center gap-x-2">
              <IconBadge icon={List} />
              <h2 className="text-base font-medium">
                Set up movement eight
              </h2>
            </div>
            <MovementEightNameForm 
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementEightVideoForm 
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementEightSetsForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementEightRepsForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementEightTempoForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />

            <MovementEightRestForm
              initialData={chapter} 
              courseId={params.courseId}
              chapterId={params.chapterId}
            />
          </div>
        </div>
      </div>
    </>
   );
}
 
export default ChapterIdPage;