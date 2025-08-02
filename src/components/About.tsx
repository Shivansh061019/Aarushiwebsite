const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with flowing texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/lovable-uploads/09bde273-ceda-4afd-ad02-6d07fdabbead.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Image and Heading Row */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center mb-12 md:mb-16">
            {/* Aarushi's Image */}
            <div className="animate-fade-in-up flex-shrink-0">
              <div className="relative">
                <div className="aspect-[4/5] w-48 sm:w-60 md:w-72 rounded-3xl overflow-hidden shadow-warm">
                  <img
                    src="/lovable-uploads/56e1f184-f604-4b32-b79d-221f6eb95216.png"
                    alt="Aarushi Khare speaking at an event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Heading */}
            <div
              className="animate-fade-in-up lg:text-left text-center"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground leading-tight font-kylie">
                About
                <br />
                <span className="text-primary">Aarushi</span>
              </h2>
            </div>
          </div>

          {/* Description Row */}
          <div
            className="animate-fade-in-up max-w-4xl mx-auto mb-16 md:mb-20 px-4"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="text-lg md:text-xl">
                All my life, I felt like the odd one out, too sensitive, too
                intense, too much for the world to understand. There were days I
                almost believed the voices around me that maybe I was the
                problem. That something in me needed fixing. And when life got
                really hard I used to think, "Surely I deserve a discount for
                all this pain. How am I expected to function like everyone
                else?" But healing has a way of humbling you and waking you up.
                It taught me that while what happened to me wasn't my fault,
                what I do with my life next, is my responsibility.{" "}
                <span className="font-semibold text-primary">
                  And that is power.
                </span>
                Through years of inner work and burning through my illusions, I
                met the truth, not always easy, but always freeing.
              </p>

              <p className="font-semibold text-primary text-lg md:text-xl lg:text-2xl leading-relaxed">
                And now, I've become who I once needed: A calm, honest light in
                someone else's dark. Not to fix, but to remind, you were never
                broken.
              </p>
            </div>
          </div>

          {/* Mission and Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            <div className="bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-gentle border border-border/50 text-left">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 font-kylie">
                Why Bare Becoming?
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Over 5 years into emotional fitness, one truth stands tall:
                transformation isn’t what you do, it’s who you become. Bare
                Becoming was born to honour that raw becoming, beyond titles,
                roles, and masks. Bare. Real. Rooted in self-trust.
              </p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-gentle border border-border/50 text-left">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 font-kylie">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                I am on a mission to make people mentally and emotionally fit
                and resilient and live a fulfilling aligned life. To rise beyond
                conditioning, past noises, patterns, because life is not what
                happened to you, it is about who you choose to become.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

const About = () => {
  return (
    <>
      <section id="about" className="py-20 relative overflow-hidden">
        {/* ...About section content... */}
      </section>

      {/* Brand Logos Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 font-kylie">
              Brands I've Worked With
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img
              src="/lovable-uploads/logo1.png"
              alt="pwc"
              className="h-12 md:h-16 object-contain"
            />
            <img
              src="/lovable-uploads/logo2.png"
              alt="AIESEC"
              className="h-12 md:h-16 object-contain"
            />
            <img
              src="/lovable-uploads/logo3.png"
              alt="IIT"
              className="h-12 md:h-16 object-contain"
            />
            <img
              src="/lovable-uploads/logo4.png"
              alt="Yuva"
              className="h-12 md:h-16 object-contain"
            />
            <img
              src="/lovable-uploads/logo5.png"
              alt="Spotify"
              className="h-12 md:h-16 object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;