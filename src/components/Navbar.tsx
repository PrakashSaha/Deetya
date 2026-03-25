'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../utils/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100] flex justify-center p-3 md:p-5 lg:p-6 pointer-events-none">
        <nav 
          className={`
            pointer-events-auto transition-all duration-500 ease-in-out 
            max-w-[1340px] w-full flex items-center 
            ${scrolled 
              ? 'px-10 md:px-16 lg:px-24 h-[68px] md:h-[76px] bg-white/90 backdrop-blur-xl shadow-xl border border-indigo-100/40 rounded-2xl md:rounded-full' 
              : 'px-8 md:px-14 lg:px-20 h-[88px] md:h-[96px] bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-full'
            }
          `}
        >
          {/* Left: Logo */}
          <div className="flex flex-1 justify-start">
            <a href="#" className="text-2xl font-bold tracking-tight text-slate-900 no-underline flex items-center shrink-0 transition-transform hover:scale-[1.02]">
              Deetya<span className="text-[#1C60FF]">Enterprise</span>
            </a>
          </div>

          {/* Center: Navigation Links */}
          <ul className="hidden lg:flex flex-none items-center justify-center gap-12 list-none m-0 p-0">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="group relative no-underline text-gray-600 font-bold text-[15px] tracking-wide transition-colors duration-200 hover:text-indigo-600">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right: CTA and Mobile Menu */}
          <div className="flex flex-1 justify-end items-center gap-3">
            <a href="#cta" className="hidden md:inline-flex items-center justify-center bg-linear-to-r from-indigo-600 to-purple-600 text-white px-12 py-6 rounded-full font-black text-[15px] tracking-wide transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:scale-105 hover:-translate-y-0.5 active:scale-95 no-underline">
              Start Project →
            </a>
            <button className="flex lg:hidden flex-col gap-1.5 cursor-pointer border-none bg-none p-2 text-gray-900 transition-transform hover:scale-110" onClick={() => setMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-white/98 backdrop-blur-2xl z-[200] flex flex-col items-center justify-center gap-10 p-6 text-center">
          <button className="absolute top-8 right-6 text-3xl cursor-pointer text-gray-900 p-2 hover:scale-110 transition-transform" onClick={() => setMenuOpen(false)}>
            <X size={36} />
          </button>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-3xl font-black text-gray-900 tracking-tighter transition-colors duration-200 hover:text-indigo-600 no-underline" onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#cta" className="text-xl font-black text-white tracking-wide transition-all duration-300 bg-linear-to-r from-indigo-600 to-purple-600 px-12 py-6 rounded-full shadow-2xl shadow-indigo-500/40 hover:scale-105 active:scale-95 no-underline" onClick={() => setMenuOpen(false)}>Start Project →</a>
        </div>
      )}
    </>
  );
}
