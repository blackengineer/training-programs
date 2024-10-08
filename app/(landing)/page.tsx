import LandingNavbar from './_components/LandingNavbar'
import LandingHero from './_components/LandingHero'
import Footer from '@/components/Footer'
import LandingContent from './_components/LandingContent'
import LandingFeature from './_components/LandingFeature'

const Home = () => {
  return (
    <main className='h-full'>
      <LandingNavbar />
      <div className='flex flex-col items-center justify-center'>
        <LandingHero />
      </div>
      <LandingFeature />
      <LandingContent />
      <Footer />
    </main>
  )
}

export default Home
