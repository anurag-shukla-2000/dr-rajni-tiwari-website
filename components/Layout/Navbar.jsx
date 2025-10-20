'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookAppointment = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      const section = document.getElementById(href.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigation('#home')}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Dr. Rajni Tiwari</div>
              <div className="text-sm text-gray-600">Gastroenterologist</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={handleBookAppointment}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-medium transition-all duration-200"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={handleBookAppointment}
              className="block w-full mx-4 bg-blue-600 text-white px-6 py-2.5 rounded-lg text-center font-medium"
            >
              Book Appointment
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
