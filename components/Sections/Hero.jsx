'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, Award, Clock, Users, Star, Shield } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, label: 'Patients Treated', value: '5000+', color: 'from-blue-400 to-blue-200' },
    { icon: Award, label: 'Years Experience', value: '15+', color: 'from-indigo-400 to-indigo-200' },
    { icon: Clock, label: 'Quick Response', value: '24/7', color: 'from-purple-400 to-purple-200' },
  ];

  return (
    <section className="min-h-screen medical-gradient text-white relative overflow-hidden">
      {/* Background Pattern - More subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="min-h-screen flex items-center py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                <Shield className="h-4 w-4" />
                <span>Leading Gastroenterologist in Sydney</span>
              </div>

              {/* Headings */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Dr. Rajni{' '}
                  <span className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                    Tiwari
                  </span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-blue-100 font-medium">
                  MBBS, FRACP — Gastroenterologist & Hepatologist
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
                  Specialist in Gastroenterology and Hepatology at Westmead Private Hospital. 
                  Providing expert care with compassion and cutting-edge medical expertise.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/appointment"
                  className="group bg-white text-blue-600 px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Book Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/about"
                  className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-2xl inline-block mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="text-blue-100 text-sm">Trusted by thousands of patients</span>
              </div>
            </div>

            {/* Right Content - Profile Card */}
            <div className={`relative ${isVisible ? 'animate-fade-in-up opacity-100 animation-delay-200' : 'opacity-0'}`}>
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-30"></div>
                
                {/* Main Card */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20">
                  {/* Image Container */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-blue-500 to-indigo-600">
                    <img 
                      src="/images/dr-rajeni-tiwari.jpg" 
                      alt="Dr. Rajni Tiwari"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-white">Dr. Rajni Tiwari</h3>
                    <p className="text-blue-100 text-sm">
                      MBBS, FRACP — Fellow in Gastroenterology
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Available for consultations</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="text-sm text-blue-200">Practicing at</div>
                      <div className="font-semibold text-white">Westmead Private Hospital</div>
                    </div>
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
