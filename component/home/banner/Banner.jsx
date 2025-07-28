"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

// Dynamically import react-slick to avoid SSR issues and TypeError
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const bannerSlides = [
  {
    img: "/images/banner/10.jpg",
    alt: "New Kanha Hotel In Kalwar Road",
    heading: "New Kanha Hotel In Kalwar Road",
    subheading: "Stay in Jaipur’s Best Hotel",
    btnText: "Room Booking",
    btnLink: "roomtype",
  },
  {
    img: "/images/banner/11.jpg",
    alt: "New Kanha Hotel In Kalwar Road",
    heading: "New Kanha Hotel In Kalwar Road",
    subheading: "Stay in Jaipur’s Best Hotel",
    btnText: "Blanquette Booking",
    btnLink: "banquete-view",
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className="slider p-relative">
      <Slider {...settings} className="main-banner">
        {bannerSlides.map((slide, idx) => (
          <div className="slide-item" key={idx}>
            <img src={slide.img} alt={slide.alt} className="image-fit" />
            <div className="transform-center">
              <div className="container">
                <div className="row">
                  <div
                    className="col-lg-12"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <div className="slider-content">
                      {/* <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div> */}
                      <p>{slide.subheading}</p>
                      <h1 className="text-custom-white"> {slide.heading} </h1>
                      <Link href={slide.btnLink} className="btn-first btn-small">
                        {slide.btnText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;