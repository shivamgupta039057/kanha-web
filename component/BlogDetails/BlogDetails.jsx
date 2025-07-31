import SubHeader from '@/utils/SubHeader';
import React from 'react'

const BlogDetails = ({ blogId }) => {
  console.log("blogIdblogId", blogId);
  const blogs = [{
    title: 'The Basics of Pre-Workout Nutrition',
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
  }, {
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
  }];
  const blog = blogs.find((b) => b.slug === blogId);
  return (
    <>    <SubHeader title="Blog Details" subtitle="Blog Details" rating="5" />
      <main className="bg-[#f4f9ff] py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* === Main Blog Content === */}
          <article className="lg:col-span-2 bg-white p-6 rounded shadow">
            <p className="text-sm text-blue-600 mb-2">
              By {blog.author} / {blog.date}
            </p>
            <img
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="rounded-lg w-full object-cover mb-6"
            />
            <div className="space-y-8">
              {blog.content.map((section, idx) => (
                <section key={idx}>
                  <h2 className="text-xl font-bold mb-3">{section.heading}</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </section>
              ))}
              <section>
                <h2 className="text-xl font-bold mb-3">Conclusion</h2>
                <p className="text-gray-700">
                  New Kanha Hotel is your perfect base to explore the heart of Jaipur with ease and comfort.                </p>
              </section>
            </div>
          </article>

          {/* === Sidebar === */}
          <aside className="space-y-6">
            {/* Search */}
            {/* <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">Search</h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div> */}

            {/* Categories */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <ul className="space-y-2 text-blue-700">
                <li><a href="#" className="hover:underline">Fitness Tips</a></li>
                <li><a href="#" className="hover:underline">Nutrition</a></li>
                <li><a href="#" className="hover:underline">Workout Plans</a></li>
                <li><a href="#" className="hover:underline">Supplements</a></li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
              <ul className="space-y-2 text-blue-700">
                <li><a href="#" className="hover:underline">Benefits of Morning Cardio</a></li>
                <li><a href="#" className="hover:underline">Top Protein Sources in Veg Diet</a></li>
                <li><a href="#" className="hover:underline">How to Build a Home Gym</a></li>
              </ul>
            </div>

            {/* Tags */}
            {/* <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['fitness', 'workout', 'diet', 'health', 'training', 'protein'].map(tag => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div> */}
          </aside>
        </div>
      </main>


    </>

  )
}

export default BlogDetails