import Image from 'next/image'

const Logo = () => {
  return (
    <Image 
      height={130}
      width={130}
      alt='logo'
      src={'/dark-logo.svg'}
    />
  )
}

export default Logo