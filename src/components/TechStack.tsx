'use client';
import { useEffect, useRef } from 'react';
import { techStack } from '../utils/constants';

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stack" className="py-28 md:py-36 lg:py-44 relative bg-white scroll-mt-24" ref={ref}>
      <div className="section-container">
        
        
        {/* Split Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20 fade-up">
          <div className="lg:w-8/12 pr-0 lg:pr-16">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
              Modern Tools for Modern Products
            </h2>
            <p className="text-gray-600 text-lg md:text-[20px] font-normal leading-relaxed w-full">
              We leverage the most advanced technologies to build products that are fast, secure, and ready for the future.
            </p>
          </div>
          <div className="hidden lg:block lg:w-4/12 text-right">
            <a href="#contact" className="ref-btn-blue text-lg inline-flex items-center gap-3">
              Explore Enterprise Tech
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 fade-up">
          {techStack.map((category, i) => (
            <div key={i} className={`p-8 md:p-10 bg-white border border-indigo-50 rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] hover:-translate-y-2 flex flex-col items-start fade-up d${i + 1}`}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-indigo-50 text-indigo-600 transition-transform duration-300 hover:scale-110">
                <category.Icon size={32} />
              </div>
              <h4 className="font-bold text-slate-900 mb-6 text-[20px] tracking-tight">
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-2 mt-auto w-full">
                {category.items.map(tech => (
                  <span key={tech} className="text-[14px] font-medium text-gray-600 bg-gray-50/80 py-2 px-4 rounded-lg border border-gray-100 transition-colors hover:bg-white hover:border-indigo-200 hover:text-indigo-600 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA Button */}
        <div className="mt-12 text-center lg:hidden fade-up">
            <a href="#contact" className="ref-btn-blue font-bold px-8 py-4 text-lg inline-flex items-center gap-3 w-full justify-center sm:w-auto">
              Explore Enterprise Tech
            </a>
        </div>
      </div>
    </section>
  );
}
