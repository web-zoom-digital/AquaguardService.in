
import Link from 'next/link';
import { Droplet, Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="logo">
                <div className="logo-icon"><Droplet size={20} /></div>
                <div className="logo-text">Aquaguard<span>Service.in</span></div>
              </Link>
              <p className="footer-brand-desc">Pune's most trusted RO water purifier service center. Expert repair, installation and AMC for all major brands across Pune & Pimpri-Chinchwad.</p>
              <div className="footer-social">
                <a href="tel:07030370076" className="social-link" aria-label="Call us"><Phone size={16} /></a>
                <a href="https://wa.me/917030370076" className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener"><MessageCircle size={16} /></a>
                <a href="mailto:info@aquaguardservice.in" className="social-link" aria-label="Email"><Mail size={16} /></a>
              </div>
            </div>
            <div className="footer-links-col">
              <h4>RO Brands</h4>
              <ul>
                <li><Link href="/aquaguard">Aquaguard RO Service</Link></li>
                <li><Link href="/kent-ro">Kent RO Service</Link></li>
                <li><Link href="/pureit">Pureit RO Service</Link></li>
                <li><Link href="/ao-smith">AO Smith RO Service</Link></li>
                <li><Link href="/livpure">Livpure RO Service</Link></li>
                <li><Link href="/all-brands">All Brands</Link></li>
              </ul>
            </div>
            <div className="footer-links-col">
              <h4>Our Services</h4>
              <ul>
                <li><Link href="/services">RO Repair & Servicing</Link></li>
                <li><Link href="/services">RO Installation</Link></li>
                <li><Link href="/services">Filter & Membrane Change</Link></li>
                <li><Link href="/services">AMC — Annual Maintenance</Link></li>
                <li><Link href="/services">Commercial RO Service</Link></li>
                <li><Link href="/contact">Book Service</Link></li>
              </ul>
            </div>
            <div className="footer-contact-col">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <Phone size={14} />
                <div><a href="tel:07030370076">07030370076</a></div>
              </div>
              <div className="footer-contact-item">
                <MessageCircle size={14} />
                <div><a href="https://wa.me/917030370076" target="_blank" rel="noopener">+91 70303 70076</a></div>
              </div>
              <div className="footer-contact-item">
                <MapPin size={14} />
                <div><p>Office No 1202, Giriraj Grandiose Complex, Bhujbal Vasti, Wakad, Pimpri-Chinchwad, Maharashtra 411057</p></div>
              </div>
              <div className="footer-contact-item">
                <Clock size={14} />
                <div><p>Mon – Sun: 8:00 AM – 11:30 PM</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© 2025 AquaguardService. All rights reserved.</p>
            <p style={{fontSize:'0.82rem', color:'rgba(255,255,255,0.45)'}}>
              Design, Development & SEO Managed by{' '}
              <a href="https://www.zoomdigital.in/" target="_blank" rel="noopener" style={{color:'rgba(255,255,255,0.7)',fontWeight:600}}>Zoom Digital</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
