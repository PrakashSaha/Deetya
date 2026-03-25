'use client';
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle, Info } from 'lucide-react';
import { navLinks } from '../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-indigo-100 pt-48 md:pt-64 pb-16 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#" className="text-2xl font-bold tracking-tight text-slate-900 mb-8 block no-underline transition-transform hover:scale-[1.02] origin-left">
              Deetya<span className="text-[#1C60FF]">Enterprise</span>
            </a>
            <p className="text-gray-500 font-normal leading-relaxed mb-8 text-[16px] max-w-sm">
              We empower forward-thinking businesses through full-cycle AI, app, and custom software development services that drive growth and digital transformation.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-slate-700 hover:bg-[#1C60FF] hover:text-white transition-all duration-300">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-slate-700 hover:bg-[#1C60FF] hover:text-white transition-all duration-300">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-slate-700 hover:bg-[#1C60FF] hover:text-white transition-all duration-300">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[18px] font-bold text-slate-900 mb-8">Services</h4>
            <ul className="space-y-4 list-none p-0 m-0">
              {['AI Development', 'Mobile Apps', 'Web Products', 'Cloud Solutions'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-500 font-normal hover:text-[#1C60FF] transition-colors no-underline text-[15px]">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[18px] font-bold text-slate-900 mb-8">Industries</h4>
            <ul className="space-y-4 list-none p-0 m-0">
              {['Healthcare', 'Fintech', 'Logistics', 'Real Estate'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-500 font-normal hover:text-[#1C60FF] transition-colors no-underline text-[15px]">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[18px] font-bold text-slate-900 mb-8">Company</h4>
            <ul className="space-y-4 list-none p-0 m-0">
              {['About Us', 'Our Process', 'Portfolio', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-500 font-normal hover:text-[#1C60FF] transition-colors no-underline text-[15px]">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[18px] font-bold text-slate-900 mb-8">Contact</h4>
            <ul className="space-y-5 list-none p-0 m-0 text-[15px]">
              <li className="flex items-start gap-3">
                <Mail className="text-[#1C60FF] shrink-0 mt-1" size={16} />
                <a href="mailto:hello@deetya.enterprise" className="text-gray-500 hover:text-[#1C60FF] transition-colors break-all font-medium">hello@deetya.enterprise</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-[#1C60FF] shrink-0 mt-1" size={16} />
                <span className="text-gray-500 font-medium">+1 (555) 000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#1C60FF] shrink-0 mt-1" size={16} />
                <span className="text-gray-500 font-medium leading-relaxed">
                  San Francisco, CA<br/>California, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-indigo-50 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-gray-400 text-[14px] font-medium">
            © 2026 DeetyaEnterprise. All rights reserved. 
            <span className="hidden md:inline mx-2">|</span>
            Designed for Innovation.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 text-[14px] font-medium hover:text-[#1C60FF] transition-colors no-underline underline-offset-4 hover:underline">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-[14px] font-medium hover:text-[#1C60FF] transition-colors no-underline underline-offset-4 hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
