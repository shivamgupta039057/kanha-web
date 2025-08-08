"use client";
import Head from "next/head";
import Banner from "@/component/home/banner/Banner";
import About from "@/component/home/about/About";
import RoomSuits from "@/component/home/room&suits/RoomSuits";
import HotelFacilities from "@/component/home/hotelFacilities/HotelFacilities";
import PricesData from "@/component/home/Prices/PricesData";
import Testimonials from "@/component/home/Testimonials/Testimonials";
import Blog from "@/component/home/Blog/Blog";
import GoogleMapEmbed from "@/component/googlemap/GoogleMapEmbed";

export default function Home() {
  // Schema for Google Rich Snippets
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "New Kanha Hotel",
    image: "https://newkanhahotel.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kalwar Road",
      addressLocality: "Jaipur",
      postalCode: "302012",
      addressCountry: "IN",
    },
    telephone: "+91-XXXXXXXXXX",
    url: "https://newkanhahotel.com/",
    description:
      "Discover the New Kanha Hotel in Kalwar Road, Jaipur. Enjoy comfortable rooms, modern amenities, and exceptional hospitality for families, couples, and business travelers.",
    priceRange: "₹1500 - ₹5000",
    starRating: {
      "@type": "Rating",
      ratingValue: "4.5",
      bestRating: "5",
    },
  };

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>New Kanha Hotel In Kalwar Road | Jaipur</title>
        <meta
          name="description"
          content="Discover the New Kanha Hotel in Kalwar Road, Jaipur. Enjoy comfortable rooms, modern amenities, and exceptional hospitality for families, couples, and business travelers."
        />
        <meta
          name="keywords"
          content="Kanha Hotel, Kalwar Road, Jaipur, hotel booking, new hotel Jaipur, luxury rooms, affordable stay, family hotel, business hotel, best hotel Jaipur"
        />
        <meta property="og:title" content="New Kanha Hotel In Kalwar Road | Jaipur" />
        <meta
          property="og:description"
          content="Stay at the New Kanha Hotel in Kalwar Road, Jaipur. Book your room now and experience comfort, convenience, and top-class service."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newkanhahotel.com/" />
        <meta property="og:image" content="https://newkanhahotel.com/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://newkanhahotel.com/" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      </Head>

      {/* Page Sections */}
      <Banner />
      <About />
      <RoomSuits />
      <HotelFacilities />
      <PricesData />
      <Testimonials />
      <Blog />
      <GoogleMapEmbed />
    </>
  );
}
