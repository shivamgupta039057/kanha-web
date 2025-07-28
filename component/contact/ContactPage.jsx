"use client"
import React, { useState } from 'react'
import SubHeader from '@/utils/SubHeader'

const CONTACT_INFO = [
  {
    icon: 'flaticon-call',
    label: 'Booking',
    value: '+91 2586931478',
    type: 'phone',
    href: 'tel:+912586931478',
  },
  {
    icon: 'flaticon-envelope',
    label: 'Email Info',
    value: 'info@Kanhahotel.com',
    type: 'email',
    href: 'mailto:info@Kanhahotel.com',
  },
  {
    icon: 'flaticon-envelope',
    label: 'Address',
    value: (
      <>
        20 Mall Road, India 30032
        <br />
        South Africa Of India
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
};

const ContactPage = () => {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or an email service
    setSubmitted(true);
    setForm(initialFormState);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <SubHeader title="Contact Us" subtitle="GET IN TOUCH" rating="5" />
      <div className="section-padding contact-form-map">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="conatct-right">
                <div className="luxury-h3">
                  <h3>The Kanha Hotel</h3>
                </div>
                <div className="luxury-p">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut.
                  </p>
                </div>
                {CONTACT_INFO.map((info, idx) => (
                  <div className="reservation asdf" key={idx}>
                    <div className="icon">
                      <i className={info.icon}></i>
                    </div>
                    <div className="text">
                      <p>{info.label}</p>
                      {info.type === 'address' ? (
                        <address>{info.value}</address>
                      ) : (
                        <a href={info.href}>{info.value}</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 mb-30 offset-md-1">
              <form className="mb-md-80" onSubmit={handleSubmit} autoComplete="off">
                <div className="contact-get-in-touch">
                  <h3>Get in touch</h3>
                </div>
                <div className="row">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage