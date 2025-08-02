"use client"
import React, { useState } from 'react'
import { API_ADD_CONTACT_DETAILS } from '@/utils/APIConstant';
import { useMutation } from '@tanstack/react-query';
import { Apiservice } from '@/services/apiservices';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const CONTACT_INFO = [
    {
        icon: 'flaticon-call',
        label: 'Booking',
        value: '9783252121',
        type: 'phone',
        href: 'tel:+912586931478',
    },
    {
        icon: 'flaticon-envelope',
        label: 'Email Info',
        value: 'newkanha220@gmail.com',
        type: 'email',
        href: 'mailto:info@Kanhahotel.com',
    },
    {
        icon: 'flaticon-envelope',
        label: 'Address',
        value: (
            <>
                Kala Nagari, Kalwar Rd, opp. New Kanha Restaurant, Radha Vihar, Govindpura, Jaipur, Rajasthan 302012
            </>
        ),
        type: 'address',
    },
];

const initialFormState = {
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    typeofEvent: '',
    numberOfGuests: "",
};

const BanquetContact = () => {
    const [form, setForm] = useState(initialFormState);
    const token = useSelector((state) => state.auth.token);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addContactMutation = useMutation({
        mutationFn: async (data) => {
            return await Apiservice.postAuth(`${API_ADD_CONTACT_DETAILS}`, data, token);
        },
        onSuccess: async (response) => {
            toast.success(response.data.message || "Contact details submitted successfully.");
            setSubmitted(true);
            setForm(initialFormState);
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "An error occurred while booking the room.");
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addContactMutation.mutate(form);
    };

    return (
        <>
            <section
                className="relative py-16 md:py-24 bg-gradient-to-br from-[#1a1a1a] via-[#222] to-[#3a2c1a] overflow-hidden"
                id="banquet-contact"
            >
                {/* Decorative background shapes */}
                <div className="pointer-events-none absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#b99365]/20 blur-3xl z-0"></div>
                <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#b99365]/20 blur-3xl z-0"></div>
                <div className="container mx-auto relative z-10 px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-[#b99365] drop-shadow-lg mb-2 tracking-tight">
                            Planning an Event? <span className="text-white">Let’s Make it Memorable!</span>
                        </h3>
                        <p className="text-lg text-gray-200 mb-4">
                            Fill out the form below and our team will contact you soon.
                        </p>
                        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-[#b99365] to-[#fff] rounded-full mb-2"></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-2xl p-8 md:p-10 backdrop-blur-md border border-[#b99365]/20">
                            <form className="space-y-7" onSubmit={handleSubmit} autoComplete="off">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[#b99365] font-semibold mb-1">Event Type *</label>
                                        <select
                                            name="typeofEvent"
                                            className="w-full px-4 py-2 border border-[#b99365]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] bg-white"
                                            value={form.typeofEvent}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Event Type</option>
                                            <option value="Banquet">Banquet</option>
                                            <option value="Wedding">Wedding</option>
                                            <option value="Birthday">Birthday</option>
                                            <option value="Corporate">Corporate</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[#b99365] font-semibold mb-1">Number of Guests *</label>
                                        <input
                                            name="numberOfGuests"
                                            type="number"
                                            min="1"
                                            placeholder="Number of Guests"
                                            required
                                            className="w-full px-4 py-2 border border-[#b99365]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] bg-white"
                                            value={form.numberOfGuests}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#b99365] font-semibold mb-1">Your Name *</label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            className="w-full px-4 py-2 border border-[#b99365]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] bg-white"
                                            value={form.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#b99365] font-semibold mb-1">Email ID *</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email ID"
                                            required
                                            className="w-full px-4 py-2 border border-[#b99365]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] bg-white"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#b99365] font-semibold mb-1">Subject *</label>
                                        <input
                                            name="subject"
                                            type="text"
                                            placeholder="Subject"
                                            required
                                            className="w-full px-4 py-2 border border-[#b99365]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] bg-white"
                                            value={form.subject}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#b99365] font-semibold mb-1">Phone No. *</label>
                                        <input
                                            name="phone"
                                            type="text"
                                            placeholder="Phone No."
                                            required
                                            className="w-full px-4 py-2 border border-[#b99365]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] bg-white"
                                            value={form.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[#b99365] font-semibold mb-1">Message *</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-2 border border-[#b99365]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b99365] bg-white"
                                        placeholder="Message"
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#e7c742] hover:bg-black text-black hover:text-white font-bold py-3 rounded-lg transition-all duration-200 shadow-lg text-lg tracking-wide uppercase"
                                >
                                    {addContactMutation.isLoading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                                {submitted && (
                                    <div className="mt-4 text-center text-green-600 font-semibold text-lg animate-fade-in">
                                        Thank you for contacting us! We will get back to you soon.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                    <style>{`
                        @keyframes fade-in {
                            from { opacity: 0; transform: translateY(20px);}
                            to { opacity: 1; transform: translateY(0);}
                        }
                        .animate-fade-in {
                            animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;
                        }
                    `}</style>
                </div>
            </section>
        </>
    );
};

export default BanquetContact
