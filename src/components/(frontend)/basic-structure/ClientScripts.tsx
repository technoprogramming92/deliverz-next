"use client"; // Ensures this runs only on the client side

import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

const ClientScripts = () => {
  useEffect(() => {
    // Simple Parallax Effect
    if (typeof window !== "undefined") {
      import("simple-parallax-js").then((module) => {
        const SimpleParallax = module.default as any; // Casting to 'any' to bypass TS issue

        const images = document.getElementsByClassName("thumbnail");
        if (images.length > 0) {
          new SimpleParallax(images);
        }
      });
    }

    // Swiper Testimonial Slider
    const swiper = new Swiper(".sl-testimonial", {
      direction: "horizontal",
      loop: false,
      navigation: {
        nextEl: ".swiper-next-testimonial",
        prevEl: ".swiper-prev-testimonial",
      },
    });

    // Testimonial List Click Event
    const testimonialLinks = document.querySelectorAll(
      ".testimonial-list-item a"
    );

    testimonialLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const slideIndex = parseInt(
          link.getAttribute("data-slide-index") || "0",
          10
        );
        swiper.slideTo(slideIndex, 500);

        // Remove active class from all links
        testimonialLinks.forEach((l) => l.classList.remove("active"));

        // Add active class to clicked link
        link.classList.add("active");
      });
    });

    // Hamburger Menu
    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
      const icon_hamburger = hamburger.querySelector(".icon_hamburger");
      const close_hamburger = hamburger.querySelector(".close_hamburger");

      icon_hamburger?.addEventListener("click", () =>
        hamburger.classList.toggle("toggle")
      );
      close_hamburger?.addEventListener("click", () =>
        hamburger.classList.toggle("toggle")
      );
    }

    // Cart Toggle
    const cart = document.querySelector(".cart");
    if (cart) {
      const icon_cart = cart.querySelector(".icon_cart");
      const close_cart = cart.querySelector(".close_cart");

      icon_cart?.addEventListener("click", () =>
        cart.classList.toggle("toggle")
      );
      close_cart?.addEventListener("click", () =>
        cart.classList.toggle("toggle")
      );
    }

    return () => {
      // Cleanup event listeners when component unmounts
      testimonialLinks.forEach((link) =>
        link.removeEventListener("click", () => {})
      );
    };
  }, []);

  return null; // No need to render anything
};

export default ClientScripts;
