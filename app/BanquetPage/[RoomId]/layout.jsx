import CustomeBookingHeader from "@/component/header/CustomeBookingHeader";

export default function BookingLayout({ children }) {
  return (
    <>
      <CustomeBookingHeader />
      <main>{children}</main>
    </>
  );
}