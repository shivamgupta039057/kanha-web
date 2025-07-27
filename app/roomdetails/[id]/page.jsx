import RoomsDetails from '@/component/rooms/roomsDetails';
import React from 'react'

const page = async ({ params }) => {
  // Await params if it's a Promise (per Next.js dynamic route requirements)
  const resolvedParams = await params;
  return (
    <>
    {/* <div>Room ID: {resolvedParams.id}</div> */}
    <RoomsDetails roomId={resolvedParams.id}/>
    </>
  )
}

export default page