'use client';
import { useEffect, useRef } from 'react';
import { services } from '../utils/constants';

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="py-28 md:py-36 lg:py-44 relative ref-blue-bg scroll-mt-24" ref={ref}>
      <div className="section-container">
        
        {/* Split Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20 fade-up">
          <div className="lg:w-8/12 pr-0 lg:pr-16">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
              Full-cycle Development Services Accelerating Digital Transformation
            </h2>
            <p className="text-gray-600 text-lg md:text-[20px] font-normal leading-relaxed w-full">
              We're committed to empowering forward-thinking businesses and entrepreneurs through our full-cycle AI, app, and custom software development services that simplify operations, drive efficiency, and create meaningful customer experiences.
            </p>
          </div>
          <div className="hidden lg:block lg:w-4/12 text-right">
            <a href="#contact" className="ref-btn-blue text-lg inline-flex items-center gap-3">
              Book a Strategy Call
            </a>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 fade-up">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-[20px] p-8 md:p-10 border border-indigo-50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] hover:-translate-y-1 block cursor-pointer group fade-up d${i + 1}">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 transition-transform duration-300 group-hover:scale-110">
                    <s.Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">{s.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="font-bold text-xl">→</span>
                </div>
              </div>
              <p className="text-gray-600 text-[17px] leading-relaxed mb-6 font-normal">
                {s.desc}
              </p>
              
              {/* Features List (kept from original Deetya design but styled softer) */}
              <ul className="space-y-3 mt-auto">
                {s.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-[15px] font-medium text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Mobile CTA Button */}
        <div className="mt-12 text-center lg:hidden">
            <a href="#contact" className="ref-btn-blue font-bold text-lg inline-flex items-center gap-3 w-full justify-center sm:w-auto">
              Book a Strategy Call
            </a>
        </div>
      </div>
    </section>
  );
}
