'use client';
import { useEffect, useRef } from 'react';
import { industries } from '../utils/constants';

export default function Industries() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="industries" className="py-28 md:py-36 lg:py-44 relative ref-blue-bg scroll-mt-24" ref={ref}>
      <div className="section-container relative z-10">
        
        {/* Split Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20 fade-up">
          <div className="lg:w-8/12 pr-0 lg:pr-16">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
              Who We Power
            </h2>
            <p className="text-gray-600 text-lg md:text-[20px] font-normal leading-relaxed w-full">
              We specialize in engineering high-performance software for complex sectors that demand precision, trust, and AI-driven efficiency.
            </p>
          </div>
          <div className="hidden lg:block lg:w-4/12 text-right">
            <a href="#contact" className="ref-btn-blue text-lg inline-flex items-center gap-3">
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 fade-up">
          {industries.map((ind, i) => (
            <div key={ind.name} className={`p-8 md:p-10 bg-white border border-indigo-50 rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] hover:-translate-y-2 group fade-up d${i + 1}`}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-indigo-50 text-indigo-600 transition-transform duration-300 group-hover:scale-110">
                <ind.Icon size={28} />
              </div>
              <h4 className="text-[22px] font-bold text-slate-900 mb-4 tracking-tight">{ind.name}</h4>
              <ul className="space-y-2.5">
                {ind.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-[14px] font-semibold text-gray-500/80 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/60 mt-2 shrink-0"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile CTA Button */}
        <div className="mt-12 text-center lg:hidden fade-up">
            <a href="#contact" className="ref-btn-blue font-bold px-8 py-4 text-lg inline-flex items-center gap-3 w-full justify-center sm:w-auto">
              Book a Consultation
            </a>
        </div>
      </div>
    </section>
  );
}
