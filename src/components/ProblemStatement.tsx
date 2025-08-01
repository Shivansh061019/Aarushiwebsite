const ProblemStatement = () => {
  const problems = [
    {
      title: "Do you feel stuck in overthinking and overanalyzing?",
      description: "You're mentally exhausted trying to think your way out."
    },
    {
      title: "Do you feel disconnected from your own self?",
      description: "Your mind says one thing, your body another."
    },
    {
      title: "You're self-aware, but still stuck in the same loops and patterns.",
      description: "Despite all your efforts, the change still feels just out of reach."
    },
    {
      title: "You don't feel safe within yourself or the world.",
      description: "It's hard to trust when your nervous system is in survival."
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-secondary/5 rounded-full animate-bounce-soft"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-accent/5 rounded-full animate-float stagger-1"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-kylie">
            Is This You?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:gap-12">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className={`bg-card p-8 rounded-2xl shadow-gentle hover:shadow-soft transition-smooth hover-lift scroll-animate shimmer group`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative overflow-hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth font-kylie">
                    {problem.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-smooth animate-pulse-soft"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;