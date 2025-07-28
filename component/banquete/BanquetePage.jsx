"use client"
import SubHeader from '@/utils/SubHeader'
import React, { useEffect, useState } from 'react'
import BanqueteRoom from './BanqueteRoom'
import { API_GET_BANQUET, API_GET_ROOMS } from '@/utils/APIConstant'
import { useQuery } from '@tanstack/react-query'
import { Apiservice } from '@/services/apiservices'

const BanquetePage = () => {
    const [roomTypeData, setRoomTypeData] = useState([]);
    const { data: roomType, isLoading } = useQuery({
        queryKey: ["get-banquete-booking"],
        queryFn: () => Apiservice.get(`${API_GET_BANQUET}`),
        staleTime: 5 * 60 * 1000,
      });
    
      console.log("roomTyperoomTypedsfsdjkdhdjkfksdtokentokentoken", roomType);
    
    
      useEffect(() => {
        if (roomType) {
          setRoomTypeData(roomType.data.data)
        }
      }, [roomType])
  return (
    // <div>BanquetePage</div>
    <>
    <SubHeader title="Banquets" subtitle="Banquets" rating="5" />
    <BanqueteRoom roomTypeData={roomTypeData} isLoading={isLoading} />
    </>
  )
}

export default BanquetePage