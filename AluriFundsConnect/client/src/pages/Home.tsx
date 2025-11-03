import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BusinessCard from "@/components/BusinessCard";
import Services from "@/components/Services";
import AMCPartners from "@/components/AMCPartners";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <section className="py-16 md:py-24" id="business-cards">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional Contact Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download or share digital business cards for convenient access to contact details and service information
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BusinessCard variant="modern" />
            <BusinessCard variant="classic" />
            <BusinessCard variant="minimal" />
          </div>
        </div>
      </section>

      <Services />
      <AMCPartners />
      <ContactForm />
      <Footer />
    </div>
  );
}