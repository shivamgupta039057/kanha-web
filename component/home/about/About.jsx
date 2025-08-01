import React from 'react'

const aboutData = {
  image: {
    src: "/images/about-3.webp",
    alt: "About New Kanha Hotel"
  },
  title: "The New Kanha Hotel",
  subtitle: "Enjoy a New Kanha Experience",
  paragraphs: [
    "New Kanha Hotel, Jaipur’s best newly opened hotel with premium amenities, is located in Govindpura, Kalwar Road. We proudly offer top-notch hospitality with facilities including a well-appointed hotel, an elegant banquet hall for celebrations, and a delightful restaurant serving delicious cuisine.", 
    "Whether you're here for a stay, a function, or a fine dining experience, New Kanha Hotel ensures comfort, luxury, and exceptional service—all under one roof. A perfect destination for every occasion in the heart of Jaipur.",
    "Classic Kanha Hotel offers timeless elegance and comfort in the heart of the city. Our guests enjoy premium rooms, a spacious banquet hall, and a multi-cuisine restaurant.",
    "Perfect for business or leisure, Classic Kanha Hotel delivers exceptional service and memorable experiences for every guest."
  ],
  signature: {
    // src: "/images/sign.png",
    // alt: "Signature"
  }
};

const About = ({ data = aboutData }) => {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div >
              <div className="single-imagea">
                <img src={data.image.src} className="image-fit" alt={data.image.alt} />
                <img src='images/banquet.webp' className="image-fit" alt={data.image.alt} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h3>{data.title}</h3>
              <div className="luxury">{data.subtitle}</div>
              {data.paragraphs.map((text, idx) => (
                <React.Fragment key={idx}>
                  <p>{text}</p>
                  {idx < data.paragraphs.length - 1 && <br />}
                </React.Fragment>
              ))}
              <br />
              <div className="reservation">
                <img src={data.signature.src} alt={data.signature.alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About