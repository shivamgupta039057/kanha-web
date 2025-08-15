"use client";
import moment from "moment";
import React, { useState } from "react";
import AllAppointmentDetailsModal from "./AllAppointmentDetailsModal";
import { useRouter } from "next/navigation";

const AllAppointmentCards = ({ item }) => {  
  // item is a booking object, not an appointment
  // console.log("itemitemitemitemitem" , item);

  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const [bookingData, setBookingData] = useState({});

  return (
    <React.Fragment>
      <div className="bg-white shadoPayment Detailsw p-4 w-full rounded-lg relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Guest Name */}
          <div className="flex items-center gap-4">
            <div>
              <div className="text-base font-semibold text-secondary">
                {item?.guestName
                  ? item.guestName.charAt(0).toUpperCase() + item.guestName.slice(1)
                  : ""}
              </div>
              {/* <div className="text-xs font-medium text-gray-500">
                {item?.userId}
              </div> */}
            </div>
          </div>
          {/* Room and Dates */}
          <div>
            <div className="text-sm font-semibold flex gap-2 items-center">
              <span className="w-4 h-4 text-secondary *:size-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11.575-4.75a.825.825 0 1 0-1.65 0v5.5c0 .296.159.57.416.716l3.5 2a.825.825 0 0 0 .818-1.432l-3.084-1.763Z"></path>
                </svg>
              </span>
              <span className="text-gray-500 font-semibold">
                {item?.checkIn ? moment(item.checkIn).format("DD MMM YYYY") : ""}
                {" "}
                {item?.checkOut ? `- ${moment(item.checkOut).format("DD MMM YYYY")}` : ""}
              </span>
              {item?.roomId?.roomNumber && (
                <div className="text-black">
                  Room: {item.roomId.roomNumber}
                </div>
              )}
            </div>
            <div className="text-sm font-semibold flex items-center mt-1">
              <span className="text-gray-500 font-bold capitalize">
                {item?.bookingType === "room"
                  ? `Booking Status (${item.status})`
                  : `${item.bookingType} (${item.status})`}
              </span>
              <span className="px-2 text-gray-300">|</span>
              <span className="text-gray-500 font-semibold">
                {item?.roomId?.roomTypeId ? `Type: ${item.roomId.roomTypeId}` : ""}
              </span>
            </div>
          </div>
          {/* Phone */}
          <div>
            <div className="text-sm font-semibold flex gap-2 items-center mt-1">
              <span className="w-4 h-4 text-secondary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                </svg>
              </span>
              {item?.phone}
            </div>
          </div>
          {/* Details Button */}
          
          {/* Actions */}
        
        </div>
      </div>
      {isModal && (
        <AllAppointmentDetailsModal
          isModal={isModal}
          setIsModal={setIsModal}
          AppointMentModalData={bookingData}
        />
      )}
    </React.Fragment>
  );
};

export default AllAppointmentCards;