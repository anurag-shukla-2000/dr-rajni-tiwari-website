'use client';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Services from '../components/Sections/Services';
import Expertise from '../components/Sections/Expertise';
import Contact from '../components/Sections/Contact';

import { useState, useEffect } from 'react';
import { 
  Menu, X, Stethoscope, ArrowRight, Award, Clock, Users, 
  Target, TrendingUp, CheckCircle, GraduationCap, Heart,
  MapPin, Phone, Mail, Send, Calendar, Eye, Shield, Activity, AlertCircle
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: 'Diagnostic Endoscopy',
      description: 'Comprehensive gastroscopy and colonoscopy procedures for accurate diagnosis.',
      features: ['Gastroscopy', 'Colonoscopy', 'Capsule Endoscopy', 'Biopsy Procedures']
    },
    {
      icon: Heart,
      title: 'Liver Disease Management',
      description: 'Expert care for liver disorders including hepatitis and cirrhosis.',
      features: ['Hepatitis Management', 'Cirrhosis Care', 'Fatty Liver Treatment', 'Liver Tests']
    },
    {
      icon: Activity,
      title: 'Inflammatory Bowel Disease',
      description: 'Specialized treatment for Crohns disease and ulcerative colitis.',
      features: ['Crohns Disease', 'Ulcerative Colitis', 'IBD Management', 'Biological Therapies']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Dr. Rajni Tiwari</div>
                <div className="text-sm text-gray-600">Gastroenterologist</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  {item.name}
                </a>
              ))}
              <a href="#appointment" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-medium transition-all hover-lift">
                Book Appointment
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4 space-y-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
              <a href="#appointment" className="block mx-4 bg-blue-600 text-white px-6 py-2.5 rounded-lg text-center font-medium" onClick={() => setIsMenuOpen(false)}>
                Book Appointment
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen hero-gradient text-white relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <div className="space-y-8">
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

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#appointment" className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover-lift inline-flex items-center justify-center">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center">
                    Learn More
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8">
                  {[
                    { icon: Users, value: '5000+', label: 'Patients Treated' },
                    { icon: Award, value: '15+', label: 'Years Experience' },
                    { icon: Clock, value: '24/7', label: 'Emergency Care' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="professional-card rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
                  <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-white text-center p-8">
                      <div className="text-4xl mb-4">👩‍⚕️</div>
                      <div className="text-lg font-semibold">Professional Photo</div>
                      <div className="text-sm opacity-80 mt-2">Dr. Rajni Tiwari</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Ready to Help</h3>
                    <p className="text-gray-600">Committed to providing the highest standard of gastroenterological care</p>
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
      <>
        <About />
        <Services />
        <Expertise />
        <Contact />
        </>

    </div>
  );
}