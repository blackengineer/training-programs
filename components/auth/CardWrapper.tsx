'use client'

import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/Card'
import Header from '@/components/auth/Header'
import Social from '@/components/auth/Social'
import BackButton from '@/components/auth/BackButton'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps) => {
  return (
    <Card className='rounded-lg w-[400px]'>
      <CardHeader>
        <Header label={headerLabel} />
        <CardContent>
          {children}
        </CardContent>
        {showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )}
        <CardFooter>
          <BackButton 
            label={backButtonLabel}
            href={backButtonHref}
          />
        </CardFooter>
      </CardHeader>
    </Card>
  )
}

export default CardWrapper