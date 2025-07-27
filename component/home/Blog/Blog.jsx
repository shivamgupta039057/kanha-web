import React from 'react'

// Example dynamic blog data
const blogPosts = [
  {
    image: "/images/blog/1.jpg",
    date: { month: "May", day: "22" },
    category: "Restaurant",
    title: "Nullam molestie lacus sit amet velit fermentum feugiat.",
    link: "#",
    aos: {
      type: "fade-right",
      offset: "300",
      easing: "ease-in-sine",
      duration: undefined,
    },
  },
  {
    image: "/images/blog/2.jpg",
    date: { month: "Feb", day: "02" },
    category: "Spa & Wellness",
    title: "Nullam molestie lacus sit amet velit fermentum feugiat.",
    link: "#",
    aos: {
      type: "fade-up",
      offset: undefined,
      easing: undefined,
      duration: "3000",
    },
  },
  {
    image: "/images/blog/3.jpg",
    date: { month: "Apr", day: "25" },
    category: "Sport Center",
    title: "Nullam molestie lacus sit amet velit fermentum feugiat.",
    link: "#",
    aos: {
      type: "fade-left",
      offset: undefined,
      easing: undefined,
      duration: undefined,
    },
  },
];

const Blog = ({ posts = blogPosts }) => {
  return (
    <section
      className="work-area bg-ght sell-up-area"
      id="work-wwr"
      style={{ backgroundColor: "#222" }}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-heading mb-3">
            <h3 className="text-custom-black mb-0" style={{ color: "#fff" }}>
              Hotel Blog
            </h3>
            <span style={{ color: "#fff" }}>Our News</span>
            <div className="line mb-0"></div>
          </div>
        </div>
        <div className="row">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className={`col-lg-4${idx < 2 ? " mb-5" : ""}`}
              data-aos={post.aos.type}
              {...(post.aos.offset ? { "data-aos-offset": post.aos.offset } : {})}
              {...(post.aos.easing ? { "data-aos-easing": post.aos.easing } : {})}
              {...(post.aos.duration ? { "data-aos-duration": post.aos.duration } : {})}
            >
              <div className="blog-section">
                <div className="position-re o-hidden blog-img">
                  <img src={post.image} alt="img" />
                  <div className="date">
                    <a href={post.link}>
                      <span>{post.date.month}</span> <i>{post.date.day}</i>
                    </a>
                  </div>
                </div>
                <div className="bolg-boottom">
                  <span className="caos">{post.category}</span>
                  <h5>
                    <a href={post.link}>
                      {post.title}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog