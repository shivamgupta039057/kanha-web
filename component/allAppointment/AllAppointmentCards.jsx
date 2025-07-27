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
      <div className="bg-white shadow p-4 w-full rounded-lg relative">
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
                  ? `Room Booking (${item.status})`
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
          <div className="flex gap-2">
            {(item.status === "pending" || item.status === "confirmed") && (
              <div
                onClick={() => {
                  setIsModal(true);
                  setBookingData(item);
                }}
                className="rounded-full size-8 *:size-full p-2 bg-gray-200 hover:text-white hover:bg-secondary text-secondary duration-700 max-sm:absolute max-sm:right-4 max-sm:top-4"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="200px"
                  width="200px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M255.8 112c-80.4 0-143.8 50.6-219.6 133.3-5.5 6.1-5.6 15.2-.1 21.3C101 338.3 158.2 400 255.8 400c96.4 0 168.7-77.7 220.1-134 5.3-5.8 5.6-14.6.5-20.7C424 181.8 351.5 112 255.8 112zm4.4 233.9c-53 2.4-96.6-41.2-94.1-94.1 2.1-46.2 39.5-83.6 85.7-85.7 53-2.4 96.6 41.2 94.1 94.1-2.1 46.2-39.5 83.6-85.7 85.7z"></path>
                  <path d="M256 209c0-6 1.1-11.7 3.1-16.9-1 0-2-.1-3.1-.1-36.9 0-66.6 31.4-63.8 68.9 2.4 31.3 27.6 56.5 58.9 58.9 37.5 2.8 68.9-26.9 68.9-63.8 0-1.3-.1-2.6-.1-3.9-5.6 2.5-11.7 3.9-18.2 3.9-25.2 0-45.7-21.1-45.7-47z"></path>
                </svg>
              </div>
            )}
          </div>
          {/* Actions */}
          <div className="flex align-middle gap-3">
            <div
              className="px-5 py-2 cursor-pointer text-white rounded-lg bg-secondary w-full sm:w-auto text-center"
              onClick={() => router.push(`/invoice/${item._id}`)}
            >
              Invoice
            </div>
            {/* If paymentId exists, show payment link */}
            {item?.paymentId && (
              <div
                className="px-5 py-2 cursor-pointer text-white rounded-lg bg-secondary w-full sm:w-auto text-center"
                onClick={() => window.open(`/payment/${item.paymentId}`, '_blank')}
              >
                Payment Details
              </div>
            )}
          </div>
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