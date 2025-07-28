import React, { useEffect, useRef } from 'react'
import './CardsGrid.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CardsGrid = () => {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return

    const cards = gridRef.current.querySelectorAll('.market-card')

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 60, scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }, [])

  return (
    <section className="market-grid-container" ref={gridRef}>
      <div className="market-card market-card-1">
        <img src="https://picsum.photos/300/200?random=1" alt="" />
      </div>
      <div className="market-card market-card-2">
        <video muted loop autoPlay playsInline>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        </video>
      </div>
      <div className="market-card market-card-3">
        <img src="https://picsum.photos/300/200?random=2" alt="" />
      </div>
      <div className="market-card market-card-4">
        <img src="https://picsum.photos/300/200?random=3" alt="" />
      </div>
      <div className="market-card market-card-5">
        <video muted loop autoPlay playsInline>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
        </video>
      </div>
      <div className="market-card market-card-6">
        <img src="https://picsum.photos/300/200?random=4" alt="" />
      </div>
      <div className="market-card market-card-7">
        <img src="https://picsum.photos/300/200?random=5" alt="" />
      </div>
      <div className="market-card market-card-8">
        <video muted loop autoPlay playsInline>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" />
        </video>
      </div>
      <div className="market-card market-card-9">
        <img src="https://picsum.photos/300/200?random=6" alt="" />
      </div>
      <div className="market-card market-card-10">
        <img src="https://picsum.photos/300/200?random=7" alt="" />
      </div>
      <div className="market-card market-card-11">
        <img src="https://picsum.photos/300/200?random=8" alt="" />
      </div>
      <div className="market-card market-card-12">
        <video muted loop autoPlay playsInline>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" />
        </video>
      </div>
      <div className="market-card market-card-13">
        <img src="https://picsum.photos/300/200?random=9" alt="" />
      </div>
      <div className="market-card market-card-14">
        <img src="https://picsum.photos/300/200?random=10" alt="" />
      </div>
      <div className="market-card market-card-15">
        <img src="https://picsum.photos/300/200?random=11" alt="" />
      </div>
      <div className="market-card market-card-16">
        <video muted loop autoPlay playsInline>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" />
        </video>
      </div>
      <div className="market-card market-card-17">
        <img src="https://picsum.photos/300/200?random=12" alt="" />
      </div>
      <div className="market-card market-card-18">
        <img src="https://picsum.photos/300/200?random=13" alt="" />
      </div>
      <div className="market-card market-card-19">
        <video muted loop autoPlay playsInline>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
        </video>
      </div>
      <div className="market-card market-card-20">
        <img src="https://picsum.photos/300/200?random=14" alt="" />
      </div>
    </section>
  )
}

export default CardsGrid
