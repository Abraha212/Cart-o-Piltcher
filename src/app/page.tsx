import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Strip from '@/components/Strip'
import About from '@/components/About'
import Plans from '@/components/Plans'
import Pricing from '@/components/Pricing'
import Transformation from '@/components/Transformation'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strip />
        <About />
        <Plans />
        <Pricing />
        <Transformation />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
