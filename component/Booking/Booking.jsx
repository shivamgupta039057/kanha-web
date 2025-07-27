"use client";
import SubHeader from '@/utils/SubHeader';
import React, { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Apiservice } from "@/services/apiservices";
import { toast } from "react-toastify";
import { API_BOOKING_ROOM } from '@/utils/APIConstant';
import { useSelector } from 'react-redux';
// import { usePayment } from '@/utils/usePayment';
import { usePayment } from "@/utils/usePayment";
import { useRouter } from 'next/navigation';


const bookingImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
];

const schema = yup.object().shape({
  guestName: yup.string().required("Guest name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10,15}$/, "Phone number must be 10-15 digits"),
  checkIn: yup.string().required("Check-in date is required"),
  checkOut: yup
    .string()
    .required("Check-out date is required")
    .test("is-after", "Check-out must be after check-in", function (value) {
      const { checkIn } = this.parent;
      if (!checkIn || !value) return true;
      return new Date(value) > new Date(checkIn);
    }),
});

const getProfileDetails = () => {
  if (typeof window !== "undefined") {
    const details = JSON.parse(localStorage.getItem("profileDetails")) || {};
    return {
      guestName: details.firstname
        ? details.firstname + (details.lastname ? " " + details.lastname : "")
        : "",
      phone: details.phone || "",
    };
  }
  return {
    guestName: "",
    phone: "",
  };
};

const Booking = ({roomId}) => {
  const { submitPayment } = usePayment();
  const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "YOUR_RAZORPAY_KEY_ID";
  const submittedRef = useRef(false);
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...getProfileDetails(),
      checkIn: "",
      checkOut: "",
    },
  });

  useEffect(() => {
    const details = getProfileDetails();
    setValue("guestName", details.guestName);
    setValue("phone", details.phone);
  }, [setValue]);

  // Track submitted state using a ref and force update with a state
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);

  // useMutation for booking submission
  const addRoomMutation = useMutation({
    mutationFn: async (data) => {
      return await Apiservice.postAuth(`${API_BOOKING_ROOM}/${roomId}`, data , token);
    },
    onSuccess: async(response) => {
      console.log("responseresponseresponseresponseresponse" , response);
      
      console.log("response.data.payment" , response.data.data.razorpayOrder);
      const {amount } = response.data.data.payment
      const { id} = response.data.data.razorpayOrder
      
      if (response && response.data.status) {
        const loadRazorpayScript = () => {
          return new Promise((resolve) => {
            if (window.Razorpay) return resolve(true);
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
          });
        };
  
        const isScriptLoaded = await loadRazorpayScript();
        if (!isScriptLoaded) {
          toast.error("Failed to load Razorpay. Check your connection.");
          return;
        }
  
        const options = {
          key: RAZORPAY_KEY_ID,

          amount: amount, // in paise
          currency: response?.order?.currency || "INR",
          name: "Your Company Name",
          description: "Room Booking Payment",
          order_id: id,
          handler: function (paymentResponse) {
            // You can verify payment on backend here
            toast.success("Payment successful!");
            router.push(`/confirm-booking/${"44444444444"}`);
            // Optionally, redirect or update UI
          },
          prefill: {
            name: response?.user?.name || "",
            email: response?.user?.email || "",
            contact: response?.user?.phone || "",
          },
          theme: {
            color: "#F37254",
          },
        };
  
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        // end rapor pay 
        toast.success(response.data.message);
        submittedRef.current = true;
        reset();
        forceUpdate();
      } else {
        toast.error(response && response.data && response.data.message ? response.data.message : "Failed to add room.");
      }
    },
    onError: (error) => {
      console.log("errorerrorerrorerrorerrorerror" , error);
      toast.error(error.response.data.message || "An error occurred while booking the room.");
    },
  });

  const onSubmit = (data) => {
    const params = {
      guestName: data.guestName,
      phone: data.phone,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
    };
    addRoomMutation.mutate(params);
  };

  const handleBookAnother = () => {
    const details = getProfileDetails();
    reset({
      guestName: details.guestName,
      phone: details.phone,
      checkIn: "",
      checkOut: "",
    });
    submittedRef.current = false;
    forceUpdate();
  };

  const checkInValue = watch("checkIn");
  const guestNameValue = watch("guestName");
  const phoneValue = watch("phone");

  return (
    <>
      <SubHeader title="Booking Details" subtitle="Booking Details" rating="5" />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100 py-12 px-4">
        <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Left Side: Beautiful Booking Images */}
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 to-yellow-50 p-6 md:p-10 gap-6">
            <h2 className="text-3xl font-bold text-orange-700 mb-2 text-center">Book Your Stay</h2>
            <p className="text-center text-gray-500 mb-4">Experience comfort and luxury. Choose your dates and reserve your room now!</p>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-4">
                <img
                  src={bookingImages[0]}
                  alt="Room 1"
                  className="rounded-xl shadow-lg w-1/2 h-32 object-cover border-4 border-orange-200 hover:scale-105 transition"
                />
                <img
                  src={bookingImages[1]}
                  alt="Room 2"
                  className="rounded-xl shadow-lg w-1/2 h-32 object-cover border-4 border-orange-100 hover:scale-105 transition"
                />
              </div>
              <img
                src={bookingImages[2]}
                alt="Room 3"
                className="rounded-xl shadow-lg w-full h-32 object-cover border-4 border-yellow-100 hover:scale-105 transition"
              />
            </div>
          </div>
          {/* Right Side: Booking Form */}
          <div className="md:w-1/2 w-full flex flex-col justify-center p-8 md:p-10 bg-white">
            {submittedRef.current ? (
              <div className="text-center">
                <div className="text-2xl text-green-600 font-semibold mb-2">Booking Successful!</div>
                <div className="text-gray-700 mb-4">
                  Thank you, <span className="font-bold">{guestNameValue}</span>.<br />
                  We will contact you at <span className="font-bold">{phoneValue}</span>.
                </div>
                <button
                  className="mt-2 px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
                  onClick={handleBookAnother}
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="guestName" className="block text-sm font-medium text-gray-700 mb-1">
                    Guest Name
                  </label>
                  <input
                    type="text"
                    id="guestName"
                    {...register("guestName")}
                    className={`w-full px-4 py-2 border ${
                      errors.guestName ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition`}
                    placeholder="Enter your name"
                  />
                  {errors.guestName && (
                    <p className="text-red-600 text-xs mt-1">{errors.guestName.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className={`w-full px-4 py-2 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
                      Check-In
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      {...register("checkIn")}
                      className={`w-full px-4 py-2 border ${
                        errors.checkIn ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition`}
                    />
                    {errors.checkIn && (
                      <p className="text-red-600 text-xs mt-1">{errors.checkIn.message}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
                      Check-Out
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      {...register("checkOut")}
                      min={checkInValue}
                      className={`w-full px-4 py-2 border ${
                        errors.checkOut ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition`}
                    />
                    {errors.checkOut && (
                      <p className="text-red-600 text-xs mt-1">{errors.checkOut.message}</p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-500 text-black font-semibold rounded-lg shadow hover:bg-orange-600 transition text-lg"
                  disabled={addRoomMutation.isLoading || isSubmitting}
                >
                  {addRoomMutation.isLoading || isSubmitting ? "Booking..." : "Book Now"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;