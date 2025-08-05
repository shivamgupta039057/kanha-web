"use client"
import SubHeader from '@/utils/SubHeader';
import Link from 'next/link';
import React from 'react'

const BlogDetails = ({ blogId }) => {
  const blogs = [
    {
      title: 'Deluxe & Super Deluxe Rooms at New Kanha Hotel',
      author: 'Keshav',
      slug: 'kanha-hotel',
      date: 'July 31, 2025',
      image: '/images/blog-detail1.jpg',
      content: [
        {
          heading: 'Newly Opened with Premium Amenities',
          points: [
            'Located in Govindpura, Kalwar Road, New Kanha Hotel is Jaipur’s best newly opened hotel offering a premium stay experience. With stylish interiors, modern design, and top-tier facilities, we ensure that every guest enjoys unmatched comfort from the moment they arrive.'
          ]
        },
        {
          heading: 'Comfortable Rooms with Modern Facilities',
          points: [
            'Our rooms are fully air-conditioned and equipped with all essential comforts. Guests enjoy free Wi-Fi, in-room dining, and complimentary breakfast — perfect for both business and leisure travelers. Every detail is crafted to provide a peaceful and relaxing atmosphere.'
          ]
        },
        {
          heading: 'Banquet Hall for Events & Celebrations',
          points: [
            'Planning a wedding, birthday, or business meeting? Our spacious banquet hall is the ideal venue. With beautiful décor and professional staff, we make your events truly special'
          ]
        },
        {
          heading: 'Multi-Cuisine Restaurant',
          points: [
            'Dine at our in-house restaurant that serves delicious Indian and international cuisines in a warm and elegant setting.']
        },
        {
          heading: 'Prime Location with Easy Access',
          points: [
            'Situated in a well-connected area of Jaipur, guests can easily visit popular tourist spots and markets nearby.'
          ]
        }
      ]
    },
    {
      title: 'Top 5 Things to Do Near Kalwar Road, Jaipur',
      author: 'Keshav',
      slug: 'kalwar-road',
      date: 'July 31, 2025',
      image: '/images/blog-detail2.jpg',
      content: [
        {
          heading: ' Visit Nahargarh Fort',
          points: [
            'Just a short drive away, Nahargarh Fort offers stunning views of Jaipur city and a glimpse into royal Rajasthani history. Perfect for sunset lovers and history enthusiasts.'
          ]
        },
        {
          heading: 'Explore Local Bazaars',
          points: ['From handicrafts to traditional jewelry, local markets near Kalwar Road are great for shopping. Don’t miss out on handmade textiles and souvenirs.']
        },
        {
          heading: 'Experience Rajasthani Culture',
          points: ['Catch local folk performances or visit nearby temples to experience authentic Jaipur traditions and spiritual ambiance.']
        },
        {
          heading: 'Taste Local Street Food',
          points: [
            'Try famous dishes like Pyaaz Kachori, Mirchi Vada, and Kulfi near the Kalwar Road area — a foodie’s delight!.']
        },
        {
          heading: 'Relax at Local Parks & Gardens',
          points: [
            'For peaceful mornings or evening walks, visit nearby green spots like Kanak Vrindavan or local public gardens.'
          ]
        }
      ]
    },
    {
      title: 'Why New Kanha Hotel is Ideal for Weddings and Events',
      author: 'Keshav',
      slug: 'wedding-events',
      date: 'July 31, 2025',
      image: '/images/Banquet_1.jpeg',
      content: [
        {
          heading: 'Elegant Banquet Halls with Spacious Interiors',
          points: [
            'Our beautifully designed banquet halls provide the perfect backdrop for weddings, receptions, and celebrations of all sizes. With stylish décor, customizable layouts, and high ceilings, your event is guaranteed to feel grand and luxurious.'
          ]
        },
        {
          heading: 'Custom Catering with Multi-Cuisine Options',
          points: ['From traditional Indian feasts to international favorites, our expert chefs offer curated menus tailored to your preferences. Whether its a wedding dinner or a business lunch, we ensure the food impresses every guest.']
        },
        {
          heading: ' Comfortable Stay for Guests',
          points: ['Your guests can enjoy a relaxing overnight stay in our premium rooms equipped with all modern amenities. With on-site accommodation, you don’t have to worry about guest logistics and travel.']
        },
        {
          heading: 'Prime Location with Ample Parking',
          points: [
            'TLocated in Govindpura, Kalwar Road, New Kanha Hotel is easily accessible from all parts of Jaipur. We also offer spacious parking facilities to ensure smooth arrivals for all your guests.']
        },
        {
          heading: 'Professional Event Support Teams',
          points: [
            'Our experienced staff is here to assist with every detail — from decoration to technical setup — ensuring your event runs smoothly and memorably.'
          ]
        }
      ]
    }
  ];

  const blog = blogs.find((b) => b.slug === blogId);

  // Get recent blogs: show the other 2 blogs (not the current one)
  const recentBlogs = blogs.filter((b) => b.slug !== blogId).slice(0, 2);

  return (
    <>
      <SubHeader title="Blog Details" subtitle="Blog Details" rating="5" />
      <main className="bg-gradient-to-br from-[#f4f9ff] to-[#e6eaf3] py-12 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* === Main Blog Content === */}
          <article className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100" style={{ color: "#111" }}>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-black tracking-tight leading-tight drop-shadow-lg">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2">
                <span className="text-base font-medium text-black/80">By {blog.author}</span>
                <span className="mx-2 text-black/40">|</span>
                <span className="text-base font-medium text-black/80">{blog.date}</span>
              </div>
            </div>
            <img
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="rounded-2xl w-full object-cover mb-8 shadow-lg border border-gray-200"
              style={{ maxHeight: 400, objectFit: "cover" }}
            />
            <div className="space-y-10">
              {blog.content.map((section, idx) => (
                <section key={idx}>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-black border-l-4 border-blue-500 pl-4 bg-gradient-to-r from-blue-50 to-white py-2 rounded">
                    {section.heading}
                  </h2>
                  <ul className="list-disc font-medium list-inside space-y-2 text-black text-bold text-lg pl-4">
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>

          {/* === Sidebar === */}
          <aside className="space-y-8">
            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-black border-b-2 border-blue-100 pb-2">Recent Posts</h3>
              <ul className="space-y-2">
                {recentBlogs.map((recent) => (
                  <li key={recent.slug}>
                    <Link
                      href={`/blog/${recent.slug}`}
                      className="hover:underline !text-black transition-colors duration-200"
                    >
                      {recent.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}

export default BlogDetails