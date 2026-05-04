import Head from 'next/head';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import Contact from '../components/Sections/Contact';

export default function ContactPage() {
  const clinicInfo = {
    address: "Westmead Private Hospital, Sydney, NSW 2145, Australia",
    phone: "+61 2 1234 5678",
    email: "appointments@drrajnitiwari.com",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
    weekend: "Saturday: 9:00 AM - 1:00 PM (Emergency Only)"
  };

  return (
    <>
      <Head>
        <title>Contact Dr. Rajni Tiwari | Book an Appointment</title>
        <meta name="description" content="Contact Dr. Rajni Tiwari's clinic to schedule an appointment or inquire about gastroenterology services. Phone, email, and location information provided." />
        <meta name="keywords" content="contact Dr. Rajni Tiwari, book appointment, gastroenterology appointment, Westmead Private Hospital, digestive health consultation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dr-rajni-tiwari-website.vercel.app/contact" />
      </Head>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="medical-gradient text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contact Dr. Rajni Tiwari</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Schedule your consultation or reach out with any questions about gastroenterology services
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600 text-sm">{clinicInfo.address}</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">{clinicInfo.phone}</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">{clinicInfo.email}</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600 text-sm">{clinicInfo.hours}</p>
                <p className="text-gray-500 text-xs mt-1">{clinicInfo.weekend}</p>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Contact Form (from existing Contact component) */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                <Contact />
              </div>

              {/* Right: Clinic Info & Map */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Clinic Information</h2>
                <div className="space-y-4 text-gray-700 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-semibold">Westmead Private Hospital</p>
                      <p className="text-sm">Sydney, NSW 2145, Australia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-semibold">Appointments</p>
                      <p className="text-sm">{clinicInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-semibold">Referrals</p>
                      <p className="text-sm">GP referrals accepted. Please bring all relevant medical records.</p>
                    </div>
                  </div>
                </div>

                {/* Simple Map Placeholder */}
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <p className="text-gray-500">Map location will appear here</p>
                </div>

                <div className="mt-6 bg-blue-50 rounded-2xl p-6 text-center">
                  <p className="text-blue-800 font-semibold mb-2">📋 New Patient?</p>
                  <p className="text-gray-600 text-sm">
                    Please bring your referral letter, medical history, and list of current medications to your first appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
