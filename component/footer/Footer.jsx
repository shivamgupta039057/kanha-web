import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="footer section-padding thm-bg-color-four">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="ft_widgets">
                <div className="ft_logo">
                  <img src="/images/kanhalogo.png" alt="logo" className="image-fit-contain" />
                </div>
                <p className="lh-base mb-3">
                  Newly opened Jaipur hotel offering premium stay, banquet, dining, and top amenities.
                </p>
                <ul className="ft_contact ft_menu">
                  <li>
                    <Link href="tel:+919352999963">
                      <i className="fas fa-phone-volume p-0" style={{ color: "#fff" }}></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:newkanha220@gmail.com">
                      <i className="fas fa-envelope p-0" style={{ color: "#fff" }}></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://goo.gl/maps/2Qw2k8v7v6v7v6v7A" target="_blank">
                      <i className="fas fa-map-marker-alt p-0" style={{ fontSize: "18px", color: "#fff" }}></i>
                    </Link>
                  </li>
                </ul>
              </div>
              {/*  */}

              <div className='flex gap-3'>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    style={{ marginRight: 2, color: "#ffc107" }}
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

                </span> <span className="text-white">,</span>

                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    style={{ marginRight: 2, color: "#ffc107" }}
                  >

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

              {/*  */}
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="ft_widgets">
                <h5 className="ft_title">Useful Links</h5>
                <div className="border-border"></div>
                <ul className="ft_menu">
                  <li>
                    <Link href="/"><i className="fa fa-caret-right"></i>Home</Link>
                  </li>
                  <li>
                    <Link href="/about"><i className="fa fa-caret-right"></i>About</Link>
                  </li>
                  <li>
                    <Link href="/blog"><i className="fa fa-caret-right"></i>Blog</Link>
                  </li>
                  <li>
                    <Link href="/faq"><i className="fa fa-caret-right"></i> FAQ’s </Link>
                  </li>
                  <li>
                    <Link href="/contact"><i className="fa fa-caret-right"></i>Contact US</Link>
                  </li>

                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="ft_widgets">
                <h5 className="ft_title">Privacy Policy</h5>
                <div className="border-border"></div>
                <ul className="ft_menu">

                  <li>
                    <Link href="/privacy-policy"><i className="fa fa-caret-right"></i>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/refund-policy"><i className="fa fa-caret-right"></i>Refund Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions"><i className="fa fa-caret-right"></i>Terms and conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="thm-bg-color-one copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0">
                Copyright © <Link href="/">New Kanha all rights reserved.</Link> <span id="year"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer