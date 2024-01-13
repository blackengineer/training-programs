import { Button } from '@/components/ui/Button'
import LandingNavbar from './_components/LandingNavbar'
import LandingHero from './_components/LandingHero'

const Home = () => {
  return (
    <main className='h-full bg-zinc-950'>
      <LandingNavbar />
      <div className='flex flex-col items-center justify-center'>
        <LandingHero />
      </div>
    </main>
  )
}

export default Home
