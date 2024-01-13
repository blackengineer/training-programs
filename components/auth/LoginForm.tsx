'use client'

import * as z from 'zod'
import { useState, useTransition } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { LoginSchema } from '@/schemas'

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
import { login } from '@/actions/login'

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      login(values)
        .then((data) => {
          setError(data?.error)
          // setSuccess(data.success)
        })
    })
  }

  return (
    <CardWrapper
      headerLabel='Welcome back'
      backButtonLabel='Don&apos;t have an account? Sign up'
      backButtonHref='/auth/register'
      showSocial
    >
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className='space-y-4'>
            <FormField 
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="john.doe@example.com"
                      type="email"
                      required={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            disabled={isPending}
            type='submit'
            className='w-full'
            variant={'premium'}
          >
            Sign in
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default LoginForm