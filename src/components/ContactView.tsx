import React, { useState } from 'react';
import { OFFICES } from '../data';
import LucideIcon from './LucideIcon';
import emailjs from '@emailjs/browser';

export default function ContactView() {
  const [selectedBranchId, setSelectedBranchId] = useState(OFFICES[0].id);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Cargo Shipping Quote (DK-GH)',
    message: '',
    officeCountry: 'Denmark'
  });

  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const QUICK_SUBJECTS = [
    'Cargo Shipping Quote (DK-GH)',
    'Parcel Express Courier Courier',
    'Danish Student Internship Placement',
    'GIPC Business Registration Aid',
    'Used Furniture & Electronics Sale'
  ];

  const currentBranch = OFFICES.find(b => b.id === selectedBranchId) || OFFICES[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectClick = (subText: string) => {
    setFormData(prev => ({
      ...prev,
      subject: subText
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendResult('idle');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      subject_line: formData.subject,
      office_destination: formData.officeCountry,
      message_content: formData.message,
    };

    try {
      const serviceId = (window as any)._ENV_?.EMAILJS_SERVICE_ID || '';
      const templateId = (window as any)._ENV_?.EMAILJS_TEMPLATE_ID || '';
      const publicKey = (window as any)._ENV_?.EMAILJS_PUBLIC_KEY || '';

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setSendResult('success');
        setFeedbackMsg('Your message was successfully routed to our dispatch coordinators! An agent from our office will reach out within 2 hours.');
        setFormData({ name: '', email: '', phone: '', subject: 'Cargo Shipping Quote (DK-GH)', message: '', officeCountry: 'Denmark' });
      } else {
        await new Promise(resolve => setTimeout(resolve, 1800));
        setSendResult('success');
        setFeedbackMsg('Inquiry routed! [Demo Mode Active] Your message has been prepared for Patmos Dimension Group\'s direct servers. Our Copenhagen or Accra desk will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', subject: 'Cargo Shipping Quote (DK-GH)', message: '', officeCountry: 'Denmark' });
      }
    } catch (err: any) {
      console.error('EmailJS Send error:', err);
      setSendResult('error');
      setFeedbackMsg('Failed to route via automated servers. Please click the Floating WhatsApp widget on the right for immediate 24/7 priority booking, or copy our direct email links.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contact-view" className="space-y-0 pt-20">
      
      {/* Editorial Header */}
      <section className="bg-gradient-to-tr from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-gold-500 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="font-bold text-xs uppercase tracking-widest text-brand-gold-400 font-mono px-3 py-1.5 rounded bg-brand-blue-900/60 inline-block border border-brand-gold-400/25">
            Operational Desk Access
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-none text-white">
            Connect With Logisticians
          </h1>
          <p className="font-sans text-xs sm:text-sm lg:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Our dual Copenhagen, Denmark and Accra, Ghana structures are active. Submit inquiries, ask questions, or verify transit vessel times instantly.
          </p>
        </div>
      </section>

      {/* Main interactive grid split */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Branch Switcher & Google Maps Embed */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md space-y-6">
                
                <h3 className="font-sans font-bold text-xs text-brand-blue-950 uppercase tracking-wider">
                  Select Regional Branch Office
                </h3>

                {/* Switcher Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  {OFFICES.map((branch) => {
                    const isSelected = branch.id === selectedBranchId;
                    return (
                      <button
                        key={branch.id}
                        onClick={() => {
                          setSelectedBranchId(branch.id);
                          setFormData(prev => ({
                            ...prev,
                            officeCountry: branch.country
                          }));
                        }}
                        className={`p-3.5 rounded-xl border font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-brand-blue-950 border-brand-gold-400 text-white shadow-md'
                            : 'bg-slate-50 border-gray-100 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>{branch.country === 'Denmark' ? '🇩🇰' : '🇬🇭'}</span>
                        <span>{branch.city}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Branch Details Card */}
                <div className="p-4 rounded-xl bg-slate-50 border border-gray-100 space-y-4 text-xs">
                  
                  {/* Address + Reg Number */}
                  <div className="flex items-start gap-3">
                    <LucideIcon name="MapPin" className="text-brand-gold-500 shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-sans font-bold text-slate-900 uppercase tracking-wide">Physical Address</h4>
                      <p className="text-slate-600 mt-1 leading-normal font-sans">{currentBranch.address}</p>
                      {currentBranch.regNumber && (
                        <p className="text-slate-500 mt-1 font-sans flex items-center gap-1">
                          <LucideIcon name="FileText" size={11} className="text-brand-gold-500 shrink-0" />
                          {currentBranch.regNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <LucideIcon name="Phone" className="text-brand-gold-500 shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-sans font-bold text-slate-900 uppercase tracking-wide">Regional Telephone</h4>
                      <a 
                        href={`tel:${currentBranch.phoneRaw}`} 
                        className="text-brand-blue-800 hover:text-brand-blue-950 font-bold mt-1 inline-block"
                      >
                        {currentBranch.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <LucideIcon name="Mail" className="text-brand-gold-500 shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-sans font-bold text-slate-900 uppercase tracking-wide">Inbound Corporate Email</h4>
                      <a 
                        href={`mailto:${currentBranch.email}`}
                        className="text-brand-blue-800 hover:text-brand-blue-950 mt-1 inline-block hover:underline"
                      >
                        {currentBranch.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3">
                    <LucideIcon name="Clock" className="text-brand-gold-500 shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-sans font-bold text-slate-900 uppercase tracking-wide">Operational Times</h4>
                      <p className="text-slate-600 mt-1 font-sans">{currentBranch.workingHours}</p>
                    </div>
                  </div>

                </div>

                {/* Maps Embed */}
                <div className="relative rounded-xl overflow-hidden h-64 border border-gray-200">
                  <iframe
                    title={`${currentBranch.city} branch direction map`}
                    src={currentBranch.mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 md:p-10 shadow-xl space-y-6">
                
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-brand-blue-950">
                    Bilateral Inquiry Form
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill out all mandatory parameters. Your request is automatically synced with our operational offices in Copenhagen and Accra.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Your Full Name *</label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="w-full text-xs bg-slate-50 border border-gray-200 rounded-lg p-3 text-slate-800 focus:outline-none focus:border-brand-blue-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Business Email *</label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@company.com"
                        required
                        className="w-full text-xs bg-slate-50 border border-gray-200 rounded-lg p-3 text-slate-800 focus:outline-none focus:border-brand-blue-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="phone-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Mobile Number (with country code)</label>
                      <input
                        id="phone-input"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+45 4255 9090 or +233 24..."
                        className="w-full text-xs bg-slate-50 border border-gray-200 rounded-lg p-3 text-slate-800 focus:outline-none focus:border-brand-blue-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="office-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Destination Division Hub</label>
                      <select
                        id="office-select"
                        name="officeCountry"
                        value={formData.officeCountry}
                        onChange={handleInputChange}
                        className="w-full text-xs bg-slate-50 border border-gray-200 rounded-lg p-3 text-slate-800 focus:outline-none focus:border-brand-blue-600 transition-colors"
                      >
                        <option value="Denmark">Denmark (Copenhagen Cargo sorting & Export)</option>
                        <option value="Ghana">Ghana (Accra/Spintex Logistics & GIPC Advisory)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Subject Line</label>
                    <input
                      id="subject-input"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Sea Freight Container Booking Quote"
                      className="w-full text-xs bg-slate-50 border border-gray-200 rounded-lg p-3 text-slate-800 focus:outline-none focus:border-brand-blue-600 transition-colors"
                    />
                    <div className="pt-2">
                      <p className="text-[10px] text-gray-400 font-medium">Quick prefill options:</p>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        {QUICK_SUBJECTS.map((sub, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleSubjectClick(sub)}
                            className={`px-2.5 py-1.5 font-sans rounded text-[10px] border tracking-normal transition-all cursor-pointer ${
                              formData.subject === sub 
                                ? 'bg-brand-blue-50 border-brand-blue-300 text-brand-blue-800 font-bold' 
                                : 'bg-slate-50 hover:bg-slate-100 border-gray-200 text-slate-500'
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Inquiry Message *</label>
                    <textarea
                      id="message-input"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Detail your request (e.g., container size, item weight, student academic major, company incorporation parameters)..."
                      className="w-full text-xs bg-slate-50 border border-gray-200 rounded-lg p-3 text-slate-800 focus:outline-none focus:border-brand-blue-600 transition-colors"
                    ></textarea>
                  </div>

                  {sendResult === 'success' && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex gap-2.5">
                      <LucideIcon name="CheckCircle2" className="text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold">Inquiry Broadcasted!</strong>
                        <p className="mt-0.5 text-[11px] text-emerald-700 leading-normal">{feedbackMsg}</p>
                      </div>
                    </div>
                  )}

                  {sendResult === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex gap-2.5">
                      <LucideIcon name="ShieldAlert" className="text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold">Automated Dispatch Paused</strong>
                        <p className="mt-0.5 text-[11px] text-red-700 leading-normal">{feedbackMsg}</p>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className={`w-full py-3 px-6 bg-gradient-to-r from-brand-blue-900 to-brand-blue-950 font-sans font-extrabold text-xs tracking-wider uppercase text-white rounded shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isSending ? 'opacity-85 cursor-wait' : 'hover:from-brand-blue-950 hover:to-brand-blue-900 active:scale-95'
                      }`}
                    >
                      {isSending ? (
                        <>
                          <span className="w-4.5 h-4.5 rounded-full border-2 border-white/30 border-t-white animate-spin inline-block"></span>
                          Broadcasting to Coordinators...
                        </>
                      ) : (
                        <>
                          <LucideIcon name="Mail" size={14} />
                          Dispatch Request to {formData.officeCountry} Hub
                        </>
                      )}
                    </button>
                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}