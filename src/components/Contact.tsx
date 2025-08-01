import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Instagram, Linkedin, CheckCircle } from "lucide-react";
import WhatsAppLogo from "@/assets/whatsapp-logo.svg";
import SpotifyLogo from "@/assets/spotify-logo.svg";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields are filled
    if (
      !formData.name.trim() ||
      !formData.mobile.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Validate mobile number (basic validation)
    const mobileRegex = /^[+]?[\d\s\-()]{10,}$/;
    if (!mobileRegex.test(formData.mobile.trim())) {
      toast({
        title: "Invalid mobile number",
        description: "Please enter a valid mobile number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Call the edge function to send email
      const { data, error } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: formData,
        }
      );

      if (error) {
        throw error;
      }

      console.log("Email sent successfully:", data);

      // Show success state
      setIsSuccess(true);

      // Reset form
      setFormData({ name: "", mobile: "", email: "", message: "" });

      // Close modal after showing success for 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg mx-auto w-[calc(100vw-2rem)] sm:w-full bg-background border border-border shadow-elegant backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-bold text-primary text-center mb-4 font-kylie">
              Book Your Free Clarity Call
            </DialogTitle>
          </DialogHeader>
          {isSuccess ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Done!</h3>
              <p className="text-muted-foreground">
                Your message has been sent successfully. Aarushi will get back
                to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="glass-card"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mobile <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Your mobile number"
                    className="glass-card"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="glass-card"
                  type="email"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about what you're looking for..."
                  rows={4}
                  className="glass-card"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                className="w-full btn-magnetic shimmer-effect"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Let's connect!"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Free Clarity Call Section */}
      <section
        id="contact"
        className="py-12 md:py-16 bg-background text-center"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 font-kylie">
            Still feel overwhelmed?
          </h2>
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg btn-magnetic shimmer-effect hover-lift"
          >
            Book a free clarity call with Aarushi
          </Button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-foreground text-background relative overflow-hidden">
        {/* Multiple Background Images with Low Opacity */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/a24f72ac-c3b5-4a47-8112-ef4217ea6979.png')`,
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-right-top bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/3e01c8ba-b082-430c-9d33-6dd00568f7d5.png')`,
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-8 bg-cover bg-left-bottom bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/c2bef3a8-2a66-4db8-983f-79662700f249.png')`,
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-12 bg-cover bg-center-bottom bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/a9ab0ce3-1a1a-415a-85bb-c93ad0a544eb.png')`,
            }}
          ></div>
        </div>
        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-muted-foreground/80 to-foreground/90"></div>

        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl md:text-2xl font-bold text-background mb-4 font-kylie">
                Bare Becoming
              </h3>
              <p className="text-muted leading-relaxed text-sm md:text-base">
                Mental health coaching to help you become the version of
                yourself who thrives in alignment.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base md:text-lg font-semibold text-background mb-4 md:mb-6">
                Quick Links
              </h4>
              <div className="space-y-3">
                <a
                  href="#hero"
                  className="block text-muted hover:text-primary transition-smooth text-sm"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-muted hover:text-primary transition-smooth text-sm"
                >
                  About
                </a>
                <a
                  href="#testimonials"
                  className="block text-muted hover:text-primary transition-smooth text-sm"
                >
                  Testimonials
                </a>
                <a
                  href="#services"
                  className="block text-muted hover:text-primary transition-smooth text-sm"
                >
                  Offerings
                </a>
                <a
                  href="#contact"
                  className="block text-muted hover:text-primary transition-smooth text-sm"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Offerings */}
            <div>
              <h4 className="text-base md:text-lg font-semibold text-background mb-4 md:mb-6">
                Offerings
              </h4>
              <div className="space-y-3">
                <a
                  href="#breakthrough-with-aarushi"
                  className="block text-muted hover:text-primary transition-smooth text-sm"
                >
                  Breakthrough with aarushi
                </a>
                <a
                  href="#survival-to-aligned-transformation"
                  className="block text-muted hover:text-primary transition-smooth text-sm"
                >
                  Survival to aligned transformation
                </a>
                <a
                  href="#mirror-rooms"
                  className="block text-muted hover:text-primary transition-smooth text-sm"
                >
                  Mirror Rooms
                </a>
                <a
                  href="#bare-circles"
                  className="block text-muted hover:text-primary transition-smooth text-sm"
                >
                  Bare circles
                </a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-base md:text-lg font-semibold text-background mb-4 md:mb-6">
                Legal
              </h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-muted hover:text-primary transition-smooth text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-muted hover:text-primary transition-smooth text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="block text-muted hover:text-primary transition-smooth text-sm"
                >
                  Disclaimer
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-muted-foreground/30 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted text-xs md:text-sm mb-4 md:mb-0">
              © 2023 Bare Becoming. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://www.instagram.com/barebecoming.in?igsh=c3h6MW9mMTFoOHpk&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-smooth"
              >
                <Instagram className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aarushi-khare-399a19207"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-smooth"
              >
                <Linkedin className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a
                href="https://chat.whatsapp.com/F6QVIlGqcvcJwT8jUssrZp?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-smooth"
              >
                <img
                  src={WhatsAppLogo}
                  alt="WhatsApp"
                  className="w-4 md:w-5 h-4 md:h-5"
                />
              </a>
              <a
                href="https://open.spotify.com/episode/33lzYkAt5SBuBh9OnUoJRA?si=agl2E1mCQeW1cyOKxMtHDQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-smooth"
              >
                <img
                  src={SpotifyLogo}
                  alt="Spotify"
                  className="w-4 md:w-5 h-4 md:h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
