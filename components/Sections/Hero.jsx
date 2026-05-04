'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, Award, Clock, Users, Star, Shield } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, label: 'Patients Treated', value: '5000+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Clock, label: 'Quick Response', value: '24/7' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* LEFT SIDE - Content */}
          <div className={`space-y-7 ${isVisible ? 'opacity-100 translate-y-0 transition-all duration-700' : 'opacity-0 translate-y-8'}`}>
            {/* Badge - perfectly centered left */}
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm border border-white/20">
              <Shield className="h-3.5 w-3.5" />
              <span>Leading Gastroenterologist in Sydney</span>
            </div>

            {/* Headings - clean hierarchy */}
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Dr. Rajni Tiwari
              </h1>
              <p className="text-xl text-blue-100 font-medium">
                MBBS, FRACP — Gastroenterologist & Hepatologist
              </p>
              <p className="text-blue-100 leading-relaxed max-w-md">
                Specialist at Westmead Private Hospital providing expert, compassionate care.
              </p>
            </div>

            {/* Buttons - equal width, same height */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/appointment"
                className="bg-white text-blue-700 px-8 py-3.5 rounded-xl font-semibold text-center hover:bg-gray-100 transition-all"
              >
                Book Consultation →
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-semibold text-center hover:bg-white hover:text-blue-700 transition-all"
              >
                Learn More
              </a>
            </div>

            {/* Stats - perfectly spaced grid */}
            <div className="grid grid-cols-3 gap-8 pt-5 border-t border-white/20 max-w-md">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 opacity-80" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Stars - perfectly aligned */}
            <div className="flex items-center gap-3 text-sm text-blue-100 pt-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>Trusted by thousands</span>
            </div>
          </div>

          {/* RIGHT SIDE - Profile Card - perfectly centered */}
          <div className={`flex justify-center ${isVisible ? 'opacity-100 translate-y-0 transition-all duration-700 delay-200' : 'opacity-0 translate-y-8'}`}>
            <div className="w-96">
              {/* Image Container - exact square */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl">
                <img 
                  src="/images/dr-rajeni-tiwari.jpg" 
                  alt="Dr. Rajni Tiwari"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Info below image - perfectly aligned */}
              <div className="text-center mt-6 space-y-2">
                <h3 className="text-xl font-semibold">Dr. Rajni Tiwari</h3>
                <p className="text-blue-100 text-sm">MBBS, FRACP — Fellow in Gastroenterology</p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100">Available</span>
                </div>
                <div className="pt-3 text-xs text-blue-100">
                  Practicing at <span className="text-white font-medium">Westmead Private Hospital</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
