import React from 'react'

const aboutData = {
  image: {
    src: "/images/ab-1.png",
    alt: "About New Kanha Hotel"
  },
  title: "The New Kanha Hotel",
  subtitle: "Enjoy a New Kanha Experience",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    "Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine."
  ],
  signature: {
    src: "/images/sign.png",
    alt: "Signature"
  }
};

const About = ({ data = aboutData }) => {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-image clearfi">
              <div className="single-imagea">
                <img src={data.image.src} className="image-fit" alt={data.image.alt} />
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