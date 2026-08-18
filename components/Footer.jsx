import Link from 'next/link';
import { Droplet, Phone, MapPin, Clock, Mail } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" className="logo footer-logo">
              <div className="logo-icon"><Droplet size={20} /></div>
              <div className="logo-text" style={{ color: '#fff' }}>Aquaguard<span style={{ color: '#38BDF8' }}>Service</span></div>
            </Link>
            <p className="footer-brand-desc">Pune's most trusted RO water purifier service center. Expert repair, installation and AMC for all major brands across Pune & Pimpri-Chinchwad.</p>
            <div className="footer-social">
              <a href="tel:07030370076" className="footer-social-btn" aria-label="Call us"><Phone size={16} /></a>
              <a href="https://wa.me/917030370076" className="footer-social-btn" aria-label="WhatsApp" target="_blank" rel="noopener"><WhatsAppIcon size={16} /></a>
              <a href="mailto:info@aquaguardservice.in" className="footer-social-btn" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>

          {/* RO Brands */}
          <div className="footer-col">
            <h4>RO Brands</h4>
            <div className="footer-links">
              <Link href="/aquaguard">Aquaguard RO Service</Link>
              <Link href="/kent-ro">Kent RO Service</Link>
              <Link href="/pureit">Pureit RO Service</Link>
              <Link href="/ao-smith">AO Smith RO Service</Link>
              <Link href="/livpure">Livpure RO Service</Link>
              <Link href="/all-brands">All Brands</Link>
            </div>
          </div>

          {/* Our Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <div className="footer-links">
              <Link href="/services">RO Repair & Servicing</Link>
              <Link href="/services">RO Installation</Link>
              <Link href="/services">Filter & Membrane Change</Link>
              <Link href="/services">AMC — Annual Maintenance</Link>
              <Link href="/services">Commercial RO Service</Link>
              <Link href="/contact">Book Service</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-list">
              <a href="tel:07030370076"><Phone size={15} style={{ flexShrink: 0 }} /> 07030370076</a>
              <a href="https://wa.me/917030370076" target="_blank" rel="noopener"><WhatsAppIcon size={15} style={{ flexShrink: 0 }} /> +91 70303 70076</a>
              <span style={{ alignItems: 'flex-start' }}><MapPin size={15} style={{ flexShrink: 0, marginTop: '3px' }} /> <span>Office No 1202, Giriraj Grandiose Complex, Bhujbal Vasti, Wakad, Pimpri-Chinchwad, MH 411057</span></span>
              <span><Clock size={15} style={{ flexShrink: 0 }} /> Mon – Sun: 8:00 AM – 11:30 PM</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2025 AquaguardService. All rights reserved.</p>
          <p>
            Design, Development & SEO by{' '}
            <a href="https://www.zoomdigital.in/" target="_blank" rel="noopener">Zoom Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
