import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
import PainPointsAndSolution from './components/PainPointsAndSolution'
import WhyChooseSection from './components/WhyChooseSection'
import RealResultsSection from './components/RealResultsSection'
import HowItWorks from './components/HowItWorks'
import VideoCarousel from './components/VideoCarousel'
import CustomerFeedback from './components/CustomerFeedback'
import ScienceSection from './components/ScienceSection'
import FAQSection from './components/FAQSection'
import PricingPlans from './components/PricingPlans'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='font-primary'>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <PainPointsAndSolution />
      <WhyChooseSection />
      <HowItWorks />
      <RealResultsSection />
      <VideoCarousel />
      <CustomerFeedback />
      <ScienceSection />
      <FAQSection />
      <PricingPlans />
      <Footer />
      </div>

    </>
  )
}

export default App
