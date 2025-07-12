import React, { useState, useEffect } from 'react'
import {
  ArrowLeft,
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
  Zap,
  X,
} from 'lucide-react'

const WhyUs3DCards = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains('dark')
  )

  useEffect(() => {
    const handleBodyClassChange = () => {
      setDarkMode(document.body.classList.contains('dark'))
    }

    // Listen for changes in body class
    const observer = new MutationObserver(handleBodyClassChange)
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      id: 1,
      title: 'Why Us',
      subtitle: 'Excellence Redefined',
      icon: <Target className="w-8 h-8" />,
      gradient: 'from-purple-600 via-pink-600 to-blue-600',
      facts: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          label: 'Success Rate',
          value: '99.8%',
        },
        {
          icon: <Users className="w-6 h-6" />,
          label: 'Happy Clients',
          value: '10K+',
        },
        {
          icon: <Award className="w-6 h-6" />,
          label: 'Awards Won',
          value: '50+',
        },
        {
          icon: <Globe className="w-6 h-6" />,
          label: 'Global Reach',
          value: '25+ Countries',
        },
      ],
      description:
        'We deliver exceptional results through innovative solutions, cutting-edge technology, and unwavering commitment to excellence. Our proven track record speaks for itself.',
    },
    {
      id: 2,
      title: 'Who We Are',
      subtitle: 'Visionary Leaders',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      facts: [
        {
          icon: <Users className="w-6 h-6" />,
          label: 'Expert Team',
          value: '200+',
        },
        {
          icon: <Globe className="w-6 h-6" />,
          label: 'Years Experience',
          value: '15+',
        },
        {
          icon: <Zap className="w-6 h-6" />,
          label: 'Projects Completed',
          value: '5000+',
        },
        {
          icon: <Award className="w-6 h-6" />,
          label: 'Industry Recognition',
          value: 'Top 1%',
        },
      ],
      description:
        'A dynamic team of innovators, strategists, and creators who transform ideas into reality. We are passionate professionals dedicated to pushing boundaries and exceeding expectations.',
    },
    {
      id: 3,
      title: "Why We're Unique",
      subtitle: 'Innovation at Core',
      icon: <Award className="w-8 h-8" />,
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      facts: [
        {
          icon: <Zap className="w-6 h-6" />,
          label: 'Faster Delivery',
          value: '3x Speed',
        },
        {
          icon: <Target className="w-6 h-6" />,
          label: 'Accuracy Rate',
          value: '99.9%',
        },
        {
          icon: <Globe className="w-6 h-6" />,
          label: '24/7 Support',
          value: 'Always On',
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          label: 'Growth Impact',
          value: '300% ROI',
        },
      ],
      description:
        "Our unique blend of creativity, technology, and strategic thinking sets us apart. We don't just meet expectations—we redefine what's possible in our industry.",
    },
  ]

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId)
  }

  const handleBack = () => {
    setSelectedCard(null)
  }

  return (
    <div className={`why-us-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="why-us-background">
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="orb orb-4"></div>
        </div>
      </div>

      <div className="why-us-content">
        <div className="section-header">
          {/* <h2 className="section-title">Creating Designs to Elevate your Brands</h2> */}
        </div>

        <div className={`cards-container ${selectedCard ? 'expanded' : ''}`}>
          {!selectedCard ? (
            // Initial 3 cards view
            <div className="cards-grid">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`floating-card card-${index + 1}`}
                  onClick={() => handleCardClick(card.id)}
                >
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <div
                      className={`card-icon bg-gradient-to-r ${card.gradient}`}
                    >
                      {card.icon}
                    </div>
                    <h3 className="card-title">{card.title}</h3>
                    {/* <p className="card-subtitle">{card.subtitle}</p> */}
                    <div className="card-hover-effect">
                      <span>Click to explore</span>
                    </div>
                  </div>
                  <div className="card-reflection"></div>
                </div>
              ))}
            </div>
          ) : (
            // Expanded card view
            <div className="expanded-card-container">
              <div className="close-button-container">
                <button className="close-button" onClick={handleBack}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {cards.map(
                (card) =>
                  selectedCard === card.id && (
                    <div key={card.id} className="expanded-card">
                      <div className="expanded-left">
                        <div className="expanded-header">
                          <div
                            className={`expanded-icon bg-gradient-to-r ${card.gradient}`}
                          >
                            {card.icon}
                          </div>
                          <div className="expanded-text">
                            <h3 className="expanded-title">{card.title}</h3>
                            <p className="expanded-subtitle">{card.subtitle}</p>
                          </div>
                        </div>
                        <div className="expanded-description-container">
                          <p className="expanded-description">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      <div className="expanded-right">
                        <div className="facts-grid-horizontal">
                          {card.facts.map((fact, index) => (
                            <div key={index} className="fact-card-horizontal">
                              <div className="fact-icon">{fact.icon}</div>
                              <div className="fact-content">
                                <span className="fact-value">{fact.value}</span>
                                <span className="fact-label">{fact.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .why-us-container {
          min-height: 70vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0rem 0rem;
          transition: all 0.3s ease;
        }

        .why-us-container.dark {
          background: #000000;
          color: #f1f1f1;
        }

        .why-us-container.light {
          background: #ffffff;
          color: #111111;
        }

        .why-us-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-orbs {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
          animation: float 6s ease-in-out infinite;
        }

        .dark .orb {
          background: #8e1616;
        }

        .light .orb {
          background: #8e1616;
          box-shadow: 0 0 40px rgba(142, 22, 22, 0.05);
        }

        .orb-1 {
          width: 180px;
          height: 180px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 120px;
          height: 120px;
          top: 70%;
          right: 10%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 80px;
          height: 80px;
          top: 30%;
          right: 30%;
          animation-delay: 4s;
        }

        .orb-4 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 20%;
          animation-delay: 1s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(15px) rotate(240deg);
          }
        }

        .why-us-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
          animation: fadeInUp 1s ease-out;
        }

        // .section-title {
        //   font-family: 'sarabun', sans-serif;
        //   font-size: 2rem;
        //   font-weight: normal;
        // }

        // .dark .section-title {
        //   color: #ffffff;
        // }

        // .light .section-title {
        //   color: #111111;
        // }

        // .section-subtitle {
        //   font-size: 1.3rem;
        //   font-weight: normal;
        // }

        // .dark .section-subtitle {
        //   color: #ffffff;
        // }

        // .light .section-subtitle {
        //   color: #111111;
        // }

        .cards-container {
          position: relative;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cards-grid {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          width: 100%;
        }

        .floating-card {
          width: 400px;
          height: 200px;
          backdrop-filter: blur(20px);
          border-radius: 20px;
          position: relative;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          animation: cardFloat 4s ease-in-out infinite;
        }

        .dark .floating-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .light .floating-card {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.08),
            0 4px 16px rgba(0, 0, 0, 0.04);
        }

        .card-1 {
          animation-delay: 0s;
        }
        .card-2 {
          animation-delay: 0.5s;
        }
        .card-3 {
          animation-delay: 1s;
        }

        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0px) rotateY(0deg);
          }
          50% {
            transform: translateY(-15px) rotateY(5deg);
          }
        }

        .floating-card:hover {
          transform: translateY(-25px) scale(1.05) rotateY(8deg);
        }

        .dark .floating-card:hover {
          box-shadow: 0 25px 50px rgba(142, 22, 22, 0.4);
        }

        .light .floating-card:hover {
          box-shadow:
            0 32px 64px rgba(142, 22, 22, 0.15),
            0 16px 32px rgba(0, 0, 0, 0.1);
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(-45deg);
          transition: all 0.6s ease;
          opacity: 0;
        }

        .floating-card:hover .card-glow {
          opacity: 1;
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            transform: rotate(-45deg) translateX(-100%);
          }
          100% {
            transform: rotate(-45deg) translateX(100%);
          }
        }

        .card-content {
          position: relative;
          z-index: 2;
          padding: 2.5rem 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .card-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: brown;
          margin-bottom: 1.5rem;
          position: relative;
          animation: iconPulse 2s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .card-title {
          font-size: 2.5rem;
          font-weight: normal;
          font-family: 'sarabun';
          margin-bottom: 0.8rem;
        }

        .dark .card-title {
          color: white;
        }

        .light .card-title {
          color: #111111;
        }

        .card-subtitle {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: normal;
          font-family: 'sarabun';
        }

        .dark .card-subtitle {
          color: rgba(255, 255, 255, 0.8);
        }

        .light .card-subtitle {
          color: rgba(17, 17, 17, 0.7);
        }

        .card-hover-effect {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .floating-card:hover .card-hover-effect {
          opacity: 1;
          animation: bounce 1s ease-in-out infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateX(-50%) translateY(0px);
          }
          50% {
            transform: translateX(-50%) translateY(-8px);
          }
        }

        .card-hover-effect span {
          background: linear-gradient(135deg, #8e1616, #a855f7);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .card-reflection {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          pointer-events: none;
        }

        .expanded-card-container {
          width: 100%;
          max-width: 1000px;
          animation: slideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .close-button-container {
          position: absolute;
          top: -15px;
          right: -15px;
          z-index: 100;
        }

        .close-button {
          background: #8e1616;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          color: white;
          font-weight: 700;
        }

        @keyframes pulseClose {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 6px 24px rgba(239, 68, 68, 0.4);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 10px 32px rgba(239, 68, 68, 0.6);
          }
        }

        .close-button:hover {
          transform: scale(1.1);
        }

        .close-text {
          font-size: 0.6rem;
          margin-top: 2px;
          font-weight: 600;
        }

        .expanded-card {
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2.5rem;
          animation: expandIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          gap: 2.5rem;
          min-height: 400px;
        }

        .dark .expanded-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .light .expanded-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow:
            0 24px 48px rgba(0, 0, 0, 0.08),
            0 8px 24px rgba(0, 0, 0, 0.04);
        }

        @keyframes expandIn {
          from {
            scale: 0.8;
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            scale: 1;
            opacity: 1;
            transform: translateY(0);
          }
        }

        .expanded-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .expanded-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .expanded-header {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .expanded-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8e1616;
          font-size: 1.5rem;
          animation: iconRotate 3s ease-in-out infinite;
        }

        @keyframes iconRotate {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
        }

        .expanded-text {
          flex: 1;
        }

        .expanded-title {
          font-size: 2rem;
          font-weight: normal;
          margin-bottom: 0.4rem;
          background: linear-gradient(
            135deg,
            #8e1616 0%,
            #a855f7 50%,
            #3b82f6 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .expanded-subtitle {
          font-size: 1rem;
        }

        .dark .expanded-subtitle {
          color: rgba(255, 255, 255, 0.8);
        }

        .light .expanded-subtitle {
          color: rgba(17, 17, 17, 0.7);
        }

        .expanded-description-container {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .expanded-description {
          font-size: 1rem;
          line-height: 1.6;
        }

        .dark .expanded-description {
          color: rgba(255, 255, 255, 0.9);
        }

        .light .expanded-description {
          color: rgba(17, 17, 17, 0.8);
        }

        .facts-grid-horizontal {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.2rem;
          width: 100%;
        }

        .fact-card-horizontal {
          backdrop-filter: blur(10px);
          border-radius: 14px;
          padding: 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.3s ease;
          animation: factSlideIn 0.6s ease-out;
        }

        .dark .fact-card-horizontal {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .light .fact-card-horizontal {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow:
            0 6px 20px rgba(0, 0, 0, 0.06),
            0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .fact-card-horizontal:nth-child(1) {
          animation-delay: 0.1s;
        }
        .fact-card-horizontal:nth-child(2) {
          animation-delay: 0.2s;
        }
        .fact-card-horizontal:nth-child(3) {
          animation-delay: 0.3s;
        }
        .fact-card-horizontal:nth-child(4) {
          animation-delay: 0.4s;
        }

        .fact-card-horizontal:hover {
          transform: translateY(-4px) scale(1.05);
        }

        .dark .fact-card-horizontal:hover {
          box-shadow: 0 8px 24px rgba(142, 22, 22, 0.3);
        }

        .light .fact-card-horizontal:hover {
          box-shadow:
            0 12px 32px rgba(142, 22, 22, 0.12),
            0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .fact-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #8e1616, #a855f7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          animation: iconSpin 4s linear infinite;
        }

        @keyframes iconSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .fact-content {
          display: flex;
          flex-direction: column;
        }

        .fact-value {
          font-size: 1.3rem;
          font-weight: 900;
          line-height: 1;
        }

        .dark .fact-value {
          color: white;
        }

        .light .fact-value {
          color: #111111;
        }

        .fact-label {
          font-size: 0.7rem;
          margin-top: 0.2rem;
        }

        .dark .fact-label {
          color: rgba(255, 255, 255, 0.7);
        }

        .light .fact-label {
          color: rgba(17, 17, 17, 0.6);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes factSlideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .why-us-container {
            min-height: 70vh;
            padding: 1rem;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .cards-container {
            height: 380px;
          }

          .cards-grid {
            flex-direction: column;
            gap: 1.5rem;
          }

          .floating-card {
            width: 260px;
            height: 320px;
          }

          .expanded-card {
            flex-direction: column;
            gap: 1.5rem;
            min-height: 350px;
          }

          .expanded-title {
            font-size: 1.6rem;
          }

          .facts-grid-horizontal {
            grid-template-columns: 1fr;
          }

          .close-button-container {
            top: -10px;
            right: -10px;
          }

          .close-button {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  )
}

export default WhyUs3DCards
