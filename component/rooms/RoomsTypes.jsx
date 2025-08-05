import { imgBaseUrl } from "@/services/apiservices";
import { openLoginModal } from "@/store/features/loginModalSlice";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";


const getColClass = (idx) => {
  if (idx === 0) return "col-lg-6";
  return "col-lg-3";
};

const RoomsTypes = ({ roomTypeData, isLoading }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleBookHandle = (id) => {
    if (token) {
      router.push(`/bookingPage/${id}`);
    } else {
      dispatch(openLoginModal());
    }
  };

  console.log("roomTypeDataroomTypeDataroomTypeData", roomTypeData);


  // Prepare data for tabs and details
  const hasApiData = roomTypeData && roomTypeData.length > 0;
  const tabs = hasApiData
    ? roomTypeData.map((tab, idx) => ({
      id: tab._id,
      title: tab.title,
      img:
        tab.images && tab.images.length > 0
          ? `${imgBaseUrl}${tab.images[0]}`
          : "/images/room/default.jpg",
      data: tab,
    }))
    : [
      {
        id: "navDeluxe",
        title: "Deluxe Room",
        img: "/img/room/room-1.png",
        data: {
          name: "Deluxe Room",
          price: 30,
          size: "1100 sq.ft",
          beds: "1 king Bed",
          guests: "Up to 4 Guest",
          img: "/img/room/room-1.png",
        },
      },
      {
        id: "navSingle",
        title: "Single Room",
        img: "/img/room/room-2.png",
        data: {
          name: "Single Room",
          price: 40,
          size: "1200 sq.ft",
          beds: "1 king Bed",
          guests: "Up to 6 Guest",
          img: "/img/room/room-2.png",
        },
      },
      {
        id: "navSuper",
        title: "Super Room",
        img: "/img/room/room-3.png",
        data: {
          name: "Super Room",
          price: 50,
          size: "1350 sq.ft",
          beds: "2 king Bed",
          guests: "Up to 8 Guest",
          img: "/img/room/room-3.png",
        },
      },
      {
        id: "navPresidential",
        title: "Presidential Room",
        img: "/img/room/room-4.png",
        data: {
          name: "Presidential Room",
          price: 100,
          size: "1500 sq.ft",
          beds: "2 king Bed",
          guests: "Up to 8 Guest",
          img: "/img/room/room-4.png",
        },
      },
    ];

  // Get the selected tab's data
  const selectedRoom = tabs[selectedTab]?.data;

  return (
    <>
      <div className="roomsuite-container">
        {/* Page Header */}
        <div className="roomsuite-page-header">
          <h1 className="roomsuite-page-title">Our Rooms & Suites</h1>
          <p className="roomsuite-page-subtitle">
            Experience luxury and comfort in our beautifully designed rooms, each offering unique amenities
            and traditional Rajasthani hospitality with modern conveniences.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="roomsuite-rooms-grid">
          {/* Deluxe Room */}
          {
            roomTypeData.map((item, idx) => {
              return (
                <div
                  className="roomsuite-room-card"
                  key={item._id || idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div className="roomsuite-room-image">
                    {item.images && item.images.length > 0 ? (
                      <img
                        src={`${imgBaseUrl}${item.images[0]}`}
                        alt={item.title || "Room Image"}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <div className="roomsuite-room-image-text">🏨</div>
                    )}
                    {item.isAvailable && (
                      <div className="roomsuite-room-type-badge">Available</div>
                    )}
                  </div>
                  <div
                    className="roomsuite-room-content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <div className="roomsuite-room-header">
                      <div>
                        <h2 className="roomsuite-room-title">{item.title || "Room"}</h2>
                        <div className="roomsuite-room-type" style={{ color: "#000", fontSize: "0.9rem" }}>
                          {item.type || "Standard Room"}
                        </div>
                      </div>
                      <div className="roomsuite-room-price">
                        <div className="roomsuite-price-amount">
                          ₹{item.price ? item.price.toLocaleString() : "N/A" }/
                        </div>
                        {/* <span>(Tax excluded)</span> */}
                        <div className="roomsuite-price-period">per night</div>
                      </div>
                    </div>

                    <div className="roomsuite-room-capacity">
                      <div className="roomsuite-capacity-item">
                        <span className="roomsuite-capacity-icon">👥</span>
                        <span>
                          {item.capacity
                            ? `Up to ${item.capacity} Guest${item.capacity > 1 ? "s" : ""}`
                            : "Capacity N/A"}
                        </span>
                      </div>
                      {/* You can add more capacity info if available in item */}
                    </div>

                    <div className="roomsuite-room-description">
                      {item.description ||
                        "Experience traditional Rajasthani decor in these beautifully designed rooms. The elegantly decorated deluxe rooms have all the modern facilities with comfortable accommodation in a Fresco style setting."}
                    </div>

                    <div className="roomsuite-amenities-section">
                      <h3 className="roomsuite-amenities-title">
                        Key Amenities
                      </h3>
                      <div className="roomsuite-amenities-grid">
                        {Array.isArray(item.amenities) && item.amenities.length > 0 ? (
                          item.amenities.map((amenity, i) => (
                            <div className="roomsuite-amenity-item" key={i}>
                              {/* You can add icons based on amenity name if desired */}
                              <span className="roomsuite-amenity-icon">✔️</span>
                              {amenity}
                            </div>
                          ))
                        ) : (
                          <>
                            <div className="roomsuite-amenity-item">
                              <span className="roomsuite-amenity-icon">📶</span>Free WiFi
                            </div>
                            <div className="roomsuite-amenity-item">
                              <span className="roomsuite-amenity-icon">❄️</span>AC
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Push actions to the bottom using marginTop: auto */}
                    <div
                      className="roomsuite-room-actions"
                      style={{ marginTop: "auto", display: "flex", gap: "10px" }}
                    >
                      <Link href={`/bookingPage/${item?._id}`} className="roomsuite-btn roomsuite-btn-primary">
                        Book Now
                      </Link>
                      <Link href={`/bookingPage/${item?._id}`} className="roomsuite-btn roomsuite-btn-secondary">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>

        <style>{`
        .roomsuite-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .roomsuite-page-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .roomsuite-page-title {
          font-size: 3rem;
          color: #e7c742;
          font-weight: bold;
          margin-bottom: 15px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        .roomsuite-page-subtitle {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }
        .roomsuite-rooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }
        .roomsuite-room-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          position: relative;
          animation: roomsuite-fadeInUp 0.6s ease forwards;
        }
        .roomsuite-room-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }
        .roomsuite-room-image {
          position: relative;
          height: 280px;
          overflow: hidden;
          background: linear-gradient(45deg, #e7c742, #D2691E);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .roomsuite-room-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="bed" patternUnits="userSpaceOnUse" width="20" height="20"><rect fill="%23ffffff" fill-opacity="0.1" width="20" height="20"/><rect fill="%23ffffff" fill-opacity="0.05" x="5" y="5" width="10" height="10"/></pattern></defs><rect fill="url(%23bed)" width="100" height="100"/></svg>') repeat;
        }
        .roomsuite-room-image-text {
          color: white;
          font-size: 4rem;
          font-weight: bold;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
          z-index: 2;
          position: relative;
        }
        .roomsuite-room-type-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #e7c742;
          color: black;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: bold;
          z-index: 3;
        }
        .roomsuite-room-content {
          padding: 30px;
        }
        .roomsuite-room-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .roomsuite-room-title {
          font-size: 1.8rem;
          color: #000000;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .roomsuite-room-price {
          text-align: right;
        }
        .roomsuite-price-amount {
          font-size: 2rem;
          color: #000000;
          font-weight: bold;
        }
        .roomsuite-price-period {
          color: #000;
          font-size: 0.9rem;
        }
        .roomsuite-room-capacity {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 10px;
        }
        .roomsuite-capacity-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #000;
          font-weight: 500;
        }
        .roomsuite-capacity-icon {
          font-size: 1.2rem;
        }
        .roomsuite-room-description {
          color: #000;
          line-height: 1.7;
          margin-bottom: 25px;
        }
        .roomsuite-amenities-section {
          margin-bottom: 25px;
        }
        .roomsuite-amenities-title {
          font-size: 1.1rem;
          color: #e7c742;
          font-weight: bold;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .roomsuite-amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 10px;
        }
        .roomsuite-amenity-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: #f0f8ff;
          border-radius: 20px;
          font-size: 0.85rem;
          color: #000;
        }
        .roomsuite-amenity-icon {
          color: #e7c742;
        }
        .roomsuite-room-actions {
          display: flex;
          gap: 15px;
        }
        .roomsuite-btn {
          padding: 12px 25px;
          border: none;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
        }
        .roomsuite-btn-primary {
          background: #e7c742;
          color: black;
          flex: 1;
          justify-content: center;
        }
        .roomsuite-btn-primary:hover {
          background: #e7c742;
          color : black;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139, 69, 19, 0.3);
        }
        .roomsuite-btn-secondary {
          background: transparent;
          color: #000;
          border: 2px solid #e7c742;
          flex: 1;
          justify-content: center;
        }
        .roomsuite-btn-secondary:hover {
          background: #e7c742;
          color: white;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .roomsuite-container {
            padding: 20px 15px;
          }
          .roomsuite-page-title {
            font-size: 2rem;
          }
          .roomsuite-rooms-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .roomsuite-room-content {
            padding: 20px;
          }
          .roomsuite-room-header {
            flex-direction: column;
            gap: 15px;
          }
          .roomsuite-room-capacity {
            flex-wrap: wrap;
            gap: 10px;
          }
          .roomsuite-amenities-grid {
            grid-template-columns: 1fr 1fr;
          }
          .roomsuite-room-actions {
            flex-direction: column;
          }
        }
        @keyframes roomsuite-fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      </div>
    </>
  );
};

export default RoomsTypes;