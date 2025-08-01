import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Breakthrough with aarushi",
      subtitle: "(1:1 session)",
      description: "Curated safe space to reconnect with your truth and move forward with clarity and courage.",
      features: [
        "60-minute deep-dive sessions",
        "Identify core values, unearth limiting patterns, and root into self-trust",
        "Tailored action plans and way forward",
        "Personalised resources to support your becoming."
      ],
      price: "₹1,199",
      cta: "Take your space",
      popular: false,
      icon: "/lovable-uploads/89c48324-ea44-4e6a-8424-0460c5133bcc.png"
    },
    {
      title: "Survival to aligned transformation",
      subtitle: "(30 Days coaching program)",
      description: "30 days 1:1 guided journey to soften survival, build self-trust, and create aligned, lasting shifts.",
      features: [
        "4 x 60-min weekly 1:1 sessions",
        "Tailored workbooks & practices",
        "WhatsApp support between sessions",
        "End-of-program integration map"
      ],
      price: "₹9,999",
      cta: "Start your journey",
      popular: true,
      icon: "/lovable-uploads/e6bd6c6c-7bfd-4c03-95af-0d7a06bbef95.png"
    },
    {
      title: "Mirror Rooms",
      subtitle: "(Group workshops and events)",
      description: "Interactive group sessions to spark insight, clarity, and embodied transformation",
      features: [
        "Focused on understanding patterns, belief systems, and emotional healing.",
        "Gentle practices + grounded conversations",
        "Rooted in clarity, softness, and sustainable inner work."
      ],
      price: "Variable",
      cta: "Join the next workshop",
      popular: false,
      icon: "/lovable-uploads/39d8a887-22ad-45e5-aef7-79fda0d46f21.png"
    },
    {
      title: "Bare circles",
      subtitle: "(Monthly listening circles)",
      description: "A safe, intimate space to be heard, without fixing, analyzing, or performing.",
      features: [
        "Held in a slow, intentional pace",
        "Guided prompts & shared reflection",
        "Regulate, reconnect, and return to your bare self in community",
        "You don't have to figure it all out. You just need a space to land."
      ],
      price: "Community",
      cta: "Join the listening community",
      popular: false,
      icon: "/lovable-uploads/5b6348c3-d67e-46b3-9d44-796876893763.png"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 md:mb-8 font-kylie">
            Offerings
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Choose the path that resonates with where you are in your becoming journey
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => {
              const serviceId = service.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <div 
                  key={index}
                  id={serviceId}
                  className="relative glass-card p-6 md:p-8 rounded-3xl hover-lift scroll-animate group overflow-hidden shimmer-effect ring-2 ring-primary/30 bg-gradient-warm h-full flex flex-col"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                {/* Enhanced Background for All Services */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 opacity-70"></div>
                <div className="absolute inset-0 morph-shape opacity-20"></div>

                {/* Floating Particles for All Services */}
                <div className="absolute inset-0 particle-container">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="particle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 6}s`,
                        animationDuration: `${6 + Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header Section */}
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="flex-shrink-0 w-12 md:w-14 h-12 md:h-14 group-hover:scale-110 transition-smooth">
                        <img 
                          src={service.icon} 
                          alt={service.title}
                          className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-smooth"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-smooth leading-tight font-kylie">
                          {service.title}
                        </h3>
                        <p className="text-primary font-semibold text-xs md:text-sm lg:text-base">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Features Section - Flexible */}
                  <div className="flex-1 mb-6 md:mb-8">
                    <ul className="space-y-2 md:space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start group/item">
                          <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-primary rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0 group-hover/item:scale-125 transition-smooth" />
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-smooth text-xs md:text-sm lg:text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Button Section - Fixed at Bottom */}
                  <div className="mt-auto flex justify-center">
                    <Button 
                      variant="accent"
                      className="px-4 md:px-6 py-2 md:py-2.5 btn-magnetic shimmer-effect glass-card relative overflow-hidden group-hover:scale-105 rounded-xl text-xs md:text-sm font-medium w-full sm:w-auto"
                      onClick={() => {
                        if (service.cta === "Join the next workshop") {
                          window.open('https://in.bookmyshow.com/events/the-mirror-room/ET00454396?webview=true', '_blank');
                        } else if (service.cta === "Join the listening community") {
                          window.open('https://chat.whatsapp.com/F6QVIlGqcvcJwT8jUssrZp?mode=ac_t', '_blank');
                        } else {
                          window.open('https://dashboard.razorpay.com/app/dashboard', '_blank');
                        }
                      }}
                    >
                      {service.cta}
                    </Button>
                  </div>
                </div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-smooth animate-pulse-glow"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent/40 rounded-full opacity-0 group-hover:opacity-100 transition-smooth animate-pulse-glow stagger-1"></div>
                <div className="absolute top-1/2 right-2 w-1.5 h-1.5 bg-accent-1/40 rounded-full opacity-0 group-hover:opacity-100 transition-smooth animate-pulse-glow stagger-2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;