import React from "react";

const roomsData = [
  {
    title: "Presidential",
    image: "/images/9.jpg",
    description:
      "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine...",
    link: "cars.html",
    linkText: "Find Out More",
    reverse: false,
  },
  {
    title: "Executive",
    image: "/images/8.jpg",
    description:
      "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine...",
    link: "cars.html",
    linkText: "Find Out More",
    reverse: true,
  },
];

const PresidentialData = ({ data = roomsData }) => {
  return (
    <section className="work-area bg-lit" id="work-aea">
      <div className="container">
        <div className="row">
          {data.map((room, idx) => (
            <div
              className="col-lg-12"
              key={idx}
              style={{ marginBottom: idx === 0 ? "45px" : undefined }}
            >
              <div className="row" style={{ background: "#f8f5f0" }}>
                {/* If reverse, content first then image, else image first then content */}
                {!room.reverse ? (
                  <>
                    <div className="col-lg-6">
                      <div
                        className="image-image"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                      >
                        <img src={room.image} alt={room.title} />
                      </div>
                    </div>
                    <div
                      className="col-lg-6"
                      data-aos="fade-left"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                    >
                      <div className="annimated-box">
                        <div className="conttent">
                          <div className="info">
                            <h6>OUR ROOM</h6>
                          </div>
                          <h4>{room.title}</h4>
                          <p>{room.description}</p>
                          <div className="animated-btn">
                            <a href={room.link} className="btn-first btn-small">
                              {room.linkText}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="col-lg-6"
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                    >
                      <div className="annimated-box">
                        <div className="conttent">
                          <div className="info">
                            <h6>OUR ROOM</h6>
                          </div>
                          <h4>{room.title}</h4>
                          <p>{room.description}</p>
                          <div className="animated-btn">
                            <a href={room.link} className="btn-first btn-small">
                              {room.linkText}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6"
                      data-aos="fade-left"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                    >
                      <div className="image-image">
                        <img src={room.image} alt={room.title} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresidentialData;