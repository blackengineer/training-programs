import Link from 'next/link'

const Footer = () => {
  return (
    <div className='border-t flex justify-between p-6 text-xs text-muted-foreground'>
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