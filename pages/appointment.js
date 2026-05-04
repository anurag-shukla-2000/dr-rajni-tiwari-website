'use client';
import { useState } from 'react';
import Head from 'next/head';
import { Calendar, Clock, Phone, Mail, MapPin, AlertCircle } from 'lucide-react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    reason: '',
    urgency: 'routine'
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.reason) newErrors.reason = 'Reason for visit is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Handle appointment booking
    setSubmitted(true);
    // In a real app, you'd send this to your backend
    console.log('Appointment request:', formData);
  };

  if (submitted) {
    return (
      <>
        <Head>
          <title>Appointment Request Received | Dr. Rajni Tiwari</title>
          <meta name="robots" content="noindex, follow" />
        </Head>
        <div className="pt-32 min-h-screen bg-gray-50">
          <div className="container-custom text-center py-20">
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Appointment Request Received</h1>
              <p className="text-gray-600 mb-6">
                Thank you, {formData.name}! We have received your appointment request for {formData.preferredDate}.
              </p>
              <p className="text-gray-600 mb-8">
                Our team will contact you within 24-48 hours to confirm your appointment time.
              </p>
              <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Book an Appointment | Dr. Rajni Tiwari - Gastroenterologist</title>
        <meta name="description" content="Schedule a consultation with Dr. Rajni Tiwari, gastroenterologist at Westmead Private Hospital. Book your appointment online for expert digestive health care." />
        <meta name="keywords" content="book appointment, Dr. Rajni Tiwari appointment, gastroenterology consultation, Westmead Private Hospital, schedule appointment" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dr-rajni-tiwari-website.vercel.app/appointment" />
      </Head>

      <div className="pt-20">
        {/* Hero */}
        <section className="medical-gradient text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Book Your Appointment</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Schedule your consultation with Dr. Rajni Tiwari. We're here to provide you with exceptional care.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Appointment Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Request an Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+61 XXX XXX XXX"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.preferredDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (1PM - 4PM)</option>
                        <option value="late">Late (4PM - 6PM)</option>
                      </select>
                      {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Visit *
                    </label>
                    <select
                      name="reason"
                      required
                      value={formData.reason}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.reason ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select reason</option>
                      <option value="consultation">General Consultation</option>
                      <option value="followup">Follow-up Visit</option>
                      <option value="endoscopy">Endoscopy Procedure</option>
                      <option value="emergency">Emergency Care</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="routine">Routine (1-2 weeks)</option>
                      <option value="urgent">Urgent (3-5 days)</option>
                      <option value="emergency">Emergency (Call Clinic)</option>
                    </select>
                    <p className="text-gray-500 text-sm mt-1">
                      For medical emergencies, please call 000 or go to your nearest emergency department.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Request Appointment
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Appointment Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">(02) 8833 8000</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">appointments@drrajnitiwari.com</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                      <span className="text-gray-700">
                        Westmead Private Hospital<br />
                        Cnr Darcy & Mons Roads<br />
                        Westmead NSW 2145
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <h4 className="text-xl font-bold text-gray-900">What to Bring</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li>• GP referral letter</li>
                    <li>• Medicare card and insurance details</li>
                    <li>• List of current medications</li>
                    <li>• Previous medical reports and test results</li>
                    <li>• Arrive 15 minutes before your appointment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
