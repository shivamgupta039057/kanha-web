"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AllAppointmentDetailsModal = ({
  isModal,
  setIsModal,
  AppointMentModalData,
}) => {
  console.log("AppointMentModalDataAppointMentModalData", AppointMentModalData);

  const router = useRouter();
  return (
    <React.Fragment>
      <div
        className={`h-full ${
          isModal ? "block" : "hidden"
        } fixed inset-0  bg-primary/10 w-full backdrop-blur-md z-[100] `}
      ></div>

      <div
        className={`${
          isModal ? "block" : "hidden"
        } max-w-4xl w-[calc(100%_-_32px)] z-[105] fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:p-6 bg-white rounded-lg border-2 overflow-hidden overflow-y-auto  max-sm:my-10 max-h-[541px]`}
      >
        <div className="relative pb-10">
          <div className="mt-[10px]">
            <div className="max-w-7xl px-6 lg:px-8 mx-auto my-4">
              <div className="font-semibold text-xl pt-6">
                Appointment Details
              </div>
            </div>
            <div className="max-w-7xl px-6 lg:px-8 mx-auto my-4">
             {
              AppointMentModalData?.doctor &&  <div className="flex-col gap-4 flex">
              <div className="border border-gray-200 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="w-24 h-24 rounded-md overflow-hidden">
                      <Image
                        src={
                          AppointMentModalData?.doctor?.avatar
                            ? AppointMentModalData?.doctor?.avatar
                            : "assets/img/doctor-1.jpg"
                        }
                        alt="doctor"
                        title="doctor"
                        width="96"
                        height="96"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-lg sm:text-xl">
                        Dr. {AppointMentModalData?.doctor?.name}
                      </div>
                      <div className="text-sm sm:text-base text-secondary">
                        {AppointMentModalData?.doctor?.specialization
                          ?.map((item) => item?.name)
                          .join(", ")}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {AppointMentModalData?.doctor?.Gender} (
                        {AppointMentModalData?.doctor?.Age})
                      </div>
                      <div className="text-sm font-semibold flex gap-2 items-center mt-1">
                        {AppointMentModalData?.doctor?.mobile}
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto flex flex-col items-start max-md:me-auto">
                    <div className="text-sm font-semibold">
                      Type of Appointment
                    </div>
                    <div className="flex gap-2  items-center  justify-starttext-sm font-semibold">
                      <span className="w-4 h-4 text-green-500  *:size-full">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 640 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M192 48c0-26.5 21.5-48 48-48L400 0c26.5 0 48 21.5 48 48l0 464-80 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-80 0 0-464zM48 96l112 0 0 416L48 512c-26.5 0-48-21.5-48-48L0 320l80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 288l0-64 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 192l0-48c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 48-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 144c0 26.5-21.5 48-48 48l-112 0 0-416 112 0zM312 64c-8.8 0-16 7.2-16 16l0 24-24 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0z"></path>
                        </svg>
                      </span>

                      {AppointMentModalData?.type == "offline"
                        ? "Direct Visit"
                        : "Video Call"}
                    </div>
                  </div>
                  <div className="w-full sm:w-auto  sm:mt-0">
                    <div className="text-sm font-semibold py-2">
                      Consultation Fees: ₹200
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div>
                    <div className="font-semibold text-sm sm:text-base">
                      Appointment Time Slot
                    </div>
                    <div className="text-sm sm:text-base">
                      {AppointMentModalData?.slot?.start} to{" "}
                      {AppointMentModalData?.slot?.end}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">
                      Language
                    </div>
                    <div className="text-sm sm:text-base">
                      {AppointMentModalData?.doctor?.Language.map(
                        (item) => item
                      ).join(", ")}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">
                      Experience
                    </div>
                    <div className="text-sm sm:text-base">
                      {AppointMentModalData?.doctor?.experience} Years
                    </div>
                  </div>

                  <div className="max-sm:mt-2 flex cursor-pointer justify-center sm:justify-end">
                    <div
                      onClick={() =>
                        router.push(
                          `/prescripation/${AppointMentModalData?._id}`
                        )
                      }
                      className="px-6 py-1.5 size-max text-white rounded-lg bg-secondary w-full sm:w-auto text-center"
                    >
                      Prescription
                    </div>
                  </div>
                </div>
                {AppointMentModalData?.doctor?.clinicName ? (
                  <div>
                    <div className="font-semibold text-sm sm:text-base mt-4">
                      Clinic Name
                    </div>
                    <div className="text-sm sm:text-base">
                      {AppointMentModalData?.doctor?.clinicName}
                    </div>
                  </div>
                ) : null}
                {AppointMentModalData?.doctor?.clinicAddress ? (
                  <div>
                    <div className="font-semibold text-sm sm:text-base mt-4">
                      Location
                    </div>
                    <div className="text-sm sm:text-base">
                      {AppointMentModalData?.doctor?.clinicAddress}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
             }

              <div className="mt-4">
                <div className="border border-gray-200 bg-white rounded-lg p-4 shadow-2xl flex flex-wrap items-center gap-4 sm:gap-6 md:justify-between">
                  {/* Icon */}
                  <div className="flex-shrink-0 size-10 rounded-md p-2 border shadow-inner shadow-primary flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-6 h-6"
                    >
                      <path d="m277.37 11.98c-16.29-7.51-34.26-11.98-53.37-11.98-53.69 0-99.5 33.13-118.51 80h81.19zm65.14 68.02c-7.9-19.47-20.67-36.2-36.49-49.52l-66.03 49.52zm-118.51 176c70.69 0 128-57.31 128-128 0-5.48-.95-10.7-1.61-16h-252.78c-.67 5.3-1.61 10.52-1.61 16 0 70.69 57.31 128 128 128zm-144 43.7v212.3h128.26l-98.45-221.52a132.835 132.835 0 0 0 -29.81 9.22zm-80 164.3c0 26.51 21.49 48 48 48v-191.76c-29.12 24.65-48 61.02-48 102.16zm256-48h-55.38l42.67 96h12.71c26.47 0 48-21.53 48-48s-21.53-48-48-48zm57.6-128h-16.71c-22.24 10.18-46.88 16-72.89 16s-50.65-5.82-72.89-16h-7.37l42.67 96h69.59c44.11 0 80 35.89 80 80 0 18.08-6.26 34.59-16.41 48h80.41c26.51 0 48-21.49 48-48v-41.6c0-74.23-60.17-134.4-134.4-134.4z"></path>
                    </svg>
                  </div>

                  {/* Patient Name */}
                  <div className="flex-1 min-w-[150px]">
                    <div className="text-black font-semibold">
                      {AppointMentModalData?.patientName}
                    </div>
                    {/* <div className="text-black font-semibold text-sm">
                      Kunal Kamara
                    </div> */}
                  </div>

                  {/* Gender */}
                  <div className="flex-1 min-w-[150px]">
                    <div className="text-black font-semibold">Gender</div>
                    <div className="text-sm font-semibold flex items-center gap-2 mt-1">
                      <div className="size-5 p-1 rounded-md border text-black border-black flex items-center justify-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                          className="w-4 h-4"
                        >
                          <path d="M450.4 48H341.5c-7.5 0-13.6 6.1-13.6 13.6s6.1 13.6 13.6 13.6h75.4L326.7 166c-30.6-26-69.3-40.3-109.6-40.3-22.8 0-45 4.5-65.8 13.3-20.1 8.5-38.2 20.7-53.8 36.2C82 190.8 69.8 208.9 61.3 229 52.5 249.9 48 272 48 294.9s4.5 45 13.3 65.8c8.5 20.1 20.7 38.2 36.2 53.8 15.5 15.5 33.6 27.7 53.8 36.2 20.9 8.8 43 13.3 65.8 13.3 22.8 0 45-4.5 65.8-13.3 20.1-8.5 38.2-20.7 53.8-36.2 15.5-15.5 27.7-33.6 36.2-53.8 8.8-20.9 13.3-43 13.3-65.8 0-40.3-14.3-79-40.3-109.6L436.7 95v75.4c0 7.5 6.1 13.6 13.6 13.6s13.6-6.1 13.6-13.6V61.6c.1-7.5-6-13.6-13.5-13.6z"></path>
                        </svg>
                      </div>
                      {AppointMentModalData?.patientGender}
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="flex-1 min-w-[150px]">
                    <div className="text-black font-semibold">
                      Mobile Number
                    </div>
                    <div className="text-black font-semibold text-sm mt-1">
                      {AppointMentModalData?.userMobile}
                    </div>
                  </div>

                  {/* Time Slot */}
                  {/* <div className="flex-1 min-w-[150px]">
                    <div className="text-black font-semibold">Time Slot</div>
                    <div className="text-black font-semibold text-sm mt-1">
                    {AppointMentModalData?.slot?.start} to {AppointMentModalData?.slot?.end}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute -top-2 right-2 border size-6 rounded-full p-1 *:size-full"
            onClick={() => {
              setIsModal(false);
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
            </svg>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllAppointmentDetailsModal;
