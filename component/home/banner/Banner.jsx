"use client";
import * as React from "react";
import Link from "next/link";

// Static banner content (use only first item)
const bannerData = {
  heading: "New Kanha Hotel In Kalwar Road",
  subheading: "Stay in Jaipur’s Best Hotel",
  btnText: "Room Booking",
  btnLink: "roomtype",
};

const Banner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden main-banner">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bannerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="slide-item">
      <div className="transform-center ">
              <div className="container ">
                <div className="row">
                  <div
                    className="col-lg-12 "
                  >
                    <div className="slider-content">
                    <p>{bannerData.subheading}</p>
                    <h1 className="text-custom-white"> {bannerData.heading} </h1>
                      <Link href={"djdk"} className="btn-first btn-small">
                        {bannerData.btnText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
    </div>
  );
};

export default Banner;
