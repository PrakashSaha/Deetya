'use client';
import { useState, useEffect, useRef } from 'react';
import { Quote, User, Globe, Mail, Building, Paperclip } from 'lucide-react';
import { testimonials } from '../utils/constants';

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const next = () => setCur((cur + 1) % testimonials.length);
  const prev = () => setCur((cur - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[cur];

  return (
    <section id="contact" className="py-28 md:py-36 lg:py-44 relative bg-white scroll-mt-24 overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left: Contact Form */}
          <div className="lg:w-7/12 w-full fade-up">
            <div className="bg-[#F9FBFF] rounded-[40px] p-8 md:p-12 lg:p-16 shadow-[0_4px_30px_rgba(0,0,0,0.02)] h-full border border-indigo-50/50">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Let&apos;s Create What&apos;s Next
              </h2>
              <p className="text-gray-600 text-lg md:text-[20px] font-normal leading-relaxed mb-12">
                Your search for the perfect digital transformation partner ends here. Fill out the form below and our innovation team will get back to you within 24 hours.
              </p>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="md:col-span-1">
                  <input type="text" placeholder="Name*" className="w-full bg-gray-50/80 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-[#1C60FF] focus:bg-white transition-all font-medium" required />
                </div>
                <div className="md:col-span-1">
                  <input type="tel" placeholder="Phone*" className="w-full bg-gray-50/80 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-[#1C60FF] focus:bg-white transition-all font-medium" required />
                </div>
                <div className="md:col-span-1">
                  <input type="email" placeholder="Email ID*" className="w-full bg-gray-50/80 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-[#1C60FF] focus:bg-white transition-all font-medium" required />
                </div>
                <div className="md:col-span-1">
                  <input type="text" placeholder="Country*" className="w-full bg-gray-50/80 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-[#1C60FF] focus:bg-white transition-all font-medium" required />
                </div>
                <div className="md:col-span-2">
                  <select className="w-full bg-gray-50/80 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-[#1C60FF] focus:bg-white transition-all font-medium text-gray-500 appearance-none">
                    <option value="">Your Budget in USD*</option>
                    <option value="10-20k">$10k-$20k</option>
                    <option value="20-50k">$20k-$50k</option>
                    <option value="50k+">More than $50k</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <textarea placeholder="Add a brief description of your project or goal*" rows={6} className="w-full bg-gray-50/80 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-[#1C60FF] focus:bg-white transition-all font-medium resize-none" required></textarea>
                </div>
                <div className="md:col-span-2 mt-4 relative">
                  <button type="submit" className="ref-btn-blue px-12 py-5 text-xl font-bold w-full md:w-auto shadow-xl shadow-blue-500/20 active:scale-95 transition-all cursor-pointer">
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Profile Slider */}
          <div className="lg:w-5/12 w-full fade-up d2">
            <div className="bg-[#050729] rounded-[48px] p-10 md:p-14 h-full flex flex-col justify-center relative overflow-hidden group">
              {/* Decorative Pulse Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col gap-8">
                  
                  {/* Executive Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-blue-500/30">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-blue-500 mb-1">{t.name}, {t.role}</h4>
                        <p className="text-gray-400 font-medium">{t.role}, DeetyaEnterprise</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <a href={`mailto:hello@deetya.enterprise`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <Mail className="text-white" size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <Globe className="text-white" size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <div className="mt-8">
                    <p className="text-white text-xl md:text-2xl font-medium leading-[1.6] italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Slider Controls */}
                  <div className="flex items-center gap-6 mt-12 pt-12 border-t border-white/10">
                    <div className="flex gap-4">
                      <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer">
                        <span className="text-2xl font-bold">←</span>
                      </button>
                      <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer">
                        <span className="text-2xl font-bold">→</span>
                      </button>
                    </div>
                    <div className="text-gray-500 font-bold tracking-widest text-sm uppercase">
                      {cur + 1} / {testimonials.length} Leaders
                    </div>
                  </div>

                </div>
              </div>

              {/* Success Badge */}
              <div className="absolute top-10 right-10 bg-[#1C60FF] w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40">
                <Quote className="text-white" size={24} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
