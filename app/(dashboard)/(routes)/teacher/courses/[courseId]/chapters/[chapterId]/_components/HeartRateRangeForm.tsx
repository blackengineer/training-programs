'use client'

import * as z from 'zod'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/Form'

import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Chapter } from '@prisma/client'
import { cn } from '@/lib/utils'

interface HeartRateRangeFormProps {
  initialData: Chapter
  courseId: string
  chapterId: string
}

const formSchema = z.object({
  heartRateRange: z.string().min(1),
})

export const HeartRateRangeForm = ({
  initialData,
  courseId, 
  chapterId,
}: HeartRateRangeFormProps) => {
  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => setIsEditing((current) => !current)

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      heartRateRange: initialData?.heartRateRange || ""
    },
  })

  const { isSubmitting, isValid } = form.formState

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values)
      toast.success('Chapter updated')
      toggleEdit()
      router.refresh()
    } catch {
      toast.error('Something went wrong')
    }
  }

  return (
    <div className='mt-6 border rounded-md p-4'>
      <div className='font-medium flex items-center justify-between'>
        Heart rate range
        <Button onClick={toggleEdit} variant='ghost'>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className='h-4 w-4 mr-2' />
              Edit heart rate range
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className={cn(
          'text-sm mt-2',
          !initialData.heartRateRange && 'text-slate-500 italic'
        )}>
          {initialData.heartRateRange || 'Empty'}
        </p>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4 mt-4'
          >
            <FormField 
              control={form.control}
              name='heartRateRange'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      disabled={isSubmitting}
                      placeholder='140-565 bpm'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex items-center gap-x-2'>
              <Button
                disabled={!isValid || isSubmitting}
                type='submit'
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  )
}