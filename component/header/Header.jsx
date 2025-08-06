"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
const LoginModal = dynamic(() => import("@/component/auth/LoginModal"), { ssr: false });
import { clearToken, setToken } from '@/store/features/authSlice';
import { openLoginModal, closeLoginModal } from '@/store/features/loginModalSlice';
import { TOKEN_NAME } from '@/utils/APIConstant';

// Add: bookingPage login modal trigger logic
function checkBookingPageLoginModal(dispatch) {
  // Only run in browser
  if (typeof window === "undefined") return;
  // Check if we are on /bookingPage or its subpaths
  if (window.location.pathname.startsWith("/bookingPage")) {
    fetch(window.location.pathname, { method: "GET" })
      .then(res => {
        if (res.headers.get('x-open-login-modal') === 'true') {
          dispatch(openLoginModal());
        }
        // ...other logic if needed
      })
      .catch(() => {});
  }
}

const Header = () => {
  const dispatch = useDispatch();
  const { isOpen: showLogin } = useSelector((state) => state.loginModal);
  const token = useSelector((state) => state.auth.token);
  const [menuActive, setMenuActive] = useState(false);

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
  useEffect(() => {
    checkBookingPageLoginModal(dispatch);
  }, [dispatch]);

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
                    {/* Phone Number */}
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
                        marginLeft: typeof window !== "undefined" && window.innerWidth <= 768 ? 100 : 180,
                        marginRight: 16,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        style={{ marginRight: 6, color: "#b99365" }}
                      >
                        <path
                          fill="currentColor"
                          d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
                        />
                      </svg>
                      <a
                        href="tel:+919829000999"
                        style={{
                          color: "#b99365",
                          textDecoration: "none",
                          fontWeight: 600,
                          fontSize: 18,
                          letterSpacing: 0.5,
                        }}
                      >
                        +91 98290 00999
                      </a>
                    </div>
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
                                  localStorage.removeItem("profileDetails");
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
      </header>
    </>
  );
};

export default Header;