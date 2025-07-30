"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
const LoginModal = dynamic(() => import("@/component/auth/LoginModal"), { ssr: false });
import { clearToken, setToken } from '@/store/features/authSlice';
import { openLoginModal, closeLoginModal } from '@/store/features/loginModalSlice';


const CustomeBookingHeader = () => {

  const dispatch = useDispatch();
  const { isOpen: showLogin } = useSelector((state) => state.loginModal);
  const token = useSelector((state) => state.auth.token);
  console.log("djfsklsjsdlsdtokentokentokentokentokentoken", token);

  useEffect(() => {
    // Import token from localStorage if available
    let localhostToken = typeof window !== 'undefined' ? localStorage.getItem('khana-token') : null;
    // Convert string "null" to actual null
    if (localhostToken === "null") {
      localhostToken = null;
    }
    console.log("localhostTokenlocalhostTokenlocalhostToken", typeof (localhostToken), localhostToken);

    dispatch(setToken(localhostToken));
    // You can use localhostToken as needed here
  }, []);


  console.log("tokendsfkljdsklllllllllllllllllllllllll", token !== null);



  return (
    <>
      {/* new header */}
      {/* old header  */}
      <header className="header" style={{ marginBottom: "119px" }}>
        <div className="navigation-wrapper" style={{ backgroundColor: "white", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.08)" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav>
                  <div className="main-navigation">
                    <div className="logo" style={{ marginTop: 0, paddingTop: 0, display: "flex", alignItems: "flex-start" }}>
                      <Link href="/" style={{ display: "inline-block" }}>
                        <Image
                          src="/images/kanhalogo.png"
                          className="img-fluid"
                          alt="logo"
                          width={120}
                          height={40}
                          priority
                          style={{ marginTop: 0, paddingTop: 0, display: "block" }}
                        />
                      </Link>
                    </div>
                    <div className="main-menu">
                      <ul className="custom-flex">
                        <li className="menu-item active">
                          <Link href="/" style={{ color: "black" }}>Home</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/about" style={{ color: "black" }}>About</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/roomtype" style={{ color: "black" }}>Rooms</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/banquete-view" style={{ color: "black" }}>Banquet</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/resturent" style={{ color: "black" }}>Restaurant</Link>
                        </li>

                        <li className="menu-item menu-item-has-children">
                          <a href="#" style={{ color: "black" }}>Pages</a>
                          <ul className="submenu custom">
                            <li className="menu-item">
                              <Link href="/services" style={{ color: "black" }}>Services</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/facility" style={{ color: "black" }}>Facilites</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/gallery" style={{ color: "black" }}>Gallery</Link>
                            </li>

                            <li className="menu-item">
                              <Link href="/faq" style={{ color: "black" }}>FAQ</Link>
                            </li>

                          </ul>
                        </li>
                        {/* <li className="menu-item menu-item-has-children">
                        <a href="#" style={{ color: "black" }}>Blog</a>
                        <ul className="submenu custom">
                          <li className="menu-item">
                            <Link href="/blog" style={{ color: "black" }}>Blog</Link>
                          </li>
                          <li className="menu-item">
                            <Link href="/blog-1" style={{ color: "black" }}>Blog-Right</Link>
                          </li>
                          <li className="menu-item">
                            <Link href="/blog-2" style={{ color: "black" }}>Blog Details</Link>
                          </li>
                        </ul>
                      </li> */}
                        <li className="menu-item">
                          <Link href="/contact" style={{ color: "black" }}>Contact</Link>
                        </li>
                        {token?.length > 0 && token !== null ? (
                          <li className="menu-item">
                            <button
                              type="button"
                              onClick={() => {
                                dispatch(clearToken());
                                dispatch(openLoginModal());
                                localStorage.removeItem("profileDetails");
                              }}
                              className="inline-block px-6 py-2 rounded-full font-semibold bg-[#b99365] hover:bg-[#a07c44] shadow transition-all duration-200 border-2 border-[#b99365] hover:border-[#a07c44] focus:outline-none focus:ring-2 focus:ring-[#b99365] focus:ring-offset-2"
                              style={{
                                minWidth: 90,
                                textAlign: 'center',
                                letterSpacing: 1,
                                color: 'black'
                              }}
                            >
                              Logout
                            </button>
                          </li>
                        ) : (
                          <li className="menu-item">
                            <button
                              type="button"
                              onClick={() => dispatch(openLoginModal())}

                              className="inline-block px-6 py-2 rounded-full font-semibold text-white bg-[#b99365] hover:bg-[#a07c44] shadow transition-all duration-200 border-2 border-[#b99365] hover:border-[#a07c44] focus:outline-none focus:ring-2 focus:ring-[#b99365] focus:ring-offset-2"
                              style={{ minWidth: 90, textAlign: 'center', letterSpacing: 1 }}
                            >
                              Login
                            </button>
                          </li>
                        )}

                      </ul>

                    </div>
                    <div className="hamburger-menu">
                      <div className="menu-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {showLogin && (
          <LoginModal isOpen={showLogin} onClose={() => dispatch(closeLoginModal())} />
        )}
      </header>
    </>
  );
};

export default CustomeBookingHeader;