'use client';
import { useState } from 'react';

export default function FaqSection({ faqs, heading = 'Frequently Asked Questions' }) {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section className="section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">FAQ</div>
          <h2 id="faq-heading" className="section-title">{heading}</h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`}>
              <button
                className="faq-question"
                aria-expanded={openIdx === i}
                onClick={() => toggle(i)}
              >
                {faq.q}
                <span className="faq-icon">{openIdx === i ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
