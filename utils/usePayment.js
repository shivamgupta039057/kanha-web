"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

// You should set your Razorpay key here
const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "YOUR_RAZORPAY_KEY_ID";

// This should be your backend API endpoint to initiate payment/order
const API_INITIATE_PAYMENT = "/api/payment/initiate"; // Change as per your backend

// Helper to call your backend API to create a Razorpay order
const createOrder = async (data) => {
  const res = await fetch(API_INITIATE_PAYMENT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to initiate payment");
  }
  return res.json();
};

export const usePayment = () => {
  const { mutate: submitPayment, isLoading: isSubmitting } = useMutation({
    mutationFn: createOrder,
    onSuccess: async (response) => {
        console.log("dfksdfkljklfresponseresponseresponseresponse" , response);
        
      // response should contain order details from your backend
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
        amount: response?.order?.amount, // in paise
        currency: response?.order?.currency || "INR",
        name: "Your Company Name",
        description: "Room Booking Payment",
        order_id: response?.order?.id,
        handler: function (paymentResponse) {
          // You can verify payment on backend here
          toast.success("Payment successful!");
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
    },
    onError: (error) => {
        console.log("errorerrorerrorerrorerror" , error);
        
      toast.error(error?.message || "Payment initiation failed");
    },
  });

  return { submitPayment, isSubmitting };
};
