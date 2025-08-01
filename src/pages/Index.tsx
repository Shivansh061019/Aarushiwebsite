import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import SectionDivider from "@/components/SectionDivider";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SectionDivider imageUrl="/lovable-uploads/05553acf-2df7-4342-81f2-40c1ce7e62f0.png" />
      <ProblemStatement />
      <SectionDivider imageUrl="/lovable-uploads/89b12470-47ec-409b-840a-7be12985a93f.png" reverse />
      <Solution />
      <SectionDivider imageUrl="/lovable-uploads/ae94595e-c8ca-4353-83ee-ff5515afa244.png" />
      <Testimonials />
      <About />
      <SectionDivider imageUrl="/lovable-uploads/09bde273-ceda-4afd-ad02-6d07fdabbead.png" reverse />
      <Services />
      <Contact />
      <FAQ />
    </div>
  );
};

export default Index;
