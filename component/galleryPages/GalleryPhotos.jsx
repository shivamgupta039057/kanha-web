import React from 'react'

const GalleryPhotos = () => {
  return (
    <>
      <section className="work-area bg-lit" id="work-area">
        <div className="container">
          <div className="section-header">
            <div className="section-heading mb-3">
              <h3 className="text-custom-black mb-0">IMAGES</h3>
              <span>Image Gallery</span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 gall">
              <div className="gallery-img">
                <img src="/images/Gallary1.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 gall">
              <div className="gallery-img">
                <img src="/images/Gallary2.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 gall">
              <div className="gallery-img">
                <img src="/images/Gallary3.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 gall">
              <div className="gallery-iimmgg">
                <img src="/images/Gallary4.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 gall">
              <div className="gallery-iimmgg">
                <img src="/images/Gallary5.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 gall">
              <div className="gallery-iimgg">
                <img src="/images/Gallary6.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work-area bg-lit" id="work-aa">
        <div className="container">
          <div className="section-header">
            <div className="section-heading mb-3">
              <h3 className="text-custom-black mb-0">Video</h3>
              <span>Video Gallery</span>
            </div>
          </div>
          <div >
            <div >
              <video
                className="align-self-center " style={{ width: '100%', height: '50%' }}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/bannerVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default GalleryPhotos