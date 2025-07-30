"use client"
import SubHeader from '@/utils/SubHeader'
import React, { useState } from 'react'

const faqs = [
  {
    title: 'What is the seating capacity of the banquet hall?',
    content: [
      "Our banquet hall can comfortably accommodate up to 100+ guests seated and 200 guests in floating setup, perfect for weddings, parties, and corporate events."
    ]
  },
  {
    title: 'Do you provide decoration and catering services?',
    content: [
      "Yes, we offer in-house decoration and catering packages, which can be customized as per your theme, menu, and event type."
    ]
  },
  {
    title: 'Can I bring my own decorators or caterers?',
    content: [
      "While we recommend using our in-house services for seamless coordination, we do allow external vendors upon prior approval."
    ]
  },
  {
    title: 'Is there parking available for guests?',
    content: [
      "Yes, we have ample parking space available for guests attending events at our banquet hall."
    ]
  },
  {
    title: 'How can I book the banquet hall for my event?',
    content: [
      "You can call us directly, send a WhatsApp message, or fill out the booking form on our website. Our team will assist you with availability, packages, and planning."
    ]
  }
];

const BanqueteFaqsPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <>
      
      <section
        className="work-area bg-ght sell-up-area"
        id="work-ar"
        style={{ backgroundColor: '#f8f5f0' }}
      >
        <div className="container">
          <div className="col-lg-12">
            <div id="accordion" className="custom-accordion">
              {faqs.map((faq, idx) => (
                <div className="card" key={idx}>
                  <div className="card-header" id={`heading${idx}`}>
                    <button
                      className={`collapsebtn${openIndex === idx ? '' : ' collapsed'}`}
                      aria-expanded={openIndex === idx}
                      aria-controls={`collapses${idx}`}
                      onClick={() => handleToggle(idx)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        outline: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        padding: '1rem',
                        cursor: 'pointer'
                      }}
                    >
                      {faq.title}
                    </button>
                  </div>
                  <div
                    id={`collapses${idx}`}
                    className={`confield collapses${openIndex === idx ? ' show' : ''}`}
                    style={{
                      background: '#fff',
                      borderTop: '1px solid #eee',
                      transition: 'max-height 0.3s ease',
                      overflow: 'hidden',
                      // Removed visibility: 'collapses' to ensure text is visible
                      maxHeight: openIndex === idx ? '1000px' : '0',
                      padding: openIndex === idx ? '1rem' : '0 1rem',
                    }}
                  >
                    {openIndex === idx && (
                      <div className="card-body">
                        {faq.content.map((text, i) => (
                          <p
                            className={`text-theme${i === faq.content.length - 1 ? ' no-margin' : ''}`}
                            key={i}
                            style={{ color: '#222', fontSize: '1rem', marginBottom: '1rem' }}
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BanqueteFaqsPage