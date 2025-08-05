import React from "react";

const facilitiesData = [
  {
    img: "/images/facilities/10.png",
    title: "Luxurious AC Rooms",
    desc: "Comfortable and well-furnished rooms with modern amenities.",
    icon: "flaticon-car",
  },
  {
    img: "/images/facilities/11.png",
    title: "Spacious Banquet Hall",
    desc: "Ideal for weddings, parties, and corporate events.",
    icon: "flaticon-car",
  },
  {
    img: "/images/facilities/13.png",
    title: "Multi-Cuisine Restaurant",
    desc: "Delicious food with a variety of Indian and international dishes.",
    icon: "flaticon-car",
  },
  {
    img: "/images/facilities/14.png",
    title: "Free Wi-Fi & Room Service",
    desc: "Stay connected and enjoy in-room convenience.",
    icon: "flaticon-car",
  },
  {
    img: "/images/facilities/15.png",
    title: "Ample Parking Space",
    desc: "Secure and spacious parking for guests and event visitors.",
    icon: "flaticon-car",
  },
  {
    img: "/images/facilities/16.png",
    title: "Prime Location – Govindpura, Kalwar Road",
    desc: "Easy to access from all major parts of Jaipur.",
    icon: "flaticon-car",
  },
];

const HotelFacilities = () => {
  return (
    <section className="work-area bg-lit" id="work-area">
      <div className="container">
        <div className="section-header">
          <div className="section-heading mb-3">
            <h3 style={{ fontWeight: "bold" , fontSize : '20px' }}>Our Services</h3>
            <span style={{fontWeight : 'bold'}}>Hotel Facilities</span>
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