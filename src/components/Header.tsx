import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PageId, NavigationLink } from '../types';
import LucideIcon from './LucideIcon';

interface HeaderProps {
  currentPage: PageId;
  onPageChange: (page: PageId) => void;
}

const NAV_LINKS: NavigationLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' }
];

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll height to add background blur/shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (pageId: PageId) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Bar */}
      <nav
        id="main-nav"
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/75 backdrop-blur-lg shadow-sm py-3 border-b border-gray-200/40' 
            : 'bg-brand-blue-950/65 backdrop-blur-lg py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
         {/* Brand Logo - Elite gold-blue emblem with motion animation */}
<button 
  onClick={() => handleLinkClick('home')}
  className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
  aria-label="Patmos Dimension Group Home"
>
  <motion.div 
    initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
    animate={{ scale: 1, opacity: 1, rotate: 0 }}
    whileHover={{ 
      scale: 1.1, 
      rotate: 5,
      boxShadow: "0 4px 15px rgba(245, 158, 11, 0.2)"
    }}
    whileTap={{ scale: 0.92, rotate: -2 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="w-10 h-10 bg-white rounded-md flex items-center justify-center font-bold text-brand-blue-950 text-xl border-b-4 border-brand-gold-500 shrink-0 shadow-sm"
  >
    P
  </motion.div>

  <div className="flex flex-col overflow-hidden">
    {/* Slide-in letters for PATMOS DIMENSION GROUP */}
    <div className="flex items-center gap-0 overflow-hidden">
      {"PATMOS DIMENSION GROUP".split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.03 * i,
            duration: 0.35,
            ease: "easeOut",
          }}
          className={`font-sans font-bold leading-none tracking-tight transition-colors duration-300 text-sm sm:text-base ${
            isScrolled ? 'text-brand-blue-950' : 'text-white'
          } ${char === " " ? "w-1.5" : ""}`}
        >
          {char}
        </motion.span>
      ))}
    </div>
  </div>
</button>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative font-sans text-xs sm:text-sm font-semibold tracking-wide py-1 cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? isScrolled 
                        ? 'text-brand-blue-700' 
                        : 'text-brand-gold-300'
                      : isScrolled
                        ? 'text-gray-600 hover:text-brand-blue-700'
                        : 'text-gray-200 hover:text-brand-gold-300'
                  }`}
                >
                  {link.label}
                  {/* Sliding Underline indicator */}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                      isScrolled ? 'bg-brand-blue-700' : 'bg-brand-gold-400'
                    }`} />
                  )}
                </button>
              );
            })}
            
            {/* Quick CTA booking button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className={`px-4 py-2.5 rounded-md font-sans text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                isScrolled
                  ? 'bg-brand-blue-800 text-white hover:bg-brand-blue-900 shadow-md shadow-brand-blue-800/10 hover:translate-y-[-1px]'
                  : 'bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 text-brand-blue-950 hover:from-brand-gold-300 hover:to-brand-gold-400 shadow-lg shadow-brand-gold-500/20 hover:scale-[1.02]'
              }`}
            >
              Consult Now
            </button>
          </div>

          {/* Mobile Hamburguer trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-md md:hidden cursor-pointer transition-colors ${
              isScrolled 
                ? 'text-brand-blue-950 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <LucideIcon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-[280px] bg-brand-blue-950 text-white z-50 p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div>
          {/* Header of Mobile Menu */}
          <div className="flex justify-between items-center mb-8 border-b border-brand-blue-900 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-md text-brand-gold-400">Patmos Group</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 hover:bg-brand-blue-900 rounded-md cursor-pointer"
            >
              <LucideIcon name="X" size={20} className="text-white" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between text-left font-sans text-sm font-semibold tracking-wide py-2.5 px-3 rounded-md transition-all ${
                    isActive
                      ? 'bg-brand-blue-900/60 text-brand-gold-300 border-l-4 border-brand-gold-400'
                      : 'text-gray-300 hover:bg-brand-blue-900/30 hover:text-white'
                  }`}
                >
                  {link.label}
                  <LucideIcon name="ChevronRight" size={16} className={isActive ? 'text-brand-gold-300' : 'text-gray-500'} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Info or CTA on Mobile Bottom */}
        <div className="space-y-4 border-t border-brand-blue-900 pt-6">
          <button
            onClick={() => handleLinkClick('contact')}
            className="w-full text-center py-3 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 text-brand-blue-950 font-bold rounded-md font-sans text-xs tracking-wider shadow-lg"
          >
            Request Quotation
          </button>
          
          <div className="text-[10px] text-gray-400 text-center space-y-1">
            <p>Denmark • Ghana</p>
            <p>© 2026 Patmos Dimension Group</p>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile drawer */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/55 z-40 md:hidden backdrop-blur-sm"
        />
      )}
    </header>
  );
}
