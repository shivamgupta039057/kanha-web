"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_GET_ALL_APPOINTMENT, API_GET_ALL_BOOKING } from "@/utils/APIConstant";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Apiservice } from "@/services/apiservices";

function BookingAll({OderId}) {
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();

  
  const queryClient = useQueryClient();
  const [bookingData, setBookingData] = useState({});
  const { data: PatientAppointments, isLoading: AllAppointmentIsLoading } =
    useQuery({
      queryKey: ["get-AllAppointment-specific" , OderId],
      queryFn: () =>
        Apiservice.getAuth(`${API_GET_ALL_BOOKING}`, token),
      staleTime: 5 * 60 * 1000,
    });
  useEffect(() => {
    if (PatientAppointments && PatientAppointments?.data) {
      setBookingData(PatientAppointments?.data?.data?.documents?.[0]);
    }
  }, [PatientAppointments]);  
  const handleAppointmentAll = () => {
    router.push("/allOrder");
    queryClient.invalidateQueries({
      queryKey: ["get-AllAppointment"],
      exact: true,
    });
  };


  return (
    <>
      <div className="mt-[68px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-center items-center py-40">
          {bookingData &&  Object.keys(bookingData).length === 0 ? (
            // "Data not found"
            "no data found"
          ) : (
            <>
              <div className="border border-secondary max-w-xl py-10 px-5 text-center flex-col justify-center items-center bg-white shadow-xl rounded-md">
                <div className="size-12 *:size-full animate-pulse mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1"
                    viewBox="0 0 48 48"
                    enableBackground="new 0 0 48 48"
                    height="200px"
                    width="200px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon
                      fill="#8BC34A"
                      points="24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"
                    ></polygon>
                    <polygon
                      fill="#CCFF90"
                      points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"
                    ></polygon>
                  </svg>
                </div>
                <div className="text-2xl font-semibold text-slate-800 mt-2">
                  {" "}
                  Room booked Successfully!
                </div>
                <div className="font-light text-balance text-base">
                  Room booked
                  {bookingData?.type == "online" ? (
                    <>
                      <span className="font-semibold">
                        {" "}
                        on{" "}
                        {moment(bookingData?.doctor?.date).format(
                          "DD MMM YYYY"
                        )}
                        <p className="text-sm mt-1">
                          Your Zoom link will be sent to you on WhatsApp
                          shortly.
                        </p>
                      </span>
                    </>
                  ) : (
                    <>
                      {" "}
                      <span className="font-semibold">
                        {" "} {bookingData?.doctor?.name} on{" "}
                        {moment(bookingData?.doctor?.date).format(
                          "DD MMM YYYY"
                        )}{" "}
                        {bookingData?.slot?.start} to {bookingData?.slot?.end}
                      </span>
                    </>
                  )}
                </div>
                <div
                  onClick={handleAppointmentAll}
                  className="text-sm font-medium py-2 px-8 bg-secondary mt-4 block w-max mx-auto rounded-lg text-white cursor-pointer"
                >
                  View All Rooms{" "}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BookingAll;
