import ContactPage from '@/component/contact/ContactPage';
import React from 'react';

export const metadata = {
  title: "Contact Us - New Kanha Hotel Jaipur | Govindpura, Kalwar Road",
  description:
    "Get in touch with New Kanha Hotel, Jaipur. Call 9783252121 or email newkanha220@gmail.com for room bookings, banquet reservations, or restaurant inquiries.",
  keywords: [
    "Contact New Kanha Hotel",
    "Hotel in Kalwar Road Jaipur",
    "Banquet Booking Jaipur",
    "Restaurant Jaipur",
    "Luxury Hotel Jaipur"
  ],
  openGraph: {
    title: "Contact New Kanha Hotel Jaipur",
    description:
      "Reach out to New Kanha Hotel, Govindpura, Kalwar Road, Jaipur for bookings, events, and dining reservations.",
    url: "https://newkanhahotel.com/contact",
    images: [
      {
        url: "https://newkanhahotel.com/images/contact.jpg", // replace with your actual image
        width: 1200,
        height: 630,
        alt: "Contact New Kanha Hotel Jaipur"
      }
    ],
    type: "website"
  }
};

const page = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default page;
