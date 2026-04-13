import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import ServiceAreas from './components/ServiceAreas'
import Activity from './components/Activity'
import CTASection from './components/CTASection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TrustSection />
      <HowItWorks />
      <Services />
      <ServiceAreas />
      <Activity />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  )
}
