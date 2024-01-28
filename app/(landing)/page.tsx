import LandingNavbar from './_components/LandingNavbar'
import LandingHero from './_components/LandingHero'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main className='h-full'>
      <LandingNavbar />
      <div className='flex flex-col items-center justify-center'>
        <LandingHero />
      </div>
      <Footer />
    </main>
  )
}

export default Home
