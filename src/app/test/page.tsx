
import Navbar from '@/components/layouts/navbar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Services } from './components/services'
import Maps from './components/maps'
import Footer from '@/components/layouts/footer'

export default function Home2() {
  return (
    <>
      <Navbar />

      <div className="py-2 md:py-3">
        <div className="hero">
        <Hero />
        </div>

        <div id='about' className="content flex flex-col gap-14 lg:gap-28 bg-gradient-to-b from-[#e9dede] via-[#fffefe] to-white">
            <div className="about">
              <About />
            </div>

            <div id='services' className="services">
              <Services />
            </div>

            <div id='location' className="map">
            <Maps />
            </div>
           
        </div>
      </div>

      <Footer />
    </>
  )
}