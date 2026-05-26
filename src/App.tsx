import { useState, useEffect } from 'react';
import { PageId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');

  // Handle smooth scroll when a link is clicked
  const handlePageTransition = (newPage: PageId) => {
    setCurrentPage(newPage);
    
    const elementId = 
      newPage === 'home' 
        ? 'home-view' 
        : newPage === 'about'
          ? 'about-view'
          : newPage === 'services' 
            ? 'services-section-anchor' 
            : 'contact-view';

    const element = document.getElementById(elementId);
    if (element) {
      // Offset for fixed header
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    
    const element = document.getElementById('contact-view');
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Track scroll position to highlight active navbar section dynamically
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -45% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'home-view') setCurrentPage('home');
          else if (id === 'about-view') setCurrentPage('about');
          else if (id === 'services-section-anchor') setCurrentPage('services');
          else if (id === 'contact-view') setCurrentPage('contact');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const targetIds = ['home-view', 'about-view', 'services-section-anchor', 'contact-view'];
    const targets = targetIds.map(id => document.getElementById(id));

    targets.forEach((target) => {
      if (target) observer.observe(target);
    });

    return () => {
      targets.forEach((target) => {
        if (target) observer.unobserve(target);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 selection:bg-brand-gold-400 selection:text-brand-blue-950 font-sans">
      {/* Header with Sticky Navigation & Regional Support */}
      <Header currentPage={currentPage} onPageChange={handlePageTransition} />

      {/* Main content stacked chronologically */}
      <main className="flex-grow">
        <HomeView
          onPageChange={handlePageTransition}
          onSelectService={handleSelectService}
        />
        <AboutView onPageChange={handlePageTransition} />
        <ContactView />
      </main>

      {/* Interactive floating dual-helpdesk WhatsApp button */}
      <WhatsAppButton />

      {/* Corporate dual-flag footer */}
      <Footer onPageChange={handlePageTransition} />
    </div>
  );
}
