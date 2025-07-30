"use client"
import SubHeader from '@/utils/SubHeader'
import React, { useState } from 'react'

const faqs = [
  {
    title: 'Where is New Kanha Hotel located?',
    content: [
      "New Kanha Hotel is located at Govindpura, Kalwar Road, Jaipur – easily accessible from all major parts of the city."
    ]
  },
  {
    title: 'What types of rooms are available?',
    content: [
      "We offer well-furnished AC rooms with modern amenities, suitable for both solo travelers and families."
    ]
  },
  {
    title: 'Is breakfast included in the room stay?',
    content: [
      "Yes, complimentary breakfast is included with every room booking."
    ]
  },
  {
    title: 'Does the hotel have a banquet hall for events?',
    content: [
      "Yes, we have a spacious and beautifully designed banquet hall, perfect for weddings, parties, and corporate events."
    ]
  },
  {
    title: 'Is there a restaurant inside the hotel?',
    content: [
      "Absolutely! Our multi-cuisine restaurant serves a variety of delicious Indian and international dishes."
    ]
  },
  {
    title: 'Do you offer parking space?',
    content: [
      "Yes, we provide secure and ample parking space for all guests and event visitors."
    ]
  },
  {
    title: 'How can I make a booking?',
    content: [
      "You can book directly by calling us, through our website’s booking form, or via WhatsApp for quick inquiries."
    ]
  }
];

const RoomFaqsPage = () => {
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

export default RoomFaqsPage