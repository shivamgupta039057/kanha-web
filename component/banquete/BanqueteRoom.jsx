import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { openLoginModal } from "@/store/features/loginModalSlice";
import { FaArrowRight } from "react-icons/fa";

const BanqueteRoom = ({roomTypeData}) => {
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

  const tabs = roomTypeData?.map((banquet) => ({
    id: banquet._id,
    title: banquet.name,
    img: banquet.images && banquet.images.length > 0 ? banquet.images[0] : "/images/room/default.jpg",
    data: banquet,
  }));

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
              Choose Your Luxurious <span className="text-[#ed5b31]">Banquet</span>
            </h2>
          </div>
          {/* Banquet Tabs */}
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
                      className="w-full mb-[15px] rounded-[15px] object-cover h-[180px]"
                      alt={tab.title || "Banquet Image"}
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
            {selectedRoom && (
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
                          {selectedRoom.name}
                        </h4>
                        <div className="lh-room-price">
                          <h4 className="xl:text-[22px] text-[18px] text-[#ed5b31] font-bold leading-[22px]">
                            Capacity: {selectedRoom.capacity}
                          </h4>
                        </div>
                      </div>
                      <div className="lh-room-size flex flex-wrap">
                        <p className="pb-[15px] text-[14px] text-[#777] leading-[1.2]">
                          Amenities:{" "}
                          {selectedRoom.amenities && selectedRoom.amenities.length > 0
                            ? selectedRoom.amenities.join(", ")
                            : "N/A"}
                        </p>
                      </div>
                      <p>
                        {selectedRoom.description ||
                          "No description available for this banquet hall."}
                      </p>
                      <div className="lh-main-features border-t border-solid border-[#e3e1e1] pt-[30px] mt-[30px]">
                        <div className="lh-contain-heading pb-[15px] flex justify-between">
                          <h4 className="xl:text-[22px] text-[18px] leading-[1.2] font-bold text-[#000] text-left">
                            Banquet Features
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
                                <li className="text-[15px] text-[#777] leading-[1.2]">
                                  No amenities listed.
                                </li>
                              )}
                            </ul>
                          </div>
                          {selectedRoom.amenities && selectedRoom.amenities.length > 3 && (
                            <div className="lh-cols-room">
                              <ul className="pl-[16px] mb-0">
                                {selectedRoom.amenities.slice(3, 6).map((amenity, i) => (
                                  <li key={i} className="text-[15px] text-[#777] leading-[1.2]">
                                    {amenity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* Book Now Button */}
                      <div className="mt-6 flex justify-end">
                        <button
                          className="bg-[#ed5b31] hover:bg-[#d14a22] text-white font-semibold py-2 px-6 rounded-[8px] transition-colors"
                          onClick={() => handleBookHandle(selectedRoom._id)}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/2 w-full">
                    <div className="room-img h-full w-full relative">
                      <img
                        src={
                          selectedRoom.images && selectedRoom.images.length > 1
                            ? selectedRoom.images[1]
                            : selectedRoom.images && selectedRoom.images.length > 0
                            ? selectedRoom.images[0]
                            : "/images/room/default.jpg"
                        }
                        alt="banquet-img"
                        className="room-image h-full w-full rounded-[15px] object-cover"
                        style={{ minHeight: "300px", maxHeight: "400px" }}
                      />
                      <a
                        href={`/banquetdetails/${selectedRoom._id}`}
                        className="link w-[200px] h-[200px] absolute bottom-[-200px] right-[-200px] bg-[#000000cc] rounded-full flex items-center justify-center"
                        tabIndex={-1}
                        aria-label="View banquet details"
                      >
                        <FaArrowRight className="text-[#fff] text-[25px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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

export default BanqueteRoom;