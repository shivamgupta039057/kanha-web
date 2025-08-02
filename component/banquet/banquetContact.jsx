"use client"
import React, { useState } from 'react'
import SubHeader from '@/utils/SubHeader'
import GoogleMapEmbed from '../googlemap/GoogleMapEmbed';
import { API_ADD_CONTACT_DETAILS, API_GET_TABLE_BOOKING } from '@/utils/APIConstant';
import { useMutation } from '@tanstack/react-query';
import { Apiservice } from '@/services/apiservices';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { set } from 'react-hook-form';
import { number } from 'yup';

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
            console.log("response", response);
            toast.success(response.data.message || "Contact details submitted successfully.");
            setSubmitted(true);
            setForm(initialFormState);
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "An error occurred while booking the room.");
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend or an email service
        addContactMutation.mutate(form);

    };

    return (
        <>
            <div className="section-padding contact-form-map ">
                
                    <div className="row">
                        <div className="col-lg-6 mb-30 offset-md-1">
                            <form className="mb-md-80" onSubmit={handleSubmit} autoComplete="off">
                                <div className="contact-get-in-touch">
                                    <h3>Planning an Event? Let’s make it memorable!</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <select
                                                name="typeofEvent"
                                                className="form-control form-control-custom"
                                                value={form.typeofEvent}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Event Type *</option>
                                                <option value="Banquet">Banquet</option>
                                                <option value="Wedding">Wedding</option>
                                                <option value="Birthday">Birthday</option>
                                                <option value="Corporate">Corporate</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="numberOfGuests"
                                                type="number"
                                                min="1"
                                                placeholder="Number of Guests *"
                                                required
                                                className="form-control form-control-custom"
                                                value={form.numberOfGuests}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="Your Name *"
                                                required
                                                className="form-control form-control-custom"
                                                value={form.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="Email I'd *"
                                                required
                                                className="form-control form-control-custom"
                                                value={form.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="subject"
                                                type="text"
                                                placeholder="Subject *"
                                                required
                                                className="form-control form-control-custom"
                                                value={form.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="phone"
                                                type="text"
                                                placeholder="Phone No. *"
                                                required
                                                className="form-control form-control-custom"
                                                value={form.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                rows={5}
                                                className="form-control form-control-custom"
                                                placeholder="Message *"
                                                required
                                                value={form.message}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="btn-first btn-submit">
                                            Submit
                                        </button>
                                        {submitted && (
                                            <div className="alert alert-success mt-3" role="alert">
                                                Thank you for contacting us! We will get back to you soon.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            dkdkk
                        </div>
                    </div>
                </div>
        
        </>
    );
};

export default BanquetContact