
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlatformOverview from './components/PlatformOverview';
import HowItWorks from './components/HowItWorks';
import DetectionClasses from './components/DetectionClasses';
import Features from './components/Features';
import DashboardMockup from './components/DashboardMockup';
import DemoSection from './components/DemoSection';
import Partners from './components/Partners';
import Support from './components/Support';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <PlatformOverview />
      <HowItWorks />
      <DetectionClasses />
      <Features />
      <DashboardMockup />
      <DemoSection />
      <Partners />
      <Support />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
