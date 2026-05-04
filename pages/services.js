import Head from 'next/head';

export default function Services() {
  const servicesList = [
    {
      title: "General Gastroenterology",
      description: "Comprehensive evaluation and treatment of digestive system disorders including acid reflux, IBS, and inflammatory bowel disease.",
      conditions: ["Acid Reflux / GERD", "Irritable Bowel Syndrome", "Inflammatory Bowel Disease", "Peptic Ulcers"]
    },
    {
      title: "Hepatology & Liver Care",
      description: "Expert diagnosis and management of liver conditions including hepatitis, fatty liver disease, and cirrhosis.",
      conditions: ["Hepatitis B & C", "Fatty Liver Disease", "Cirrhosis", "Liver Function Abnormalities"]
    },
    {
      title: "Endoscopy Procedures",
      description: "Advanced endoscopic procedures for diagnosis and treatment of gastrointestinal conditions.",
      conditions: ["Upper Endoscopy", "Colonoscopy", "Endoscopic Ultrasound", "Polypectomy"]
    },
    {
      title: "Cancer Screening",
      description: "Comprehensive screening programs for early detection of gastrointestinal cancers.",
      conditions: ["Colorectal Cancer Screening", "Gastric Cancer Screening", "Barrett's Esophagus Surveillance"]
    },
    {
      title: "Nutritional Gastroenterology",
      description: "Specialized dietary and nutritional management for digestive disorders.",
      conditions: ["Dietary Counseling", "Nutritional Deficiencies", "Food Intolerances", "Weight Management"]
    },
    {
      title: "Emergency GI Care",
      description: "Prompt evaluation and treatment for acute gastrointestinal emergencies.",
      conditions: ["Acute Abdominal Pain", "GI Bleeding", "Acute Pancreatitis", "Bowel Obstruction"]
    }
  ];

  return (
    <>
      <Head>
        <title>Gastroenterology Services | Dr. Rajni Tiwari</title>
        <meta name="description" content="Dr. Rajni Tiwari offers comprehensive gastroenterology and hepatology services including endoscopy, liver care, cancer screening, and digestive health management." />
        <meta name="keywords" content="gastroenterology services, hepatology, endoscopy, liver care, colonoscopy, digestive health, Dr. Rajni Tiwari" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dr-rajni-tiwari-website.vercel.app/services" />
      </Head>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="medical-gradient text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Gastroenterology Services</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Expert care for digestive and liver health — comprehensive gastroenterology and hepatology services
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Services We Offer</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dr. Rajni Tiwari provides specialized care for a wide range of digestive and liver conditions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="border-t border-gray-200 pt-3 mt-2">
                    <p className="text-sm font-semibold text-blue-600 mb-2">Conditions treated:</p>
                    <ul className="space-y-1">
                      {service.conditions.map((condition, idx) => (
                        <li key={idx} className="text-sm text-gray-600">✓ {condition}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Schedule a Consultation</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step toward better digestive health. Dr. Rajni Tiwari is here to help.
            </p>
            <a 
              href="/appointment" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book an Appointment
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
