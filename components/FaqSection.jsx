'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection({ faqs, heading = 'Frequently Asked Questions' }) {
  const [openIdx, setOpenIdx] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  // Determine how many FAQs to show
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="section faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">FAQ</div>
          <h2 id="faq-heading" className="section-title">{heading}</h2>
        </div>
        <div className="faq-list">
          {displayedFaqs.map((faq, i) => {
            // Only apply scroll reveal to the initial 5 items. 
            // The rest will appear instantly when "View More" is clicked, preventing blank spaces.
            const isInitial = i < 5;
            const delayClass = isInitial && (i % 5) > 0 ? ` reveal-delay-${i % 5}` : '';
            const wrapperClass = isInitial ? `reveal${delayClass}` : 'animate-in';
            
            return (
              <div key={i} className={wrapperClass}>
                <div className={`faq-item${openIdx === i ? ' open' : ''}`}>
                  <button
                    className="faq-question"
                    aria-expanded={openIdx === i}
                    onClick={() => toggle(i)}
                  >
                    <div className="faq-q-left">
                      <span className="faq-num">{(i + 1).toString().padStart(2, '0')}</span>
                      <span className="faq-q-text">{faq.q}</span>
                    </div>
                    <span className="faq-icon">
                      {openIdx === i ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">{faq.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {faqs.length > 5 && (
          <div className="faq-view-more reveal text-center mt-10">
            <button 
              className="btn btn-outline" 
              onClick={() => setShowAll(!showAll)}
              style={{ padding: '12px 32px', borderRadius: '50px' }}
            >
              {showAll ? 'View Less' : 'View More Questions'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
