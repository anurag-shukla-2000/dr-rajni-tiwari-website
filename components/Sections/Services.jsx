import { Stethoscope, Heart, Eye, Shield, Activity, AlertCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Diagnostic Endoscopy',
      description: 'Comprehensive gastroscopy and colonoscopy procedures for accurate diagnosis of gastrointestinal conditions including cancer screening.',
      features: ['Gastroscopy', 'Colonoscopy', 'Capsule Endoscopy', 'Biopsy Procedures']
    },
    {
      icon: Heart,
      title: 'Liver Disease Management',
      description: 'Expert care for liver disorders including hepatitis, cirrhosis, fatty liver disease, and liver function abnormalities.',
      features: ['Hepatitis Management', 'Cirrhosis Care', 'Fatty Liver Treatment', 'Liver Function Tests']
    },
    {
      icon: Activity,
      title: 'Inflammatory Bowel Disease',
      description: 'Specialized treatment for Crohns disease, ulcerative colitis, and other inflammatory bowel conditions.',
      features: ['Crohns Disease', 'Ulcerative Colitis', 'IBD Management', 'Biological Therapies']
    },
    {
      icon: Eye,
      title: 'Gastrointestinal Cancer Screening',
      description: 'Early detection and surveillance programs for gastrointestinal cancers including colon and stomach cancer.',
      features: ['Colon Cancer Screening', 'Gastric Cancer Detection', 'Surveillance Programs', 'Family History Assessment']
    },
    {
      icon: Shield,
      title: 'Therapeutic Procedures',
      description: 'Advanced therapeutic interventions including polyp removal, stricture dilation, and bleeding control.',
      features: ['Polyp Removal', 'Stricture Dilation', 'Bleeding Control', 'Stent Placement']
    },
    {
      icon: AlertCircle,
      title: 'Emergency Gastroenterology',
      description: '24/7 care for acute gastrointestinal conditions including bleeding, obstructions, and severe abdominal pain.',
      features: ['GI Bleeding', 'Acute Pancreatitis', 'Bowel Obstruction', 'Emergency Endoscopy']
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Medical Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Comprehensive gastroenterology and hepatology services using the latest medical technologies and evidence-based practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift h-full border border-gray-100 group-hover:border-blue-200 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover-lift transition-all duration-300 group"
          >
            View All Services
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}