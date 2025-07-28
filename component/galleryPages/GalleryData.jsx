import SubHeader from '@/utils/SubHeader'
import React from 'react'
import GalleryPhotos from './GalleryPhotos'

const GalleryData = () => {
  return (
     <>
      <SubHeader title="Our Gallery" subtitle="IMAGES & VIDEOS" rating="5" />
      <GalleryPhotos />
     </>
  )
}

export default GalleryData