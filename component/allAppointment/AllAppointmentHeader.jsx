"use client";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

const options = [
  { value: "all", label: "All" },
  { value: "onVisit", label: "On Visit" },
  { value: "onCall", label: "On Call" },
  { value: "online", label: "Online" },
];

const AllAppointmentHeader = ({
  control,
  setValue,
  handleSubmit,
  trigger,
  getValues,
  errors,
}) => {
  const [search, setSearch] = useState("");

  // Debounced search for react-hook-form
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search?.length >= 3 || search?.length === 0) {
        setValue("searchQuery", search);
        trigger("searchQuery");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search, setValue, trigger]);

  return (
    <div className="max-w-7xl px-6 lg:px-8 mx-auto">
      <div className="flex justify-end items-center max-sm:flex-wrap border-b py-5">
        <div className="max-sm:w-full flex max-sm:flex-wrap max-sm:gap-1 gap-3">
          {/* Search Input */}
          <div className="flex px-4 py-2 max-sm:mt-4 rounded-md border-2 border-secondary overflow-hidden max-w-md sm:mx-auto max-sm:me-auto max-sm:w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-gray-600 mr-3 rotate-90"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
            <Controller
              name="searchQuery"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  name="searchQuery"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Search Here"
                  className="w-full outline-none bg-transparent text-gray-600 text-sm "
                />
              )}
            />
          </div>
          {/* Select Type */}
          <div>
            <Controller
              name="selectType"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  value={field.value?.value || "all"}
                  onChange={(e) => {
                    const selected = options.find(
                      (opt) => opt.value === e.target.value
                    );
                    field.onChange(selected);
                    trigger("selectType");
                  }}
                  className="border-b bg-gray-50 rounded-md px-1 py-1 text-sm text-gray-700"
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          {/* Date Picker */}
          <div className="flex justify-between max-sm:ms-auto items-center max-sm:flex-wrap">
            <div className=" ">
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <input
                    type="date"
                    {...field}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-secondary w-full p-2 sm:p-2.5"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      trigger("date");
                    }}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAppointmentHeader;
