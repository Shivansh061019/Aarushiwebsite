const Solution = () => {
  const solutions = [
    {
      title: "Inner Clarity & Alignment",
      description: "We reconnect to your truth, so your choices feel like you.",
      icon: "/lovable-uploads/3debc720-261e-4927-be0e-024ccbb32797.png"
    },
    {
      title: "Holistic Healing of Mind, Body & Soul",
      description: "We work with the whole of you, thoughts, body, energy, and emotions.",
      icon: "/lovable-uploads/87f8d951-8f72-4fb0-8d44-d3521bfcec37.png"
    },
    {
      title: "Embodying Transformation",
      description: "We move from knowing to becoming, so change lives in your nervous system, not just your mind.",
      icon: "/lovable-uploads/b161e2af-0874-4c3c-b0fe-5e842127f679.png"
    },
    {
      title: "Self-Trust & Soft Leadership",
      description: "We build safety and self-trust, so you can lead your life from grounded truth.",
      icon: "/lovable-uploads/db93e545-9acf-42b1-8df4-11c6bae07d83.png"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with ceramic bowl texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/ae94595e-c8ca-4353-83ee-ff5515afa244.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-kylie">
            Your Becoming Begins Here
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className={`bg-background/90 backdrop-blur-sm p-8 rounded-2xl shadow-gentle hover:shadow-soft transition-smooth hover-lift border border-border/30 scroll-animate group overflow-hidden relative`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 group-hover:scale-110 transition-smooth">
                      <img 
                        src={solution.icon} 
                        alt={solution.title}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-smooth"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:scale-105 transition-smooth font-kylie">
                        {solution.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-smooth animate-pulse-soft"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;