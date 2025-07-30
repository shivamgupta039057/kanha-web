"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial data array
const testimonialsData = [
  {
    image: "/images/tes.jpg",
    content:
      "Nice Restaurant, good service, good behaviour, good cleaning, tasty foods.",
    name: "Ram Chandra Keelka",
    position: "Client",
  },
  {
    image: "/images/test.jpg",
    content:
      "Tasty food with excellent service. Delicious indian #food. Very tasty food and service is very good... Thanks New Kanha",
    position: "Client",
  },
  {
    image: "/images/test.jpg",
    content:
      "Best palace Best food Quality Staff Behaviour excellent food Quality Best Er Gourav Bhardwaj  Devlopment Authority jaipur",
    position: "Assistant Engineer Jaipur",
  },
  // Add more testimonials as needed
];

// Slider settings
const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const QuoteSVG = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 212 173"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M156.962 95.6588C144.051 94.6412 133.689 89.8922 125.875 81.4118C117.721 72.9314 113.644 62.2461 113.644 49.3559C113.644 35.448 118.231 23.7451 127.404 14.2471C136.237 4.74903 147.449 1.42231e-05 161.038 1.54111e-05C175.987 1.6718e-05 188.218 5.42747 197.731 16.2824C207.244 27.1373 212 42.5716 212 62.5853C212 82.9382 208.433 101.426 201.298 118.047C194.163 135.008 183.462 150.781 169.192 165.368C164.436 170.456 158.66 173 151.865 173C145.071 173 139.125 170.625 134.029 165.876C128.933 161.467 126.385 156.378 126.385 150.612C126.385 145.184 128.423 140.435 132.5 136.365C144.731 123.475 152.885 109.906 156.962 95.6588ZM43.3173 95.6588C30.407 94.6412 20.0449 89.8921 12.2308 81.4118C4.07692 72.9314 -1.40005e-05 62.2461 -1.28736e-05 49.3559C-1.16577e-05 35.448 4.58653 23.7451 13.7596 14.2471C22.5929 4.74902 33.8045 4.288e-06 47.3942 5.47605e-06C62.3429 6.78291e-06 74.5737 5.42746 84.0865 16.2824C93.5994 27.1373 98.3558 42.5716 98.3558 62.5853C98.3558 82.9382 94.7884 101.425 87.6538 118.047C80.5192 135.008 69.8173 150.781 55.5481 165.368C50.7917 170.456 45.016 173 38.2211 173C31.4263 173 25.4807 170.625 20.3846 165.876C15.2884 161.467 12.7404 156.378 12.7404 150.612C12.7404 145.184 14.7788 140.435 18.8558 136.365C31.0865 123.474 39.2404 109.906 43.3173 95.6588Z"
      fill="black"
    ></path>
  </svg>
);

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
            <span style={{ color: "#fff" }}>What Client's Say?</span>
            <div className="line mb-0"></div>
          </div>
        </div>
        <div className="row testimonial-slider">
          <div className="col-lg-12">
            <Slider {...sliderSettings}>
              {testimonialsData.map((testimonial, idx) => (
                <div key={idx}>
                  <div className="robert-test">
                    {/* <div className="robert-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div> */}
                    <div className="robert-content">
                      <p>{testimonial.content}</p>
                    </div>
                    {/* <div className="robert-s">
                      <QuoteSVG />
                    </div> */}
                    <div className="robert-cot">
                      <h2>
                        <strong>{testimonial.name}</strong>
                      </h2>
                    </div>
                    <div className="test-p">
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
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