import CardWrapper from '@/components/auth/CardWrapper'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel='Oops! Something went wrong! 🤔'
      backButtonHref='/auth/login'
      backButtonLabel='Back to login'
    >
      <div className='w-full flex items-center justify-center mt-5'>
        <ExclamationTriangleIcon className='text-destructive'/>
      </div>
    </CardWrapper>
  )
}