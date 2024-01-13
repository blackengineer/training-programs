import Image from 'next/image'

const DarkLogo = () => {
  return (
    <Image 
      height={130}
      width={130}
      alt='logo'
      src={'/logo.svg'}
    />
  )
}

export default DarkLogo