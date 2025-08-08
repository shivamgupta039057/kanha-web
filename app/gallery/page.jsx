import GalleryData from '@/component/galleryPages/GalleryData';
import React from 'react';

// ✅ Add metadata
export const metadata = {
  title: "Photo Gallery - New Kanha Hotel Jaipur",
  description: "Explore the photo gallery of New Kanha Hotel in Jaipur. View our well-furnished rooms, modern amenities, and beautiful interiors.",
  keywords: [
    "New Kanha Hotel Jaipur",
    "Hotel Gallery Jaipur",
    "Hotel Room Photos Jaipur",
    "Best Hotels in Jaipur",
    "Luxury Hotel Jaipur"
  ],
  openGraph: {
    title: "Photo Gallery - New Kanha Hotel Jaipur",
    description: "See stunning pictures of our rooms, interiors, and hotel amenities at New Kanha Hotel, Jaipur.",
    url: "https://newkanhahotel.com/gallery",
    images: [
      {
        url: "https://newkanhahotel.com/images/gallery/room1.jpg", // change to your real image path
        width: 1200,
        height: 630,
        alt: "New Kanha Hotel Room Photo"
      }
    ],
    type: "website"
  }
};

const page = () => {
  return (
    <>
      <GalleryData />
    </>
  );
};

export default page;
