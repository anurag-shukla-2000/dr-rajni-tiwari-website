'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, Award, Clock, Users } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, label: 'Patients Treated', value: '5000+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Clock, label: 'Quick Appointments', value: '24/7' },
  ];

  return (
    <section className="min-h-screen hero-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content */}
            <div className={`space-y-8 animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="space-y-4">
                <div className="glass-effect inline-flex items-center px-4 py-2 rounded-full text-sm mb-4">
                  <Award className="h-4 w-4 mr-2" />
                  Leading Gastroenterologist in Sydney
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Dr. Rajni{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                    Tiwari
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-blue-100 font-semibold">
                  MBBS, FRACP - Gastroenterologist & Hepatologist
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  Specialist in Gastroenterology and Hepatology at Westmead Private Hospital. 
                  Providing expert care with compassion and cutting-edge medical expertise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/appointment"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover-lift inline-flex items-center justify-center"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image/Profile Card */}
<div className={`relative animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
  <div className="professional-card rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
    <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
      <Image 
        src="/public/images/dr-rajeni-tiwari.jpg" 
        alt="Dr. Rajni Tiwari - Gastroenterologist"
        width={400}
        height={400}
        className="w-full h-full object-cover"
        priority
      />
    </div>
    <div className="space-y-4 text-center">
      <h3 className="text-2xl font-bold text-gray-900">Ready to Help</h3>
      <p className="text-gray-600">
        Committed to providing the highest standard of gastroenterological care
      </p>
      <div className="pt-4">
        <div className="text-sm text-gray-500">Available at</div>
        <div className="font-semibold text-blue-600">Westmead Private Hospital</div>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}