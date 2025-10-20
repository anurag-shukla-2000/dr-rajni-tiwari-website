import { Award, GraduationCap, Users, Clock } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: "MBBS",
      institution: "University of Medical Sciences",
      year: "2005",
      description: "Bachelor of Medicine, Bachelor of Surgery with Honors"
    },
    {
      degree: "FRACP",
      institution: "Royal Australasian College of Physicians", 
      year: "2012",
      description: "Fellow in Gastroenterology - Advanced Specialist Training"
    },
    {
      degree: "Advanced Endoscopy",
      institution: "International Medical Institute",
      year: "2014", 
      description: "Specialized training in therapeutic endoscopic procedures"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Dr. Rajni Tiwari</h1>
            <p className="text-xl opacity-90">
              Dedicated gastroenterologist with over 15 years of experience in providing exceptional patient care
            </p>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Professional Journey</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Dr. Rajni Tiwari is a highly respected gastroenterologist and hepatologist 
                  practicing at Westmead Private Hospital. Her medical journey began with 
                  outstanding academic achievements, leading to specialized training in 
                  gastroenterology.
                </p>
                <p>
                  With over 15 years of clinical experience, Dr. Tiwari has developed 
                  expertise in managing complex gastrointestinal and liver disorders. 
                  She is known for her compassionate approach and commitment to 
                  evidence-based medicine.
                </p>
                <p>
                  Dr. Tiwari maintains active membership in professional organizations 
                  including the Gastroenterological Society of Australia and continues 
                  to contribute to medical education and research.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
                  <div className="text-gray-600">Patients Treated</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-gray-600">Advanced Degrees</div>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-gray-600">Emergency Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Education & Qualifications</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.degree}</h3>
                    <p className="text-blue-600 font-semibold">{item.institution}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.year}
                  </span>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}