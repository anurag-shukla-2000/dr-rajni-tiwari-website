import { CheckCircle, Award as AwardIcon, GraduationCap, Heart, Users, Languages } from 'lucide-react';

export default function About() {
  const qualifications = [
    "MBBS (Bachelor of Medicine, Bachelor of Surgery) - Graduated with Four Gold Medals",
    "MRCP UK (Member of Royal College of Physicians)",
    "FRACP (Fellow of Royal Australasian College of Physicians)",
    "Gastroenterology Training - Nottingham University Hospital UK",
    "SCE (Speciality Certificate Exam) Gastroenterology",
    "Conjoint Committee for Endoscopy Certification (GESA)"
  ];

  const achievements = [
    { icon: AwardIcon, text: "15+ Years Medical Experience" },
    { icon: GraduationCap, text: "University Honors Graduate with Four Gold Medals" },
    { icon: Heart, text: "Patient-Centered Care Philosophy" },
    { icon: Users, text: "Medical Educator & Junior Doctor Mentor" },
    { icon: Languages, text: "Fluent in Hindi and Urdu" }
  ];

  const expertise = [
    "Upper gastrointestinal disorders (GORD/Barrett's, Coeliac Disease, Helicobacter)",
    "Colorectal cancer screening (Positive FOBT/Family History)",
    "Inflammatory Bowel Disease (IBD) and irritable bowel syndrome",
    "Gastroscopy and Colonoscopy with/without polypectomy",
    "Management of acute gastrointestinal bleeding",
    "Dilatation of strictures and Placement of PEG tubes",
    "Capsule Endoscopy (Pill Cam)"
  ];

  const specialInterests = [
    "Management of liver diseases",
    "Hepatitis and Fatty Liver Disease (MAFLD/NAFLD)",
    "Advanced liver cirrhosis",
    "Liver cancer",
    "Metabolic liver disease research"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Dr. Rajni Tiwari
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Specialist Gastroenterologist & Hepatologist dedicated to providing evidence-based, 
            personalized care for all digestive and liver conditions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-900">
                Professional Journey
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dr. Rajni Tiwari is a highly qualified Gastroenterologist and Hepatologist with 
                extensive international training and experience. She graduated from Gandhi Medical 
                College, MP India with four Gold Medals in her MBBS, demonstrating exceptional 
                academic excellence from the beginning of her medical career.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dr. Tiwari completed her postgraduate training in the United Kingdom, obtaining 
                MRCP UK and specializing in Gastroenterology at Nottingham University Hospital 
                with SCE Gastroenterology certification. After completing her training in 2017, 
                she moved to Australia where she serves as a Staff Specialist at Westmead Public Hospital.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong research background, Dr. Tiwari has been actively involved in 
                clinical trials and publications. She currently serves as a sub-investigator 
                on numerous studies for metabolic liver disease, hepatitis, and liver cancer.
              </p>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Qualifications & Credentials</h4>
              <div className="space-y-3">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Clinical Expertise</h4>
              <div className="grid gap-2">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Achievements */}
            {achievements.map((achievement, index) => (
              <div key={index} className="professional-card rounded-2xl p-6 shadow-lg hover-lift">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <achievement.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {achievement.text}
                    </h4>
                  </div>
                </div>
              </div>
            ))}

            {/* Special Interests */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-4 text-center">Areas of Special Interest</h4>
              <div className="grid gap-2">
                {specialInterests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span className="opacity-95">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hospital Affiliations */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h4 className="text-xl font-semibold mb-4">Hospital Affiliations</h4>
              <div className="space-y-2">
                <p className="text-lg font-medium">Westmead Public Hospital</p>
                <p className="text-lg font-medium">Westmead Private Hospital</p>
                <p className="text-lg font-medium">Norwest Private Hospital</p>
                <p className="text-lg font-medium">Lakeview Private Hospital</p>
                <p className="opacity-80 mt-3 text-sm">Consulting rooms in Westmead and Norwest areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}