import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import IndustryIntelligence from "@/components/IndustryIntelligence";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <IndustryIntelligence />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
