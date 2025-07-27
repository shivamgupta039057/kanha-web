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
      <section
        className="section-room relative xl:py-[100px] py-[70px]"
        data-aos="fade-up"
        data-aos-duration="2000"
        id="rooms"
      >
        {/* Decorative background */}
        <div
          className="pointer-events-none absolute z-[-1] right-0 top-0 2xl:w-[150px] xl:w-[130px] w-[80px] 2xl:h-[150px] xl:h-[130px] h-[80px] bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('/img/theme/1.png')" }}
        />
        <div className="flex flex-wrap justify-between items-center mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] px-[12px]">
          <div className="text-center w-full mb-[30px]">
            <h2 className="text-[#000] font-medium leading-[1.2] 2xl:text-[40px] xl:text-[35px] xl:pb-0 lg:text-[30px] md:text-[28px] sm:text-[26px] text-[22px]">
              Choose Your Luxurious <span className="text-[#ed5b31]">Room</span>
            </h2>
          </div>
          {/* Room Tabs */}
          <nav className="w-full">
            <ul
              className="nav nav-tabs rooms lh-room border-0 flex flex-wrap mb-[-24px]"
              id="nav_tab"
              role="tablist"
            >
              {tabs.map((tab, idx) => (
                <li
                  key={tab.id}
                  className={`mb-0 text-[20px] px-[12px] mb-[24px] leading-[28px] text-[#000] focus:text-[#000] lg:w-[25%] md:w-[50%] border-0 text-center nav-link${
                    selectedTab === idx ? " active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedTab(idx)}
                >
                  <div
                    className="hover:text-[#000] focus:outline-none"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={selectedTab === idx ? "true" : "false"}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setSelectedTab(idx);
                    }}
                  >
                    <img
                      src={tab.img}
                      className="w-full mb-[15px] rounded-[15px]"
                      alt={tab.title || "Room Image"}
                      loading="lazy"
                    />
                    {tab.title}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          {/* Tab Content */}
          <div
            className="tab-content border border-solid border-[#e3e1e1] rounded-[15px] bg-[#fff] relative p-0 mt-[25px] overflow-hidden"
            id="nav-tabContent"
          >
            {hasApiData ? (
              selectedRoom && (
                <div
                  key={selectedRoom._id}
                  className="tab-pane fade active show"
                  id={selectedRoom._id}
                  role="tabpanel"
                  aria-labelledby={`${selectedRoom._id}-tab`}
                >
                  <div className="flex flex-wrap justify-between mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]">
                    <div className="xl:w-1/2 w-full px-[12px]">
                      <div className="lh-room-contain relative px-[12px] py-[24px]">
                        <div className="lh-contain-heading pb-[15px] flex justify-between">
                          <h4 className="xl:text-[22px] text-[18px] leading-[1.2] font-bold text-[#000] text-left">
                            {selectedRoom.title || "Room"}
                          </h4>
                          <div className="lh-room-price">
                            <h4 className="xl:text-[22px] text-[18px] text-[#ed5b31] font-bold leading-[22px]">
                              ₹{selectedRoom.price || "--"} /
                              <span className="ml-[5px] text-[14px] font-normal text-[#777]">
                                Per night
                              </span>
                            </h4>
                          </div>
                        </div>
                        <div className="lh-room-size flex flex-wrap">
                          <p className="pb-[15px] text-[14px] text-[#777] leading-[1.2]">
                            {selectedRoom.size || "N/A"} <span className="px-[15px]">|</span>
                          </p>
                          <p className="pb-[15px] text-[14px] text-[#777] leading-[1.2]">
                            {selectedRoom.beds || "N/A"} <span className="px-[15px]">|</span>
                          </p>
                          <p className="pb-[15px] text-[14px] text-[#777] leading-[1.2]">
                            {selectedRoom.guests || "N/A"}
                          </p>
                        </div>
                        <p>
                          {selectedRoom.description ||
                            "This is the dolor sit amet consectetur adipisicing elit. Culpa necessitatibus consequatur nostrum iure? Similique voluptatibus totam nobis exercitationem perferendis id, cupiditate at et praesentium quas? Quae amet, magni suscipit sequi."}
                        </p>
                        <div className="lh-main-features border-t border-solid border-[#e3e1e1] pt-[30px] mt-[30px]">
                          <div className="lh-contain-heading pb-[15px] flex justify-between">
                            <h4 className="xl:text-[22px] text-[18px] leading-[1.2] font-bold text-[#000] text-left">
                              Room Features
                            </h4>
                          </div>
                          <div className="lh-room-features flex">
                            <div className="lh-cols-room">
                              <ul className="pl-[16px] mb-0">
                                {selectedRoom.amenities && selectedRoom.amenities.length > 0 ? (
                                  selectedRoom.amenities.slice(0, 3).map((amenity, i) => (
                                    <li key={i} className="text-[15px] text-[#777] leading-[1.2]">
                                      {amenity}
                                    </li>
                                  ))
                                ) : (
                                  <>
                                    <li className="text-[15px] text-[#777] leading-[1.2]">
                                      42 Inch flat screen TV
                                    </li>
                                    <li className="text-[15px] text-[#777] leading-[1.2]">
                                      In-room Safe
                                    </li>
                                    <li className="text-[15px] text-[#777] leading-[1.2]">
                                      Mini-refrigerator
                                    </li>
                                  </>
                                )}
                              </ul>
                            </div>
                            <div className="lh-cols-room">
                              <ul className="pl-[16px] mb-0">
                                {selectedRoom.amenities && selectedRoom.amenities.length > 3 ? (
                                  selectedRoom.amenities.slice(3, 6).map((amenity, i) => (
                                    <li key={i} className="text-[15px] text-[#777] leading-[1.2]">
                                      {amenity}
                                    </li>
                                  ))
                                ) : (
                                  <>
                                    <li className="text-[15px] text-[#777] leading-[1.2]">
                                      Mini-refrigerator
                                    </li>
                                    <li className="text-[15px] text-[#777] leading-[1.2]">
                                      Breakfast
                                    </li>
                                    <li className="text-[15px] text-[#777] leading-[1.2]">
                                      Complimentary bottled water
                                    </li>
                                  </>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* IMPLEMENTED FIELD: Book Now Button */}
                        <div className="mt-6 flex justify-end">
                          <button
                            className="bg-[000000] hover:bg-[#000000] text-[#000000] font-semibold py-2 px-6 rounded-[8px]"
                            onClick={() => handleBookHandle(selectedRoom._id)}
                          >
                            Book Now
                          </button>
                        </div>
                        {/* END IMPLEMENTED FIELD */}
                      </div>
                    </div>
                    <div className="xl:w-1/2 w-full">
                      <div className="room-img h-full w-full relative">
                        <img
                          src={
                            selectedRoom.images && selectedRoom.images.length > 0
                              ? `${imgBaseUrl}${selectedRoom.images[1]}`
                              : "/images/room/default.jpg"
                          }
                          alt="room-img"
                          className="room-image h-full w-full rounded-[15px]"
                        />
                        <a
                          href={`/roomdetails/${selectedRoom._id}`}
                          className="link w-[200px] h-[200px] absolute bottom-[-200px] right-[-200px] bg-[#000000cc] rounded-full flex items-center justify-center"
                          tabIndex={-1}
                          aria-label="View room details"
                        >
                          <FaArrowRight className="text-[#fff] text-[25px]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ) : (
              selectedRoom && (
                <div
                  key={tabs[selectedTab].id}
                  className="tab-pane fade active show"
                  id={tabs[selectedTab].id}
                  role="tabpanel"
                  aria-labelledby={`${tabs[selectedTab].id}-tab`}
                >
                  <div className="flex flex-wrap justify-between mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]">
                    <div className="xl:w-1/2 w-full px-[12px]">
                      <div className="lh-room-contain relative px-[12px] py-[24px]">
                        <div className="lh-contain-heading pb-[15px] flex justify-between">
                          <h4 className="xl:text-[22px] text-[18px] leading-[1.2] font-bold text-[#000] text-left">
                            {selectedRoom.name}
                          </h4>
                          <div className="lh-room-price">
                            <h4 className="xl:text-[22px] text-[18px] text-[#ed5b31] font-bold leading-[22px]">
                              ₹{selectedRoom.price} /
                              <span className="ml-[5px] text-[14px] font-normal text-[#777]">
                                Per night
                              </span>
                            </h4>
                          </div>
                        </div>
                        <div className="lh-room-size flex flex-wrap">
                          <p className="pb-[15px] text-[14px] text-[#777] leading-[1.2]">
                            {selectedRoom.size} <span className="px-[15px]">|</span>
                          </p>
                          <p className="pb-[15px] text-[14px] text-[#777] leading-[1.2]">
                            {selectedRoom.beds} <span className="px-[15px]">|</span>
                          </p>
                          <p className="pb-[15px] text-[14px] text-[#777] leading-[1.2]">
                            {selectedRoom.guests}
                          </p>
                        </div>
                        <p>
                          This is the dolor sit amet consectetur adipisicing elit. Culpa necessitatibus
                          consequatur nostrum iure? Similique voluptatibus totam nobis exercitationem
                          perferendis id, cupiditate at et praesentium quas? Quae amet, magni suscipit
                          sequi.
                        </p>
                        <div className="lh-main-features border-t border-solid border-[#e3e1e1] pt-[30px] mt-[30px]">
                          <div className="lh-contain-heading pb-[15px] flex justify-between">
                            <h4 className="xl:text-[22px] text-[18px] leading-[1.2] font-bold text-[#000] text-left">
                              Room Features
                            </h4>
                          </div>
                          <div className="lh-room-features flex">
                            <div className="lh-cols-room">
                              <ul className="pl-[16px] mb-0">
                                <li className="text-[15px] text-[#777] leading-[1.2]">
                                  42 Inch flat screen TV
                                </li>
                                <li className="text-[15px] text-[#777] leading-[1.2]">
                                  In-room Safe
                                </li>
                                <li className="text-[15px] text-[#777] leading-[1.2]">
                                  Mini-refrigerator
                                </li>
                              </ul>
                            </div>
                            <div className="lh-cols-room">
                              <ul className="pl-[16px] mb-0">
                                <li className="text-[15px] text-[#777] leading-[1.2]">
                                  Mini-refrigerator
                                </li>
                                <li className="text-[15px] text-[#777] leading-[1.2]">
                                  Breakfast
                                </li>
                                <li className="text-[15px] text-[#777] leading-[1.2]">
                                  Complimentary bottled water
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* IMPLEMENTED FIELD: Book Now Button */}
                        <div className="mt-6 flex justify-end">
                          <button
                            className="bg-[#ed5b31] hover:bg-[#d14a22] text-white font-semibold py-2 px-6 rounded-[8px] transition-colors"
                            onClick={() => handleBookHandle(tabs[selectedTab].id)}
                          >
                            Book Now
                          </button>
                        </div>
                        {/* END IMPLEMENTED FIELD */}
                      </div>
                    </div>
                    <div className="xl:w-1/2 w-full">
                      <div className="room-img h-full w-full relative">
                        <img
                          src={selectedRoom.img}
                          alt="room-img"
                          className="room-image h-full w-full rounded-[15px]"
                        />
                        <a
                          href="/room-details"
                          className="link w-[200px] h-[200px] absolute bottom-[-200px] right-[-200px] bg-[#000000cc] rounded-full flex items-center justify-center"
                          tabIndex={-1}
                          aria-label="View room details"
                        >
                          <i className="ri-arrow-right-line text-[#fff] text-[25px]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {/* Decorative background bottom left */}
        <div
          className="pointer-events-none absolute z-[-1] left-[-180px] 2xl:top-[100px] top-[75px] 2xl:w-[500px] lg:w-[400px] w-[300px] 2xl:h-[500px] xl:h-[400px] h-[300px] bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('/img/theme/2.png')" }}
        />
      </section>
    </>
  );
};

export default RoomsTypes;