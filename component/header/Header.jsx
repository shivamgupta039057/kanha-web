"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
const LoginModal = dynamic(() => import("@/component/auth/LoginModal"), { ssr: false });
import { clearToken, setToken } from '@/store/features/authSlice';
import { openLoginModal, closeLoginModal } from '@/store/features/loginModalSlice';
import { API_BOOKING_ROOM, API_GET_ROOMS, TOKEN_NAME } from '@/utils/APIConstant';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Apiservice } from '@/services/apiservices';
import { GuestInfoPopup } from './custumeSidebarPopup';
import { AlignEndVertical } from 'lucide-react';
import { toast } from 'react-toastify';

// GuestInfoPopup: Step-by-step guest info flow
const Header = () => {


  const dispatch = useDispatch();
  const { isOpen: showLogin } = useSelector((state) => state.loginModal);
  const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "YOUR_RAZORPAY_KEY_ID";
  const token = useSelector((state) => state.auth.token);
  const [menuActive, setMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  // Popup state
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const addRoomMutation = useMutation({
    mutationFn: async (data) => {
      const { roomType, ...param } = data;
      return await Apiservice.postAuth(`${API_BOOKING_ROOM}/${roomType}`, param, token);
    },
    onSuccess: async (response) => {
      localStorage.removeItem('guestInfo'); // Clear guest info after successful booking
      const { amount } = response.data.data.payment;
      const { id } = response.data.data.razorpayOrder;

      if (response && response.data.status) {
        const loadRazorpayScript = () => {
          return new Promise((resolve) => {
            if (window.Razorpay) return resolve(true);
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
          });
        };

        const isScriptLoaded = await loadRazorpayScript();
        if (!isScriptLoaded) {
          toast.error("Failed to load Razorpay. Check your connection.");
          return;
        }

        const options = {
          key: RAZORPAY_KEY_ID,
          amount: amount, // in paise
          currency: response?.order?.currency || "INR",
          name: "Your Company Name",
          description: "Room Booking Payment",
          order_id: id,
          handler: function (paymentResponse) {
            toast.success("Payment successful!");
            router.push(`/confirm-booking/${"44444444444"}`);
          },
          prefill: {
            name: response?.user?.name || "",
            email: response?.user?.email || "",
            contact: response?.user?.phone || "",
          },
          theme: {
            color: "#F37254",
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        toast.success(response.data.message);
        reset();
        forceUpdate();
      } else {
        toast.error(response && response.data && response.data.message ? response.data.message : "Failed to add room.");
      }
    },
    onError: (error) => {
      console.log("errorerrorerrorerror" , error);
      localStorage.removeItem('guestInfo');      
      toast.error(error.response?.data?.message || "An error occurred while booking the room.");
    },
  });

  useEffect(() => {
    if (token) {
      const guestInfo = JSON.parse(typeof window !== 'undefined' ? localStorage.getItem('guestInfo') : null) || {};
      if(guestInfo && Object.keys(guestInfo).length > 0 && token && token !== "null") {
        const params = {
          guestName: guestInfo.firstName,
          email: guestInfo.email,
          phone: guestInfo.contact,
          checkIn: guestInfo.checkIn,
          checkOut: guestInfo.checkOut,
          roomType: guestInfo.roomType,
        };
        addRoomMutation.mutate(params);
      }
    }
  }, [token])


  // Detect mobile on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Show guest info popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGuestPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Import token from localStorage if available
    let localhostToken = typeof window !== 'undefined' ? localStorage.getItem(TOKEN_NAME) : null;
    // Convert string "null" to actual null
    if (localhostToken === "null") {
      localhostToken = null;
    }
    document.cookie = `${TOKEN_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    dispatch(setToken(localhostToken));
  }, [dispatch]);

  // bookingPage login modal logic

  // Optional: Close menu on route change or login modal open
  useEffect(() => {
    if (showLogin) setMenuActive(false);
  }, [showLogin]);

  // Optional: Prevent background scroll when menu is open (for mobile UX)
  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuActive]);

  // Phone number JSX for reuse
  const phoneNumberJSX = (
    <div className='block'>
      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          style={{ marginRight: 6, color: "#ffc107" }}
        >
          <path
            fill="currentColor"
            d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
          />
        </svg>
        <a
          href="tel:+919783252121"
          style={{
            color: "#ffc107",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: 0.5,
          }}
        >
          +91 9783252121
        </a>

      </span>

      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          style={{ marginRight: 6, color: "#ffc107" }}
        >
          <path
            fill="currentColor"
            d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
          />
        </svg>

        <a
          href="tel:+919352999963"
          style={{
            color: "#ffc107",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: 0.5,
          }}
        >
          +91 9352999963
        </a>
      </span>
    </div>

  );

  return (
    <>
      <header className="header">
        <div className="navigation-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav>
                  <div
                    className="main-navigation"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 24,
                    }}
                  >
                    {/* Logo */}
                    <div
                      className="logo"
                      style={{
                        marginTop: 0,
                        paddingTop: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                      }}
                    >
                      <Link href="/" style={{ display: "inline-block" }}>
                        <Image
                          src="/images/kanhalogo.png"
                          className="img-fluid"
                          alt="logo"
                          width={120}
                          height={40}
                          priority
                        />
                      </Link>
                    </div>
                    {/* Phone Number (Desktop only) */}
                    {!isMobile && (
                      <div
                        className="header-phone"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontWeight: 600,
                          fontSize: 18,
                          color: "#ffc107",
                          whiteSpace: "nowrap",
                          marginLeft: 180,
                          marginRight: 16,
                        }}
                      >
                        {phoneNumberJSX}
                      </div>
                    )}
                    {/* Menu and Hamburger */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flex: 1,
                        minWidth: 0,
                        justifyContent: "flex-end",
                        gap: 16,
                      }}
                    >
                      <div className={`main-menu${menuActive ? " active" : ""}`}>
                        <ul className="custom-flex">
                          <li className="menu-item active">
                            <Link href="/" onClick={() => setMenuActive(false)}>Home</Link>
                          </li>
                          <li className="menu-item">
                            <Link href="/about" onClick={() => setMenuActive(false)}>About</Link>
                          </li>
                          <li className="menu-item">
                            <Link href="/roomtype" onClick={() => setMenuActive(false)}>Rooms</Link>
                          </li>
                          <li className="menu-item">
                            <Link href="/banquete-view" onClick={() => setMenuActive(false)}>Banquet</Link>
                          </li>
                          <li className="menu-item">
                            <Link href="/resturent" onClick={() => setMenuActive(false)}>Restaurant</Link>
                          </li>
                          <li className="menu-item menu-item-has-children">
                            <a href="#" onClick={e => e.preventDefault()}>Pages</a>
                            <ul className="submenu custom">
                              {/* <li className="menu-item">
                                <Link href="/services" onClick={() => setMenuActive(false)}>Services</Link>
                              </li> */}
                              <li className="menu-item">
                                <Link href="/facility" onClick={() => setMenuActive(false)}>Facilites</Link>
                              </li>
                              <li className="menu-item">
                                <Link href="/gallery" onClick={() => setMenuActive(false)}>Gallery</Link>
                              </li>
                              <li className="menu-item">
                                <Link href="/faq" onClick={() => setMenuActive(false)}>FAQ</Link>
                              </li>
                            </ul>
                          </li>
                          {/* <li className="menu-item menu-item-has-children">
                            <a href="#">Blog</a>
                            <ul className="submenu custom">
                              <li className="menu-item">
                                <Link href="/blog" onClick={() => setMenuActive(false)}>Blog</Link>
                              </li>
                              <li className="menu-item">
                                <Link href="/blog-1" onClick={() => setMenuActive(false)}>Blog-Right</Link>
                              </li>
                              <li className="menu-item">
                                <Link href="/blog-2" onClick={() => setMenuActive(false)}>Blog Details</Link>
                              </li>
                            </ul>
                          </li> */}
                          <li className="menu-item">
                            <Link href="/contact" onClick={() => setMenuActive(false)}>Contact</Link>
                          </li>
                          {token?.length > 0 && token !== null ? (
                            <li className="menu-item">
                              <button
                                type="button"
                                onClick={() => {
                                  dispatch(clearToken());
                                  dispatch(openLoginModal());
                                  setMenuActive(false);
                                }}
                                className="inline-block px-6 py-2 rounded-full font-semibold text-white bg-[#b99365] hover:bg-[#a07c44] shadow transition-all duration-200 border-2 border-[#b99365] hover:border-[#a07c44] focus:outline-none focus:ring-2 focus:ring-[#b99365] focus:ring-offset-2"
                                style={{ minWidth: 90, textAlign: 'center', letterSpacing: 1 }}
                              >
                                Logout
                              </button>
                            </li>
                          ) : (
                            <li className="menu-item">
                              <button
                                type="button"
                                onClick={() => {
                                  dispatch(openLoginModal());
                                  setMenuActive(false);
                                }}
                                className="inline-block px-6 py-2 rounded-full font-semibold text-white bg-[#b99365] hover:bg-[#a07c44] shadow transition-all duration-200 border-2 border-[#b99365] hover:border-[#a07c44] focus:outline-none focus:ring-2 focus:ring-[#b99365] focus:ring-offset-2"
                                style={{ minWidth: 90, textAlign: 'center', letterSpacing: 1 }}
                              >
                                Login
                              </button>
                            </li>
                          )}
                          {/* Phone number in mobile menu */}
                          {isMobile && menuActive && (
                            <li className="menu-item" style={{ marginTop: 12 }}>
                              {phoneNumberJSX}
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="hamburger-menu">
                        <div
                          className="menu-btn"
                          onClick={() => setMenuActive((prev) => !prev)}
                          style={{ cursor: "pointer" }}
                          aria-label="Toggle menu"
                          tabIndex={0}
                          onKeyDown={e => {
                            if (e.key === "Enter" || e.key === " ") setMenuActive((prev) => !prev);
                          }}
                        >
                          {/* Show close icon if menuActive, else hamburger */}
                          {menuActive ? (
                            // Close icon (X)
                            <span style={{
                              display: 'block',
                              width: 28,
                              height: 28,
                              position: 'relative'
                            }}>
                              <span style={{
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                width: '100%',
                                height: 3,
                                background: '#b99365',
                                borderRadius: 2,
                                transform: 'rotate(45deg) translateY(-50%)'
                              }}></span>
                              <span style={{
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                width: '100%',
                                height: 3,
                                background: '#b99365',
                                borderRadius: 2,
                                transform: 'rotate(-45deg) translateY(-50%)'
                              }}></span>
                            </span>
                          ) : (
                            // Hamburger icon
                            <>
                              <span style={{
                                display: 'block',
                                width: 28,
                                height: 3,
                                background: '#b99365',
                                borderRadius: 2,
                                margin: '5px 0'
                              }}></span>
                              <span style={{
                                display: 'block',
                                width: 28,
                                height: 3,
                                background: '#b99365',
                                borderRadius: 2,
                                margin: '5px 0'
                              }}></span>
                              <span style={{
                                display: 'block',
                                width: 28,
                                height: 3,
                                background: '#b99365',
                                borderRadius: 2,
                                margin: '5px 0'
                              }}></span>
                            </>
                          )}
                        </div>
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
        {/* Guest Info Popup */}
        <GuestInfoPopup open={showGuestPopup} onClose={() => setShowGuestPopup(false)} />
      </header>
    </>
  );
};

export default Header;