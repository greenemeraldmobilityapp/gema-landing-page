import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppFloating />
    </main>
  );
}