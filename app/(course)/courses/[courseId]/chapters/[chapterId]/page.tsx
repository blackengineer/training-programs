import { getChapter } from '@/actions/get-chapter'
import Banner from '@/components/Banner'
import { Separator } from '@/components/ui/Separator'
import { File } from 'lucide-react'
import { redirect } from 'next/navigation'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'
// import { CourseEnrollButton } from './_components/CourseEnrollButton'
// import { CourseProgressButton } from './_components/CourseProgressButton'
import { currentUser } from '@/lib/auth'
import { CourseEnrollButton } from './_components/CourseEnrollButton'
import { CourseProgressButton } from './_components/CourseProgressButton'
import { MovementOneVideoPlayer } from './_components/MovementOneVideoPlayer'
import { Preview } from '@/components/Preview'
import Footer from '@/components/Footer'

const ChapterIdPage = async ({
  params
}: {
  params: { courseId: string; chapterId: string}
}) => {
  const user = await currentUser()
  
  if (!user) {
    return redirect('/dashboard')
  }

  const {
    chapter,
    course,
    attachments,
    nextChapter,
    userProgress,
    purchase,
  } = await getChapter({
    userId: user.id,
    chapterId: params.chapterId,
    courseId: params.courseId,
  })

  if (!chapter || !course) {
    return redirect("/dashboard")
  }

  const isLocked = !chapter.isFree && !purchase
  const completeOnEnd = !!purchase && !userProgress?.isCompleted
  const vimeo_url: string = `https://player.vimeo.com/video` 
  const isLifting = chapter.movementOneVideoUrl && chapter.movementTwoVideoUrl && chapter.movementThreeVideoUrl && chapter.movementFourVideoUrl && chapter.movementFiveVideoUrl && chapter.movementSixVideoUrl && chapter.movementSevenVideoUrl && chapter.movementEightVideoUrl
  
  return (
    <div>
      {userProgress?.isCompleted && (
        <Banner 
          variant="success"
          label="You already completed this session."
        />
      )}
      {isLocked && (
        <Banner 
          variant="warning"
          label="You need to purchase this course to view this session."
        />
      )}
      <div className="pl-6 pt-6 flex flex-col max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">
          {chapter.title}
        </h2>
      </div>

      {isLifting && (
        <div className="p-6 flex flex-col max-w-4xl mx-auto pb-20 space-y-20">
          {!isLocked && (
            <div className='border rounded-md'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='font-semibold text-red-500'>A Block</TableHead>
                    <TableHead>Sets</TableHead>
                    <TableHead>Reps</TableHead>
                    <TableHead>Tempo</TableHead>
                    <TableHead>Rest</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>A1. {chapter?.movementOneName}</TableCell>
                    <TableCell>{chapter.movementOneSets}</TableCell>
                    <TableCell>{chapter.movementOneReps}</TableCell>
                    <TableCell>{chapter.movementOneTempo}</TableCell>
                    <TableCell>{chapter.movementOneRest}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>A2. {chapter?.movementTwoName}</TableCell>
                    <TableCell>{chapter.movementTwoSets}</TableCell>
                    <TableCell>{chapter.movementTwoReps}</TableCell>
                    <TableCell>{chapter.movementTwoTempo}</TableCell>
                    <TableCell>{chapter.movementTwoRest}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {chapter.movementOneVideoUrl &&
                <div className='p-2'>
                  <div className='relative aspect-video'>
                    <iframe 
                      src={`${vimeo_url}/${chapter.movementOneVideoUrl}`}
                      allow="fullscreen"
                      height="100%"
                      width="100%"
                      className='rounded-md'
                    />
                  </div>
                </div>
              } 
              {chapter.movementTwoVideoUrl && 
                <div className='p-2'>
                  <div className='relative aspect-video'>
                    <iframe 
                      src={`${vimeo_url}/${chapter.movementTwoVideoUrl}`}
                      allow="fullscreen"
                      height="100%"
                      width="100%"
                      className='rounded-md'
                    />
                  </div>
                </div>
              } 
            </div>
          )}
          {isLocked && (
            <div>
              <MovementOneVideoPlayer
                chapterId={params.chapterId}
                title={chapter.movementOneName!}
                courseId={params.courseId}
                isLocked={isLocked}
              />
            </div>
          )}  
            {!isLocked && (
            <div className='border rounded-md'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='font-semibold text-red-500'>B Block</TableHead>
                    <TableHead>Sets</TableHead>
                    <TableHead>Reps</TableHead>
                    <TableHead>Tempo</TableHead>
                    <TableHead>Rest</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>B1. {chapter?.movementThreeName}</TableCell>
                    <TableCell>{chapter.movementThreeSets}</TableCell>
                    <TableCell>{chapter.movementThreeReps}</TableCell>
                    <TableCell>{chapter.movementThreeTempo}</TableCell>
                    <TableCell>{chapter.movementThreeRest}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>B2. {chapter?.movementFourName}</TableCell>
                    <TableCell>{chapter.movementFourSets}</TableCell>
                    <TableCell>{chapter.movementFourReps}</TableCell>
                    <TableCell>{chapter.movementFourTempo}</TableCell>
                    <TableCell>{chapter.movementFourRest}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>B3. {chapter?.movementFiveName}</TableCell>
                    <TableCell>{chapter.movementFiveSets}</TableCell>
                    <TableCell>{chapter.movementFiveReps}</TableCell>
                    <TableCell>{chapter.movementFiveTempo}</TableCell>
                    <TableCell>{chapter.movementFiveRest}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {chapter.movementThreeVideoUrl && 
                <div className='p-2'>
                  <div className='relative aspect-video'>
                    <iframe 
                      src={`${vimeo_url}/${chapter.movementThreeVideoUrl}`}
                      allow="fullscreen"
                      height="100%"
                      width="100%"
                      className='rounded-md'
                    />
                  </div>
                </div>
              } 
              {chapter.movementFourVideoUrl && 
                <div className='p-2'>
                  <div className='relative aspect-video'>
                    <iframe 
                      src={`${vimeo_url}/${chapter.movementFourVideoUrl}`}
                      allow="fullscreen"
                      height="100%"
                      width="100%"
                      className='rounded-md'
                    />
                  </div>
                </div>
              } 
              {chapter.movementFiveVideoUrl && 
                <div className='p-2'>
                  <div className='relative aspect-video'>
                    <iframe 
                      src={`${vimeo_url}/${chapter.movementFiveVideoUrl}`}
                      allow="fullscreen"
                      height="100%"
                      width="100%"
                      className='rounded-md'
                    />
                  </div>
                </div>
              } 
            </div>
          )}
          
          {!isLocked && (
            <div className='border rounded-md'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='font-semibold text-red-500'>C Block</TableHead>
                    <TableHead>Sets</TableHead>
                    <TableHead>Reps</TableHead>
                    <TableHead>Tempo</TableHead>
                    <TableHead>Rest</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>C1. {chapter?.movementSixName}</TableCell>
                    <TableCell>{chapter.movementSixSets}</TableCell>
                    <TableCell>{chapter.movementSixReps}</TableCell>
                    <TableCell>{chapter.movementSixTempo}</TableCell>
                    <TableCell>{chapter.movementSixRest}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>C2. {chapter?.movementSevenName}</TableCell>
                    <TableCell>{chapter.movementSevenSets}</TableCell>
                    <TableCell>{chapter.movementSevenReps}</TableCell>
                    <TableCell>{chapter.movementSevenTempo}</TableCell>
                    <TableCell>{chapter.movementSevenRest}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>C3. {chapter?.movementEightName}</TableCell>
                    <TableCell>{chapter.movementEightSets}</TableCell>
                    <TableCell>{chapter.movementEightReps}</TableCell>
                    <TableCell>{chapter.movementEightTempo}</TableCell>
                    <TableCell>{chapter.movementEightRest}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {chapter.movementSixVideoUrl && 
                <div className='p-2'>
                  <div className='relative aspect-video'>
                    <iframe 
                      src={`${vimeo_url}/${chapter.movementSixVideoUrl}`}
                      allow="fullscreen"
                      height="100%"
                      width="100%"
                      className='rounded-md'
                    />
                  </div>
                </div>
              } 
              {chapter.movementSevenVideoUrl && 
                <div className='p-2'>
                  <div className='relative aspect-video'>
                    <iframe 
                      src={`${vimeo_url}/${chapter.movementSevenVideoUrl}`}
                      allow="fullscreen"
                      height="100%"
                      width="100%"
                      className='rounded-md'
                    />
                  </div>
                </div>
              } 
              {chapter.movementEightVideoUrl && 
                <div className='p-2'>
                  <div className='relative aspect-video'>
                    <iframe 
                      src={`${vimeo_url}/${chapter.movementEightVideoUrl}`}
                      allow="fullscreen"
                      height="100%"
                      width="100%"
                      className='rounded-md'
                    />
                  </div>
                </div>
              } 
            </div>
          )}

          <div>
            <div className="border rounded-md">
              <div className="p-4 flex flex-col md:flex-row items-center justify-between">
                <h2 className='text-xl font-semibold mb-2'>
                  {chapter.title}
                </h2>
                {purchase ? (
                  <div>
                    <CourseProgressButton 
                      chapterId={params.chapterId}
                      courseId={params.courseId}
                      nextChapterId={nextChapter?.id}
                      isCompleted={!!userProgress?.isCompleted}
                    />
                  </div>
                ) : (
                  <CourseEnrollButton
                    courseId={params.courseId}
                    price={course.price!}
                  />
                )}
              </div>
              {!!attachments.length && (
                <>
                  <Separator />
                  <div className='m-4'>
                    {attachments.map((attachment) => (
                      <a
                        href={attachment.url}
                        target="_blank"
                        key={attachment.id}
                        className='flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline'
                      >
                        <File />
                        <p className='line-clamp-1'>
                          {attachment.name}
                        </p>
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {!isLifting && (
        <div className="p-6 flex flex-col max-w-4xl mx-auto pb-20 space-y-20">
          {!isLocked && (
            <div className='border rounded-md'>
              {chapter.movementOneVideoUrl &&
                <div className='p-2'>
                  <div className='relative aspect-video'>
                    <iframe 
                      src={`${vimeo_url}/${chapter.movementOneVideoUrl}`}
                      allow="fullscreen"
                      height="100%"
                      width="100%"
                      className='rounded-md'
                    />
                  </div>
                </div>
              }
              <Preview value={chapter.description!} />
            </div>
          )}
          {isLocked && (
            <div>
              <MovementOneVideoPlayer
                chapterId={params.chapterId}
                title={chapter.movementOneName!}
                courseId={params.courseId}
                isLocked={isLocked}
              />
            </div>
          )}  
          <div>
            <div className="border rounded-md">
              <div className="p-4 flex flex-col md:flex-row items-center justify-between">
                <h2 className='text-xl font-semibold mb-2'>
                  {chapter.title}
                </h2>
                {purchase ? (
                  <div>
                    <CourseProgressButton 
                      chapterId={params.chapterId}
                      courseId={params.courseId}
                      nextChapterId={nextChapter?.id}
                      isCompleted={!!userProgress?.isCompleted}
                    />
                  </div>
                ) : (
                  <CourseEnrollButton
                    courseId={params.courseId}
                    price={course.price!}
                  />
                )}
              </div>
              {!!attachments.length && (
                <>
                  <Separator />
                  <div className='m-4'>
                    {attachments.map((attachment) => (
                      <a
                        href={attachment.url}
                        target="_blank"
                        key={attachment.id}
                        className='flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline'
                      >
                        <File />
                        <p className='line-clamp-1'>
                          {attachment.name}
                        </p>
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default ChapterIdPage