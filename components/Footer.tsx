import Link from 'next/link'

const Footer = () => {
  return (
    <div className='border-t flex justify-between p-6 text-xs text-muted-foreground'>
      <div>
        &copy; 2024 Muscle Development Platforms
      </div>
      <div>
        <Link 
          className='mr-6'
          href={'/about'}>
          About
        </Link>
        <Link 
          className='mr-6'
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