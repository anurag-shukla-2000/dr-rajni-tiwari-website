import Head from 'next/head'
import Navbar from '../components/Layout/Navbar'
import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Services from '../components/Sections/Services'
import Expertise from '../components/Sections/Expertise'
import Contact from '../components/Sections/Contact'
import Footer from '../components/Layout/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Rajni Tiwari | Expert Medical Care & Consultation</title>
        <meta name="google-site-verification" content="Zm_6cJaVkYSNpwhxVempOFWaA02lXOaADguKwSi7DNo" />
        <meta name="description" content="Dr. Rajni Tiwari offers expert medical care, personalized treatment, and compassionate healthcare services. Book an appointment today for a consultation." />
        <meta name="keywords" content="Dr. Rajni Tiwari, Rajni Tiwari, doctor, medical care, healthcare, consultation, expert doctor, patient care" />
        <meta name="author" content="Dr. Rajni Tiwari" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dr-rajni-tiwari-website.vercel.app" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dr. Rajni Tiwari | Expert Medical Care" />
        <meta property="og:description" content="Expert medical care and compassionate healthcare services by Dr. Rajni Tiwari." />
        <meta property="og:url" content="https://dr-rajni-tiwari-website.vercel.app" />
        <meta property="og:site_name" content="Dr. Rajni Tiwari" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Dr. Rajni Tiwari | Expert Medical Care" />
        <meta name="twitter:description" content="Expert medical care by Dr. Rajni Tiwari." />
      </Head>
      
      {/* JSON-LD Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": "Dr. Rajni Tiwari",
            "url": "https://dr-rajni-tiwari-website.vercel.app",
            "description": "Expert medical care and compassionate healthcare services",
            "medicalSpecialty": "General Medicine",
            "availableForConsultation": true
          })
        }}
      />
      
      <main>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Expertise />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
