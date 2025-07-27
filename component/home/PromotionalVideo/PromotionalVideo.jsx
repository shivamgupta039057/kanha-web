import React from "react";

const defaultVideoData = {
  backgroundImage: "/images/bg/1.jpg",
  sectionClass: "work-area bg-ght area",
  sectionId: "work-a",
  title: "Promotional Video",
  subtitle: "The New Kanha Hotel",
  videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4", // Example YouTube link
  videoIconClass: "fa fa-play",
};

const PromotionalVideo = ({ data = defaultVideoData }) => {
  return (
    <section
      className={data.sectionClass}
      id={data.sectionId}
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <div className="sec-title mb-3">
              <span>{data.title}</span>
            </div>
            <div className="pan mb-4">
              <span>{data.subtitle}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="waves-sec">
              <div className="wrapper mt-5">
                <div className="video-main">
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                  <a
                    href={data.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video video-popup mfp-iframe"
                  >
                    <i className={data.videoIconClass}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalVideo;