import BookingAll from '@/component/allBooking/BookingAll'
import React from 'react'

const page = async({ params }) => {
  const resolvedParams = await params;
  return (
   <BookingAll OderId={resolvedParams.orderId}/>
  )
}

export default page