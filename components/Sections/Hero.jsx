'use client';
import { ArrowRight, Award, Clock, Users } from 'lucide-react';

export default function Hero() {
  const stats = [
    { icon: Users, label: 'Patients Treated', value: '5000+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Clock, label: 'Quick Response', value: '24/7' },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div>
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm mb-6">
              Leading Gastroenterologist in Sydney
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Dr. Rajni Tiwari
            </h1>
            <p className="text-xl text-blue-100 mb-3">
              MBBS, FRACP — Gastroenterologist & Hepatologist
            </p>
            <p className="text-blue-100 mb-8">
              Specialist at Westmead Private Hospital providing expert, compassionate care.
            </p>
            
            <div className="flex gap-4 mb-10">
              <a href="/appointment" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Book Consultation
              </a>
              <a href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700">
                Learn More
              </a>
            </div>
            
            <div className="flex gap-8 pt-5 border-t border-white/20">
              {stats.map((stat, i) => (
                <div key={i}>
                  <stat.icon className="h-5 w-5 mb-2 opacity-80" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right */}
          <div className="flex justify-center">
            <div className="w-80">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                <img 
                  src="/images/dr-rajeni-tiwari.jpg" 
                  alt="Dr. Rajni Tiwari"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-5">
                <p className="text-sm text-blue-100">Practicing at</p>
                <p className="font-medium">Westmead Private Hospital</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
