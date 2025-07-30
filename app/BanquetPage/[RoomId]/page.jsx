import BanquetBookingData from '@/component/Booking/BanquetBookingData';
import React from 'react'

const page = async ({ params }) => {
  const resolvedParams = await params;
  return (
    <>
    <BanquetBookingData roomId={resolvedParams.RoomId}/>
    </>
  )
}

export default page