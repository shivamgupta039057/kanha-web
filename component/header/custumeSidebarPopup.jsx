import { Apiservice } from "@/services/apiservices";
import { openLoginModal } from "@/store/features/loginModalSlice";
import { API_BOOKING_ROOM, API_GET_ROOMS } from "@/utils/APIConstant";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const GuestInfoPopup = ({ open, onClose }) => {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "YOUR_RAZORPAY_KEY_ID";
    
    const [roomTypeData, setRoomTypeData] = useState([]);
    console.log("tokentokentoken" , token)
    const { data: roomType, isLoading } = useQuery({
      queryKey: ["get-roomTypeData"],
      queryFn: () => Apiservice.get(`${API_GET_ROOMS}`),

      staleTime: 4 * 60 * 1000,
    });

    
  
    useEffect(() => {
      if (roomType) {
        setRoomTypeData(roomType.data.data)
      }
    }, [roomType]);
    // Step 0: Name, Step 1: Email, Step 2: Contact, Step 3: Room & Dates, Step 4: Review/Submit
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({
      firstName:  '',
      email:  '',
      contact:   '',
      roomType:  '',
      checkIn:  '',
      checkOut:  '',
    });  

    const addRoomMutation = useMutation({
        mutationFn: async (data) => {
          const {roomType , ...param} = data;
          return await Apiservice.postAuth(`${API_BOOKING_ROOM}/${roomType}`, param, token);
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
              name: "New Kanha Hotel",
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
  
    
    const [errors, setErrors] = useState({});
  
    // Reset on open/close
    useEffect(() => {
      if (open) {
        setStep(0);
        setForm({
          firstName: '',
          email: '',
          contact: '',
          roomType: '',
          checkIn: '',
          checkOut: '',
        });
        setErrors({});
      }
    }, [open]);
  
    const validateStep = () => {
      let err = {};
      if (step === 0 && !form.firstName.trim()) err.firstName = "Name is required";
      if (step === 1 && !form.email.trim()) err.email = "Email is required";
      if (step === 1 && form.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) err.email = "Invalid email";
      if (step === 2 && !form.contact.trim()) err.contact = "Contact is required";
      if (step === 2 && form.contact && !/^\d{10,}$/.test(form.contact)) err.contact = "Invalid contact";
      if (step === 3 && !form.roomType) err.roomType = "Room selection required";
      if (step === 3 && !form.checkIn) err.checkIn = "Check-in required";
      if (step === 3 && !form.checkOut) err.checkOut = "Check-out required";
      if (step === 3 && form.checkIn && form.checkOut && form.checkIn > form.checkOut) err.checkOut = "Check-out after check-in";
      setErrors(err);
      return Object.keys(err).length === 0;
    };
  
    const handleNext = (e) => {
      e.preventDefault();
      if (validateStep()) setStep(step + 1);
    };
  
    const handleBack = (e) => {
      e.preventDefault();
      setStep(step - 1);
    };
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: undefined });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // alert("1111");
  
      if (validateStep()) {
        // Here you can send form data to API or handle as needed
        // onClose();
  
        if (token != null && token !== "") {
          const params = {
            guestName: form.firstName,
            email: form.email,
            phone: form.contact,
            checkIn: form.checkIn,
            checkOut: form.checkOut,
            roomType: form.roomType,
          };
          addRoomMutation.mutate(params);
        } else {
          localStorage.setItem("guestInfo", JSON.stringify(form));
          onClose();
          dispatch(openLoginModal({ booking: true }));
        }
      }
    };
  
    if (!open) return null;
  
    return (
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: "32px 24px 24px 24px",
            minWidth: 320,
            maxWidth: "90vw",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            position: "relative",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              background: "none",
              border: "none",
              fontSize: 22,
              cursor: "pointer",
              color: "#ffc107",
              fontWeight: 700,
            }}
            aria-label="Close"
          >
            ×
          </button>
          <h3 style={{ marginBottom: 18, color: "#ffc107", textAlign: "center" }}>
            Guest Information
          </h3>
          <form
            onSubmit={step === 3 ? handleSubmit : handleNext}
            style={{ display: "flex", flexDirection: "column", gap: 18, minWidth: 260 }}
          >
            {/* Stepper */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 8 }}>
              {[0, 1, 2, 3].map((s) => (
                <span
                  key={s}
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: step === s ? "#ffc107" : "#eee",
                    display: "inline-block",
                    border: step === s ? "2px solid #ffc107" : "2px solid #eee",
                    transition: "background 0.2s",
                  }}
                />
              ))}
            </div>
            {/* Step 0: Name */}
            {step === 0 && (
              <div>
                <label style={{ fontWeight: 500, fontSize: 15 }}>
                  👤 Enter Your Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    marginTop: 4,
                  }}
                />
                {errors.firstName && (
                  <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>{errors.firstName}</div>
                )}
              </div>
            )}
            {/* Step 1: Email */}
            {step === 1 && (
              <div>
                <label style={{ fontWeight: 500, fontSize: 15 }}>
                  ✉️ Enter Email Id
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    marginTop: 4,
                  }}
                />
                {errors.email && (
                  <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>{errors.email}</div>
                )}
              </div>
            )}
            {/* Step 2: Contact */}
            {step === 2 && (
              <div>
                <label style={{ fontWeight: 500, fontSize: 15 }}>
                  📞 Enter Contact Number
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  required
                  placeholder="Enter your contact number"
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    marginTop: 4,
                  }}
                />
                {errors.contact && (
                  <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>{errors.contact}</div>
                )}
              </div>
            )}
            {/* Step 3: Room & Dates */}
            {step === 3 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <label style={{ fontWeight: 500, fontSize: 15 }}>
                    🛏️ Select Room
                  </label>
                  <select
                    name="roomType"
                    value={form.roomType}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      borderRadius: 6,
                      border: "1px solid #ccc",
                      marginTop: 4,
                    }}
                  >
                    <option value="">Select a room</option>
                    {roomTypeData && roomTypeData.length > 0 ? (
                      roomTypeData.map((room) => (
                        <option key={room._id || room.id || room.title} value={room._id}>
                          {room.title} - ₹{room.price} / night
                        </option>
                      ))
                    ) : (
                      <option value="" disabled>
                        {isLoading ? "Loading rooms..." : "No rooms available"}
                      </option>
                    )}
                  </select>
                  {errors.roomType && (
                    <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>{errors.roomType}</div>
                  )}
                </div>
                <div>
                  <label style={{ fontWeight: 500, fontSize: 15 }}>
                    📅 Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={form.checkIn}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      borderRadius: 6,
                      border: "1px solid #ccc",
                      marginTop: 4,
                    }}
                  />
                  {errors.checkIn && (
                    <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>{errors.checkIn}</div>
                  )}
                </div>
                <div>
                  <label style={{ fontWeight: 500, fontSize: 15 }}>
                    📅 Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={form.checkOut}
                    onChange={handleChange}
                    required
                    min={form.checkIn ? form.checkIn : new Date().toISOString().split("T")[0]}
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      borderRadius: 6,
                      border: "1px solid #ccc",
                      marginTop: 4,
                    }}
                  />
                  {errors.checkOut && (
                    <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>{errors.checkOut}</div>
                  )}
                </div>
              </div>
            )}
            {/* Step 4: Review & Submit */}
            
            {/* Navigation Buttons */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              {step > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    background: "#eee",
                    color: "#333",
                    border: "none",
                    borderRadius: 6,
                    padding: "8px 18px",
                    fontWeight: 500,
                    fontSize: 15,
                    cursor: "pointer",
                    letterSpacing: 1,
                    minWidth: 80,
                  }}
                >
                  Back
                </button>
              )}
              <div style={{ flex: 1 }} />
              {step < 4 ? (
                <button
                  type="submit"
                  style={{
                    background: "#ffc107",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "8px 18px",
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: "pointer",
                    letterSpacing: 1,
                    minWidth: 80,
                  }}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  style={{
                    background: "#ffc107",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "8px 18px",
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: "pointer",
                    letterSpacing: 1,
                    minWidth: 80,
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  };
  