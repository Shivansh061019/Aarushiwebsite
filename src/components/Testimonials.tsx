import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Hari Priya",
      text: "I loved the session. I would love to attend more and it did help me open up a little and think about what I really want! Thanks",
    },
    {
      name: "Vibhanshu Srivastava",
      text: "Dear Aarushi, It was lovely connecting with you and your guidance and direction toward career surely was motivating for me Regards Vibhanshu",
    },
    {
      name: "Sejal",
      text: "I feel beyond grateful to be coached by you for the last 30 days, I feel like I am a new person now, I feel so fulfilled in everything I do.",
    },
    {
      name: "Shruti",
      text: "Hi Aarushi, I've been following you for quite a long time now. Your content and your workshops have healed me in ways I can't explain, you've been a great help in my healing journey.",
    },
    {
      name: "Shreya",
      text: "I honestly didn't think one session could shift so much, but it did. You didn't try to fix anything, I felt so seen. I left feeling clearer, and more like myself.",
    },
    {
      name: "Anuj",
      text: "I came in feeling scattered. With every week, I felt pieces of me returning. This journey was everything I didn't know I needed.",
    },
    {
      name: "Mritunjay",
      text: "Aarushi is the right combination of wisdom and empathy, she held space for me with kindness, but showed me the mirror of truth.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
    testimonials[(currentIndex + 3) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 md:mb-8 font-kylie">
            Testimonials
          </h2>
        </div>

        <div
          className="max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-card p-4 md:p-6 rounded-2xl shadow-gentle hover:shadow-soft transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-muted-foreground mb-3 md:mb-4 leading-relaxed italic text-sm md:text-base">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-primary text-sm md:text-base">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics Section - moved outside testimonial container */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 md:gap-2 mt-10 mb-2 text-center max-w-4xl mx-auto">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">
              100+
            </div>
            <div className="text-muted-foreground text-sm md:text-base mt-1">
              Transformations Witnessed
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">
              55+
            </div>
            <div className="text-muted-foreground text-sm md:text-base mt-1">
              Workshops Facilitated
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">
              5+
            </div>
            <div className="text-muted-foreground text-sm md:text-base mt-1">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">
              75+
            </div>
            <div className="text-muted-foreground text-sm md:text-base mt-1">
              Sessions and Speakers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
