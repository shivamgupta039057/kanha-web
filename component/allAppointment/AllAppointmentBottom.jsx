import React from "react";
import AllAppointmentCards from "./AllAppointmentCards";

const AllAppointmentBottom = ({
  allAppointment,
  pageInfo,
  setPaginationData,
  setPageInfo,
  AllAppointmentIsLoading,
}) => {
  const handlePageChange = (newPage) => {
    setPaginationData((prev) => ({ ...prev, page: newPage }));
  };

  return (
    <div className="max-w-7xl px-6 lg:px-8 mx-auto py-4">
      {/* Appointment Cards */}
      <div className="flex flex-col gap-4">
        {AllAppointmentIsLoading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : allAppointment && allAppointment.length > 0 ? (
          allAppointment.map((item) => (
            <React.Fragment key={item?._id}>
              <AllAppointmentCards item={item} />
            </React.Fragment>
          ))
        ) : (
          <div className="text-center text-gray-500">
            No Appointments Found
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {pageInfo && pageInfo.totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 gap-2">
          {/* Previous Button */}
          <button
            className={`px-3 py-1 border rounded ${
              pageInfo.page === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(pageInfo.page - 1)}
            disabled={pageInfo.page === 1}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: pageInfo.totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 border rounded ${
                pageInfo.page === index + 1 ? "bg-secondary text-white" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            className={`px-3 py-1 border rounded ${
              pageInfo.page === pageInfo.totalPages
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => handlePageChange(pageInfo.page + 1)}
            disabled={pageInfo.page === pageInfo.totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllAppointmentBottom;
