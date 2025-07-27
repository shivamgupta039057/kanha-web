"use client";
import { API_GET_ALL_APPOINTMENT, API_GET_ALL_BOOKING } from "@/utils/APIConstant";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AllAppointmentHeader from "./AllAppointmentHeader";
import AllAppointmentBottom from "./AllAppointmentBottom";
import { useForm, Controller } from "react-hook-form";
import { Apiservice } from "@/services/apiservices";
import SubHeader from "@/utils/SubHeader";

function Allappointment() {
  const [allAppointment, setAllAppointment] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const [pageInfo, setPageInfo] = useState({});
  const [paginationData, setPaginationData] = useState({
    totalChildrenCount: 0,
    totalPages: 0,
    page: 1,
    perPage: 10,
  });

  // React Hook Form setup
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      searchQuery: "",
      date: new Date().toISOString().split("T")[0],
      selectType: { value: "all", label: "All" },
    },
  });

  // Watch all form values for query dependency
  const watchedValues = watch();

  const {
    data: PatientAppointments,
    isLoading: AllAppointmentIsLoading,
    refetch,
  } = useQuery({
    queryKey: [
      "get-AllAppointment",
      paginationData.page,
      watchedValues.date,
      watchedValues.searchQuery,
      watchedValues.selectType,
    ],
    queryFn: () =>
      Apiservice.getAuth(
        `${API_GET_ALL_BOOKING}?page=${paginationData.page}&perPage=${paginationData?.perPage}&startDate=${
          watchedValues.date ?? ""
        }&search=${watchedValues.searchQuery}&type=${
          watchedValues.selectType?.value === "all"
            ? ""
            : watchedValues.selectType?.value === "onVisit" ||
              watchedValues.selectType?.value === "onCall"
            ? "offline"
            : watchedValues.selectType?.value === "online"
            ? "online"
            : watchedValues.selectType?.value
        }&slotType=${
          watchedValues.selectType?.value == "online"
            ? ""
            : watchedValues.selectType?.value === "all"
            ? ""
            : watchedValues.selectType?.value
        }`,
        token
      ),
    staleTime: 5 * 60 * 1000,
  });

  // Refetch when pagination or form values change
  useEffect(() => {
    refetch();
  }, [paginationData.page, watchedValues, refetch]);

  useEffect(() => {
    setAllAppointment(PatientAppointments?.data?.data);
    setPageInfo(PatientAppointments?.data?.data?.pagination);
  }, [PatientAppointments]);

  return (
    <>
       <SubHeader title="Rooms & Banquets" subtitle="Rooms & Banquets" rating="5" />
      <AllAppointmentHeader
        control={control}
        setValue={setValue}
        handleSubmit={handleSubmit}
        trigger={trigger}
        getValues={getValues}
        errors={errors}
      />
      <AllAppointmentBottom
        allAppointment={allAppointment}
        pageInfo={pageInfo}
        AllAppointmentIsLoading={AllAppointmentIsLoading}
        setPaginationData={setPaginationData}
        setPageInfo={setPageInfo}
      />
    </>
  );
}

export default Allappointment;
