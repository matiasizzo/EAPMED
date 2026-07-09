import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experts from '@/components/Experts'
import TourInfo from '@/components/TourInfo'
import Participants from '@/components/Participants'
import Venue from '@/components/Venue'
import Organizers from '@/components/Organizers'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experts />
        <TourInfo />
        <Participants />
        <Venue />
        <Organizers />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
