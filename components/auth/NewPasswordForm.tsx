'use client'

import * as z from 'zod'
import { useState, useTransition } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'

import { NewPasswordSchema } from '@/schemas'

import {
  Form,
  FormControl,
  FormField, 
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form'

import CardWrapper from '@/components/auth/CardWrapper'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { FormError } from '@/components/FormError'
import { FormSuccess } from '@/components/FormSuccess'
import { newPassword } from '@/actions/new-password'

const NewPasswordFrom = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      newPassword(values, token)
        .then((data) => {
          setError(data?.error)
          setSuccess(data?.success)
        })
    })
  }

  return (
    <CardWrapper
      headerLabel='Enter a new password'
      backButtonLabel='Back to login'
      backButtonHref='/auth/login'
    >
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className='space-y-4'>
            <FormField 
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                      required={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error}/>
          <FormSuccess message={success}/>
          <Button
            isPending={isPending}
            disabled={isPending}
            type='submit'
            className='w-full'
            variant={'premium'}
          >
            Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default NewPasswordFrom