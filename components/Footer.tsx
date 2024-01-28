import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex items-center justify-center gap-x-10 text-xs pt-40 pb-10 text-muted-foreground'>
      <div>
        &copy; 2024 Muscle Development Platforms
      </div>
      <div>
        <Link href={'/about'}>
          About
        </Link>
      </div>
      
    </div>
  )
}

export default Footer