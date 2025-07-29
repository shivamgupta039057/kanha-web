'use client';

import React from 'react';

export default function GoogleMapEmbed() {
  return (

    <div className="w-full h-[400px] ">
      <h3 style={{ textAlign: 'center', padding: '20px' }}>Find Our New Kanha Hotel</h3>
      <a
        href="https://www.google.com/maps/place/New+Kanha+Hotel/@26.9524546,75.6968611,17z"
        target="_blank"
        rel="noopener noreferrer"
        title="View New Kanha Hotel on Google Maps"
        className="block w-full h-full"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.4560235863087!2d75.69686111166429!3d26.952454558282774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d2015da7f1b%3A0xb16d570bbd76cc7b!2sNew%20Kanha%20Hotel!5e0!3m2!1sen!2sin!4v1753766675115!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, pointerEvents: 'none' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </a>
    </div>
  );
}
