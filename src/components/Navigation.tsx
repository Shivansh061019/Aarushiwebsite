import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-gentle"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-xl sm:text-2xl font-bold text-primary cursor-pointer font-kylie"
            onClick={() => scrollToSection("hero")}
          >
            Bare Becoming
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Services
            </button>
            <Button variant="hero" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="text-sm px-3 py-2"
            >
              Contact
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => {
                  scrollToSection("hero");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                About
              </button>
              <button
                onClick={() => {
                  scrollToSection("services");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Services
              </button>
              <button
                onClick={() => {
                  scrollToSection("testimonials");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Testimonials
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
