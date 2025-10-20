import Contact from '../components/Sections/Contact';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="medical-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90">
            Get in touch with Dr. Rajni Tiwari's clinic
          </p>
        </div>
      </section>
      <Contact />
    </div>
  );
}