import React, { useState, useEffect, useRef } from 'react';
import './HorizontalGallery.css';

const HybridGallery = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const galleryRef = useRef(null);
  const carouselRef = useRef(null);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Mountain Paradise",
      description: "Breathtaking peaks and pristine wilderness await your discovery."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Ocean Dreams",
      description: "Crystal clear waters and golden beaches create the perfect escape."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Forest Serenity",
      description: "Ancient trees and mystical paths through nature's enchanting landscapes."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Desert Wonders",
      description: "Vast golden dunes and starlit nights in the heart of the desert."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Urban Lights",
      description: "Dynamic cityscapes and vibrant culture pulse through the streets."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Lake Tranquility",
      description: "Peaceful waters reflecting the beauty of surrounding nature's embrace."
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Alpine Heights",
      description: "Majestic snow-capped peaks reaching towards the infinite sky above."
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Tropical Paradise",
      description: "Pristine beaches and swaying palms in this perfect island getaway."
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        title: "Cultural Heritage",
        description: "Rich history and vibrant traditions in this culturally diverse destination."
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        title: "Wildlife Adventure",
        description: "Encounter exotic wildlife in their natural habitats across the globe."
    }
  ];

  // Check if mobile (425px and below)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 426);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => setIsLoading(false), 1000);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  // Auto-play for mobile 3D carousel only
  useEffect(() => {
    let interval;
    if (isMobile && isAutoPlay && !isDragging && !isLoading) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 4500);
    }
    return () => clearInterval(interval);
  }, [isMobile, isAutoPlay, isDragging, isLoading, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        setActiveIndex(prev => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex(prev => (prev - 1 + images.length) % images.length);
      } else if (e.key === ' ' && isMobile) {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [images.length, isAutoPlay, isMobile]);

  // 3D Carousel functions for mobile
  const getItemPosition = (index) => {
    const diff = index - activeIndex;
    const totalItems = images.length;
    
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalItems / 2) {
      normalizedDiff = diff > 0 ? diff - totalItems : diff + totalItems;
    }
    return normalizedDiff;
  };

  // Drag handlers for mobile 3D carousel
  const handleStart = (clientX) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleMove = (clientX) => {
    if (!isDragging || !isMobile) return;
    setCurrentX(clientX);
  };

  const handleEnd = () => {
    if (!isMobile) return;
    if (isDragging) {
      const diff = currentX - startX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) {
          setActiveIndex(prev => (prev - 1 + images.length) % images.length);
        } else {
          setActiveIndex(prev => (prev + 1) % images.length);
        }
      }
    }
    setIsDragging(false);
  };

  const handlePanelClick = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (isLoading) {
    return (
      <div className="hg-loading-container">
        <div className="hg-loading-spinner"></div>
        <p className="hg-loading-text">Loading Gallery...</p>
      </div>
    );
  }

  return (
    <div className="hg-gallery-main-container">
      <div className="hg-floating-background">
        <div className="hg-floating-circle hg-floating-circle-1"></div>
        <div className="hg-floating-circle hg-floating-circle-2"></div>
        <div className="hg-floating-circle hg-floating-circle-3"></div>
      </div>

      <div className="hg-gallery-header">
        <h1 className="hg-gallery-title">Discover Amazing Places</h1>
        <p className="hg-gallery-subtitle">
          Experience breathtaking destinations through our interactive gallery
        </p>
      </div>

      {/* Desktop/Tablet Horizontal Gallery */}
      <div className="hg-gallery-wrapper">
        <div className="hg-gallery-flex" ref={galleryRef}>
          {images.map((image, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={image.id}
                className={`hg-gallery-panel ${isActive ? 'hg-active' : 'hg-inactive'}`}
                onClick={() => handlePanelClick(index)}
              >
                <div className="hg-image-container">
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`hg-panel-image ${isActive ? 'hg-active' : 'hg-inactive'}`}
                  />
                  <div className={`hg-image-overlay ${isActive ? 'hg-active' : 'hg-inactive'}`} />
                </div>

                <div className={`hg-panel-content ${isActive ? 'hg-active' : 'hg-inactive'}`}>
                  <h3 className={`hg-panel-title ${isActive ? 'hg-active' : 'hg-inactive'}`}>
                    {image.title}
                  </h3>
                  {isActive && (
                    <p className="hg-panel-description">
                      {image.description}
                    </p>
                  )}
                </div>

                <div className={`hg-vertical-title ${isActive ? 'hg-active' : 'hg-inactive'}`}>
                  <h3 className="hg-vertical-text">{image.title}</h3>
                </div>

                {isActive && <div className="hg-active-indicator" />}
                <div className={`hg-panel-border ${isActive ? 'hg-active' : 'hg-inactive'}`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile 3D Carousel (425px and below only) */}
      <section 
        className="hg-mobile-carousel-viewport"
        onMouseEnter={() => isMobile && setIsAutoPlay(false)}
        onMouseLeave={() => isMobile && setIsAutoPlay(true)}
      >
        <div
          ref={carouselRef}
          className="hg-mobile-carousel-stage"
          onMouseDown={(e) => {
            e.preventDefault();
            handleStart(e.clientX);
          }}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
        >
          {images.map((image, index) => {
            const position = getItemPosition(index);
            const isActive = position === 0;
            const isAdjacent = Math.abs(position) === 1;
            const isVisible = Math.abs(position) <= 3;

            return (
              <div
                key={image.id}
                className={`hg-mobile-carousel-item ${isActive ? 'hg-mobile-carousel-item-active' : ''} ${!isVisible ? 'hg-mobile-carousel-item-hidden' : ''}`}
                style={{
                  '--hg-carousel-position': position,
                  '--hg-carousel-total': images.length
                }}
                onClick={() => handlePanelClick(index)}
              >
                <div className="hg-mobile-carousel-card">
                  <div className="hg-mobile-carousel-image-container">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="hg-mobile-carousel-image"
                      loading="lazy"
                    />
                    <div className="hg-mobile-carousel-image-overlay"></div>
                    <div className="hg-mobile-carousel-shine-effect"></div>
                  </div>
                  
                  <div className="hg-mobile-carousel-content">
                    <h3 className="hg-mobile-carousel-title">{image.title}</h3>
                    <p className="hg-mobile-carousel-description">{image.description}</p>
                  </div>
                  
                  {isActive && (
                    <div className="hg-mobile-carousel-active-indicator">
                      <div className="hg-mobile-carousel-pulse-ring"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls for Mobile 3D */}
        <button
          onClick={prevSlide}
          className="hg-mobile-nav hg-mobile-nav-prev"
          aria-label="Previous image"
        >
          <svg className="hg-mobile-nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="hg-mobile-nav hg-mobile-nav-next"
          aria-label="Next image"
        >
          <svg className="hg-mobile-nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </section>

      <div className="hg-navigation-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`hg-nav-dot ${index === activeIndex ? 'hg-active' : 'hg-inactive'}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <div className="hg-cta-section">
        <button className="hg-cta-button">
          Start Your Adventure
        </button>
      </div>
    </div>
  );
};

export default HybridGallery;