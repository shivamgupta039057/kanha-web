"use client"
import React, { useEffect } from 'react';
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
  console.log("djfsklsjsdlsdtokentokentokentokentokentoken" , token);
  
  useEffect(() => {
    // Import token from localStorage if available
    let localhostToken = typeof window !== 'undefined' ? localStorage.getItem('khana-token') : null;
    // Convert string "null" to actual null
    if (localhostToken === "null") {
      localhostToken = null;
    }
    console.log("localhostTokenlocalhostTokenlocalhostToken", typeof(localhostToken), localhostToken);

    dispatch(setToken(localhostToken));
    // You can use localhostToken as needed here
  }, []);


  console.log("tokendsfkljdsklllllllllllllllllllllllll" , token !== null );
  


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
                  <div className="main-menu">
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
                          <li className="menu-item">
                            <Link href="/services">Services</Link>
                          </li>
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

export default Header;