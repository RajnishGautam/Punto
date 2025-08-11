import React, { useState, useEffect, useRef } from 'react';
import './LogoDesignWork.css';

const LogoDesignWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);
  const videoRefs = useRef([]);

  const slides = [
    {
      id: 1,
      type: "image",
      src: "/branding/brand1.JPG",
      title: "Serene Mountain Lake",
      description: "Crystal clear waters reflecting majestic mountain peaks in perfect harmony"
    },
    {
      id: 2,
      type: "video",
      src: "/branding/brand2.mp4",
      title: "Nature in Motion",
      description: "Flowing streams and swaying trees in a peaceful forest"
    },
    {
      id: 3,
      type: "image",
      src: "/branding/brand3.JPG",
      title: "Endless Ocean Vista",
      description: "Where the infinite ocean meets the boundless sky in eternal dance"
    },
    {
      id: 4,
      type: "video",
      src: "/branding/brand4.mp4",
      title: "Aurora Borealis Magic",
      description: "Dancing lights weaving stories across the arctic night sky"
    },
    {
      id: 5,
      type: "image",
      src: "/branding/brand5.JPG",
      title: "Golden Desert Dunes",
      description: "Endless sands sculpted by wind and time into perfect waves"
    },
    {
      id: 6,
      type: "image",
      src: "/branding/brand1.JPG",
      title: "Serene Mountain Lake",
      description: "Crystal clear waters reflecting majestic mountain peaks in perfect harmony"
    },
    {
      id: 7,
      type: "video",
      src: "/branding/brand2.mp4",
      title: "",
      description: ""
    },
    {
      id: 8,
      type: "image",
      src: "/branding/brand3.JPG",
      title: "Endless Ocean Vista",
      description: "Where the infinite ocean meets the boundless sky in eternal dance"
    },
    {
      id: 9,
      type: "video",
      src: "/branding/brand4.mp4",
      title: "Aurora Borealis Magic",
      description: "Dancing lights weaving stories across the arctic night sky"
    },
    {
      id: 10,
      type: "image",
      src: "/branding/brand5.JPG",
      title: "Golden Desert Dunes",
      description: "Endless sands sculpted by wind and time into perfect waves"
    }    
  ];

  // Loading spinner delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Autoplay interval
  useEffect(() => {
    let interval;
    if (isAutoPlay && !isDragging && !isLoading) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 4500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, isDragging, isLoading, slides.length]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [slides.length, isAutoPlay]);

  // Play/Pause videos based on active slide
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === currentIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex]);

  const goToSlide = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getItemPosition = (index) => {
    const diff = index - currentIndex;
    const totalItems = slides.length;

    let normalizedDiff = diff;
    if (Math.abs(diff) > totalItems / 2) {
      normalizedDiff = diff > 0 ? diff - totalItems : diff + totalItems;
    }
    return normalizedDiff;
  };

  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  const handleEnd = () => {
    if (isDragging) {
      const diff = currentX - startX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    }
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  if (isLoading) {
    return (
      <div className="carousel3d-loading-container">
        <div className="carousel3d-loading-spinner"></div>
        <p className="carousel3d-loading-text">Loading 3D Gallery...</p>
      </div>
    );
  }

  return (
    <div className="carousel3d-main-container">
      <div className="carousel3d-content-wrapper">

        {/* Main Carousel */}
        <section
          className="carousel3d-viewport"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div
            ref={carouselRef}
            className="carousel3d-stage"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, index) => {
              const position = getItemPosition(index);
              const isActive = position === 0;
              const isAdjacent = Math.abs(position) === 1;
              const isVisible = Math.abs(position) <= 3;

              return (
                <div
                  key={slide.id}
                  className={`carousel3d-item ${isActive ? 'carousel3d-item--active' : ''} ${isAdjacent ? 'carousel3d-item--adjacent' : ''} ${!isVisible ? 'carousel3d-item--hidden' : ''}`}
                  style={{
                    '--carousel3d-position': position,
                    '--carousel3d-total': slides.length
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <div className="carousel3d-card">
                    <div className="carousel3d-image-container">
                      {slide.type === "image" ? (
                        <img
                          src={slide.src}
                          alt={slide.title}
                          className="carousel3d-image"
                          loading="lazy"
                        />
                      ) : (
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          src={slide.src}
                          className="carousel3d-image"
                          muted
                          playsInline
                          loop
                        />
                      )}
                      <div className="carousel3d-image-overlay"></div>
                      <div className="carousel3d-shine-effect"></div>
                    </div>

                    <div className="carousel3d-content">
                      <h3 className="carousel3d-image-title">{slide.title}</h3>
                      <p className="carousel3d-image-description">{slide.description}</p>
                    </div>

                    {isActive && (
                      <div className="carousel3d-active-indicator">
                        <div className="carousel3d-pulse-ring"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="carousel3d-nav carousel3d-nav--prev"
            aria-label="Previous slide"
          >
            <svg className="carousel3d-nav-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="carousel3d-nav carousel3d-nav--next"
            aria-label="Next slide"
          >
            <svg className="carousel3d-nav-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </section>

        {/* Dots */}
        <nav className="carousel3d-indicators" aria-label="Gallery navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel3d-dot ${index === currentIndex ? 'carousel3d-dot--active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default LogoDesignWork;
