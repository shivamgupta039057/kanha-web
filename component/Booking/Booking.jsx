"use client";
import React, { useEffect, useRef, useState } from 'react';
import SubHeader from '@/utils/SubHeader';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Apiservice } from "@/services/apiservices";
import { toast } from "react-toastify";
import { API_BOOKING_ROOM } from '@/utils/APIConstant';
import { useSelector } from 'react-redux';
import { usePayment } from "@/utils/usePayment";
import { useRouter } from 'next/navigation';
// Import Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Dynamic data for room, offers, policies, amenities, etc.
const ROOM_TYPES = [
  {
    value: "deluxe-room",
    label: "Deluxe Room",
    info: {
      title: "Deluxe Room",
      overview: "Experience traditional Rajasthani decor in these beautifully designed rooms. The elegantly decorated deluxe rooms have all the modern facilities. It has been dressed in a Fresco style with comfortable accommodation.",
      beds: "1 King Bed / 2 Single Beds",
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
      ]
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
      ]
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
      amenities: []
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
      amenities: []
    }
  }
];

const ADULT_OPTIONS = [1, 2, 3, 4];
const KID_OPTIONS = [0, 1, 2, 3];

const bookingImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
];

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

const Booking = ({ roomId }) => {
  const { submitPayment } = usePayment();
  const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "YOUR_RAZORPAY_KEY_ID";
  const submittedRef = useRef(false);
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();

  // State for selected room type
  const [selectedRoomType, setSelectedRoomType] = useState(ROOM_TYPES[0].value);

  // Carousel images
  const carouselImages = [
    "/images/room/room-1.jpg",
    "/images/room/room-2.jpg",
    "/images/room/room-3.jpg",
    "/images/room/room-4.jpg",
    "/images/room/room-5.jpg",
    "/images/room/room-6.jpg",
    "/images/room/room-7.jpg",
    "/images/room/room-8.jpg",
    "/images/room/room-9.jpg",
    "/images/room/room-10.jpg",
  ];

  // Carousel responsive config
  const carouselResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2
    }
  };

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
      return await Apiservice.postAuth(`${API_BOOKING_ROOM}/${roomId}`, data, token);
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
      checkOut: data.checkOut,
      adults: data.adults,
      kids: data.kids,
      roomType: data.roomType,
      specialRequirement: data.specialRequirement
    };
    addRoomMutation.mutate(params);
  };

  const handleBookAnother = () => {
    const details = getProfileDetails();
    reset({
      guestName: details.guestName,
      phone: details.phone,
      email: details.email,
      checkIn: "",
      checkOut: "",
      adults: 2,
      kids: 0,
      roomType: ROOM_TYPES[0].value,
      specialRequirement: ""
    });
    forceUpdate();
  };

  // Get current room info
  const currentRoom = ROOM_TYPES.find(r => r.value === selectedRoomType)?.info || ROOM_TYPES[0].info;

  return (
    <>
      <SubHeader title="Booking Details" subtitle="Booking Details" rating="5" />

      <div className="bookingx-carousel-container">
        <Carousel
          responsive={{
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 1200 },
              items: 4
            },
            desktop: {
              breakpoint: { max: 1200, min: 900 },
              items: 4
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
          {bookingImages.map((img, idx) => (
            <div className="bookingx-carousel-image-wrapper" key={img}>
              <img
                src={img}
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
          width: 260px;
          height: 380px;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          background: #f7f7f7;
          display: flex;
          align-items: center;
          justify-content: center;
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
            <p className="bookingx-overview-text">
              {currentRoom.overview}
            </p>
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
          {/* Available Offers */}
          {currentRoom.offers && currentRoom.offers.length > 0 && (
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
          {currentRoom.policies && currentRoom.policies.length > 0 && (
            <div className="bookingx-section">
              <h2 className="bookingx-section-title">Room Policies</h2>
              {currentRoom.policies.map((policy, idx) => (
                <div className="bookingx-policy-section" key={idx}>
                  <h3 className="bookingx-policy-title">{policy.title}</h3>
                  <ul className="bookingx-policy-list">
                    {policy.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {/* Amenities & Services */}
          {currentRoom.amenities && currentRoom.amenities.length > 0 && (
            <div className="bookingx-section">
              <h2 className="bookingx-section-title">Amenities & Services</h2>
              <div className="bookingx-amenities-grid">
                {currentRoom.amenities.map((cat, idx) => (
                  <div className="bookingx-amenity-category" key={idx}>
                    <h4>{cat.category}</h4>
                    <ul className="bookingx-amenity-list">
                      {cat.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Right Sidebar - Sticky */}
        <div className="bookingx-sidebar">
          <div className="bookingx-booking-sidebar">
            <div className="bookingx-booking-header">
              Book Room
            </div>
            <form className="bookingx-booking-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="bookingx-form-group">
                <label htmlFor="bookingx-guest-name">
                  <span className="bookingx-icon">👤</span>Enter Your Name
                </label>
                <input
                  type="text"
                  id="bookingx-guest-name"
                  className="bookingx-form-control"
                  placeholder="Your Name"
                  {...register("guestName")}
                />
                {errors.guestName && <span className="bookingx-error">{errors.guestName.message}</span>}
              </div>
              <div className="bookingx-form-group">
                <label htmlFor="bookingx-email">
                  <span className="bookingx-icon">✉️</span>Enter Email Id
                </label>
                <input
                  type="email"
                  id="bookingx-email"
                  className="bookingx-form-control"
                  placeholder="Your Email"
                  {...register("email")}
                />
                {errors.email && <span className="bookingx-error">{errors.email.message}</span>}
              </div>
              <div className="bookingx-form-group">
                <label htmlFor="bookingx-contact">
                  <span className="bookingx-icon">📞</span>Enter Contact Number
                </label>
                <input
                  type="tel"
                  id="bookingx-contact"
                  className="bookingx-form-control"
                  placeholder="Your Phone"
                  {...register("phone")}
                />
                {errors.phone && <span className="bookingx-error">{errors.phone.message}</span>}
              </div>
              <div className="bookingx-date-row">
                <div className="bookingx-form-group">
                  <label htmlFor="bookingx-checkin">
                    <span className="bookingx-icon">📅</span>Check-in Date
                  </label>
                  <input
                    type="date"
                    id="bookingx-checkin"
                    className="bookingx-form-control"
                    {...register("checkIn")}
                  />
                  {errors.checkIn && <span className="bookingx-error">{errors.checkIn.message}</span>}
                </div>
                <div className="bookingx-form-group">
                  <label htmlFor="bookingx-checkout">
                    <span className="bookingx-icon">📅</span>Check-out Date
                  </label>
                  <input
                    type="date"
                    id="bookingx-checkout"
                    className="bookingx-form-control"
                    {...register("checkOut")}
                  />
                  {errors.checkOut && <span className="bookingx-error">{errors.checkOut.message}</span>}
                </div>
              </div>
              <div className="bookingx-adults-row">
                <span className="bookingx-adults-label">Adults</span>
                <select
                  className="bookingx-adults-select"
                  {...register("adults")}
                  defaultValue={2}
                >
                  {ADULT_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <span className="bookingx-adults-label">Kids</span>
                <select
                  className="bookingx-adults-select"
                  {...register("kids")}
                  defaultValue={0}
                >
                  {KID_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="bookingx-form-group">
                <select
                  className="bookingx-room-select"
                  {...register("roomType")}
                  value={watch("roomType")}
                  onChange={e => {
                    setValue("roomType", e.target.value);
                    setSelectedRoomType(e.target.value);
                  }}
                >
                  {ROOM_TYPES.map(room => (
                    <option key={room.value} value={room.value}>{room.label}</option>
                  ))}
                </select>
                {errors.roomType && <span className="bookingx-error">{errors.roomType.message}</span>}
              </div>
              <div className="bookingx-form-group bookingx-special-requirements">
                <label htmlFor="bookingx-requirements">Special Requirement</label>
                <textarea
                  id="bookingx-requirements"
                  placeholder="Enter any special requirements..."
                  {...register("specialRequirement")}
                ></textarea>
                {errors.specialRequirement && <span className="bookingx-error">{errors.specialRequirement.message}</span>}
              </div>
              <button className="bookingx-book-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Booking..." : "📖 Book Now"}
              </button>
              <button
                type="button"
                className="bookingx-book-another-button"
                style={{ marginTop: 8 }}
                onClick={handleBookAnother}
              >
                Book Another Room
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;