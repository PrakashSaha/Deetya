'use client';
import { useEffect, useRef, useState } from 'react';
import { cases } from '../utils/constants';

const tabs = ['App', 'Software', 'Website', 'Product'];

export default function CaseStudies() {
  const ref = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('App');

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="work" className="py-28 md:py-36 lg:py-44 relative bg-white scroll-mt-24" ref={ref}>
      <div className="section-container relative z-10">
        

        {/* Split Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 fade-up">
          <div className="lg:w-9/12 pr-0 lg:pr-10">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-slate-900 mb-6 leading-[1.15]">
              Software & App Development Success Stories Driving Business Growth
            </h2>
            <p className="text-gray-600 text-lg md:text-[20px] font-normal leading-relaxed w-full">
              Our collaborative partnerships have helped leading organizations overcome critical challenges and deliver business value through AI-powered digital product design to development, custom software development, and app development.
            </p>
          </div>
          <div className="hidden lg:block lg:w-3/12 text-right">
            <a href="#work" className="ref-btn-blue text-lg inline-flex items-center gap-3">
              Check Our Portfolio
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-8 mb-10 pb-4 border-b border-indigo-100 fade-up">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 pb-4 pt-2 px-1 border-b-2 font-semibold text-lg whitespace-nowrap transition-colors ${
                activeTab === tab 
                  ? 'border-[#1C60FF] text-slate-900' 
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {activeTab === tab && (
                <div className="w-8 h-8 rounded-full bg-[#1C60FF] flex items-center justify-center shrink-0">
                  <span className="w-3 h-3 border-2 border-white rounded-sm"></span>
                </div>
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Minimalist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-8 fade-up">
          {cases.map((c, i) => (
            <div key={i} className={`fade-up d${i + 1} group cursor-pointer`}>
              <div className="w-full aspect-video overflow-hidden rounded-[20px] mb-6 shadow-sm">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h4 className="text-[22px] md:text-[26px] font-bold text-slate-900 leading-snug mb-4 transition-colors group-hover:text-[#1C60FF]">
                {c.title}
              </h4>
              <p className="text-gray-600 text-[17px] leading-relaxed mb-6 font-normal pr-4">
                {c.solution}. {c.problem} resulting in a {c.result}.
              </p>
              <a href="#" className="text-[18px] font-semibold text-[#1C60FF] underline decoration-2 underline-offset-4 group-hover:text-blue-800 transition-colors">
                Read More
              </a>
            </div>
          ))}
        </div>

        {/* Mobile CTA Button */}
        <div className="mt-16 text-center lg:hidden fade-up">
            <a href="#work" className="ref-btn-blue font-bold text-lg inline-flex items-center gap-3 w-full justify-center sm:w-auto">
              Check Our Portfolio
            </a>
        </div>

      </div>
    </section>
  );
}
