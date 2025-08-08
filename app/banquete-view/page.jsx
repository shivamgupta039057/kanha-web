import Banquet from '@/component/banquet/Banquet'
import React from 'react'

export const metadata = {
  title: "Kanha Banquet Hall | Govindpura, Kalwar Road, Jaipur | Up to 300 Guests",
  description:
    "Host your dream wedding, birthday, or corporate event at Kanha Banquet Hall, Govindpura, Kalwar Road, Jaipur. Elegant interiors, modern amenities, and space for up to 300 guests.",
  keywords: [
    "Banquet Hall Jaipur",
    "Kanha Banquet Hall",
    "Wedding Hall Jaipur",
    "Event Venue Kalwar Road",
    "Birthday Party Hall Jaipur",
    "Corporate Event Hall Jaipur"
  ],
  openGraph: {
    title: "Kanha Banquet Hall - Govindpura, Kalwar Road, Jaipur",
    description:
      "Elegant banquet hall in Govindpura, Jaipur for weddings, parties, and corporate events. Space for up to 300 guests with modern amenities.",
    url: "https://yourwebsite.com/banquet",
    images: [
      {
        url: "https://yourwebsite.com/images/banquet-hall.jpg",
        alt: "Kanha Banquet Hall Jaipur",
      }
    ]
  }
};

const Page = () => {
  return (
    <Banquet />
  );
}

export default Page;