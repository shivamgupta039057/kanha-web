"use client"
import React, { useEffect, useState } from 'react'
import Testimonials from '../home/Testimonials/Testimonials'
import SubHeader from '@/utils/SubHeader'
import { useQuery } from '@tanstack/react-query';
import { API_GET_BANQUET, API_GET_MENU_LIST } from '@/utils/APIConstant';
import { useSelector } from 'react-redux';
import { Apiservice } from '@/services/apiservices';
import Link from 'next/link';

const ResturentPage = () => {
  const token = useSelector((state) => state.auth.token);
  const [roomTypeData, setRoomTypeData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const { data: menulist, isLoading } = useQuery({
    queryKey: ["get-menu-list"],
    queryFn: () => Apiservice.get(`${API_GET_MENU_LIST}`),
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (menulist) {
      setRoomTypeData(menulist?.data?.data)
    }
  }, [menulist]);

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
                      href="/meu.pdf"
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
              <ul className="tabs-list">
                {roomTypeData.map((item, idx) => (
                  <li
                    key={item._id}
                    className={activeTab === idx ? "active" : ""}
                    onClick={() => setActiveTab(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      href="#"
                      onClick={e => e.preventDefault()}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
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
      <Testimonials />
    </>
  )
}

export default ResturentPage