"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamic data for prices/services
const pricesData = [
  {
    img: "/images/extra/2.jpg",
    title: "Classic Balcony Room",
    price: "$50",
    period: "/ month",
    features: [
      "Hotel ut nisan the duru",
      "Orci miss natoque vasa ince",
      "Clean sorem ipsum morbin",
    ],
    aos: "zoom-in-up",
  },
  {
    img: "/images/extra/3.jpg",
    title: "Room cleaning",
    price: "$240",
    period: "/ month",
    features: [
      "Hotel ut nisan the duru",
      "Orci miss natoque vasa ince",
      "Clean sorem ipsum morbin",
    ],
    aos: "zoom-in-down",
  },
  {
    img: "/images/extra/4.jpg",
    title: "Superior Double Room",
    price: "$126",
    period: "/ month",
    features: [
      "Hotel ut nisan the duru",
      "Orci miss natoque vasa ince",
      "Clean sorem ipsum morbin",
    ],
    aos: "",
  },
  {
    img: "/images/extra/5.jpg",
    title: "Balcony Double Room",
    price: "$89",
    period: "/ month",
    features: [
      "Hotel ut nisan the duru",
      "Orci miss natoque vasa ince",
      "Clean sorem ipsum morbin",
    ],
    aos: "",
  },
];

// Slider settings for react-slick
const sliderSettings = {
  dots: true,
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
  return (
    <section
      className="work-area bg-ght sell-up-area"
      id="work-r"
      style={{ backgroundColor: "#f8f5f0" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="section-header mb-0"
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "start",
              }}
            >
              <div className="section-heading mb-3">
                <h3 className="text-custom-black mb-0">Best Prices</h3>
                <span>Other Services</span>
              </div>
            </div>
            <div className="sell-up-le">
              <p>
                The best prices for your relaxing vacation. The utanislen quam
                nestibulum ac quame odion elementum sceisue the aucan.
              </p>
              <p>
                Orci varius natoque penatibus et magnis disney parturient monte
                nascete ridiculus mus nellen etesque habitant morbine.
              </p>

              <div className="reservation-section">
                <div className="reservation-icon">
                  <i className="flaticon-call"></i>
                </div>
                <div className="reservation-Description">
                  <address> +91 0009988767 </address>
                </div>
              </div>

              <div className="reservation-section">
                <div className="reservation-icon">
                  <i className="flaticon-mail"></i>
                </div>
                <div className="reservation-Description">
                  <address> info@Rudrahotel.com </address>
                </div>
              </div>

              <div className="reservation-section">
                <div className="reservation-icon">
                  <i className="fa fa-globe"></i>
                </div>
                <div className="reservation-Description">
                  <address> www.rudra.com </address>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="sell-up-slider pt-4">
              <Slider {...sliderSettings}>
                {pricesData.map((item, idx) => (
                  <div key={idx}>
                    <div
                      className="section-divid"
                      data-aos={item.aos ? item.aos : undefined}
                    >
                      <div className="best-pricee-img">
                        <img src={item.img} alt={item.title} />
                      </div>
                      <div className="headi-clean">
                        <h4>{item.title}</h4>
                      </div>
                      <div className="extra-content">
                        <div className="amount">
                          {item.price}
                          <span>{item.period}</span>
                        </div>
                        <ul className="list-unstyled list">
                          {item.features.map((feature, i) => (
                            <li key={i}>
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