import React from 'react'

const TermsConditions = () => {
    return (
        <>
            <div className="mx-auto max-w-6xl px-6 lg:px-8 z-[1] relative py-10 shadow-md shadow-sky-950/20 border-2 bg-white my-10 rounded-xl mt-[5.625rem]">
                <div className="text-left mb-6">
                    <div className="font-bold text-left text-sm flex">
                        Effective Date: <span className="text-sm text-left">&nbsp; 13-08-2025</span>
                    </div>
                </div>
                <div className="w-full text-xs md:text-sm font-bold text-black-600 flex flex-col gap-y-4">
                    <div>
                        Welcome to New Kanha Hotel. By booking a stay or using our services, you agree to the following terms and conditions.
                        </div>

                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-2">
                        1. Booking & Payment
                    </h4>
                    <div>
                        <ul className="list-disc ml-6 ">
                            <li>All bookings are subject to availability and confirmation.</li>
                            <li> Advance payment is required to secure the booking.</li>
                            <li> Full payment must be completed before check-in unless otherwise agreed.</li>
                        </ul>
                    </div>

                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-2">
                        2. Check-In & Check-Out
                    </h4>
                    <div>
                        <ul className="list-disc ml-6 ">
                            <li>Check-in time: 12:00 PM | Check-out time: 11:00 AM.</li>
                            <li>Early check-in or late check-out is subject to availability and may incur additional charges.</li>
                            <li>Valid government-issued photo ID is required at check-in for all guests.</li>
                        </ul>
                    </div>

                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-2">
                        3. Cancellation & Refund
                    </h4>
                    <div>
                        <ul className="list-disc ml-6 ">
                            <li>Cancellations within 24 hours of booking are eligible for a full refund.
                            </li>
                            <li>Cancellations after 24 hours are non-refundable.
                            </li>
                            <li>No refunds for no-shows or early check-outs.
                            </li>
                        </ul>
                    </div>

                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-2">
                        4.  Guest Responsibilities
                    </h4>
                        <ul className="list-disc ml-6 ">
                            <li>Guests are expected to maintain cleanliness and respect hotel property.</li>
                            <li>Any damage to hotel property will be charged to the guest’s account+91 9783252121</li>
                            <li>Illegal activities are strictly prohibited within hotel premises.</li>
                        </ul>
                    </div>
                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-4">
                        5. Facilities & Services
                    </h4>
                    <div className="w-full text-xs md:text-sm font-bold text-black-600 flex flex-col gap-y-4">
                        <ul className="list-disc ml-6">
                            <li>AC rooms, free Wi-Fi, and daily cleaning are provided as per booking.</li>
                            <li>Certain amenities or services may be temporarily unavailable due to maintenance or unforeseen circumstances.</li>
                        </ul>
                    </div>
                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-4">
                        6. Liability
                    </h4>
                    <div className="w-full text-xs md:text-sm font-bold text-black-600 flex flex-col gap-y-4">
                        <ul className="list-disc ml-6">
                            <li>The hotel is not responsible for loss or damage to guest belongings unless stored in the hotel’s secure storage.</li>
                            <li>The hotel is not liable for any injury, accident, or illness occurring during the stay, except where caused by proven negligence of the hotel staff..</li>
                        </ul>
                    </div>
                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-4">
                        7. Privacy
                    </h4>
                    <div className="w-full text-xs md:text-sm font-bold text-black-600 flex flex-col gap-y-4">
                        <ul className="list-disc ml-6">
                            <li>Guest data is collected and used in accordance with our Privacy Policy.</li>
                        </ul>
                    </div>
                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-4">
                        8.  Governing Law
                    </h4>
                    <div className="w-full text-xs md:text-sm font-bold text-black-600 flex flex-col gap-y-4">
                        <ul className="list-disc ml-6">
                            <li>These Terms & Conditions are governed by the laws of India, and any disputes shall be subject to the jurisdiction of Jaipur courts..</li>
                        </ul>
                    </div>
                </div>

        </>
    )
}

export default TermsConditions