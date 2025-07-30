"use client"
import SubHeader from '@/utils/SubHeader'
import React, { useEffect, useState } from 'react'
import PricesData from '../home/Prices/PricesData'
import Partner from '../home/Partner/Partner'
import { useQuery } from '@tanstack/react-query'
import { API_GET_BANQUET, API_GET_ROOMS } from '@/utils/APIConstant'
import { Apiservice } from '@/services/apiservices'
import { useSelector } from 'react-redux'
import BanquetTypes from './BanquetTypes'

const Banquet = () => {
  // dispatch(openLoginModal());
  const token = useSelector((state) => state.auth.token);
  const [roomTypeData, setRoomTypeData] = useState([]);
  const { data: roomType, isLoading } = useQuery({
    queryKey: ["get-banquet-Data"],
    queryFn: () => Apiservice.get(`${API_GET_BANQUET}`),
    staleTime: 5 * 60 * 1000,
  });

  console.log("dsfsdjkdhdjkfksdtokentokentoken", token);


  useEffect(() => {
    if (roomType) {
      setRoomTypeData(roomType.data.data)
    }
  }, [roomType])

  console.log("roomTypeData", roomTypeData);
  return (
    // <div>Rooms</div>
    <>
      <SubHeader title="Ideal for Weddings, Birthdays, Anniversaries, & Corporate Events" subtitle="Celebrate in Style at New Kanha Hotel Banquet Hall" rating="5" />
      <BanquetTypes roomTypeData={roomTypeData} isLoading={isLoading} />
      <PricesData />
      {/* <Partner /> */}
    </>
  )

}

export default Banquet