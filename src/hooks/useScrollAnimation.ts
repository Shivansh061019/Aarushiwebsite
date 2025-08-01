import { useEffect, useState } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-animate');
    const elements = Array.from(scrollElements);

    const elementInView = (el: Element, offset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop <= window.innerHeight - offset;
    };

    const displayScrollElement = (element: Element) => {
      element.classList.add('animate-in');
    };

    const hideScrollElement = (element: Element) => {
      element.classList.remove('animate-in');
    };

    const handleScrollAnimation = () => {
      elements.forEach((el) => {
        if (elementInView(el, 100)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };

    if (elements.length > 0) {
      window.addEventListener('scroll', handleScrollAnimation);
      handleScrollAnimation(); // Check on mount
    }

    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return null;
};

export default useScrollAnimation;