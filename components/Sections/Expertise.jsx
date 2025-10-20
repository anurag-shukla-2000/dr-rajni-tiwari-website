import { Target, Users, Clock, Star, TrendingUp, Award } from 'lucide-react';

export default function Expertise() {
  const expertiseAreas = [
    {
      category: "Diagnostic Excellence",
      items: [
        "High-definition endoscopy",
        "Capsule endoscopy",
        "Endoscopic ultrasound",
        "Manometry studies"
      ]
    },
    {
      category: "Therapeutic Procedures", 
      items: [
        "Polypectomy and EMR",
        "Stricture dilation",
        "Hemostasis techniques",
        "Enteral stenting"
      ]
    },
    {
      category: "Liver Disease Management",
      items: [
        "Viral hepatitis treatment",
        "Metabolic liver disease",
        "Autoimmune liver conditions", 
        "Liver cirrhosis management"
      ]
    }
  ];

  const stats = [
    { icon: Target, value: "98%", label: "Procedure Success Rate" },
    { icon: Users, value: "5000+", label: "Patients Treated" },
    { icon: Clock, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Patient Rating" }
  ];

  return (
    <section className="section-padding medical-gradient text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Areas of Expertise
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full opacity-50"></div>
          <p className="text-xl opacity-90 mt-6 max-w-3xl mx-auto">
            Specialized care backed by extensive training and cutting-edge medical technology
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="grid lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {area.category}
              </h3>
              <ul className="space-y-4">
                {area.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Professional Recognition */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <Award className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Professional Recognition
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Registered with AHPRA (MED0002183366) and recognized by leading medical institutions 
              including HealthScope and Westmead Private Hospital for excellence in gastroenterological care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}