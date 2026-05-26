import { motion } from 'motion/react';
import { PageId } from '../types';
import { EXECUTIVES } from '../data';
import LucideIcon from './LucideIcon';

interface AboutViewProps {
  onPageChange: (page: PageId) => void;
}

export default function AboutView({ onPageChange }: AboutViewProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="about-view" className="relative bg-white overflow-hidden scroll-mt-16">
      {/* Visual Header Banner */}
      <div className="bg-brand-blue-950 py-20 px-4 sm:px-6 relative text-center">
        <div className="absolute inset-0 opacity-15 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80" 
            className="w-full h-full object-cover filter grayscale"
            alt="Ocean cargo vessel"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-4xl mx-auto space-y-4">
          <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-brand-gold-400 bg-brand-blue-900/60 px-3 py-1.5 rounded-full border border-brand-gold-400/20 inline-block">
            Bilateral Corporate Backbone
          </span>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white mb-2">
            Intercontinental Integrity & Security
          </h1>
          <p className="font-sans text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Connecting Copenhagen and Accra. Elite cross-border cargo transit, business setup advisory, and academic coordination. Patmos Dimension Group combines Scandinavian structure with West African potential.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Detailed Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-brand-gold-600 font-mono text-[10px] uppercase font-bold tracking-widest block">
                Who We Are
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-blue-950 tracking-tight leading-tight">
                Our Mission & Stewardship
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-medium">
              We streamline international transport, corporate registrations, and educational programs through our fully vetted Copenhagen and Accra offices. Border clearing and academic placements require absolute vetting and standards. By leveraging our dual support desks, we offer secure, stress-free compliance.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onPageChange('contact')}
                className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-brand-blue-900 hover:text-brand-gold-600 transition-colors group cursor-pointer"
              >
                Inquire With Our Advisors
                <LucideIcon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Visual Flag / Intercontinental Duo Card */}
          <div className="lg:col-span-7">
            <div className="relative bg-gradient-to-br from-brand-blue-900 to-brand-blue-950 rounded-2xl p-6 sm:p-8 text-white border border-white/10 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇩🇰</span>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-slate-300 uppercase">Copenhagen Desk</span>
                  </div>
                  <span className="text-white/30 font-light">|</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇬🇭</span>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-slate-300 uppercase">Accra Desk</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
                    With registered coordinators physically operating at both ends of the supply route, we represent an active gateway that makes remote West African operations or study placements safe and predictable.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-brand-gold-400 font-bold text-xs uppercase tracking-wider mb-1 font-mono">Ocean Transit</div>
                      <p className="text-[11px] text-gray-300">Fast, streamlined cargo clearance, avoiding local port roadblocks.</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-brand-gold-400 font-bold text-xs uppercase tracking-wider mb-1 font-mono">Education Placements</div>
                      <p className="text-[11px] text-gray-300">Pre-approved clinical, social work, and medical postings in accredited centers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Leadership Team Section */}
        <div className="mt-24 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-brand-gold-600 font-mono text-[10px] uppercase font-bold tracking-widest block font-bold">
              Bilateral Leadership
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-blue-950 tracking-tight">
              Our Management Team
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-sans max-w-md mx-auto leading-relaxed">
              Our direct leaders executing Scandinavian corporate compliance with trusted West African operational execution.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {EXECUTIVES.map((exec) => (
              <motion.div
                key={exec.id}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-gray-100/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Executive Avatar Icon */}
<div className="relative w-full aspect-square bg-gradient-to-br from-brand-blue-900 to-brand-blue-950 flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-4 right-4 w-24 h-24 bg-brand-gold-400 rounded-full blur-2xl" />
    <div className="absolute bottom-4 left-4 w-16 h-16 bg-brand-gold-400 rounded-full blur-xl" />
  </div>
  <div className="relative z-10 flex flex-col items-center gap-3">
    <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-brand-gold-400/40 flex items-center justify-center">
      <LucideIcon name="User" size={36} className="text-brand-gold-400" />
    </div>
    <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 font-bold">
      {exec.role.split(' ')[0]}
    </span>
  </div>
</div>
                {/* Card Content */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="space-y-0.5">
                      <h4 className="font-display font-black text-sm text-brand-blue-950 tracking-tight leading-snug">
                        {exec.name}
                      </h4>
                      <p className="font-mono text-[9px] font-extrabold text-brand-gold-600 uppercase tracking-wider block">
                        {exec.role}
                      </p>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-sans font-medium">
                      {exec.bio}
                    </p>
                  </div>

                  {exec.email && (
                    <div className="pt-3 border-t border-gray-100">
                      <a
                        href={`mailto:${exec.email}`}
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-brand-blue-900 hover:text-brand-gold-600 transition-colors uppercase tracking-wider"
                      >
                        <LucideIcon name="Mail" size={12} />
                        Contact Desk
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
