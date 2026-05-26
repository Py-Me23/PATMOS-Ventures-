import { useState, useEffect } from 'react';
import LucideIcon from './LucideIcon';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Trigger brief tooltip teaser shortly after load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Auto-hide tooltip after 6 seconds
      const hideTimer = setTimeout(() => setShowTooltip(false), 6000);
      return () => clearTimeout(hideTimer);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = (phone: string, country: string) => {
    const textStr = encodeURIComponent(
      `Hello Patmos Dimension Group, I am reaching out from the website regarding your ${country}-based Trade / Logistics/ Facilitation services.`
    );
    const waUrl = `https://wa.me/${phone}?text=${textStr}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip Welcome Prompt */}
      {showTooltip && !isOpen && (
        <div className="bg-white text-xs text-slate-800 font-medium px-4 py-2.5 rounded-lg shadow-xl border border-gray-100 max-w-[220px] mb-3 animate-bounce mr-1">
          <div className="font-bold text-brand-blue-900 flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-ping"></span>
            Agent Online
          </div>
          Speak with our logistics coordinators in DK or GH via WhatsApp!
        </div>
      )}

      {/* Connection Selection Portal */}
      {isOpen && (
        <div className="bg-white rounded-xl shadow-2xl p-5 border border-slate-100 w-[290px] mb-4 text-slate-800 animate-slideUp">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
            <h4 className="font-sans font-bold text-sm text-brand-blue-950">Chat with Logistics Expert</h4>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <LucideIcon name="X" size={16} />
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mb-4 font-medium leading-relaxed">
            Select a regional team member to initiate a direct WhatsApp inquiry. Expect response within minutes.
          </p>

          <div className="space-y-2.5">
            {/* Denmark Hub Advisor */}
            <button
              onClick={() => openWhatsApp('4526297816', 'Denmark')}
              className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-brand-blue-300 hover:bg-brand-blue-50/50 transition-all text-left group"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xl">🇩🇰</span>
                <div>
                  <h5 className="font-sans font-bold text-xs text-brand-blue-900">Denmark Logistics Hub</h5>
                  <p className="text-[10px] text-gray-500">Copenhagen Office • +45 4255 9090</p>
                </div>
              </div>
              <LucideIcon name="ChevronRight" size={14} className="text-gray-400 group-hover:text-brand-blue-600 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Ghana Hub Advisor */}
            <button
              onClick={() => openWhatsApp('233244567890', 'Ghana')}
              className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-brand-gold-300 hover:bg-brand-gold-50/30 transition-all text-left group"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xl">🇬🇭</span>
                <div>
                  <h5 className="font-sans font-bold text-xs text-brand-blue-900">Ghana Facilitation Desk</h5>
                  <p className="text-[10px] text-gray-500">Accra Spintex Office • +233 24 456 7890</p>
                </div>
              </div>
              <LucideIcon name="ChevronRight" size={14} className="text-gray-400 group-hover:text-brand-gold-600 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-50 text-center">
            <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Fast Response Active
            </span>
          </div>
        </div>
      )}

      {/* Primary Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer focus:outline-none"
        aria-label="Contact on WhatsApp"
      >
        {/* Pulsing indicator */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10 group-hover:animate-none opacity-75"></span>
        
        {isOpen ? (
          <LucideIcon name="X" size={24} className="font-bold" />
        ) : (
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </button>
    </div>
  );
}
