import Booking from '@/component/Booking/Booking';
import TableBooking from '@/component/Booking/TableBooking';
import React from 'react'

const page = async ({ params }) => {
  const resolvedParams = await params;
  return (
    <>
    <TableBooking roomId={resolvedParams.RoomId}/>
    </>
  )
}

export default page