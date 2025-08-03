"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Apiservice } from "@/services/apiservices";
import { API_KHANA_LOGIN, API_KHANA_OTP_LOGIN, API_VERFIY_OTP } from "@/utils/APIConstant";
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/features/authSlice';

const SignupModal = dynamic(() => import("@/component/auth/SignupModal"), { ssr: false });

// Updated validation schemas for stricter validation
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const mobileSchema = yup.object().shape({
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
});

const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .required("OTP is required")
    .matches(/^[0-9]{6}$/, "OTP must be exactly 6 digits"),
});

const LoginModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  // Email/password form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
  });

  // Mobile form
  const {
    register: registerMobile,
    handleSubmit: handleSubmitMobile,
    formState: { errors: mobileErrors, isSubmitting: isMobileSubmitting },
    reset: resetMobile,
    setValue: setMobileValue,
    watch: watchMobile,
  } = useForm({
    resolver: yupResolver(mobileSchema),
    mode: "onTouched",
  });

  // OTP form
  const {
    register: registerOtp,
    handleSubmit: handleSubmitOtp,
    formState: { errors: otpErrors, isSubmitting: isOtpSubmitting },
    reset: resetOtp,
    setValue: setOtpValue,
    watch: watchOtp,
  } = useForm({
    resolver: yupResolver(otpSchema),
    mode: "onTouched",
  });

  const [showMobile, setShowMobile] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [mobileForOtp, setMobileForOtp] = useState("");

  // Remove debug log in production
  // console.log("mobileForOtpmobileForOtp" , mobileForOtp);

  const emailSignInMutation = useMutation({
    mutationFn: async (data) => {
      const res = await Apiservice.post(`${API_KHANA_LOGIN}`, data);
      return res || {};
    },
    onSuccess: (res) => {
      if (res && res.data && res.data.status) {
        dispatch(setToken(res.data.token));
        toast.success(res.data.message);
        localStorage.setItem("profileDetails", JSON.stringify(res.data.user));
        onClose();
        reset();
      } else {
        toast.error(res && res.data && res.data.message ? res.data.message : "Failed to login.");
      }
    },
    onError: (error) => {
      toast.error(error && error.message ? error.message : "An error occurred while logging in.");
    },
  });

  const mobileOtpMutation = useMutation({
    mutationFn: async (data) => {
      const res = await Apiservice.post(`${API_KHANA_OTP_LOGIN}`, data);
      return res || {};
    },
    onSuccess: (res, variables) => {
      if (res && res.data && res.data.status) {
        toast.success(res.data.message);
        setShowOtp(true);
        resetMobile();
        reset();
        setMobileForOtp(res.data.phone);
      } else {
        toast.error(res && res.data && res.data.message ? res.data.message : "Failed to send OTP.");
      }
    },
    onError: (error) => {
      toast.error(error && error.message ? error.message : "An error occurred while sending OTP.");
    },
  });

  // OTP verification mutation
  const otpVerifyMutation = useMutation({
    mutationFn: async (data) => {
      const res = await Apiservice.post(`${API_VERFIY_OTP}`, data);
      return res || {};
    },
    onSuccess: (res) => {
      if (res && res.data && res.data.status) {
        toast.success(res.data.message || "OTP verified successfully");
        dispatch(setToken(res.data.token)); 
        localStorage.setItem("profileDetails", JSON.stringify(res.data.user));
        onClose();
        resetOtp();
        setShowOtp(false);
        setShowMobile(false);
      } else {
        toast.error(res && res.data && res.data.message ? res.data.message : "Failed to verify OTP.");
      }
    },
    onError: (error) => {
      toast.error(error && error.message ? error.message : "An error occurred while verifying OTP.");
    },
  });

  // Prevent hydration mismatch by only rendering on client
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  if (!isOpen && !showSignup) return null;

  // Handlers
  const onSubmit = (data) => {
    emailSignInMutation.mutate(data);
  };

  const onMobileSubmit = (data) => {
    // Only allow 10 digits for mobile number
    const mobile = data.mobile.replace(/\D/g, '').slice(0, 10);
    mobileOtpMutation.mutate({ mobileNumber: mobile });
  };

  const onOtpSubmit = (data) => {
    otpVerifyMutation.mutate({ phone: mobileForOtp, otp: data.otp });
  };

  // Helper for mobile input: only allow 10 digits
  const handleMobileInput = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileValue("mobile", value, { shouldValidate: true });
  };

  // Helper for OTP input: only allow 6 digits
  const handleOtpInput = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtpValue("otp", value, { shouldValidate: true });
  };

  // Handler to switch to mobile login and clear email field
  const handleShowMobile = () => {
    setShowMobile(true);
    reset();
  };

  return (
    <>
      {isOpen && !showSignup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-[#171717] mb-2 text-center">Sign in</h2>
            <p className="text-sm text-gray-500 mb-6 text-center">
              Don’t have an account?{" "}
              <button
                className="text-black hover:underline font-semibold focus:outline-none"
                style={{ background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
                onClick={() => {
                  setShowSignup(true);
                }}
                type="button"
              >
                Create now
              </button>
            </p>
            {!showMobile ? (
              <>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`w-full px-4 py-2 border ${
                        errors.email ? "border-red-400" : "border-gray-200"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365]`}
                      placeholder="Enter your email"
                      autoComplete="email"
                      inputMode="email"
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Password</label>
                    <input
                      type="password"
                      {...register("password")}
                      className={`w-full px-4 py-2 border ${
                        errors.password ? "border-red-400" : "border-gray-200"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365]`}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                    />
                    {errors.password && (
                      <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#b99365] hover:bg-[#a07c44] text-black font-semibold py-2 rounded-full transition-all duration-200 shadow"
                    disabled={isSubmitting || emailSignInMutation.isLoading}
                  >
                    {emailSignInMutation.isLoading ? "Signing in..." : "Sign in"}
                  </button>
                  {emailSignInMutation.isError && (
                    <p className="text-xs text-red-500 mt-2 text-center">
                      {emailSignInMutation.error?.message || "Login failed. Please try again."}
                    </p>
                  )}
                </form>
                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="mx-3 text-gray-400 font-medium">or</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>
                <button
                  className="w-full border border-[#b99365] text-[#b99365] font-semibold py-2 rounded-full hover:bg-[#f8f5f0] transition-all duration-200"
                  onClick={handleShowMobile}
                  type="button"
                >
                  Continue with Mobile Number
                </button>
              </>
            ) : (
              <>
                {!showOtp ? (
                  <form
                    className="space-y-4"
                    onSubmit={handleSubmitMobile(onMobileSubmit)}
                    noValidate
                  >
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        {...registerMobile("mobile")}
                        className={`w-full px-4 py-2 border ${
                          mobileErrors.mobile ? "border-red-400" : "border-gray-200"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365]`}
                        placeholder="Enter your mobile number"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        onInput={handleMobileInput}
                      />
                      {mobileErrors.mobile && (
                        <p className="text-xs text-red-500 mt-1">{mobileErrors.mobile.message}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#b99365] hover:bg-[#a07c44] text-black font-semibold py-2 rounded-full transition-all duration-200 shadow"
                      disabled={isMobileSubmitting || mobileOtpMutation.isLoading}
                    >
                      {mobileOtpMutation.isLoading ? "Sending OTP..." : "Continue"}
                    </button>
                    {mobileOtpMutation.isError && (
                      <p className="text-xs text-red-500 mt-2 text-center">
                        {mobileOtpMutation.error?.message || "Failed to send OTP. Please try again."}
                      </p>
                    )}
                  </form>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmitOtp(onOtpSubmit)} noValidate>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Enter OTP</label>
                      <input
                        type="text"
                        {...registerOtp("otp")}
                        className={`w-full px-4 py-2 border ${
                          otpErrors.otp ? "border-red-400" : "border-gray-200"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365]`}
                        placeholder="Enter OTP"
                        inputMode="numeric"
                        pattern="[0-9]{6}"
                        maxLength={6}
                        onInput={handleOtpInput}
                      />
                      {otpErrors.otp && (
                        <p className="text-xs text-red-500 mt-1">{otpErrors.otp.message}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#b99365] hover:bg-[#a07c44] text-black font-semibold py-2 rounded-full transition-all duration-200 shadow"
                      disabled={isOtpSubmitting || otpVerifyMutation.isLoading}
                    >
                      {otpVerifyMutation.isLoading ? "Verifying..." : "Verify OTP"}
                    </button>
                    {otpVerifyMutation.isError && (
                      <p className="text-xs text-red-500 mt-2 text-center">
                        {otpVerifyMutation.error?.message || "Failed to verify OTP. Please try again."}
                      </p>
                    )}
                  </form>
                )}
                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="mx-3 text-gray-400 font-medium">or</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>
                <button
                  className="w-full border border-[#b99365] text-[#b99365] font-semibold py-2 rounded-full hover:bg-[#f8f5f0] transition-all duration-200"
                  onClick={() => {
                    setShowMobile(false);
                    setShowOtp(false);
                    setMobileForOtp("");
                  }}
                  type="button"
                >
                  Continue with Email
                </button>
              </>
            )}
          </div>
        </div>
      )}
      {showSignup && (
        <SignupModal
          isOpen={showSignup}
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => {
            setShowSignup(false);
          }}
        />
      )}
    </>
  );
};

export default LoginModal;
