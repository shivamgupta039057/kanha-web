import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer section-padding thm-bg-color-four">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="ft_widgets">
                <div className="ft_logo">
                  <img src="/images/footer-logo.png" alt="logo" className="image-fit-contain" />
                </div>
                <p className="lh-base mb-3">
                  We are many variations suffered of passages available but of the majority have suffered.
                </p>
                <ul className="ft_contact ft_menu">
                  <li>
                    <a href="#">
                      <i className="fas fa-phone-volume p-0" style={{ color: "#fff" }}></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-envelope p-0" style={{ color: "#fff" }}></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-map-marker-alt p-0" style={{ fontSize: "18px", color: "#fff" }}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="ft_widgets">
                <h5 className="ft_title">Useful Links</h5>
                <div className="border-border"></div>
                <ul className="ft_menu">
                  <li>
                    <a href="index.html"><i className="fa fa-caret-right"></i>Home</a>
                  </li>
                  <li>
                    <a href="about.html"><i className="fa fa-caret-right"></i>About</a>
                  </li>
                  <li>
                    <a href="blog.html"><i className="fa fa-caret-right"></i>Blog</a>
                  </li>
                  <li>
                    <a href="facility.html"><i className="fa fa-caret-right"></i> Facilites</a>
                  </li>
                  <li>
                    <a href="faq.html"><i className="fa fa-caret-right"></i>Faqs</a>
                  </li>
                  <li>
                    <a href="contact.html"><i className="fa fa-caret-right"></i>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="ft_widgets">
                <h5 className="ft_title">Categories</h5>
                <div className="border-border"></div>
                <ul className="ft_menu">
                  <li>
                    <a href="shop-grid.html"><i className="fa fa-caret-right"></i>Calendars & Diaries</a>
                  </li>
                  <li>
                    <a href="shop-grid.html"><i className="fa fa-caret-right"></i>Awards & Trophies</a>
                  </li>
                  <li>
                    <a href="shop-grid.html"><i className="fa fa-caret-right"></i>Engraved Pens</a>
                  </li>
                  <li>
                    <a href="shop-grid.html"><i className="fa fa-caret-right"></i>Crystal Gifts</a>
                  </li>
                  <li>
                    <a href="shop-grid.html"><i className="fa fa-caret-right"></i>Notebooks</a>
                  </li>
                  <li>
                    <a href="shop-grid.html"><i className="fa fa-caret-right"></i>Keychains</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="ft_widgets ft_newsletter">
                <h5 className="ft_title">Newsletter</h5>
                <div className="border-border"></div>
                <p className="lh-base mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
                </p>
                <div className="input-group">
                  <input
                    type="email"
                    name="#"
                    className="form-control form-control-custom"
                    placeholder="Email I'd"
                    autoComplete="off"
                    required
                  />
                </div>
                <button className="theme-btn rrr" type="submit">
                  <span className="far fa-envelope"></span> Subscribe Now
                </button>
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
                Copyright © <a href="#">New Kanha all rights reserved.</a> <span id="year"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer