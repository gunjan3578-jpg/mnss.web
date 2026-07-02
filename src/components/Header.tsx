import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Handshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
// @ts-expect-error - logo image asset imported from outside src
import logo from '../../images/logo.png.png';

interface HeaderProps {
  onOpenVolunteer: () => void;
  onOpenDonate: () => void;
}

export default function Header({ onOpenVolunteer, onOpenDonate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Spying on scrolling position to highlight active menu items dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'vision', 'focus', 'projects', 'contact'];
      const scrollPos = window.scrollY + 150; // offset for sticky header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 96; // h-24 is 96px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'vision', label: 'Vision & Mission' },
    { id: 'focus', label: 'Focus Areas' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Block */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center gap-3 focus:outline-none"
            >
              {/* Image with beautiful inline fallback */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Mahendra Narayan Seva Sansthan Logo" 
                  className="w-28 h-28 object-contain filter drop-shadow-sm"
                  onError={(e) => {
                    // Fallback to elegant CSS representation if image isn't in server workspace yet
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('logo-fallback-id');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                
                {/* Embedded SVG vector fallback in case PNG_2 is missing */}
                <div 
                  id="logo-fallback-id" 
                  style={{ display: 'none' }}
                  className="w-24 h-24 bg-emerald-50 rounded-full items-center justify-center border border-emerald-100 shadow-xs flex"
                >
                  <svg viewBox="0 0 100 100" className="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="50" cy="30" r="8" className="fill-amber-400 stroke-amber-500 stroke-[2]" />
                    <path d="M 25 75 Q 35 60 48 68 Q 40 85 25 75" className="stroke-emerald-600 fill-emerald-50/50 stroke-[5]" />
                    <path d="M 75 75 Q 65 60 52 68 Q 60 85 75 75" className="stroke-emerald-600 fill-emerald-50/50 stroke-[5]" />
                    <path d="M 50 68 L 50 42" className="stroke-emerald-600 stroke-[6]" />
                    <path d="M 50 48 Q 38 42 45 35 Q 50 40 50 48" className="fill-emerald-500 stroke-emerald-600 stroke-[4]" />
                  </svg>
                </div>
              </div>
              
              {/* Small branding text alongside logo */}
              <div className="hidden sm:block">
                <span className="block text-sm font-black tracking-tight text-slate-900 uppercase">
                  Mahendra Narayan
                </span>
                <span className="block text-xs font-bold text-emerald-600 uppercase">
                  Seva Sansthan
                </span>
                <span className="block text-[8px] text-slate-400 font-mono tracking-widest uppercase">
                  Samastipur, Bihar • Regd. NGO
                </span>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-4 items-center text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-3 py-2 rounded-md hover:text-emerald-600 hover:bg-emerald-50 transition-all flex items-center gap-1 ${
                  activeSection === item.id 
                    ? 'text-emerald-700 bg-emerald-50/80 font-bold' 
                    : ''
                }`}
              >
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button 
              onClick={onOpenVolunteer}
              className="px-4 py-2 border border-emerald-600 text-emerald-600 font-medium rounded-lg text-sm hover:bg-emerald-50 transition flex items-center gap-1 cursor-pointer"
            >
              <Handshake size={15} />
              <span>Volunteer</span>
            </button>
            <button 
              onClick={onOpenDonate}
              className="px-4 py-2 bg-rose-600 text-white font-medium rounded-lg text-sm hover:bg-rose-700 shadow-md hover:shadow-lg transition flex items-center gap-1 cursor-pointer"
            >
              <Heart size={15} className="fill-white" />
              <span>Donate</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-emerald-600 focus:outline-none p-2" 
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-inner"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 text-base font-medium text-slate-600">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`block px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-600 transition ${
                    activeSection === item.id ? 'bg-emerald-50 text-emerald-600 font-bold' : ''
                  }`}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenVolunteer();
                  }}
                  className="w-full text-center py-2.5 border border-emerald-600 text-emerald-600 rounded-lg flex items-center justify-center gap-2 font-semibold text-sm cursor-pointer"
                >
                  <Handshake size={16} />
                  <span>Volunteer</span>
                </button>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenDonate();
                  }}
                  className="w-full text-center py-2.5 bg-rose-600 text-white rounded-lg flex items-center justify-center gap-2 font-semibold text-sm cursor-pointer hover:bg-rose-700"
                >
                  <Heart size={16} className="fill-white" />
                  <span>Donate Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
