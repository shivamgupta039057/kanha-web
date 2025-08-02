import Link from "next/link";
import React from "react";

const roomSuitsData = [
  {
    colClass: "col-lg-4",
    img: "/images/room/1.jpg",
    price: "$150/Day",
    priceLink: "#",
    title: "Rooms",
    titleLink: "#",
    facilities: [
      "flaticon-bed",
      "flaticon-bath",
      "flaticon-towel",
      "flaticon-towel",
    ],
    detailsLink: "/roomtype",
    detailsText: "Details",
    detailsIcon: "fa fa-angle-right",
    facilitiesColClass: "col col-md-7",
    detailsColClass: "col col-md-5 text-right",
  },
  {
    colClass: "col-lg-4",
    img: "/images/Banquetdkd.jpeg",
    price: "$15/Hour",
    priceLink: "#",
    title: "Banquet",
    titleLink: "#",
    facilities: [
      "flaticon-bed",
      "flaticon-bath",
    ],
    detailsLink: "/banquete-view",
    detailsText: "Details",
    detailsIcon: "fa fa-angle-right",
    facilitiesColClass: "col col-md-5",
    detailsColClass: "col col-md-7 text-right",
  },
  {
    colClass: "col-lg-4",
    img: "/images/restaurent.jpeg",
    price: "$5/ Min",
    priceLink: "#",
    title: "Restaurant",
    titleLink: "#",
    facilities: [
      "flaticon-bed",
      "flaticon-bath",
    ],
    detailsLink: "/resturent",
    detailsText: "Details",
    detailsIcon: "fa fa-angle-right",
    facilitiesColClass: "col col-md-5",
    detailsColClass: "col col-md-7 text-right",
  },
];

const RoomSuits = () => {
  return (
    <section className="work-area bg-" id="work-we" style={{ backgroundColor: "#f8f5f0" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-heading mb-3">
            <h3 className="text-custom-black mb-0">The New Kanha Hotel</h3>
            <span>Rooms , Banquets & Restaurent </span>
          </div>
        </div>
        <div className="row">
          {roomSuitsData.map((room, idx) => (
            <div className={room.colClass} key={idx}>
              <div
                className="femg"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="hover-sec-img">
                  <img src={room.img} alt="img" />
                </div>
                <span className="category">
                  <a href={room.priceLink}>{room.price}</a>
                </span>
                <div className="con">
                  <h5>
                    <a href={room.titleLink}>{room.title}</a>
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className={room.facilitiesColClass} style={{ marginTop: "6px" }}>
                      <ul>
                        {room.facilities.map((icon, i) => (
                          <li key={i}>
                            <i className={icon}></i>
                          </li>
                        ))}
                        {/* <li><i className="flaticon-breakfast"></i></li> */}
                      </ul>
                    </div>
                    <div className={room.detailsColClass}>
                      <div className="permalink">
                        <Link href={room.detailsLink}>
                          {room.detailsText} <i className={room.detailsIcon}></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomSuits;