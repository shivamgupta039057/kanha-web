import React from "react";

const facilitiesData = [
  {
    img: "/images/facilities/10.png",
    title: "Smart Key",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
    icon: "flaticon-car",
  },
  {
    img: "/images/facilities/11.png",
    title: "Store Luggage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
    icon: "flaticon-car",
  },
  {
    img: "/images/facilities/13.png",
    title: "Room Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
    icon: "flaticon-car",
  },
  {
    img: "/images/facilities/14.png",
    title: "Fast Wifi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
    icon: "flaticon-car",
  },
  {
    img: "/images/facilities/15.png",
    title: "Car Parking",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
    icon: "flaticon-car",
  },
  {
    img: "/images/facilities/16.png",
    title: "Safe Zone",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
    icon: "flaticon-car",
  },
];

const HotelFacilities = () => {
  return (
    <section className="work-area bg-lit" id="work-area">
      <div className="container">
        <div className="section-header">
          <div className="section-heading mb-3">
            <h3 className="text-custom-black mb-0">Our Services</h3>
            <span>Hotel Facilities</span>
          </div>
        </div>
        <div className="row">
          {facilitiesData.map((facility, idx) => (
            <div className="col-lg-4" key={idx}>
              <div className="single-para-facality" data-aos="fade-up">
                <img src={facility.img} alt={facility.title} />
                <h5>{facility.title}</h5>
                <p>{facility.desc}</p>
                <div className="facility-shape">
                  <i className={facility.icon}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelFacilities;