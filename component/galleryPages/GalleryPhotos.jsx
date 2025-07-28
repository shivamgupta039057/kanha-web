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
                <img src="/images/gallery/1.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 gall">
              <div className="gallery-img">
                <img src="/images/gallery/2.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 gall">
              <div className="gallery-img">
                <img src="/images/gallery/3.jpg" alt="img" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 gall">
              <div className="gallery-iimmgg">
                <img src="/images/gallery/4.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 gall">
              <div className="gallery-iimmgg">
                <img src="/images/gallery/5.jpg" alt="img" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 gall">
              <div className="gallery-iimgg">
                <img src="/images/gallery/6.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 gall">
              <div className="gallery-iimgg">
                <img src="/images/gallery/7.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 gall">
              <div className="gallery-iimgg">
                <img src="/images/gallery/8.jpg" alt="img" />
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
          <div className="row asdf">
            <div className="col-lg-6">
              <img src="/images/gallery/9.jpg" alt="img" />
              <div className="video-section">
                <i className="fa fa-play"></i>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/images/gallery/9.jpg" alt="img" />
              <div className="video-section">
                <i className="fa fa-play"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img src="/images/gallery/11.jpg" alt="img" />
              <div className="video-section">
                <i className="fa fa-play"></i>
              </div>
            </div>
            <div className="col-lg-4">
              <img src="/images/gallery/12.jpg" alt="img" />
              <div className="video-section">
                <i className="fa fa-play"></i>
              </div>
            </div>
            <div className="col-lg-4">
              <img src="/images/gallery/13.jpg" alt="img" />
              <div className="video-section">
                <i className="fa fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GalleryPhotos