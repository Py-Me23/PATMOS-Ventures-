import { PageId } from '../types';
import { SERVICES, OFFICES } from '../data';
import LucideIcon from './LucideIcon';
import React, { useState } from 'react';

interface FooterProps {
  onPageChange: (page: PageId) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subEmail, setSubEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail.trim()) {
      setEmailSubscribed(true);
      setSubEmail('');
      setTimeout(() => setEmailSubscribed(false), 5000);
    }
  };

  const handleNavigate = (page: PageId) => {
    onPageChange(page);
  };

  return (
    <footer className="bg-brand-blue-950 text-gray-300 border-t border-brand-gold-400/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Strategic Vision */}
          <div className="space-y-5">
            <button 
              onClick={() => handleNavigate('home')}
              className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-brand-gold-400 to-brand-gold-500 p-[1.5px]">
                <div className="w-full h-full bg-brand-blue-950 rounded-[6px] flex items-center justify-center font-display text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-300 via-white to-brand-gold-400">
                  P
                </div>
              </div>
              <div>
                <h3 className="font-display font-black text-sm tracking-widest text-white">PATMOS DIMENSION</h3>
                <span className="text-[10px] uppercase font-bold text-brand-gold-400 tracking-widest">Global Logistics Group</span>
              </div>
            </button>
            
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Serving as a secure intercontinental bridge between Denmark and West Africa. We simplify commercial logistics, facilitate high-yield business partnerships, and manage elite cross-cultural internships.
            </p>

            {/* Accreditation/Safety badges */}
            <div className="flex items-center gap-3 pt-2">
              <span className="p-1.5 rounded bg-brand-blue-900/40 border border-brand-blue-800 text-[10px] font-bold text-brand-gold-300 tracking-wider flex items-center gap-1">
                <LucideIcon name="Shield" size={10} />
                Schengen Vetted
              </span>
              <span className="p-1.5 rounded bg-brand-blue-900/40 border border-brand-blue-800 text-[10px] font-bold text-brand-gold-300 tracking-wider flex items-center gap-1">
                <LucideIcon name="Scale" size={10} />
                GIPC Registered
              </span>
            </div>
          </div>

          {/* Column 2: Direct Solutions Shortcuts */}
          <div>
            <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-6 pb-2 border-b-2 border-brand-gold-500/30 inline-block">
              Core Divisions
            </h4>
            <ul className="space-y-3.5 text-xs">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleNavigate('contact')}
                    className="hover:text-brand-gold-300 transition-colors flex items-center gap-2 group text-left cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500/60 group-hover:bg-brand-gold-400 transition-all"></span>
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Bi-regional Branch Points */}
          <div>
            <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-6 pb-2 border-b-2 border-brand-gold-500/30 inline-block">
              Intercontinental Offices
            </h4>
            <div className="space-y-6">
              {OFFICES.map((branch) => (
                <div key={branch.id} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{branch.country === 'Denmark' ? '🇩🇰' : '🇬🇭'}</span>
                    <h5 className="font-sans font-bold text-xs text-white">
                      {branch.city}, {branch.country}
                    </h5>
                  </div>
                  <p className="text-[11px] text-gray-400 font-medium leading-normal pl-5">
                    {branch.address}
                  </p>
                  <p className="text-[11px] font-semibold text-brand-gold-400 pl-5">
                    Tel: {branch.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter & Strategic Registration */}
          <div className="space-y-5">
            <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-2 pb-2 border-b-2 border-brand-gold-500/30 inline-block">
              Bilateral Briefings
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Stay updated on EU-ECOWAS compliance norms, sea-freight vessel schedules, and upcoming student internship terms.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  placeholder="Enter business email..."
                  required
                  className="w-full text-xs bg-brand-blue-900/60 border border-brand-blue-800 text-white rounded-md pl-3 pr-10 py-3 focus:outline-none focus:border-brand-gold-400 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 hover:from-brand-gold-300 hover:to-brand-gold-400 text-brand-blue-950 rounded font-sans text-[11px] font-black uppercase transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  <LucideIcon name="Mail" size={13} />
                </button>
              </div>
              
              {emailSubscribed && (
                <p className="text-[10px] text-emerald-400 font-semibold animate-pulse flex items-center gap-1">
                  <LucideIcon name="CheckCircle2" size={10} />
                  Subscription active! Enjoy our trade updates.
                </p>
              )}
            </form>

            <div className="pt-3">
              <p className="text-[11px] font-sans text-gray-400">Quick Links:</p>
              <div className="flex gap-4 mt-2 text-xs">
                <button onClick={() => handleNavigate('services')} className="hover:text-brand-gold-300 transition-colors cursor-pointer">Our Services</button>
                <span className="text-brand-blue-800">•</span>
                <button onClick={() => handleNavigate('contact')} className="hover:text-brand-gold-300 transition-colors cursor-pointer">Global Contact</button>
              </div>
            </div>
          </div>

        </div>

        {/* Horizontal Line */}
        <div className="border-t border-brand-blue-900 my-8"></div>

        {/* Footer Base Info & Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-sans">
          <p>© 2026 Patmos Dimension Group Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <LucideIcon name="Shield" size={12} className="text-brand-gold-500" />
              Schengen-West Africa Shipping Alliance
            </span>
            <span>•</span>
            <span className="text-gray-400 hover:text-brand-gold-400 select-none">
              ISO 9001 Transit Verified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
