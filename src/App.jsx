import React from 'react'
import { LanguageProvider } from "./context/LanguageContext"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import RecruiterBrief from "./components/recruiter/RecruiterBrief"
import SecurityLabs from "./components/security/SecurityLabs"
import Portfolio from "./components/portfolio/Portfolio"
import Career from "./components/career/Career"
import Experience from "./components/experience/Experience"
import Testimonials from "./components/testimonials/Testimonials"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <Header />
      <RecruiterBrief />
      <SecurityLabs />
      <Experience />
      <Portfolio />
      <Career />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </LanguageProvider>
  )
}

export default App
