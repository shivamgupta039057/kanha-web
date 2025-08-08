"use client"
import React, { useEffect, useState } from 'react'
import Testimonials from '../home/Testimonials/Testimonials'
import SubHeader from '@/utils/SubHeader'
import { useQuery } from '@tanstack/react-query';
import { API_GET_BANQUET, API_GET_MENU_LIST, API_GET_TABLE_LIST } from '@/utils/APIConstant';
import { useSelector } from 'react-redux';
import { Apiservice } from '@/services/apiservices';
import Link from 'next/link';
import TableBooking from './TableBooking';

const ResturentPage = () => {
  const token = useSelector((state) => state.auth.token);
  const [roomTypeData, setRoomTypeData] = useState([]);
  const [tablebookingData , setTableBookingData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const { data: menulist } = useQuery({
    queryKey: ["get-menu-list"],
    queryFn: () => Apiservice.get(`${API_GET_MENU_LIST}`),
    staleTime: 5 * 60 * 1000,
  });

  const { data: tableList } = useQuery({
    queryKey: ["get-table-list"],
    queryFn: () => Apiservice.getAuth(`${API_GET_TABLE_LIST}` , token),
    staleTime: 5 * 60 * 1000,
  });

  console.log("tableListtableList" , tableList);
  useEffect(() => {
    setTableBookingData(tableList?.data?.data)
  },[tableList]);

  useEffect(() => {
    if (menulist) {
      setRoomTypeData(menulist?.data?.data)
    }
  }, [menulist]);
console.log("dsjkldfskldkldjfkldsjsklstablebookingDatatablebookingData" , tablebookingData , tableList);

  // If the menu data changes and the current activeTab is out of bounds, reset to 0
  useEffect(() => {
    if (roomTypeData && activeTab >= roomTypeData.length) {
      setActiveTab(0);
    }
  }, [roomTypeData, activeTab]);

  return (
    <>
      <SubHeader title="The Restaurant" subtitle="AN EXPERIENCE FOR THE SENSE" rating="5" />
      <section className="hotel-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="stars">
                <div className="hotel-p">
                  <p>
                    Our in-house multi-cuisine restaurant offers a delightful mix of Indian, Chinese, and Continental dishes. Whether you’re in the mood for a hearty breakfast, a light snack, or a full-course dinner, we serve it fresh, flavorful, and with warmth.
                  </p>
                </div>
                <div className="hotel-topic">
                  <h6>Hours</h6>
                  <ul className="list" style={{ margin: '30px' }}>
                    <li>
                      {/* <div className="list-icon">
                          <i className="fa-thin fa-clock"></i>
                        </div> */}
                      <div className="list-text">
                        <p>⏰ Restaurant Timings: 7:00 AM – 11:00 PM</p>
                      </div>
                    </li>
                    <li>
                      {/* <div className="list-icon">
                          <i className="fa-thin fa-clock"></i>
                        </div> */}
                      <div className="list-text">
                        <p>🛎️ Dine-in | Room Service | Takeaway Available</p>
                      </div>
                    </li>
                    <li>
                      {/* <div className="list-icon">
                          <i className="fa-thin fa-clock"></i>
                        </div> */}
                      {/* <div className="list-text">
                          <p>Dinner: open from 7.30 pm, last order at 12.00 pm (daily)</p>
                        </div> */}
                    </li>
                  </ul>
                  {/* <h6>Dress Code</h6>
                    <p> casual ( shorts Allowed , Bigini Allowed or Aesthetic Shoes  permitted )</p>
                    <h6>Terrace</h6>
                    <p>Open for Smooking only</p> */}

                  <div className="flex justify-content-center mt-4 gap-4">
                    <Link href={"dsddfdfdfs"} className="btn-first btn-small text-black">
                      Reserve Table
                    </Link>

                    <Link
                      href="/menu.pdf"
                      className="btn-first btn-small text-black"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Full Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="work-area bg-lght"
        id="work-area"
        style={{ backgroundColor: '#222' }}
      >
        <div className="container">
          <div
            className="section-header"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="section-heading mb-3">
              <h3
                className="text-custom-black mb-0"
                style={{ color: '#fff', textAlign: 'center' }}
              >
                LUXURY HOTEL
              </h3>
              <span style={{ color: '#fff' }}>Restaurant Menu</span>
            </div>
          </div>
          {/* Dynamic Restaurant Menu Tabs */}
          {roomTypeData && roomTypeData.length > 0 && (
            <div className="tabs mt-5">
              <div
                style={{
                  maxWidth: "900px",
                  margin: "0 auto",
                  overflowX: "auto",
                  paddingBottom: "8px"
                }}
              >
                <ul
                  className="tabs-list"
                  style={{
                    display: "flex",
                    gap: "12px",
                    minWidth: "600px",
                    width: "fit-content",
                    margin: 0,
                    padding: "0 12px",
                    listStyle: "none",
                    borderBottom: "2px solid #eee",
                  }}
                >
                  {roomTypeData.map((item, idx) => (
                    <li
                      key={item._id}
                      className={activeTab === idx ? "active" : ""}
                      onClick={() => setActiveTab(idx)}
                      style={{
                        cursor: "pointer",
                        padding: "10px 24px",
                        borderRadius: "24px 24px 0 0",
                        background: "none",
                        color: activeTab === idx ? "#222" : "#888",
                        fontWeight: activeTab === idx ? 600 : 400,
                        boxShadow: "none",
                        border: activeTab === idx ? "2px solid #222" : "2px solid transparent",
                        transition: "all 0.2s"
                      }}
                    >
                      <a
                        href="#"
                        onClick={e => e.preventDefault()}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          fontSize: "1.05rem",
                          display: "block",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                  {/* Hide scrollbar but keep scroll functionality */}
                  <style jsx>{`
                    .tabs-list {
                      scrollbar-width: none; /* Firefox */
                    }
                    .tabs-list::-webkit-scrollbar {
                      display: none; /* Chrome, Safari, Edge */
                    }
                    html {
                      scrollbar-width: none; /* Firefox */
                      -ms-overflow-style: none; /* IE and old Edge */
                    }
                  `}</style>
                  {/* Show a visible scrollbar for the tab list */}
                  <style jsx>{`
                    .tabs-list {
                      scrollbar-width: thin;
                      scrollbar-color: #888 #eee;
                    }
                    .tabs-list::-webkit-scrollbar {
                      height: 8px;
                    }
                    .tabs-list::-webkit-scrollbar-thumb {
                      background: #888;
                      border-radius: 4px;
                    }
                    .tabs-list::-webkit-scrollbar-track {
                      background: #eee;
                      border-radius: 4px;
                    }
                  `}</style>
                </ul>
              </div>
              {roomTypeData.map((item, idx) => (
                <div
                  key={item._id}
                  id={`tab${idx + 1}`}
                  className={`tab${activeTab === idx ? " active" : ""}`}
                  style={{ display: activeTab === idx ? "block" : "none" }}
                >
                  <div className="row">
                    {/* Split items into two columns */}
                    {(() => {
                      const leftItems = item.items
                        ? item.items.slice(0, Math.ceil(item.items.length / 2))
                        : [];
                      const rightItems = item.items
                        ? item.items.slice(Math.ceil(item.items.length / 2))
                        : [];
                      return (
                        <>
                          <div className="col-lg-5">
                            {leftItems.map((menu, menuIdx) => (
                              <div className="main-class mt-5" key={menu._id}>
                                <div className="main-h5">
                                  <h5>
                                    {menu.name}{" "}
                                    <span>
                                      {menu.price
                                        ? ` ₹${menu.price}`
                                        : ""}
                                    </span>
                                  </h5>
                                </div>
                                <p>{menu.description}</p>
                              </div>
                            ))}
                          </div>
                          <div className="col-lg-5 offeerr">
                            {rightItems.map((menu, menuIdx) => (
                              <div className="main-class mt-5" key={menu._id}>
                                <div className="main-h5">
                                  <h5>
                                    {menu.name}{" "}
                                    <span>
                                      {menu.price
                                        ? ` ₹${menu.price}`
                                        : ""}
                                    </span>
                                  </h5>
                                </div>
                                <p>{menu.description}</p>
                              </div>
                            ))}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
    
        
      </section>
      {/* <TableBooking tablebookingData={tablebookingData}/> */}
      <Testimonials />
    </>
  )
}

export default ResturentPage