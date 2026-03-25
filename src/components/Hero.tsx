'use client';
import { useEffect, useRef } from 'react';
import TrustedClients from './TrustedClients';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el) setTimeout(() => el.classList.add('visible'), 120);
  }, []);

  return (
    <>
    <section className="flex flex-col items-center justify-start pt-[180px] pb-32 md:pt-[260px] md:pb-40 px-6 md:px-12 lg:px-16 relative overflow-hidden text-center scroll-mt-24 bg-white" id="hero">
      {/* Aurora glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-screen h-[120vw] bg-[radial-gradient(ellipse,rgba(99,102,241,0.14)_0%,transparent_65%)] animate-drift1" />
        <div className="absolute inset-x-0 bottom-[20%] -right-[10%] w-screen h-screen bg-[radial-gradient(ellipse,rgba(139,92,246,0.12)_0%,transparent_65%)] animate-drift2" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(99,102,241,0.1)_1px,transparent_1px)] bg-size-[36px_36px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />
      </div>
      
      {/* Neural network animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-30" aria-hidden="true">
        <svg viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[min(700px,95vw)] h-[min(700px,95vh)] animate-float drop-shadow-[0_0_60px_rgba(99,102,241,0.18)]">
          <circle cx="230" cy="230" r="200" fill="url(#bgGlow)" opacity="0.18"/>
          <g className="origin-[230px_230px] animate-orbit1">
            <ellipse cx="230" cy="230" rx="195" ry="80" stroke="url(#gA)" strokeWidth="1.5" strokeDasharray="8 5" opacity="0.5"/>
            <circle cx="425" cy="230" r="10" fill="#6366f1"/>
            <circle cx="35" cy="230" r="10" fill="#8b5cf6"/>
          </g>
          <g className="origin-[230px_230px] animate-orbit2">
            <ellipse cx="230" cy="230" rx="130" ry="55" stroke="url(#gB)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6"/>
            <circle cx="360" cy="230" r="8" fill="#a78bfa"/>
            <circle cx="100" cy="230" r="8" fill="#6366f1"/>
          </g>
          <circle cx="230" cy="230" r="52" fill="url(#hubG)"/>
          <text x="230" y="222" textAnchor="middle" fill="white" fontSize="11" fontFamily="Outfit,sans-serif" fontWeight="700">DeetyaEnt</text>
          <text x="230" y="240" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="9" fontFamily="Outfit,sans-serif">AI-First</text>
          <defs>
            <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="gA" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient>
            <linearGradient id="gB" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#a78bfa"/></linearGradient>
            <linearGradient id="hubG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center opacity-100 transition-all duration-1000" ref={ref}>
        <h1 className="text-[2.5rem] md:text-6xl lg:text-[76px] font-bold leading-[1.15] mb-6 tracking-tight text-slate-900">
          Where Strategy Meets <span className="text-[#1C60FF]">AI Execution.</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-[22px] leading-relaxed mb-10 font-normal max-w-[800px] mx-auto px-4">
          Trusted by 600+ clients across global SMBs, Fortune 500 enterprises, governments, and funded startups for our AI, mobile app, and software development services.
        </p>
        <div className="flex justify-center w-full">
          <a href="#cta" className="ref-btn-blue text-[18px] inline-flex items-center gap-3">
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
    <TrustedClients />
    </>
  );
}
