import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Advanced Mesh Gradient Background - Reduced for mobile */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 md:opacity-40"></div>

      {/* Floating Geometric Shapes - Reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden md:block absolute top-20 left-10 w-32 h-32 morph-shape opacity-20 floating-element"></div>
        <div className="hidden md:block absolute top-40 right-20 w-24 h-24 morph-shape opacity-15 floating-element"></div>
        <div className="hidden lg:block absolute bottom-40 left-1/4 w-40 h-40 morph-shape opacity-10 floating-element"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-28 h-28 morph-shape opacity-25 floating-element"></div>
      </div>

      {/* Enhanced Particle System - Reduced for mobile */}
      <div className="absolute inset-0 particle-container">
        {[...Array(window.innerWidth < 768 ? 8 : 20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Background image with enhanced effects - Optimized for mobile */}
      <div
        className={`absolute inset-0 opacity-10 md:opacity-15 transition-all duration-[2s] ${
          isLoaded ? "md:scale-110 md:blur-[0.5px]" : "scale-100"
        }`}
        style={{
          backgroundImage: `url('/lovable-uploads/89b12470-47ec-409b-840a-7be12985a93f.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "auto",
          mixBlendMode: "soft-light",
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className={`mb-8 transition-all duration-700 ${
              isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight mb-6 font-kylie">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent md:animate-gradient-shift">
                Bare Becoming
              </span>
            </h1>

            <div className="relative">
              <h2
                className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-light text-muted-foreground leading-relaxed transition-all duration-700 delay-200 font-kylie ${
                  isLoaded
                    ? "animate-slide-in-left"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <span className="overflow-hidden whitespace-nowrap ">
                  Let's get you becoming
                </span>
              </h2>
            </div>
          </div>

          <div
            className={`mb-12 transition-all duration-700 delay-300 ${
              isLoaded ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light px-4">
              Transformation doesn't happen in things our mind knows,
              <span className="text-primary font-medium">
                {" "}
                it happens in becoming{" "}
              </span>
              the version who thrives in alignment.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-500 ${
              isLoaded ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("services")}
              className="px-8 md:px-16 py-4 md:py-8 text-lg md:text-xl font-semibold md:btn-magnetic md:shimmer-effect glass-card relative overflow-hidden group hover-lift"
            >
              <span className="relative z-10">Let's explore together</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
