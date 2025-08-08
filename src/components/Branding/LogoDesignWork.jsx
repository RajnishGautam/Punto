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

  const images = [
    {
      id: 1,
      src: "/branding/brand1.JPG",
      title: "Serene Mountain Lake",
      description: "Crystal clear waters reflecting majestic mountain peaks in perfect harmony"
    },
    {
      id: 2,
      src: "/branding/brand2.JPG",
      title: "Mystical Forest Trail",
      description: "Ancient trees creating a natural cathedral of light and shadow"
    },
    {
      id: 3,
      src: "/branding/brand3.JPG",
      title: "Endless Ocean Vista",
      description: "Where the infinite ocean meets the boundless sky in eternal dance"
    },
    {
      id: 4,
      src: "/branding/brand4.JPG",
      title: "Autumn's Golden Glory",
      description: "Nature's masterpiece painted in vibrant gold and amber hues"
    },
    {
      id: 5,
      src: "/branding/brand5.JPG",
      title: "Aurora Borealis Magic",
      description: "Dancing lights weaving stories across the arctic night sky"
    },
    {
      id: 6,
      src: "/branding/brand6.JPG",
      title: "Tropical Paradise Dream",
      description: "Palm trees swaying gently over pristine white sand beaches"
    },
    {
      id: 7,
      src: "/branding/brand7.JPG",
      title: "Golden Desert Dunes",
      description: "Endless sands sculpted by wind and time into perfect waves"
    },
    {
      id: 8,
      src: "/branding/brand8.JPG",
      title: "Majestic Snow Peaks",
      description: "Towering mountains crowned with eternal snow and morning light"
    },
{
      id: 9,
      src: "/branding/brand9.JPG",
      title: "Majestic Snow Peaks",
      description: "Towering mountains crowned with eternal snow and morning light"
    },
{
      id: 10,
      src: "/branding/brand10.JPG",
      title: "Majestic Snow Peaks",
      description: "Towering mountains crowned with eternal snow and morning light"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlay && !isDragging && !isLoading) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, isDragging, isLoading, images.length]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [images.length, isAutoPlay]);

  const goToSlide = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getItemPosition = (index) => {
    const diff = index - currentIndex;
    const totalItems = images.length;
    
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
        {/* Header Section */}
        <header className="carousel3d-header">
{/*           <h1 className="carousel3d-main-title">
            3D Interactive Gallery
          </h1> */}
{/*           <p className="carousel3d-subtitle">
            Experience photography in a whole new dimension
          </p> */}
        </header>

        {/* Main Carousel Section */}
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
            {images.map((image, index) => {
              const position = getItemPosition(index);
              const isActive = position === 0;
              const isAdjacent = Math.abs(position) === 1;
              const isVisible = Math.abs(position) <= 3;

              return (
                <div
                  key={image.id}
                  className={`carousel3d-item ${isActive ? 'carousel3d-item--active' : ''} ${isAdjacent ? 'carousel3d-item--adjacent' : ''} ${!isVisible ? 'carousel3d-item--hidden' : ''}`}
                  style={{
                    '--carousel3d-position': position,
               '--carousel3d-total': images.length
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <div className="carousel3d-card">
                    <div className="carousel3d-image-container">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="carousel3d-image"
                        loading="lazy"
                      />
                      <div className="carousel3d-image-overlay"></div>
                      <div className="carousel3d-shine-effect"></div>
                    </div>
                    
                    <div className="carousel3d-content">
                      <h3 className="carousel3d-image-title">{image.title}</h3>
                        {/* ✨ ADDED DESCRIPTION HERE */}
                      <p className="carousel3d-image-description">{image.description}</p>
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

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="carousel3d-nav carousel3d-nav--prev"
            aria-label="Previous image"
          >
            <svg className="carousel3d-nav-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="carousel3d-nav carousel3d-nav--next"
            aria-label="Next image"
          >
            <svg className="carousel3d-nav-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </section>

        {/* Dot Indicators */}
        <nav className="carousel3d-indicators" aria-label="Gallery navigation">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel3d-dot ${index === currentIndex ? 'carousel3d-dot--active' : ''}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default LogoDesignWork;