import React from 'react';
import { Mail, Phone, MapPin, Heart, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveView: (view: string) => void;
}

export default function Footer({ setActiveView }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* NGO Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
              <svg viewBox="0 0 100 100" className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="50" cy="30" r="8" className="fill-emerald-400/20" />
                <path d="M 25 75 Q 35 60 48 68" />
                <path d="M 75 75 Q 65 60 52 68" />
                <path d="M 50 68 L 50 42" />
                <path d="M 50 48 Q 38 42 45 35 Q 50 40 50 48" className="fill-emerald-400" />
              </svg>
            </div>
            <div>
              <span className="block text-sm font-bold tracking-wider text-white uppercase">MAHENDRA NARAYAN</span>
              <span className="block text-xs font-semibold text-emerald-400 uppercase">SEVA SANSTHAN</span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            A grassroots social organization dedicated to health outreach, modern education support, and environmental conservation in rural Bihar, India.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              Regd. No: 181/2012-13
            </span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="space-y-4">
          <h4 className="text-white text-base font-bold tracking-wide">Quick Navigation</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            {[
              { id: 'home', label: 'Home Page' },
              { id: 'about', label: 'About Our NGO' },
              { id: 'focus', label: 'Key Focus Areas' },
              { id: 'projects', label: 'Current Projects' },
              { id: 'contact', label: 'Get In Touch' },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    setActiveView(link.id);
                    scrollToTop();
                  }}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer focus:outline-none"
                >
                  <span className="text-emerald-500">›</span> {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white text-base font-bold tracking-wide">Headquarters</h4>
          <ul className="space-y-3.5 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-emerald-400 mt-0.5 shrink-0" />
              <span className="leading-relaxed">
                Basantpur, Shobhan, Block-Khanpur, Samastipur, Bihar – 848117
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-emerald-400 shrink-0" />
              <span className="font-mono">+91 9570562580 / +91 9473011987</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-emerald-400 shrink-0" />
              <span className="font-mono">info.mnsevasansthan@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Support Us / CTA */}
        <div className="space-y-4">
          <h4 className="text-white text-base font-bold tracking-wide">Empower Our Work</h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            Your contributions qualify for 80G Tax Deductions under the Indian Income Tax Act. Every small contribution creates an immediate footprint.
          </p>
          <button
            onClick={() => {
              setActiveView('donate');
              scrollToTop();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-sm shadow-md transition duration-300 group cursor-pointer"
          >
            <Heart size={15} className="fill-white group-hover:scale-125 transition-transform" />
            <span>Support & Donate</span>
          </button>
        </div>
      </div>

      {/* Social, Copyright and Compliance */}
      <div className="border-t border-slate-800 bg-slate-950/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-5 text-xl">
            <a
              href="https://www.facebook.com/share/1BmqYdhbhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-500 hover:scale-110 transition-transform"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/mn_seva_sansthan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-pink-500 hover:scale-110 transition-transform"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://x.com/mnsevasansthan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white hover:scale-110 transition-transform"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahendra-narayan-seva-sansthan-5902b1417/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 hover:scale-110 transition-transform"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <div className="text-center md:text-right space-y-1">
            <div className="text-xs text-slate-500">
              © 2026 Mahendra Narayan Seva Sansthan (MNSS). All Rights Reserved.
            </div>
            <div className="text-[10px] text-slate-600 font-mono">
              Approved 12A & 80G Certified Non-Profit • samastipur.bihar.gov
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition shadow-inner cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
