import Booking from '@/component/Booking/Booking';
import React from 'react'

const page = async ({ params }) => {
  const resolvedParams = await params;
  return (
    <>
    <Booking roomId={resolvedParams.RoomId}/>
    </>
  )
}

export default page