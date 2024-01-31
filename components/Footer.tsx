import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-between border-t p-6 text-xs text-muted-foreground'>
      <div className='mb-2'>
        &copy; 2024 Muscle Development Platforms
      </div>
      <div className='grid grid-cols-1 space-y-1'>
        <Link
          href={'/about'}>
          About
        </Link>
        <Link 
          href={'/terms'}>
          Terms of Service
        </Link>
        <Link href={'/privacy'}>
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}

export default Footer