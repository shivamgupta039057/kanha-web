import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/component/header/Header";
import Script from "next/script";
import Footer from "@/component/footer/Footer";
import AOSProvider from "@/component/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "New Kanha Hotel | Hotel, Restaurant & Banquet Hall in Jaipur",
  description:
    "Stay at the New Kanha Hotel in Kalwar Road, Jaipur. Enjoy luxury rooms, a multi-cuisine restaurant, and an elegant banquet hall. Perfect for families, couples, and business travelers.",
  keywords:
    "Kanha Hotel Jaipur, New Kanha Hotel, Kalwar Road Hotel, Jaipur Banquet Hall, Luxury Rooms Jaipur, Affordable Stay Jaipur, Restaurant Jaipur, Best Hotel Jaipur",
  openGraph: {
    title: "New Kanha Hotel | Hotel, Restaurant & Banquet Hall in Jaipur",
    description:
      "Experience luxury and comfort at the New Kanha Hotel, located in Govindpura, Kalwar Road, Jaipur. Perfect for stays, celebrations, and dining.",
    url: "https://newkanhahotel.com",
    siteName: "New Kanha Hotel",
    images: [
      {
        url: "https://newkanhahotel.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "New Kanha Hotel Jaipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://newkanhahotel.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="keywords" content="#" />
        <meta name="description" content="#" />
        <title>The New Kanha - Hotel Booking HTML5 Template | index</title>
        {/* Fav and touch icons */}
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/images/ab-1.jpg" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images/ab-1.jpg" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images/ab-1.jpg" />
        <link rel="apple-touch-icon-precomposed" href="/images/ab-1.jpg" />
        <link rel="shortcut icon" href="/images/ab-1.jpg" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Island+Moments&display=swap" rel="stylesheet" />
        {/* CSS from public directory */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.css" />
        <link rel="stylesheet" href="/css/font/flaticon.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/ion.rangeSlider.min.css" />
        <link rel="stylesheet" href="/css/datepicker.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/css/all.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AOSProvider>
          <Header />
          {children}
          <a
            href="https://wa.me/919783252121"  // Replace with your number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-50 !bg-[#25D366] p-3 !rounded-full !shadow-lg hover:scale-110 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 32 32"
              fill="white"
            >
              <path d="M16.01 2.003c-7.74 0-14 6.26-14 14 0 2.47.64 4.87 1.86 7l-1.96 7.14 7.34-1.93a13.93 13.93 0 0 0 6.76 1.7h.01c7.74 0 14-6.26 14-14s-6.27-14-14.01-14zm0 25.49c-2.12 0-4.2-.56-6.01-1.61l-.43-.26-4.36 1.14 1.16-4.25-.28-.45a11.77 11.77 0 0 1-1.77-6.23c0-6.53 5.31-11.85 11.85-11.85 3.17 0 6.16 1.23 8.41 3.47a11.77 11.77 0 0 1 3.47 8.41c0 6.54-5.32 11.86-11.84 11.86zm6.5-8.95c-.35-.17-2.04-1-2.35-1.12-.31-.12-.53-.17-.76.17-.23.33-.88 1.13-1.08 1.37-.2.23-.4.25-.74.08-.35-.17-1.49-.55-2.84-1.75-1.05-.94-1.76-2.1-1.96-2.45-.2-.35-.02-.54.15-.71.15-.15.35-.4.52-.6.18-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.76-1.83-1.04-2.51-.27-.65-.55-.56-.75-.57l-.64-.01c-.2 0-.53.08-.81.38-.27.3-1.06 1.04-1.06 2.54s1.09 2.95 1.25 3.15c.15.2 2.09 3.19 5.28 4.47.74.32 1.31.5 1.76.64.74.23 1.41.2 1.94.13.59-.08 1.7-.7 1.94-1.38.24-.68.24-1.24.17-1.38-.07-.13-.26-.2-.54-.34z" />
            </svg>
          </a>
          <Footer />
          {/* Copyright End */}
          <div id="back-top" className="back-top">
            <a href="#top"><i className="flaticon-arrows"></i></a>
            hello
          </div>
        </AOSProvider>
        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnd9JwZvXty-1gHZihMoFhJtCXmHfeRQg" strategy="afterInteractive" />
        {/* Custom Js */}
        <Script src="/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
