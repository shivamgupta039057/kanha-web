"use client"
import React from "react";
import { useForm } from "react-hook-form";
// Module not found: Can't resolve '@hookform/resolvers/yup'
// To fix this, install the package with:
// npm install @hookform/resolvers

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { Apiservice } from "@/services/apiservices";
import { API_KHANA_SIGNUP } from "@/utils/APIConstant";
import { toast } from "react-toastify";

// Example signup API function (replace with your actual API call)
const signupApi = async (data) => {
  // Replace with your API logic, e.g.:
  // return fetch('/api/signup', { method: 'POST', body: JSON.stringify(data) })
  //   .then(res => {
  //     if (!res.ok) throw new Error('Signup failed');
  //     return res.json();
  //   });
  return new Promise((resolve) => setTimeout(() => resolve(data), 1000));
};

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup
    .string()
    .matches(/^\d{10,15}$/, "Mobile number must be 10-15 digits")
    .required("Mobile number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

 
  const addRoomMutation = useMutation({
    mutationFn: async (data) => {
      console.log("dddddFormDataFormDataFormData", data);
      return await Apiservice.post(`${API_KHANA_SIGNUP}`, data);
    },
    onSuccess: (res) => {
      if (res && res.data.status) {
        toast.success(res.data.message);
        onClose();
        reset();
      } else {
        toast.error(res && res.data && res.data.message ? res.data.message : "Failed to add room.");
      }
    },
    onError: (error) => {
      toast.error(error && error.message ? error.message : "An error occurred while adding the room.");
    },
  });

  if (!isOpen) return null;

  const onSubmit = (data) => {
    const obj = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phone: data.mobile,
      password: data.password,
    }
    addRoomMutation.mutate(obj);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10 overflow-auto">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-0 sm:p-0 relative animate-fadeIn">
        <div className="max-h-[90vh] overflow-y-auto p-8">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          <h2 className="text-3xl font-extrabold text-[#171717] mb-3 text-center tracking-tight leading-tight">
            Sign Up
          </h2>
          <p className="text-base text-gray-600 mb-7 text-center font-medium">
            Already have an account?{" "}
            <button
              className="text-black hover:underline font-semibold focus:outline-none"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
              }}
              onClick={onSwitchToLogin}
              type="button"
            >
              Sign in
            </button>
          </p>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="block text-gray-800 font-semibold mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  className={`w-full px-4 py-2 border ${
                    errors.firstName ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] text-gray-900`}
                  placeholder="First Name"
                  autoComplete="given-name"
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>
                )}
              </div>
              <div className="w-1/2">
                <label className="block text-gray-800 font-semibold mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  className={`w-full px-4 py-2 border ${
                    errors.lastName ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] text-gray-900`}
                  placeholder="Last Name"
                  autoComplete="family-name"
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-1">E-mail</label>
              <input
                type="email"
                {...register("email")}
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-400" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] text-gray-900`}
                placeholder="E-mail"
                autoComplete="email"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Mobile No.
              </label>
              <input
                type="tel"
                {...register("mobile")}
                className={`w-full px-4 py-2 border ${
                  errors.mobile ? "border-red-400" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] text-gray-900`}
                placeholder="Mobile Number"
                autoComplete="tel"
              />
              {errors.mobile && (
                <p className="text-xs text-red-500 mt-1">{errors.mobile.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                className={`w-full px-4 py-2 border ${
                  errors.password ? "border-red-400" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] text-gray-900`}
                placeholder="Password"
                autoComplete="new-password"
              />
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword")}
                className={`w-full px-4 py-2 border ${
                  errors.confirmPassword ? "border-red-400" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] text-gray-900`}
                placeholder="Confirm Password"
                autoComplete="new-password"
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#b99365] hover:bg-[#a07c44] text-black font-bold py-2 rounded-full transition-all duration-200 shadow text-lg"
              disabled={isSubmitting || addRoomMutation.isLoading}
            >
              {addRoomMutation.isLoading ? "Signing Up..." : "Sign Up"}
            </button>
            {addRoomMutation.isError && (
              <p className="text-xs text-red-500 mt-2 text-center">
                {addRoomMutation.error?.message || "Signup failed. Please try again."}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
