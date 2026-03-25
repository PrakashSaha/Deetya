'use client';
import { useEffect, useRef } from 'react';
import { processSteps } from '../utils/constants';

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" className="py-28 md:py-36 lg:py-44 relative ref-blue-bg scroll-mt-24" ref={ref}>
      <div className="section-container">
        
        {/* Split Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20 fade-up">
          <div className="lg:w-8/12 pr-0 lg:pr-16">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
              From Concept to Deployment
            </h2>
            <p className="text-gray-600 text-lg md:text-[20px] font-normal leading-relaxed w-full">
              We follow a rigorous, AI-enhanced engineering process to ensure your product is built for success from day one.
            </p>
          </div>
          <div className="hidden lg:block lg:w-4/12 text-right">
            <a href="#cta" className="ref-btn-blue text-lg inline-flex items-center gap-3">
              Start Your Journey
            </a>
          </div>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 fade-up">
          {processSteps.map((s, i) => (
            <div 
              key={i} 
              className={`relative p-8 md:p-10 bg-white border border-indigo-50 rounded-card transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] hover:-translate-y-2 group fade-up d${i + 1}`}
            >
              <div className="absolute top-8 right-8 text-5xl font-black text-indigo-50 group-hover:text-indigo-100 transition-colors">
                0{i + 1}
              </div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-indigo-50 text-indigo-600 transition-transform duration-300 group-hover:scale-110">
                <s.Icon size={28} />
              </div>
              <h4 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">{s.title}</h4>
              <p className="text-gray-500 text-[16px] font-normal leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile CTA Button */}
        <div className="mt-12 text-center lg:hidden fade-up">
            <a href="#cta" className="ref-btn-blue font-bold px-8 py-4 text-lg inline-flex items-center gap-3 w-full justify-center sm:w-auto">
              Start Your Journey
            </a>
        </div>
      </div>
    </section>
  );
}
