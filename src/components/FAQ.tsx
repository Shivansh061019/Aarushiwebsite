import { useState } from "react";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is life coaching? What do you do in sessions?",
      answer:
        "Life coaching is a collaborative process where we focus on your personal growth, emotional awareness, and clarity. In sessions, I don't 'fix' you, I hold guided space, to help you uncover limiting patterns, loops you are stuck in, the root causes, and support you in moving forward with self-trust and aligned action.",
    },
    {
      question:
        "Is this therapy? What's the difference between therapy and coaching?",
      answer:
        "No, this is not therapy. Therapy often focuses on healing past wounds, clinical diagnoses, and emotional stabilisation. Coaching, on the other hand, is more about wellness and fitness, it works with emotionally aware individuals who are ready to deep dive into unlearning their patterns, disrupt their limiting believes, integrate healing holistically.",
    },
    {
      question: "Can I heal after just one session?",
      answer:
        "Can you get fit after one workout? While one session can definitely bring insight, clarity, breakthroughs and emotional shifts, but healing is a layered process. Think of it as planting a seed something may shift immediately, but sustainable growth takes time, intention, and support.",
    },
    {
      question: "What is the 30-day coaching program?",
      answer:
        "It's a guided 1:1 container designed to create real, inner change not just surface-level motivation. Across 4 sessions and daily support, we work on emotional fitness, mindset, aligned action, and embodying your authentic self. You'll have me in your corner throughout the month.",
    },
    {
      question: "Will this coaching surely work for me?",
      answer:
        "Only you can answer that, while there is no end to healing and growth but if you are ready to show up honestly, trust the process, and commit to truth, this work can shift everything.",
    },
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-24 right-8 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 shadow-warm hover:shadow-soft transition-smooth animate-float"
          variant="primary"
        >
          FAQ
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-warm max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground font-kylie">
              Frequently Asked Questions
            </h2>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              className="text-2xl"
            >
              ×
            </Button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left hover:bg-card transition-smooth focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-primary text-xl flex-shrink-0">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
