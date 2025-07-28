import SubHeader from '@/utils/SubHeader'
import React, { useEffect, useState } from 'react'
import PricesData from '../home/Prices/PricesData'
import Partner from '../home/Partner/Partner'
import { useQuery } from '@tanstack/react-query'
import { API_GET_ROOMS } from '@/utils/APIConstant'
import { Apiservice } from '@/services/apiservices'
import RoomsTypes from './RoomsTypes'
import { useSelector } from 'react-redux'

const Rooms = () => {
  // dispatch(openLoginModal());
  const token = useSelector((state) => state.auth.token);
  const [roomTypeData, setRoomTypeData] = useState([]);
  const { data: roomType, isLoading } = useQuery({
    queryKey: ["get-roomTypeData"],
    queryFn: () => Apiservice.get(`${API_GET_ROOMS}`),
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
      <SubHeader title="Rooms & Banquets" subtitle="Rooms & Banquets" rating="5" />
      <RoomsTypes roomTypeData={roomTypeData} isLoading={isLoading} />
      <PricesData />
      {/* <Partner /> */}
    </>
  )

}

export default Rooms