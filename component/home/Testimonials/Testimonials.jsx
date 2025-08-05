"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial screenshot images
const testimonialsData = [
  { image: "/images/testimonial/1.jpeg" },
  { image: "/images/testimonial/2.jpeg" },
  { image: "/images/testimonial/1.jpeg" },
  { image: "/images/testimonial/1.jpeg" },
  { image: "/images/testimonial/1.jpeg" },
  { image: "/images/testimonial/1.jpeg" },
  // Add more images as needed
];

// Slider settings for 2 at a time
const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section
      className="work-area bg-ght area"
      id="work-re"
      style={{ backgroundImage: "url(/images/subheader.jpg)" }}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-heading mb-3">
            <h3 className="text-custom-black mb-0" style={{ color: "#fff" }}>
              Testimonials
            </h3>
            {/* <span style={{ color: "#fff" }}>Client Screenshots</span> */}
            <div className="line mb-0"></div>
          </div>
        </div>
        <div className="row testimonial-slider">
          <div className="col-lg-12">
            <Slider {...sliderSettings}>
              {testimonialsData.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center p-4"
                  style={{
                    minWidth: "280px",
                    maxWidth: "480px",
                    width: "100%",
                    margin: "0 auto",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={`Testimonial ${idx + 1}`}
                    className="rounded-xl shadow-lg object-contain"
                    style={{
                      width: "100%",
                      maxWidth: "460px",
                      height: "360px",
                      maxHeight: "360px",
                      minHeight: "220px",
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto",
                      background: "#fff",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;