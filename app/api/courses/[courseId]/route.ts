import { currentUser } from '@/lib/auth'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

// const { Video } = new Mux(
//   process.env.MUX_TOKEN_ID!,
//   process.env.MUX_TOKEN_SECRET!,
// );

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const user = await currentUser()

    if (!user || user.role !== 'ADMIN') {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: user.id,
      },
      // include: {
      //   chapters: {
      //     include: {
      //       movementOneMuxData: true,
      //       movementTwoMuxData: true,
      //       movementThreeMuxData: true,
      //       movementFourMuxData: true,
      //       movementFiveMuxData: true,
      //       movementSixMuxData: true,
      //       movementSevenMuxData: true,
      //       movementEightMuxData: true,
      //       movementNineMuxData: true,
      //     }
      //   }
      // }
    })

    if (!course) {
      return new NextResponse('Not found', { status: 404 })
    }

    // for (const chapter of course.chapters) {
    //   if (chapter.movementOneMuxData?.assetId) {
    //     await Video.Assets.del(chapter.movementOneMuxData.assetId)
    //   }
    // }

    const deletedCourse = await db.course.delete({
      where: {
        id: params.courseId,
      },
    })

    return NextResponse.json(deletedCourse)
  } catch (error) {
    console.log('[COURSE_ID_DELETE]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: {courseId: string }}
) {
  try {
    const user = await currentUser()
    const { courseId } = params
    const values = await req.json()

    if (!user || user.role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const course = await db.course.update({
      where: {
        id: courseId,
        userId: user.id,
      },
      data: {
        ...values,
      }
    })

    return NextResponse.json(course)
  } catch (error) {
    console.log('[COURSE_ID]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}