import Link from 'next/link'

const Footer = () => {
  return (
    <div className='border-t flex justify-between p-6 text-xs text-muted-foreground'>
      <div>
        &copy; 2024 Muscle Development Platforms
      </div>
      <div className='grid md:grid-cols-3'>
        <div>
          <Link
            href={'/about'}>
            About
          </Link>
        </div>
        <div>
          <Link 
            className='mr-6'
            href={'/terms'}>
            Terms of Service
          </Link>
        </div>
        <div>
          <Link href={'/privacy'}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div> 
  )
}

export default Footer