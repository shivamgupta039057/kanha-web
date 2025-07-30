"use client"
import { Apiservice, imgBaseUrl } from "@/services/apiservices";
import { API_GET_ROOM_DETAILS, API_GET_ROOMS } from "@/utils/APIConstant";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

// Example props for demonstration; replace with real data or props as needed

const RoomsDetails = ({ roomId }) => {
    const [roomTypeDetails, setRoomTypeDetails] = useState([])
    const { data: roomType , isLoading } = useQuery({
        queryKey: ["get-roomTypeData-details", roomId],
        queryFn: () => Apiservice.get(`${API_GET_ROOM_DETAILS}/${roomId}`),
        staleTime: 5 * 60 * 1000,
    });

    console.log("ssssssssssroomTypeDetails", isLoading);
    


    useEffect(() => {
        if (roomType) {
            setRoomTypeDetails(roomType.data.data)
        }
    }, [roomType]);


    console.log("roomTypeDetails", roomTypeDetails);

    return (
        <section className="min-h-screen bg-[#f8f5f0] py-10">
            {isLoading ? (
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 animate-pulse">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2 w-full flex flex-col gap-3">
                            <div className="rounded-xl w-full h-64 bg-gray-200" />
                            <div className="flex gap-2 mt-2">
                                <div className="w-16 h-16 rounded-lg bg-gray-200" />
                                <div className="w-16 h-16 rounded-lg bg-gray-200" />
                                <div className="w-16 h-16 rounded-lg bg-gray-200" />
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full flex flex-col justify-between">
                            <div>
                                <div className="h-8 w-2/3 bg-gray-200 rounded mb-2" />
                                <div className="h-5 w-1/4 bg-gray-100 rounded mb-2" />
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="h-6 w-24 bg-gray-200 rounded" />
                                    <div className="h-6 w-32 bg-gray-100 rounded" />
                                </div>
                                <div className="mt-3 flex items-center gap-3">
                                    <div className="h-5 w-28 bg-gray-200 rounded" />
                                    <div className="h-5 w-32 bg-gray-100 rounded" />
                                </div>
                                <div className="mt-4">
                                    <div className="h-5 w-24 bg-gray-200 rounded mb-1" />
                                    <div className="flex flex-wrap gap-2">
                                        <div className="h-6 w-20 bg-gray-100 rounded-full" />
                                        <div className="h-6 w-20 bg-gray-100 rounded-full" />
                                        <div className="h-6 w-20 bg-gray-100 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="h-6 w-32 bg-gray-200 rounded mb-2" />
                        <div className="h-5 w-full bg-gray-100 rounded" />
                        <div className="h-5 w-3/4 bg-gray-100 rounded mt-2" />
                    </div>
                </div>
            ) : (
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
                    {/* Images Carousel */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2 w-full flex flex-col gap-3">
                            <img
                                src={`${imgBaseUrl}/${roomTypeDetails?.images?.[0]}`}
                                alt={roomTypeDetails?.title}
                                loading="lazy"
                                className="rounded-xl w-full h-64 object-cover border border-gray-200 shadow-sm"
                            />
                            <div className="flex gap-2 mt-2">
                                {roomTypeDetails?.images?.slice(1)?.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={`${imgBaseUrl}/${img}`}
                                        alt={roomTypeDetails?.title + " thumb"}
                                        loading="lazy"
                                        className="w-16 h-16 rounded-lg object-cover border border-gray-200 hover:scale-105 transition"
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Room Info */}
                        <div className="md:w-1/2 w-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-2">{roomTypeDetails?.title}</h2>
                                <span className="inline-block bg-[#f8f5f0] text-[#b99365] font-semibold px-3 py-1 rounded mb-2 text-sm">
                                    {roomTypeDetails?.type}
                                </span>
                                <div className="flex items-center gap-4 mt-2">
                                    <span className="text-lg font-semibold text-[#b99365]">
                                        ${roomTypeDetails?.price} <span className="text-gray-500 text-sm">/ night</span>
                                    </span>
                                    {roomTypeDetails?.withBreakfastPrice && (
                                        <span className="text-base text-[#b99365] bg-[#f8f5f0] px-2 py-1 rounded">
                                            With Breakfast: ${roomTypeDetails?.withBreakfastPrice}
                                        </span>
                                    )}
                                </div>
                                <div className="mt-3 flex items-center gap-3">
                                    <span className="inline-flex items-center text-gray-700">
                                        <i className="fa fa-users mr-1 text-[#b99365]"></i> Capacity: {roomTypeDetails?.capacity}
                                    </span>
                                    <span className="inline-flex items-center text-gray-700">
                                        <i className={`fa ${roomTypeDetails?.isAvailable ? "fa-check-circle text-green-500" : "fa-times-circle text-red-500"} mr-1`}></i>
                                        {roomTypeDetails?.isAvailable ? "Available" : "Not Available"}
                                    </span>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-semibold text-[#171717] mb-1">Amenities</h4>
                                    <ul className="flex flex-wrap gap-2">
                                        {roomTypeDetails?.amenities?.map((amenity, idx) => (
                                            <li
                                                key={idx}
                                                className="bg-[#f8f5f0] text-[#b99365] px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                                            >
                                                {amenity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Description */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-[#171717] mb-2">Description</h3>
                        <p className="text-gray-700 leading-relaxed">{roomTypeDetails?.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default RoomsDetails;