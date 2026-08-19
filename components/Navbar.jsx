'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, Phone, Droplet, ChevronDown, Disc3, Hexagon, Gem, Tags,
  Mail, MapPin, Facebook, Instagram, Linkedin, ClipboardList, Sparkles, ArrowRight,
  Wrench, Settings, RefreshCw, Droplets
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (href) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="top-bar" aria-label="Contact info">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              <a href="tel:07030370076" className="top-bar-link">
                <Phone size={13} /> <span>07030370076</span>
              </a>
              <a href="mailto:info@aquaguardservice.in" className="top-bar-link">
                <Mail size={13} /> <span>info@aquaguardservice.in</span>
              </a>
            </div>
            <div className="top-bar-right">
              <span className="top-bar-link">
                <MapPin size={13} /> <span>Wakad, Pimpri-Chinchwad, Pune</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar" aria-label="Main navigation">
        <div className="navbar-inner">
          <Link href="/" className="logo" aria-label="AquaguardService Home">
            <div className="logo-icon"><Droplet size={20} /></div>
            <div className="logo-text">Aquaguard<span>Service</span></div>
          </Link>
          <ul className="nav-links" role="list">
            <li><Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
            <li className="nav-dropdown">
              <Link href="/all-brands">Brands <ChevronDown size={14} /></Link>
              <div className="dropdown-menu">
                <div className="mega-menu-grid">
                  <Link href="/aquaguard" className="mega-menu-card">
                    <div className="mega-menu-icon"><Droplet size={20} /></div>
                    <div className="mega-menu-content">
                      <h4>Aquaguard RO</h4>
                      <p>Expert service & repair for all Aquaguard models.</p>
                    </div>
                  </Link>
                  <Link href="/kent-ro" className="mega-menu-card">
                    <div className="mega-menu-icon"><Disc3 size={20} /></div>
                    <div className="mega-menu-content">
                      <h4>Kent RO</h4>
                      <p>Specialized maintenance for Kent purifiers.</p>
                    </div>
                  </Link>
                  <Link href="/pureit" className="mega-menu-card">
                    <div className="mega-menu-icon"><Disc3 size={20} /></div>
                    <div className="mega-menu-content">
                      <h4>Pureit RO</h4>
                      <p>Complete care for HUL Pureit water purifiers.</p>
                    </div>
                  </Link>
                  <Link href="/ao-smith" className="mega-menu-card">
                    <div className="mega-menu-icon"><Hexagon size={20} /></div>
                    <div className="mega-menu-content">
                      <h4>AO Smith</h4>
                      <p>Genuine parts and service for AO Smith ROs.</p>
                    </div>
                  </Link>
                </div>
                <div className="mega-menu-footer">
                  <Link href="/all-brands">View All Brands <ArrowRight size={14} /></Link>
                </div>
              </div>
            </li>
            <li className="nav-dropdown">
              <Link href="/services" className={isActive('/services') ? 'active' : ''}>Services <ChevronDown size={14} /></Link>
              <div className="dropdown-menu">
                <div className="mega-menu-grid">
                  <Link href="/services#repair" className="mega-menu-card">
                    <div className="mega-menu-icon"><Wrench size={20} /></div>
                    <div className="mega-menu-content">
                      <h4>RO Repair</h4>
                      <p>Quick fixes for leakage, flow, or taste issues.</p>
                    </div>
                  </Link>
                  <Link href="/services#installation" className="mega-menu-card">
                    <div className="mega-menu-icon"><Settings size={20} /></div>
                    <div className="mega-menu-content">
                      <h4>RO Installation</h4>
                      <p>Professional fitting and relocation services.</p>
                    </div>
                  </Link>
                  <Link href="/services#filter-change" className="mega-menu-card">
                    <div className="mega-menu-icon"><RefreshCw size={20} /></div>
                    <div className="mega-menu-content">
                      <h4>Filter Change</h4>
                      <p>Timely replacement of cartridges and membranes.</p>
                    </div>
                  </Link>
                  <Link href="/services#amc" className="mega-menu-card">
                    <div className="mega-menu-icon"><ClipboardList size={20} /></div>
                    <div className="mega-menu-content">
                      <h4>AMC Plans</h4>
                      <p>Annual maintenance for worry-free pure water.</p>
                    </div>
                  </Link>
                </div>
                <div className="mega-menu-footer">
                  <Link href="/services">Explore All Services <ArrowRight size={14} /></Link>
                </div>
              </div>
            </li>
            <li><Link href="/locations" className={isActive('/locations') ? 'active' : ''}>Locations</Link></li>
            <li><Link href="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link></li>
            <li><Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
          </ul>
          <div className="navbar-cta">
            <a href="https://wa.me/917030370076" className="btn-navbar-cta" target="_blank" rel="noopener">
              <WhatsAppIcon size={16} style={{ color: '#25D366' }} />
              <span>Book Service</span>
            </a>
          </div>
          <button
            className={`mobile-menu-btn ${open ? 'open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="ham-line"></span>
            <span className="ham-line"></span>
            <span className="ham-line"></span>
          </button>
        </div>

        {/* PREMIUM MOBILE MENU */}
        {open && (
          <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div className="mobile-menu-overlay" onClick={() => setOpen(false)} />
            <div className="mobile-menu-panel">
              
              {/* DARK HEADER */}
              <div className="mobile-menu-header">
                <div className="mobile-menu-header-inner">
                  <Link href="/" className="logo logo--dark" onClick={() => setOpen(false)}>
                    <div className="logo-icon"><Droplet size={18} /></div>
                    <div className="logo-text">Aquaguard<span>Service</span></div>
                  </Link>
                  <button className="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Close menu">
                    <Sparkles size={16} /> MENU
                  </button>
                </div>
                <p className="mobile-menu-subtitle">
                  Aquaguard · Kent · Pureit · AO Smith · Livpure
                </p>
              </div>

              {/* EXPLORE SECTION */}
              <div className="mobile-menu-body">
                <div className="mobile-section">
                  <h3 className="mobile-section-title">EXPLORE</h3>
                  <div className="explore-cards">
                    <Link href="/all-brands" className="explore-card" onClick={() => setOpen(false)}>
                      <div className="explore-icon"><Tags size={20} /></div>
                      <div className="explore-text">
                        <h4>Brands</h4>
                        <p>Trusted names we service</p>
                      </div>
                      <ArrowRight size={16} className="explore-arrow" />
                    </Link>
                    <Link href="/services" className="explore-card" onClick={() => setOpen(false)}>
                      <div className="explore-icon"><ClipboardList size={20} /></div>
                      <div className="explore-text">
                        <h4>Services</h4>
                        <p>Repair, installation & AMC plans</p>
                      </div>
                      <ArrowRight size={16} className="explore-arrow" />
                    </Link>
                    <Link href="/locations" className="explore-card" onClick={() => setOpen(false)}>
                      <div className="explore-icon"><MapPin size={20} /></div>
                      <div className="explore-text">
                        <h4>Locations</h4>
                        <p>Find service areas near you</p>
                      </div>
                      <ArrowRight size={16} className="explore-arrow" />
                    </Link>
                  </div>
                </div>

                {/* QUICK LINKS SECTION */}
                <div className="mobile-section">
                  <div className="mobile-section-header">
                    <div className="mobile-section-title-wrap">
                      <h3 className="mobile-section-title">QUICK LINKS</h3>
                      <p>Tap to explore more</p>
                    </div>
                    <Link href="/contact" className="mobile-section-link" onClick={() => setOpen(false)}>View all</Link>
                  </div>
                  <div className="quick-links-grid">
                    <Link href="/" className="quick-link-card" onClick={() => setOpen(false)}>
                      <h4>Home</h4>
                      <p>Back to main page</p>
                    </Link>
                    <Link href="/contact" className="quick-link-card" onClick={() => setOpen(false)}>
                      <h4>Contact Us</h4>
                      <p>Get a quote or book</p>
                    </Link>
                    <Link href="/blog" className="quick-link-card" onClick={() => setOpen(false)}>
                      <h4>Blog</h4>
                      <p>RO maintenance tips</p>
                    </Link>
                    <Link href="#" className="quick-link-card" onClick={() => setOpen(false)}>
                      <h4>FAQs</h4>
                      <p>Quick answers</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* NEW PREMIUM BOTTOM NAV */}
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <div className="bottom-nav-inner">
          <Link href="/contact" className="btn-bottom-quote">
            Book Now <ArrowRight size={14} style={{ marginLeft: '4px' }} />
          </Link>
          <a href="https://wa.me/917030370076" className="btn-bottom-wa" target="_blank" rel="noopener" aria-label="WhatsApp Us">
            <WhatsAppIcon size={24} />
          </a>
          <a href="tel:07030370076" className="btn-bottom-call">
            <Phone size={14} style={{ marginRight: '6px' }} /> Call
          </a>
        </div>

      </nav>
    </>
  );
}
