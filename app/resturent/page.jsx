import ResturentPage from '@/component/resturent/ResturentPage'
import React from 'react'

export const metadata = {
  title: "Multi-Cuisine Restaurant | New Kanha Hotel, Kalwar Road Jaipur",
  description:
    "Enjoy delicious Indian, Chinese, and Continental dishes at our in-house multi-cuisine restaurant. Open from 7:00 AM to 11:00 PM. Dine-in, Room Service & Takeaway available.",
  keywords: [
    "Restaurant Jaipur",
    "Multi-Cuisine Restaurant",
    "Hotel Restaurant Kalwar Road",
    "Indian Food Jaipur",
    "Chinese Food Jaipur",
    "Continental Food Jaipur"
  ],
  openGraph: {
    title: "Multi-Cuisine Restaurant | New Kanha Hotel Jaipur",
    description:
      "Freshly prepared Indian, Chinese & Continental cuisine at our in-house restaurant. Open 7 AM – 11 PM with dine-in, room service & takeaway options.",
    url: "https://newkanhahotel.com/resturent",
    images: [
      {
        url: "https://newkanhahotel.com",
        alt: "Multi-Cuisine Restaurant at New Kanha Hotel",
      }
    ]
  }
};

const page = () => {
  return (
    <ResturentPage />
  )
}

export default page