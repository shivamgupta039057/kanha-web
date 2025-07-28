import React from 'react'

const MeetOurTeam = () => {
  return (
    <>
      <section className="work-area bg-ght sell-up-area" id="work-sdr">
        <div className="container">
          <div className="section-header">
            <div className="section-heading mb-3">
              <h3 className="text-custom-black mb-0">Our News</h3>
              <span>Meet The Team</span>
              <div className="line mb-0"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="zoom-in-right">
              <div className="blog-section">
                <div className="position-re o-hidden blog-img">
                  <img src="/images/team/1.jpg" alt="img" />
                </div>
                <div className="bolg-boottom">
                  <div className="post-name">Liya Pickett</div>
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: 0,
                    }}
                  >
                    (General Manager)
                  </span>
                  <div className="rating-testmonial">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-youtube"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-out-up">
              <div className="blog-section">
                <div className="position-re o-hidden blog-img">
                  <img src="/images/team/3.jpg" alt="img" />
                </div>
                <div className="bolg-boottom">
                  <div className="post-name">Miya Hansen</div>
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: 0,
                    }}
                  >
                    (Guest Service Department)
                  </span>
                  <div className="rating-testmonial">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-youtube"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-out-left">
              <div className="blog-section">
                <div className="position-re o-hidden blog-img">
                  <img src="/images/team/2.jpg" alt="img" />
                </div>
                <div className="bolg-boottom">
                  <div className="post-name">Adam Kruger</div>
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: 0,
                    }}
                  >
                    (Reservations Manager)
                  </span>
                  <div className="rating-testmonial">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-youtube"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MeetOurTeam