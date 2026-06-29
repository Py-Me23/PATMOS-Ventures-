import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, ServiceItem } from '../types';
import { SERVICES, CORE_VALUES } from '../data';
import LucideIcon from './LucideIcon';

const CAROUSEL_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80',
    title: 'Maritime Freight & Cargo Clearing',
    desc: 'Direct sea and air cargo dispatch clearances.'
  },
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80',
    title: 'Advisory Consulting & Compliance',
    desc: 'Fast-track company setup and GIPC compliance advisory.'
  },
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',
    title: 'Academic Placements & Welfare',
    desc: 'Accredited educational, medical, and social placements.'
  },
  {
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80',
    title: 'Premium Danish Goods Showroom',
    desc: 'Verified, high-durability Scandinavian home items.'
  }
];

function ServiceSlideshow({
  services,
  onViewDetails,
}: {
  services: ServiceItem[];
  onViewDetails: (id: string) => void;
}) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + services.length) % services.length);
  const next = () => setActive((p) => (p + 1) % services.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  const srv = services[active];

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={srv.id}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="rounded-2xl bg-gradient-to-br from-brand-blue-900 to-brand-blue-950 border border-white/10 shadow-xl p-8 sm:p-12 text-white flex flex-col gap-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-[9px] uppercase font-mono tracking-widest font-black text-brand-gold-400">
              Bilateral Gateway
            </span>
            <span className="text-[9px] font-mono text-gray-400">
              {active + 1} / {services.length}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-brand-gold-400/15 border border-brand-gold-400/25 flex items-center justify-center text-brand-gold-400 shadow-xl">
              <LucideIcon name={srv.iconName} size={32} />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-display font-black text-xl tracking-tight text-white">
                {srv.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-sans">
                {srv.summary}
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              {srv.detailedDescription}
            </p>
          </div>

          <ul className="space-y-2">
            {srv.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-200 font-sans">
                <LucideIcon name="CheckCircle" size={14} className="text-brand-gold-400 mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => onViewDetails(srv.id)}
              className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider text-brand-gold-400 hover:text-brand-gold-300 transition-colors cursor-pointer"
            >
              Inquire & Book
              <LucideIcon name="ChevronRight" size={13} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-brand-blue-950 border border-white/10 text-white flex items-center justify-center hover:border-brand-gold-400/40 hover:text-brand-gold-400 transition-all cursor-pointer"
        >
          <LucideIcon name="ChevronLeft" size={18} />
        </button>

        <div className="flex items-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all cursor-pointer ${i === active
                  ? 'w-6 h-2 bg-brand-gold-400'
                  : 'w-2 h-2 bg-gray-300 hover:bg-brand-gold-300'
                }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-brand-blue-950 border border-white/10 text-white flex items-center justify-center hover:border-brand-gold-400/40 hover:text-brand-gold-400 transition-all cursor-pointer"
        >
          <LucideIcon name="ChevronRight" size={18} />
        </button>
      </div>
    </div>
  );
}

interface HomeViewProps {
  onPageChange: (page: PageId) => void;
  onSelectService: (serviceId: string) => void;
}

export default function HomeView({ onPageChange, onSelectService }: HomeViewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleServiceClick = (serviceId: string) => {
    onSelectService(serviceId);
    onPageChange('contact');
  };

  const scrollToServices = () => {
    const el = document.getElementById('services-section-anchor');
    if (el) {
      const yOffset = -72;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div id="home-view" className="space-y-0">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen pt-28 md:pt-36 flex items-center bg-brand-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={CAROUSEL_IMAGES[currentSlide].url}
                alt={CAROUSEL_IMAGES[currentSlide].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-950/75 via-brand-blue-950/50 to-brand-blue-900/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-blue-950/30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue-400/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-blue-950 to-transparent pointer-events-none" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 w-full py-20 text-center flex flex-col items-center justify-center z-10">
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue-900/60 border border-brand-gold-400/30 backdrop-blur-sm self-center mx-auto"
            >
              <span className="w-2 h-2 rounded-full bg-brand-gold-400 animate-ping"></span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-brand-gold-300">
                Denmark-Ghana Cargo & Consultation Gateway
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
            >
              Intercontinental Logistics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-300 via-brand-gold-200 to-brand-gold-500 font-serif italic font-normal tracking-wide">
                Executed with Precision
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"
            >
              Leading Copenhagen-to-Accra gateway. We facilitate direct cargo transit, GIPC advisory, and university internship placements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-6"
            >
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={scrollToServices}
                  className="px-6 py-3.5 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 text-brand-blue-950 hover:from-brand-gold-300 hover:to-brand-gold-400 font-sans font-extrabold text-xs tracking-wider uppercase rounded shadow-lg shadow-brand-gold-500/20 active:scale-95 transition-all cursor-pointer flex items-center gap-2 group"
                >
                  Explore Our Services
                  <LucideIcon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onPageChange('contact')}
                  className="px-6 py-3.5 bg-brand-blue-900/40 hover:bg-brand-blue-900/70 text-white font-sans font-bold text-xs tracking-wider uppercase rounded border border-white/10 hover:border-brand-gold-400/40 active:scale-95 transition-all cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none translate-y-[1px]">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-12 md:h-16 text-white fill-current"
            preserveAspectRatio="none"
          >
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. SERVICES SLIDESHOW */}
      <section id="services-section-anchor" className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-bold text-xs uppercase tracking-widest text-brand-gold-600 font-sans px-3 py-1 rounded bg-brand-gold-50 border border-brand-gold-100 inline-block">
              Tailored Logistics & Facilitation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
              What We Offer
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Frictionless end-to-end cargo clearing, business advisory, and program placements.
            </p>
          </div>
          <ServiceSlideshow services={SERVICES} onViewDetails={handleServiceClick} />
        </div>
      </section>

      {/* 3. AGRICULTURE WORK OPPORTUNITY */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-bold text-xs uppercase tracking-widest text-brand-gold-600 font-sans px-3 py-1 rounded bg-brand-gold-50 border border-brand-gold-100 inline-block">
              Current Opportunity
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
              Agriculture Work Opportunity — Denmark
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Patmos Dimension Group is coordinating and facilitating placements for agricultural workers in Denmark. Your priority is our business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Flier Image */}
            <div className="lg:col-span-5 flex justify-center">
              <img
                src="/flier.jpeg"
                alt="Agriculture Work Opportunity Denmark Flier"
                className="rounded-2xl shadow-2xl w-full max-w-sm object-cover border border-gray-200"
              />
            </div>

            {/* Flier Content */}
            <div className="lg:col-span-7 space-y-8">

              {/* Sectors */}
              <div className="grid grid-cols-3 gap-4">
                {['Cattle', 'Dairy', 'Piggery'].map((sector) => (
                  <div key={sector} className="text-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <LucideIcon name="Sprout" size={24} className="text-brand-gold-500 mx-auto mb-2" />
                    <p className="font-display font-black text-sm text-brand-blue-950">{sector}</p>
                  </div>
                ))}
              </div>

              {/* Three Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 space-y-3">
                  <h4 className="font-sans font-black text-xs uppercase tracking-wider text-brand-blue-950 border-b border-gray-100 pb-2">
                    Who Can Apply
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Must be 18–35 years old',
                      'Current agricultural students',
                      'Agriculture, animal & livestock science backgrounds accepted'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 font-sans">
                        <LucideIcon name="CheckCircle" size={12} className="text-brand-gold-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 space-y-3">
                  <h4 className="font-sans font-black text-xs uppercase tracking-wider text-brand-blue-950 border-b border-gray-100 pb-2">
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Valid Passport',
                      'Academic Certificate & Transcript',
                      'Current CV',
                      'Drivers license (optional)',
                      'IELTS minimum 3.50',
                      'All expenses paid by candidate'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 font-sans">
                        <LucideIcon name="CheckCircle" size={12} className="text-brand-gold-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 space-y-3">
                  <h4 className="font-sans font-black text-xs uppercase tracking-wider text-brand-blue-950 border-b border-gray-100 pb-2">
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {[
                      '1–3 years work contract',
                      'Salary of €12/hr and above',
                      'Accommodation provided',
                      'Free healthcare',
                      'International experience',
                      'Work & residence permit'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 font-sans">
                        <LucideIcon name="CheckCircle" size={12} className="text-brand-gold-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => window.open('https://wa.me/233544188300', '_blank')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-sans font-extrabold text-xs tracking-wider uppercase rounded shadow-lg transition-all cursor-pointer"
                >
                  <LucideIcon name="MessageCircle" size={14} />
                  Apply via WhatsApp
                </button>
                <button
                  onClick={() => onPageChange('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-blue-950 hover:bg-brand-blue-900 text-white font-sans font-extrabold text-xs tracking-wider uppercase rounded shadow-lg transition-all cursor-pointer"
                >
                  <LucideIcon name="Mail" size={14} />
                  Send Inquiry
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-22 bg-[#02182c] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-4 space-y-6">
              <span className="font-bold text-xs uppercase tracking-widest text-brand-gold-400 font-sans block">
                Bilateral Compliance
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
                How We Safeguard Your Ventures
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We manage European compliance standards and local West African registrations transparently.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onPageChange('contact')}
                  className="px-5 py-3 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 text-brand-blue-950 hover:from-brand-gold-300 hover:to-brand-gold-400 font-sans font-extrabold text-xs tracking-wider uppercase rounded shadow-lg transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  Consult an Agent
                  <LucideIcon name="ArrowRight" size={13} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CORE_VALUES.map((col, idx) => {
                let colIcon = 'Shield';
                if (idx === 1) colIcon = 'Clock';
                if (idx === 2) colIcon = 'Globe';
                if (idx === 3) colIcon = 'Eye';
                return (
                  <div
                    key={col.title}
                    className="p-6 rounded-xl bg-brand-blue-900/40 border border-brand-blue-800/60 space-y-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-gold-400/10 flex items-center justify-center text-brand-gold-400 border border-brand-gold-400/20">
                      <LucideIcon name={colIcon} size={18} />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-sans font-bold text-sm text-white">{col.title}</h3>
                      <p className="text-xs text-gray-300 leading-relaxed">{col.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl bg-gradient-to-tr from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl border-2 border-brand-gold-400/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold-400/10 rounded-full blur-3xl transform translate-x-12 -translate-y-12"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[10px] sm:text-xs font-bold text-brand-gold-400 uppercase tracking-widest flex items-center gap-2">
                  <LucideIcon name="Handshake" size={14} />
                  Initiate Your Denmark-Ghana Trade Integration Today
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                  Need Sea Cargo Logistics, Business Registration, or Placement Support?
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                  Our Copenhagen, Cape Coast and Accra desks are active. Contact a bilateral coordinator today.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <button
                  onClick={() => onPageChange('contact')}
                  className="text-center px-6 py-4 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 text-brand-blue-950 hover:from-brand-gold-300 hover:to-brand-gold-400 font-sans font-black text-xs uppercase tracking-wider rounded shadow-xl transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
                >
                  Contact Global Desks
                </button>
                <button
                  onClick={() => handleServiceClick('consultancy-facilitation')}
                  className="text-center px-6 py-4 bg-brand-blue-900/60 hover:bg-brand-blue-800 text-white font-sans font-bold text-xs uppercase tracking-wider rounded border border-white/10 hover:border-brand-gold-400/40 transition-all cursor-pointer"
                >
                  Explore Advisory Coverage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}