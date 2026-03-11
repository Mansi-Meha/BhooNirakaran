import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Menu, X, LogIn, ArrowRight, Building2 } from 'lucide-react';
import { Button } from './ui/button';

const stakeholders = [
  { label: 'Administrative Officers', roles: ['District Magistrate (DM)', 'Addl. District Magistrate (ADM)', 'Sub Divisional Officer (SDO)', 'Deputy Collector Land Reforms (DCLR)'] },
  { label: 'Police Officials', roles: ['Superintendent of Police (SP)', 'Deputy SP (DSP)', 'Police Inspector'] },
  { label: 'Revenue Officials', roles: ['Circle Officer (CO)', 'Halka Karmachari'] }
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Authorities', href: '#authorities', hasDropdown: true },
  { label: 'Guidelines', href: '#guidelines' },
  { label: 'Bulletin', href: '#bulletin' },
];

/**
 * Shared top navigation bar used across all pages.
 *
 * Props:
 *  onBack     – optional callback for the back button; button is hidden when omitted
 *  rightLabel – optional string shown in the right badge; defaults to "BhooNirakaran Request"
 *  isLanding  – if true, shows the full landing page nav with section links
 */
export function Navbar({ onBack, rightLabel = 'BhooNirakaran Request', isLanding = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Simple navbar for non-landing pages
  if (!isLanding) {
    return (
      <nav className="border-b bg-white px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          {onBack && (
            <Button variant="ghost" size="icon" onClick={onBack} className="text-slate-500 hover:text-slate-900">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <div className="flex items-center gap-2">

            <span className="font-semibold text-lg tracking-tight text-slate-900">BhooNirakaran</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium bg-slate-100 px-3 py-1 rounded-full text-slate-600">{rightLabel}</span>
        </div>
      </nav>
    );
  }

  // Full landing page navbar
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm' : 'bg-transparent border-b border-transparent'} `}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Left: Logo + Title */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('#home')}>
              <Building2 className={`h-6 w-6 transition-colors duration-300 ${scrolled ? 'text-[#000814]' : 'text-[#000814]'}`} />
              <div className="leading-none">
                <span className={`font-bold text-lg tracking-tight block transition-colors duration-300 ${scrolled ? 'text-[#000814]' : 'text-[#000814]'}`}>BhooNirakaran</span>
              </div>
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative" ref={link.hasDropdown ? dropdownRef : undefined}>
                  <button
                    onClick={() => {
                      if (link.hasDropdown) {
                        setDropdownOpen(!dropdownOpen);
                      } else {
                        handleNavClick(link.href);
                      }
                    }}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${scrolled ? 'text-slate-600 hover:text-[#000814] hover:bg-[#003566]/10' : 'text-slate-600 hover:text-[#000814] hover:bg-slate-100/50'}`}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />}
                  </button>

                  {/* Authorities Dropdown */}
                  {link.hasDropdown && dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-xl p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      {stakeholders.map((group, i) => (
                        <div key={i} className="mb-3 last:mb-0">
                          <button
                            onClick={() => handleNavClick('#authorities')}
                            className="text-[#F97316] text-xs font-bold uppercase tracking-wider mb-1.5 block hover:text-[#F97316]/80 transition-colors cursor-pointer"
                          >
                            {group.label}
                          </button>
                          <div className="space-y-1">
                            {group.roles.map((role, j) => (
                              <div key={j} className="text-slate-500 text-xs pl-3 py-0.5 border-l border-slate-100 hover:text-[#000814] hover:border-[#F97316]/30 transition-colors">
                                {role}
                              </div>
                            ))}
                          </div>
                          {i < stakeholders.length - 1 && <div className="mt-3 h-px bg-slate-100"></div>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Sign In + Mobile Menu */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/dashboard')}
                className={`hidden md:flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${scrolled ? 'bg-[#000814] text-white hover:bg-[#000814]/90' : 'bg-[#000814] text-white hover:bg-[#000814]/90'}`}
              >
                SIGN IN
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <button
                    onClick={() => {
                      if (link.hasDropdown) {
                        setDropdownOpen(!dropdownOpen);
                      } else {
                        handleNavClick(link.href);
                      }
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:text-[#000814] hover:bg-[#003566]/10 transition-all cursor-pointer"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />}
                  </button>
                  {link.hasDropdown && dropdownOpen && (
                    <div className="pl-6 py-2 space-y-3">
                      {stakeholders.map((group, i) => (
                        <div key={i}>
                          <button onClick={() => handleNavClick('#authorities')} className="text-[#F97316] text-xs font-bold uppercase tracking-wider mb-1 block cursor-pointer">{group.label}</button>
                          {group.roles.map((role, j) => (
                            <div key={j} className="text-slate-400 text-xs pl-3 py-0.5 border-l border-slate-100">{role}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => { setMobileMenuOpen(false); navigate('/dashboard'); }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-4 rounded-xl bg-[#000814] text-white text-sm font-bold cursor-pointer"
              >
                SIGN IN
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer so content isn't hidden behind fixed nav */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}



