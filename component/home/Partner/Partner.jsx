"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Example dynamic partner data
const partners = [
  { img: "/images/partner/1.png", alt: "Partner 1" },
  { img: "/images/partner/2.png", alt: "Partner 2" },
  { img: "/images/partner/3.png", alt: "Partner 3" },
  { img: "/images/partner/4.png", alt: "Partner 4" },
  { img: "/images/partner/5.png", alt: "Partner 5" },
  { img: "/images/partner/6.png", alt: "Partner 6" },
];

// Slider settings for react-slick
const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Partner = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-heading mb-3">
            <h3 className="text-custom-black mb-0" style={{ color: "#000" }}>
              Partner
            </h3>
            <span style={{ color: "#000" }}>Our Partner</span>
            <div className="line mb-0"></div>
          </div>
        </div>
        <div className="partners-slider">
          <Slider {...sliderSettings}>
            {partners.map((partner, idx) => (
              <div key={idx} data-aos="flip-left">
                <div className="partner-img" style={{ padding: "20px", textAlign: "center" }}>
                  <img
                    src={partner.img}
                    alt={partner.alt}
                    style={{ maxWidth: "100%", maxHeight: "80px", objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Partner;