"use client"
import Rooms from '@/component/rooms/Rooms'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <>
      <Head>
        <title>Rooms & Suites | New Kanha Hotel Jaipur</title>
        <meta
          name="description"
          content="Explore our Deluxe Room and Super Deluxe Room at New Kanha Hotel, Jaipur. Affordable prices with modern amenities for your comfort."
        />
        <meta
          name="keywords"
          content="Deluxe Room Jaipur, Super Deluxe Room Jaipur, best hotel Jaipur, Kanha Hotel rooms"
        />
        <link rel="canonical" href="https://newkanhahotel.com/rooms" />
      </Head>
      <Rooms />
    </>
  )
}

export default page