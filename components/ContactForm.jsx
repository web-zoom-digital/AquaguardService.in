'use client';
import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', area: '', brand: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.area) { setError('Please fill in Name, Phone, and Area.'); return; }
    if (!/^\d{10}$/.test(form.phone)) { setError('Please enter a valid 10-digit mobile number.'); return; }
    setError('');
    const msg = encodeURIComponent(
      `*New RO Service Request*\n\nName: ${form.name}\nPhone: ${form.phone}\nArea: ${form.area}` +
      (form.brand ? `\nBrand: ${form.brand}` : '') +
      (form.service ? `\nService: ${form.service}` : '') +
      (form.message ? `\nIssue: ${form.message}` : '')
    );
    window.open(`https://wa.me/917030370076?text=${msg}`, '_blank', 'noopener');
    setForm({ name: '', phone: '', area: '', brand: '', service: '', message: '' });
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="section section--bg" id="contact" aria-labelledby="contact-form-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Contact Us</div>
          <h2 id="contact-form-heading" className="section-title">Book RO Service in Pune</h2>
          <p className="section-subtitle">Fill in the form below and we'll get back to you within minutes.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item reveal"><div className="contact-item-icon"><Phone size={14} /></div><div className="contact-item-text"><h4>Phone / Call Us</h4><a href="tel:07030370076">07030370076</a></div></div>
            <div className="contact-item reveal reveal-delay-1"><div className="contact-item-icon"><MessageCircle size={14} /></div><div className="contact-item-text"><h4>WhatsApp</h4><a href="https://wa.me/917030370076" target="_blank" rel="noopener">+91 70303 70076</a></div></div>
            <div className="contact-item reveal reveal-delay-2"><div className="contact-item-icon"><MapPin size={14} /></div><div className="contact-item-text"><h4>Our Address</h4><p>Office No 1202, Giriraj Grandiose Complex,<br/>Bhujbal Vasti, Wakad,<br/>Pimpri-Chinchwad, Maharashtra 411057</p></div></div>
            <div className="contact-item reveal reveal-delay-3"><div className="contact-item-icon"><Clock size={14} /></div><div className="contact-item-text"><h4>Working Hours</h4><p>Monday – Sunday<br/>8:00 AM – 11:30 PM</p></div></div>
          </div>
          <div className="contact-form reveal reveal-delay-1">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="10-digit mobile" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="area">Your Area / Locality *</label>
                  <input type="text" id="area" name="area" value={form.area} onChange={handleChange} placeholder="e.g. Wakad, Baner" required />
                </div>
                <div className="form-group">
                  <label htmlFor="brand">RO Brand</label>
                  <select id="brand" name="brand" value={form.brand} onChange={handleChange}>
                    <option value="">Select Brand</option>
                    <option>Aquaguard</option><option>Kent RO</option><option>Pureit</option>
                    <option>AO Smith</option><option>Livpure</option><option>LG</option>
                    <option>Sharp</option><option>Faber</option><option>Havells</option>
                    <option>Blue Star</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select Service</option>
                  <option>RO Repair</option><option>RO Installation</option>
                  <option>Filter / Membrane Change</option><option>AMC Plan</option>
                  <option>RO Uninstallation</option><option>Commercial RO Service</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Describe the Issue (Optional)</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="4" placeholder="e.g. Water flow is slow, bad taste..." />
              </div>
              {error && <p style={{color:'#ef4444',marginBottom:'12px',fontSize:'0.9rem'}}>{error}</p>}
              <button type="submit" className="btn btn-primary w-full" style={{justifyContent:'center'}} disabled={sent}>
                {sent ? '✅ Request Sent! We\'ll call you shortly.' : <><Send size={14} /> Send via WhatsApp</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
