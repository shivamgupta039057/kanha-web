"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

// Dynamic data for prices/services
const pricesData = [
  {
    img: "/images/extra/2.jpg",
    title: "Deluxe room with breakfast",
    price: "₹2250",
    period: "/ day",
    features: [
      "Comfortable AC Rooms with elegant interiors",
      "Complimentary Wi-Fi for all guests",
      "Daily Breakfast Included for a fresh start to your day",
    ],
    aos: "zoom-in-up",
  },
  {
    img: "/images/extra/3.jpg",
    title: "Super Deluxe room with breakfast ",
    price: "₹2750",
    period: "/ day",
    features: [
      "Comfortable AC Rooms with elegant interiors",
      "Complimentary Wi-Fi for all guests",
      "Daily Breakfast Included for a fresh start to your day",
    ],
    aos: "zoom-in-down",
  },
];

// Slider settings for react-slick
const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const PricesData = () => {
  const router = useRouter();
  return (
    <section
      className="work-area bg-ght sell-up-area"
      id="work-r"
      style={{ backgroundColor: "#f8f5f0" }}
    >
      <div className="container">
        <div className="row align-items-stretch" style={{ minHeight: "100%" }}>
          {/* Left Column: Heading and Info */}
          <div className="col-lg-4 d-flex flex-column justify-content-center" style={{ height: "100%" }}>
            <div
              className="section-header mb-0"
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "start",
                height: "100%",
                flexDirection: "column",
              }}
            >
              <div className="section-heading mb-3" style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontWeight: "bold" , fontSize : '20px' }}>Hotel Booking</h3>
                <span style={{ fontWeight: "bold" }}>Types Of Room We Provide</span>
              </div>
              <div className="sell-up-le" style={{ flex: 1 }}>
                <p>
                  We offers the best stay experience in Jaipur with well-furnished, air-conditioned rooms designed for comfort and relaxation.
                </p>
                <p>
                  Each room features modern amenities like free Wi-Fi, room service, and clean interiors. Whether for business or leisure, enjoy a peaceful and premium stay at New Kanha Hotel.
                </p>

                <div className="reservation-section">
                  <div className="reservation-icon">
                    <i className="flaticon-call"></i>
                  </div>
                  <div className="reservation-Description">
                    <address style={{ fontWeight: "bold" }}> +91 9783252121 </address>
                  </div>
                </div>

                <div className="reservation-section">
                  <div className="reservation-icon">
                    <i className="flaticon-mail"></i>
                  </div>
                  <div className="reservation-Description">
                    <address style={{ fontWeight: "bold" }}> newkanha220@gmail.com </address>
                  </div>
                </div>

                <div className="reservation-section">
                  <div className="reservation-icon">
                    <i className="fa fa-globe"></i>
                  </div>
                  <div className="reservation-Description">
                    <address style={{ fontWeight: "bold" }}>
                      Kala Nagari, Kalwar Rd, opp. New Kanha Restaurant, Radha Vihar, Govindpura, Jaipur, Rajasthan 302012
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Slider */}
          <div className="col-lg-8 d-flex flex-column justify-content-center" style={{ height: "100%" }}>
            <div className="sell-up-slider pt-4" style={{ height: "100%" }}>
              <Slider {...sliderSettings}>
                {pricesData.map((item, idx) => (
                  <div
                    key={idx}
                    style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", cursor: "pointer" }}
                    onClick={() => router.push("/roomtype")}
                  >
                    <div
                      className="section-divid"
                      data-aos={item.aos ? item.aos : undefined}
                      style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center" }}
                    >
                      <div className="best-pricee-img">
                        <img src={item.img} alt={item.title} />
                      </div>
                      <div className="headi-clean">
                        <h4>
                          {item.title.length > 25
                            ? item.title.slice(0, 25) + "..."
                            : item.title}
                        </h4>
                      </div>
                      <div className="extra-content">
                        <div className="amount">
                          {item.price}
                          <span>{item.period}</span>
                        </div>
                        <ul className="list-unstyled list" >
                          {item.features.map((feature, i) => (
                            <li  style={{ color: "#000000", fontWeight: "bold" }}   key={i}>
                              <i className="fa fa-check"></i> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesData;