'use client';

import React, { useEffect, useRef, useState } from 'react';

// The Google Maps embed iframe can cause slow rendering because it loads a large external resource.
// To improve perceived performance, we can lazy-load the iframe only when it enters the viewport.

export default function GoogleMapEmbed() {
  const [isIframeVisible, setIsIframeVisible] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    // Use Intersection Observer to load the iframe only when it's visible
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIframeVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-[400px]  mb-5" ref={mapRef}>
      <h3 style={{ textAlign: 'center', padding: '20px' }}>Find Our New Kanha Hotel</h3>
      <a
        href="https://www.google.com/maps/place/New+Kanha+Hotel/@26.9524546,75.6968611,17z"
        target="_blank"
        rel="noopener noreferrer"
        title="View New Kanha Hotel on Google Maps"
        className="block w-full h-full"
        style={{ position: 'relative', display: 'block', width: '100%', height: '100%' }}
      >
        {isIframeVisible ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.4560235863087!2d75.69686111166429!3d26.952454558282774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d2015da7f1b%3A0xb16d570bbd76cc7b!2sNew%20Kanha%20Hotel!5e0!3m2!1sen!2sin!4v1753766675115!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: 'none' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        ) : (
          // Placeholder for faster initial render
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontSize: '1.2rem',
              minHeight: 300,
            }}
          >
            Loading map...
          </div>
        )}
      </a>
    </div>
  );
}
