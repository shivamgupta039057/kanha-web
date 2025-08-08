import AboutPage from "@/component/about/AboutPage";
import React from "react";
import Head from "next/head";

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Hotel",
      name: "New Kanha Hotel",
      image: "https://newkanhahotel.com/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kalwar Road",
        addressLocality: "Jaipur",
        postalCode: "302012",
        addressCountry: "IN",
      },
      telephone: "+919783252121",
      url: "https://newkanhahotel.com/about",
      description:
        "Learn more about New Kanha Hotel, located on Kalwar Road, Jaipur. Offering luxury rooms, modern amenities, and exceptional hospitality for families, couples, and business travelers.",
    },
  };

  return (
    <>
      <Head>
        <title>About New Kanha Hotel | Kalwar Road Jaipur</title>
        <meta
          name="description"
          content="Learn more about New Kanha Hotel, located on Kalwar Road, Jaipur. We offer comfortable rooms, top-class service, and modern facilities for families, couples, and business travelers."
        />
        <meta
          name="keywords"
          content="About Kanha Hotel, Kalwar Road Jaipur, hotel history, best hotel Jaipur, luxury hotel Jaipur"
        />
        <meta
          property="og:title"
          content="About New Kanha Hotel | Kalwar Road Jaipur"
        />
        <meta
          property="og:description"
          content="Discover the story of New Kanha Hotel in Jaipur. Exceptional rooms, service, and hospitality for a memorable stay."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://newkanhahotel.com/about"
        />
        <meta
          property="og:image"
          content="https://newkanhahotel.com/og-image.jpg"
        />
        <link
          rel="canonical"
          href="https://newkanhahotel.com/about"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
      </Head>

      <AboutPage />
    </>
  );
};

export default About;
