import Logo from '@/components/Logo'
import Link from 'next/link'

interface HeaderProps {
  label: string
}

const Header = ({
  label,
}: HeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-y-4 items-center justify-end'>
      <Link href={'/'}>
        <Logo />
      </Link>
      <p className='text-muted-foreground text-sm'>
        {label}
      </p>
    </div>
  )
}

export default Header