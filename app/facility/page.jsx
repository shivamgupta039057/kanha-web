import FacilityData from '@/component/facilityPages/FacilityData';

export const metadata = {
  title: "Hotel Facilities | New Kanha Hotel, Kalwar Road Jaipur",
  description:
    "Explore the top facilities at New Kanha Hotel, Jaipur: luxurious AC rooms, spacious banquet hall, multi-cuisine restaurant, free Wi-Fi, ample parking, and a prime location on Kalwar Road.",
  keywords: [
    "Hotel facilities Jaipur",
    "Luxurious AC Rooms Jaipur",
    "Banquet Hall Kalwar Road",
    "Multi-Cuisine Restaurant Jaipur",
    "Free Wi-Fi Hotel Jaipur",
    "Ample Parking Hotel Jaipur"
  ],
  openGraph: {
    title: "Facilities at New Kanha Hotel, Jaipur",
    description:
      "Enjoy premium facilities at New Kanha Hotel: AC rooms, banquet hall, multi-cuisine dining, free Wi-Fi, ample parking, and prime Kalwar Road location.",
    url: "https://newkanhahotel.com/facilities",
    images: [
      {
        url: "https://newkanhahotel.com/images/facilities.jpg",
        alt: "Luxurious AC Room at New Kanha Hotel"
      }
    ]
  }
};

export default function Page() {
  return <FacilityData />;
}
