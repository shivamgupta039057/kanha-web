import SubHeader from '@/utils/SubHeader';
import React from 'react'

const BlogDetails = ({blogId}) => {
    console.log("blogIdblogId" , blogId);
    
  return (
    <>    <SubHeader title="Blog Details" subtitle="Blog Details" rating="5" />
    {blogId}
    </>

  )
}

export default BlogDetails