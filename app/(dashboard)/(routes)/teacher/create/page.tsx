'use client'

import * as z from 'zod'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from '@/components/ui/Form'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useCurrentUser } from '@/hooks/use-current-user'

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
})

const CreatePage = () => {
  const user = useCurrentUser()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    },
  })

  const isAdminUser = user?.role === 'ADMIN'

  if (!isAdminUser) {
    return redirect('/dashboard')
  }

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/teacher/courses/${response.data.id}`)
      toast.success("Course created")
    } catch {
      toast.error("Course could not be created")
    }
  }

  return ( 
    <div className='p-4 max-w-5xl mx-auto flex md:items-center md:justify-center h-full'>
      <div>
        <h1 className='text-base'>
          Name your course
        </h1>
        <p className='text-sm text-slate-600'>
          What would you like to name your course? Don&apos;t worry, you can change this later.
        </p>
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 mt-8'
          >
            <FormField 
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Course title
                  </FormLabel>
                  <FormControl>
                    <Input 
                      disabled={isSubmitting}
                      placeholder="e.g. 'Marathon'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What will people train for in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex items-center gap-x-2'>
              <Link href={'/'}>
                <Button
                  type='button'
                  variant='ghost'
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type='submit'
                disabled={!isValid || isSubmitting}
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
   )
}
 
export default CreatePage