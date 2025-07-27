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
  title: "The New Kanha - Hotel Booking HTML5 Template | index",
  description: "#",
  keywords: "#",
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
