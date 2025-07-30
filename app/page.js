"use client"
import Banner from "@/component/home/banner/Banner";
import About from "@/component/home/about/About";
import RoomSuits from "@/component/home/room&suits/RoomSuits";
import HotelFacilities from "@/component/home/hotelFacilities/HotelFacilities";
import PromotionalVideo from "@/component/home/PromotionalVideo/PromotionalVideo";
import PresidentialData from "@/component/home/PresidentialData/PresidentialData";
import PricesData from "@/component/home/Prices/PricesData";
import Testimonials from "@/component/home/Testimonials/Testimonials";
import Blog from "@/component/home/Blog/Blog";
import Partner from "@/component/home/Partner/Partner";
import GoogleMapEmbed from "@/component/googlemap/GoogleMapEmbed";

export default function Home() {
  return (
   <>
   <Banner />
   <About />
   <RoomSuits />
   <HotelFacilities />
   <PromotionalVideo />
   {/* <PresidentialData /> */}
   <PricesData />
   <Testimonials />
   <Blog />
   <GoogleMapEmbed/>
   {/* <Partner /> */}
   </>
  );
}
