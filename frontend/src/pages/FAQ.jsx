import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How do I claim the 10% student discount?",
      a: "Simply use coupon code STUDENT10 during checkout in your shopping cart summary. No registration verification required for demo!"
    },
    {
      q: "What payment methods are supported on StyleSphere?",
      a: "We support UPI (Google Pay, PhonePe, Paytm), Credit Cards, Debit Cards, and Cash on Delivery (COD)."
    },
    {
      q: "How long does shipping and delivery take?",
      a: "Standard shipping takes 2 to 4 business days. Express shipping is complimentary on all orders above ₹1999."
    },
    {
      q: "What is the return and exchange policy?",
      a: "We offer a 7-day hassle-free return and replacement guarantee. You can request a pickup from your user profile."
    },
    {
      q: "Is StyleSphere a full-stack project?",
      a: "Yes! StyleSphere features a React SPA frontend, a Java MVC Web Servlets backend codebase, and a normalized MySQL relational database."
    }
  ];

  return (
    <div className="faq-page section-padding">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <span className="badge-pill">HELP CENTER</span>
          <h2>Frequently Asked Questions</h2>
          <p>Find quick answers to common questions about orders, payments, and discounts</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px',
                  overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    width: '100%', padding: '1.25rem', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', fontWeight: 700, fontSize: '1rem', color: '#0f172a',
                    textAlign: 'left', background: isOpen ? '#f8fafc' : '#ffffff'
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} color="#2563eb" /> : <ChevronDown size={20} color="#94a3b8" />}
                </button>

                {isOpen && (
                  <div style={{ padding: '1.25rem', color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, borderTop: '1px solid #f1f5f9' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
