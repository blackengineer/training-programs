// TODO: Build on this page as a user profile page

import { ExtendedUser } from '@/next-auth'
import { Card, CardHeader } from '@/components/ui/Card'

interface UserInfoProps {
  user?: ExtendedUser
  label: string
}

export const UserProfile = ({
  user,
  label,
}: UserInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <p className='text-xl font-semibold text-center'>
          {label}
        </p>
      </CardHeader>
    </Card>
  )
}