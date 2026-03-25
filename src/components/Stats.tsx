'use client';
import { useEffect, useRef } from 'react';
import { stats } from '../utils/constants';

export default function Stats() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          // Add visible class to trigger animations
          el.querySelectorAll('.fade-up').forEach(item => item.classList.add('visible'));
          
          // Trigger number counting
          el.querySelectorAll('.stat-card').forEach((card) => {
            if (card.getAttribute('data-animated') === 'true') return;
            card.setAttribute('data-animated', 'true');
            
            const target = parseInt(card.getAttribute('data-target') || '0');
            const span = card.querySelector('.target-num');
            if (!span) return;
            
            let count = 0;
            const duration = 2000;
            const stepSize = target / (duration / 16);
            const tick = () => {
              count += stepSize;
              if (count < target) {
                span.textContent = Math.floor(count).toString();
                requestAnimationFrame(tick);
              } else {
                span.textContent = target.toString();
              }
            };
            tick();
          });
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -150px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" className="py-28 md:py-36 lg:py-44 relative bg-white scroll-mt-24" ref={ref}>
      <div className="section-container">
        <div className="bg-indigo-50/40 border border-indigo-100 rounded-(--radius-container) p-10 md:p-16 lg:p-20 fade-up shadow-sm">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            <div className="lg:w-5/12 w-full">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Global Innovation Partner Recognized by Leaders
              </h2>
              <p className="text-gray-600 text-lg md:text-[20px] leading-relaxed mb-10 font-normal">
                We're a full-cycle AI, website, and mobile app development company, trusted and recognized by global industry experts for creating custom software solutions that ship faster and drive growth.
              </p>
              
              <div className="flex items-end gap-3 pt-6 border-t border-indigo-100/60">
                <span className="text-6xl md:text-7xl font-black text-[#1C60FF] tracking-tighter">4.9</span>
                <span className="text-2xl text-gray-400 font-bold mb-2">/5</span>
                <div className="mb-2 w-full ml-4">
                  <div className="flex text-[#1C60FF] text-2xl mb-1">
                    ★★★★★
                  </div>
                  <a href="#" className="text-slate-800 font-bold hover:text-[#1C60FF] transition-colors underline decoration-2 underline-offset-4">
                    62 Reviews on Clutch
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="stat-card bg-white p-8 md:p-10 border border-indigo-50 rounded-card transition-all duration-500 hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] hover:-translate-y-2 group fade-up"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                  data-target={s.target}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 bg-indigo-50 text-indigo-600">
                    <s.Icon size={28} />
                  </div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="target-num text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">0</span>
                    <span className="text-3xl md:text-4xl font-black text-[#1C60FF]">{s.suffix}</span>
                  </div>
                  <h4 className="text-xl md:text-[22px] font-bold text-slate-900 mb-3 tracking-tight">{s.title}</h4>
                  <p className="text-gray-500 font-normal leading-relaxed text-[16px]">{s.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
