"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
const LoginModal = dynamic(() => import("@/component/auth/LoginModal"), { ssr: false });
import { clearToken, setToken } from '@/store/features/authSlice';
import { openLoginModal, closeLoginModal } from '@/store/features/loginModalSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { isOpen: showLogin } = useSelector((state) => state.loginModal);
  const token = useSelector((state) => state.auth.token);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    // Import token from localStorage if available
    let localhostToken = typeof window !== 'undefined' ? localStorage.getItem('khana-token') : null;
    // Convert string "null" to actual null
    if (localhostToken === "null") {
      localhostToken = null;
    }
    dispatch(setToken(localhostToken));
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
      {/* new header */}
      {/* old header  */}
      <header className="header">
        <div className="navigation-wrapper">
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
                        />
                      </Link>
                    </div>
                    <div className={`main-menu${menuActive ? " active" : ""}`}>
                      <ul className="custom-flex">
                        <li className="menu-item active">
                          <Link href="/">Home</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/about">About</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/roomtype">Rooms</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/banquete-view">Banquet</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/resturent">Restaurant</Link>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul className="submenu custom">
                            {/* <li className="menu-item">
                              <Link href="/services">Services</Link>
                            </li> */}
                            <li className="menu-item">
                              <Link href="/facility">Facilites</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/gallery">Gallery</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/faq">FAQ</Link>
                            </li>
                          </ul>
                        </li>
                        {/* <li className="menu-item menu-item-has-children">
                          <a href="#">Blog</a>
                          <ul className="submenu custom">
                            <li className="menu-item">
                              <Link href="/blog">Blog</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/blog-1">Blog-Right</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/blog-2">Blog Details</Link>
                            </li>
                          </ul>
                        </li> */}
                        <li className="menu-item">
                          <Link href="/contact">Contact</Link>
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