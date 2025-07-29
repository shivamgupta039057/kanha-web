import BlogDetails from '@/component/BlogDetails/BlogDetails';
import Booking from '@/component/Booking/Booking';
import React from 'react'

const page = async ({ params }) => {
  const resolvedParams = await params;
  return (
    <>
    {/* resolvedParams.blogId */}
    <BlogDetails  blogId={resolvedParams.blogId}/>
    
    </>
  )
}

export default page