import React from 'react'

const RefundPolicy = () => {
    return (
        <>
            <div className="mx-auto max-w-6xl px-6 lg:px-8 z-[1] relative py-10 shadow-md shadow-sky-950/20 border-2 bg-white my-10 rounded-xl mt-[5.625rem]">
                <div className="text-left mb-6">
                    <div className="font-bold text-left text-sm flex">
                        Effective Date: <span className="text-sm text-left">&nbsp; 25-08-2025</span>
                    </div>
                </div>
                <div className="w-full text-xs md:text-sm font-bold text-black-600 flex flex-col gap-y-4">
                    <div>
                        At New Kanha Hotel, we strive to provide the best hospitality experience. This Refund Policy explains the terms under which refunds are issued for room bookings and services.
                    </div>

                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-2">
                        1. Eligibility for Refund
                    </h4>
                    <div>
                        <ul className="list-disc ml-6 ">
                            <li>Guests who cancel their booking within 24 hours of payment/booking confirmation are eligible for a full refund..</li>
                            <li>  Refund requests must be made via email, phone, or in-person at the reception within the 24-hour window.</li>
                        </ul>
                    </div>

                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-2">
                        2. Non-Refundable Policy
                    </h4>
                    <div>
                        <ul className="list-disc ml-6 ">
                            <li>No refunds will be issued for cancellation requests received after 24 hours from the booking confirmation time.</li>
                            <li>No refunds will be provided for no-shows, early check-outs, or unused services once the stay has begun</li>
                        </ul>
                    </div>

                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-2">
                        3. Refund Method & Timeframe
                    </h4>
                    <div>
                        <ul className="list-disc ml-6 ">
                            <li>Approved refunds will be processed to the original payment method used for booking.
                            </li>
                            <li>Refunds may take 5–7 working days to reflect in your account, depending on your bank/payment provider.
                            </li>
                        </ul>
                    </div>

                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-2">
                        4. Special Cases
                    </h4>
                    <div>
                        In exceptional circumstances (e.g., medical emergencies or government travel restrictions), management may consider partial refunds, subject to documentation and approval.
                    </div>


                    <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-black pt-2">
                        5. Contact For Refunds
                    </h4>
                    <div>
                        For any refund queries, please contact :
                        <ul className="list-none ml-0 mt-2">
                            <li>📍 <b>New Kanha Hotel, Govindpura Kalwar Road</b></li>
                            <li>📞 Phone: <a href="tel:+919783252121" className="underline !text-black">+91 9783252121</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RefundPolicy