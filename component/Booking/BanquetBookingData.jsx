"use client";
import React, { useEffect, useRef, useState } from 'react';
import SubHeader from '@/utils/SubHeader';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Apiservice, imgBaseUrl } from "@/services/apiservices";
import { toast } from "react-toastify";
import { API_BOOKING_BANQUET, API_BOOKING_ROOM, API_GET_BANQUET_DETAILS, API_GET_ROOM_DETAILS } from '@/utils/APIConstant';
import { useSelector } from 'react-redux';
import { usePayment } from "@/utils/usePayment";
import { useRouter } from 'next/navigation';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const schema = yup.object().shape({
  guestName: yup.string().required("Guest name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
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
  adults: yup.number().min(1).max(4).required("Select number of adults"),
  kids: yup.number().min(0).max(3).required("Select number of kids"),
  roomType: yup.string().required("Select room type"),
  specialRequirement: yup.string().max(500, "Too long").nullable()
});

const getProfileDetails = () => {
  if (typeof window !== "undefined") {
    const details = JSON.parse(localStorage.getItem("profileDetails")) || {};
    return {
      guestName: details.firstname
        ? details.firstname + (details.lastname ? " " + details.lastname : "")
        : "",
      phone: details.phone || "",
      email: details.email || ""
    };
  }
  return {
    guestName: "",
    phone: "",
    email: ""
  };
};

// Modal component for image preview
const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="bookingx-modal-overlay" onClick={onClose}>
      <div className="bookingx-modal-content" onClick={e => e.stopPropagation()}>
        <button className="bookingx-modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <img src={imageUrl} alt="Room Preview" className="bookingx-modal-image" />
      </div>
      <style>{`
        .bookingx-modal-overlay {
          position: fixed;
          z-index: 9999;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bookingx-modal-content {
          position: relative;
          background: #fff;
          border-radius: 10px;
          padding: 16px;
          max-width: 90vw;
          max-height: 90vh;
          box-shadow: 0 4px 32px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bookingx-modal-image {
          max-width: 80vw;
          max-height: 80vh;
          border-radius: 8px;
          object-fit: contain;
        }
        .bookingx-modal-close {
          position: absolute;
          top: 8px;
          right: 12px;
          background: transparent;
          border: none;
          font-size: 2rem;
          color: #333;
          cursor: pointer;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

const BanquetBookingData = ({ roomId }) => {
  const { submitPayment } = usePayment();
  const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "YOUR_RAZORPAY_KEY_ID";
  const submittedRef = useRef(false);
  const router = useRouter();
  const token = useSelector((state) => state.auth.token);
  const [roomTypeData, setRoomTypeData] = useState([]);
  // State for selected room type
  const [selectedRoomType, setSelectedRoomType] = useState("deluxe-room");
  // State for modal image preview
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openImageModal = (imgUrl) => {
    setModalImage(imgUrl);
    setModalOpen(true);
  };
  const closeImageModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  const { data: roomType, isLoading } = useQuery({
    queryKey: ["get-roomTypeDetials", roomId],
    queryFn: () => Apiservice.get(`${API_GET_BANQUET_DETAILS}/${roomId}`),
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (roomType) {
      setRoomTypeData(roomType.data.data);
    }
  }, [roomType]);

  // ROOM_TYPES: Only the first (deluxe-room) is dynamic from API, others are static
  const ROOM_TYPES = [
    {
      value: "deluxe-room",
      label: roomTypeData?.name || "Deluxe Room",
      info: {
        title: roomTypeData?.name || "Deluxe Room",
        // Accept HTML in description/overview
        overview: roomTypeData?.description || "",
        beds: `${roomTypeData.capacity} Capacity`,
        size: "Room size 170 sq. ft",
        count: "12 Deluxe Rooms",
        occupancy: "2 Adults - 1 Children",
        offers: [
          "Daily complimentary tea, coffee, water",
          "Free wifi high speed",
          "10% discount for tour service",
          "Complimentary Breakfast"
        ],
        policies: [
          {
            title: "Cancellation Policy",
            items: [
              "Check in: from 14:00 PM",
              "Check out: not later than 12:00 PM"
            ]
          },
          {
            title: "Payment method:",
            items: [
              "By cash",
              "By Visa Card, Master Card, American Express plus 3% bank fee is applied"
            ]
          },
          {
            title: "Children Policy",
            items: [
              "Complimentary stay for two children upto 5 years of age on room only basis without extra bed.",
              "Extra bed will be charged for children above 5 years"
            ]
          }
        ],
        amenities: [
          {
            category: "Safety and security features",
            items: [
              "24 Hour Security",
              "Fire Aid Kit",
              "Smoke Detector",
              "Fire Refrigerator",
              "Safety Locker",
              "Air Conditioning"
            ]
          },
          {
            category: "Bathroom and toiletries",
            items: [
              "Shower",
              "Towel",
              "Room Slippers",
              "Mirror",
              "Toiletries",
              "Cleaning products"
            ]
          },
          {
            category: "Entertainment",
            items: [
              "Free Wi-Fi and internet",
              "News Paper",
              "Satellite Cable channels",
              "Telephone"
            ]
          },
          {
            category: "Dining, drinking, and snacking",
            items: [
              "Electric Bed Water Pot",
              "Coffee/Tea maker",
              "Kitchenette",
              "Free Bottled Water",
              "Mini Refrigerator"
            ]
          }
        ],
        // Added new details as per instruction
        type: roomTypeData?.type || "AC",
        price: roomTypeData?.pricePerHour || 3000,
        withBreakfastPrice: roomTypeData?.withBreakfastPrice || 3500,
        capacity: roomTypeData?.capacity || 4,
        extraAmenities: roomTypeData?.amenities || [
          "42 Inch flat screen TV",
          "Mini-refrigerator"
        ],
        isAvailable: roomTypeData?.isAvailable !== undefined ? roomTypeData.isAvailable : true,
        // Add HTML details if present
        detailsHtml: roomTypeData?.detailsHtml || ""
      }
    },
    {
      value: "standard-room",
      label: "Standard Room",
      info: {
        title: "Standard Room",
        overview: "A comfortable and affordable option with all basic amenities for a pleasant stay.",
        beds: "1 Queen Bed",
        size: "Room size 140 sq. ft",
        count: "8 Standard Rooms",
        occupancy: "2 Adults",
        offers: [
          "Free wifi high speed",
          "Complimentary Breakfast"
        ],
        policies: [
          {
            title: "Cancellation Policy",
            items: [
              "Check in: from 14:00 PM",
              "Check out: not later than 12:00 PM"
            ]
          }
        ],
        amenities: [
          {
            category: "Safety and security features",
            items: [
              "24 Hour Security",
              "Smoke Detector"
            ]
          }
        ],
        type: "AC",
        price: 2500,
        withBreakfastPrice: 3000,
        capacity: 2,
        extraAmenities: [
          "32 Inch flat screen TV",
          "Mini-refrigerator"
        ],
        isAvailable: true,
        detailsHtml: ""
      }
    },
    {
      value: "suite",
      label: "Suite",
      info: {
        title: "Suite",
        overview: "Spacious suite with luxury amenities and a separate living area.",
        beds: "1 King Bed",
        size: "Room size 250 sq. ft",
        count: "4 Suites",
        occupancy: "3 Adults - 2 Children",
        offers: [
          "Free minibar",
          "Complimentary Breakfast",
          "Late checkout"
        ],
        policies: [],
        amenities: [],
        type: "AC",
        price: 5000,
        withBreakfastPrice: 6000,
        capacity: 5,
        extraAmenities: [
          "55 Inch flat screen TV",
          "Mini-refrigerator"
        ],
        isAvailable: true,
        detailsHtml: ""
      }
    },
    {
      value: "family-room",
      label: "Family Room",
      info: {
        title: "Family Room",
        overview: "Perfect for families, with extra space and kid-friendly amenities.",
        beds: "2 Queen Beds",
        size: "Room size 200 sq. ft",
        count: "6 Family Rooms",
        occupancy: "4 Adults - 2 Children",
        offers: [
          "Kids play area access",
          "Complimentary Breakfast"
        ],
        policies: [],
        amenities: [],
        type: "AC",
        price: 4000,
        withBreakfastPrice: 4500,
        capacity: 6,
        extraAmenities: [
          "42 Inch flat screen TV",
          "Mini-refrigerator"
        ],
        isAvailable: true,
        detailsHtml: ""
      }
    }
  ];

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
      adults: 2,
      kids: 0,
      roomType: ROOM_TYPES[0].value,
      specialRequirement: ""
    },
  });

  useEffect(() => {
    const details = getProfileDetails();
    setValue("guestName", details.guestName);
    setValue("phone", details.phone);
    setValue("email", details.email);
  }, [setValue]);

  // Update selected room type info when changed
  useEffect(() => {
    setSelectedRoomType(watch("roomType"));
  }, [watch("roomType")]);

  // Track submitted state using a ref and force update with a state
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);

  // useMutation for booking submission
  const addRoomMutation = useMutation({
    mutationFn: async (data) => {
      return await Apiservice.postAuth(`${API_BOOKING_BANQUET}/${roomId}`, data, token);
    },
    onSuccess: async (response) => {
      const { amount } = response.data.data.payment;
      const { id } = response.data.data.razorpayOrder;

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
            toast.success("Payment successful!");
            router.push(`/confirm-booking/${"44444444444"}`);
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
        toast.success(response.data.message);
        reset();
        forceUpdate();
      } else {
        toast.error(response && response.data && response.data.message ? response.data.message : "Failed to add room.");
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred while booking the room.");
    },
  });

  const onSubmit = (data) => {
    const params = {
      guestName: data.guestName,
      email: data.email,
      phone: data.phone,
      checkIn: data.checkIn,
      checkOut: data.checkOut
    };
    addRoomMutation.mutate(params);
  };



  // Get current room info
  const currentRoom = ROOM_TYPES.find(r => r.value === selectedRoomType)?.info || ROOM_TYPES[0].info;

  // Helper function to safely check array length
  const hasArrayItems = arr => Array.isArray(arr) && arr.length > 0;

  console.log("roomTypeDataroomTypeDataroomTypeData" , roomTypeData);
  

  return (
    <>
      {/* <SubHeader title="Booking Details" subtitle="Booking Details" rating="5" /> */}

      {/* Image Modal */}
      <ImageModal isOpen={modalOpen} imageUrl={modalImage} onClose={closeImageModal} />

      <div className="bookingx-carousel-container mt-14">
        <Carousel
          responsive={{
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 1200 },
              items: 3
            },
            desktop: {
              breakpoint: { max: 1200, min: 900 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 900, min: 600 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 600, min: 0 },
              items: 1
            }
          }}
          infinite={false}
          arrows
          showDots={false}
          containerClass="bookingx-carousel"
          itemClass="bookingx-carousel-image-wrapper"
          renderButtonGroupOutside={true}
        >
          {Array.isArray(roomTypeData?.images) && roomTypeData.images.map((img, idx) => (
            <div
              className="bookingx-carousel-image-wrapper"
              key={img}
              style={{ cursor: "pointer" }}
              onClick={() => openImageModal(`${imgBaseUrl}${img}`)}
              tabIndex={0}
              role="button"
              aria-label={`Open image ${idx + 1} in modal`}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  openImageModal(`${imgBaseUrl}${img}`);
                }
              }}
            >
              <img
                src={`${imgBaseUrl}${img}`}
                alt={`Room ${idx + 1}`}
                className="bookingx-carousel-image"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <style>{`
        .bookingx-carousel-container {
          margin: 30px 0 40px 0;
        }
        .bookingx-carousel-image-wrapper {
          width: 380px;
          height: 380px;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          background: #f7f7f7;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: box-shadow 0.2s;
        }
        .bookingx-carousel-image-wrapper:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
        }
        .bookingx-carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <div className="bookingx-container">
        {/* Left Main Content */}
        <div className="bookingx-main-content">
          <div className="bookingx-room-header">
            <h1 className="bookingx-room-title">{currentRoom.title}</h1>
          </div>
          {/* Overview Section */}
          <div className="bookingx-section">
            <h2 className="bookingx-section-title">Overview</h2>
            {/* Accept HTML in overview/description */}
            {currentRoom.overview ? (
              <div
                className="bookingx-overview-text"
                dangerouslySetInnerHTML={{ __html: currentRoom.overview }}
              />
            ) : (
              <p className="bookingx-overview-text">{currentRoom.overview}</p>
            )}
          </div>
          {/* Room Information */}
          <div className="bookingx-section">
            <h2 className="bookingx-section-title">Room Information</h2>
            <div className="bookingx-room-info">
              <div className="bookingx-info-item">
                <span className="bookingx-info-icon">🛏️</span>
                <span>{currentRoom.beds}</span>
              </div>
              <div className="bookingx-info-item">
                <span className="bookingx-info-icon">📏</span>
                <span>{currentRoom.size}</span>
              </div>
              <div className="bookingx-info-item">
                <span className="bookingx-info-icon">🏢</span>
                <span>{currentRoom.count}</span>
              </div>
              <div className="bookingx-info-item">
                <span className="bookingx-info-icon">👥</span>
                <span>{currentRoom.occupancy}</span>
              </div>
            </div>
          </div>
          {/* HTML Details Section */}
          {currentRoom.detailsHtml && (
            <div className="bookingx-section">
              <h2 className="bookingx-section-title">Details</h2>
              <div
                className="bookingx-details-html"
                dangerouslySetInnerHTML={{ __html: currentRoom.detailsHtml }}
              />
            </div>
          )}
          {/* Available Offers */}
          {hasArrayItems(currentRoom.offers) && (
            <div className="bookingx-section">
              <h2 className="bookingx-section-title">Available Offers</h2>
              <div className="bookingx-offers-grid">
                {currentRoom.offers.map((offer, idx) => (
                  <div className="bookingx-offer-item" key={idx}>{offer}</div>
                ))}
              </div>
            </div>
          )}
          {/* Room Policies */}
          {hasArrayItems(currentRoom.policies) && (
            <div className="bookingx-section">
              <h2 className="bookingx-section-title">Room Policies</h2>
              {currentRoom.policies.map((policy, idx) => (
                <div className="bookingx-policy-section" key={idx}>
                  <h3 className="bookingx-policy-title">{policy.title}</h3>
                  <ul className="bookingx-policy-list">
                    {Array.isArray(policy.items) && policy.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {/* Amenities & Services */}
          {hasArrayItems(currentRoom.amenities) && (
            <div className="bookingx-section">
              <h2 className="bookingx-section-title">Amenities & Services</h2>
              <div className="bookingx-amenities-grid">
                {currentRoom.amenities.map((cat, idx) => (
                  <div className="bookingx-amenity-category" key={idx}>
                    <h4>{cat.category}</h4>
                    <ul className="bookingx-amenity-list">
                      {Array.isArray(cat.items) && cat.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Right Sidebar - Sticky Section */}
        <section
          className="bookingx-sidebar"
          style={{
            position: "sticky",
            top: "24px",
            zIndex: 30,
            background: "transparent",
            height: "fit-content"
          }}
        >
          <div className="bookingx-booking-sidebar shadow-lg rounded-lg border border-gray-200 bg-white">
            <div className="bookingx-booking-header text-center text-white bg-[#aa8453] py-4 text-lg font-bold">
              Book Room
            </div>
            <form className="bookingx-booking-form p-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="bookingx-form-group mb-4">
                <label htmlFor="bookingx-guest-name" className="block text-sm font-medium text-gray-700 mb-1">
                  <span className="bookingx-icon mr-1">👤</span>Enter Your Name
                </label>
                <input
                  type="text"
                  id="bookingx-guest-name"
                  className="bookingx-form-control border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#aa8453]"
                  placeholder="Your Name"
                  {...register("guestName")}
                />
                {errors.guestName && <span className="bookingx-error text-xs text-red-500">{errors.guestName.message}</span>}
              </div>
              <div className="bookingx-form-group mb-4">
                <label htmlFor="bookingx-email" className="block text-sm font-medium text-gray-700 mb-1">
                  <span className="bookingx-icon mr-1">✉️</span>Enter Email Id
                </label>
                <input
                  type="email"
                  id="bookingx-email"
                  className="bookingx-form-control border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#aa8453]"
                  placeholder="Your Email"
                  {...register("email")}
                />
                {errors.email && <span className="bookingx-error text-xs text-red-500">{errors.email.message}</span>}
              </div>
              <div className="bookingx-form-group mb-4">
                <label htmlFor="bookingx-contact" className="block text-sm font-medium text-gray-700 mb-1">
                  <span className="bookingx-icon mr-1">📞</span>Enter Contact Number
                </label>
                <input
                  type="tel"
                  id="bookingx-contact"
                  className="bookingx-form-control border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#aa8453]"
                  placeholder="Your Phone"
                  {...register("phone")}
                />
                {errors.phone && <span className="bookingx-error text-xs text-red-500">{errors.phone.message}</span>}
              </div>
              <div className="bookingx-date-row flex gap-3 mb-4">
                <div className="bookingx-form-group flex-1">
                  <label htmlFor="bookingx-checkin" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="bookingx-icon mr-1">📅</span>Check-in Date
                  </label>
                  <input
                    type="date"
                    id="bookingx-checkin"
                    className="bookingx-form-control border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#aa8453]"
                    {...register("checkIn")}
                  />
                  {errors.checkIn && <span className="bookingx-error text-xs text-red-500">{errors.checkIn.message}</span>}
                </div>
                <div className="bookingx-form-group flex-1">
                  <label htmlFor="bookingx-checkout" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="bookingx-icon mr-1">📅</span>Check-out Date
                  </label>
                  <input
                    type="date"
                    id="bookingx-checkout"
                    className="bookingx-form-control border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#aa8453]"
                    {...register("checkOut")}
                  />
                  {errors.checkOut && <span className="bookingx-error text-xs text-red-500">{errors.checkOut.message}</span>}
                </div>
              </div>
              <button
                className="bookingx-book-button w-full bg-[#aa8453] hover:bg-[#8a6a3a] text-black py-3 rounded font-bold transition-colors duration-200 disabled:opacity-60"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Book Now"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default BanquetBookingData;