import { useState, useEffect } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Hero.css";

const slides = [
  {
    eyebrow: "THE NEW COLLECTION",
    title: "Less, but better.",
    description: "Thoughtfully designed essentials for the modern wardrobe.",
    image:
      "https://plus.unsplash.com/premium_photo-1710911198900-f27585522890?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",    
    button: "Explore Collection",
    link: "#products",
  },
  {
    eyebrow: "TIMELESS STYLE",
    title: "Wear the feeling.",
    description: "Elevated everyday pieces. Made to move with you.",
  image:
  "https://plus.unsplash.com/premium_photo-1792370725393-63eb037bf254?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",  
button: "Discover AUREL",
    link: "#categories",
  },
  {
    eyebrow: "THE ESSENTIALS",
    title: "Made for every day.",
    description: "Quiet confidence. Effortless style. Lasting quality.",
    image:
  "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1920&q=90",
    button: "Shop Essentials",
    link: "#products",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="hero" id="home">
      {/* Background Image */}
      <div className="hero-image-wrapper">
        {slides.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.title}
            className={`hero-image ${currentSlide === index ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content" key={currentSlide}>
        <span className="hero-eyebrow">{slide.eyebrow}</span>

        <h1>{slide.title}</h1>

        <p>{slide.description}</p>

        <a href={slide.link} className="hero-button">
          {slide.button}
          <FiArrowRight />
        </a>
      </div>

      {/* Navigation */}
      <button
        className="hero-arrow hero-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FiChevronLeft />
      </button>

      <button
        className="hero-arrow hero-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FiChevronRight />
      </button>

      {/* Pagination */}
      <div className="hero-pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Label */}
      <div className="hero-bottom-label">
        <span>01 — 03</span>
        <span>DESIGNED TO LAST</span>
      </div>
    </section>
  );
}

export default Hero;
