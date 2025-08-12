import React from 'react'
import './MarketingGrid.css'

const MarketingGrid = () => {
  return (
    <div className="marketing-grid-container">
      <div className="marketing-grid-parent">
        {/* Grid Item 1 */}
        <div className="marketing-grid-div marketing-grid-div1">
          <video src="/marketing/grid1.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 2 */}
        <div className="marketing-grid-div marketing-grid-div2">
          <video src="/marketing/grid2.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 3 */}
        <div className="marketing-grid-div marketing-grid-div3">
          <video src="/marketing/grid3.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 4 */}
        <div className="marketing-grid-div marketing-grid-div4">
          <img
            src="/marketing/grid4.jpg"
            alt="Marketing Visual"
            className="grid4-img"
          />
        </div>

        {/* Grid Item 5 */}
        <div className="marketing-grid-div marketing-grid-div5">
          <video src="/marketing/grid5.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 6 */}
        <div className="marketing-grid-div marketing-grid-div6">
          <video src="/marketing/grid6.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 7 */}
        <div className="marketing-grid-div marketing-grid-div7">
          <video src="/marketing/grid7.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 20  7ke niche wala*/}
        <div className="marketing-grid-div marketing-grid-div20">
          <img
            src="/marketing/grid20.png"
            alt="Marketing Visual"
            className="grid20-img"
          />
        </div>

        {/* Grid Item 8 */}
        <div className="marketing-grid-div marketing-grid-div8">
          <video src="/marketing/grid8.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 9 */}
        <div className="marketing-grid-div marketing-grid-div9">
          <img
            src="/marketing/grid9.jpg"
            alt="SEO Visual"
            className="grid9-img"
          />
        </div>

        {/* Grid Item 10 */}
        <div className="marketing-grid-div marketing-grid-div10">
          <video src="/marketing/grid10.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 11 */}
        <div className="marketing-grid-div marketing-grid-div11">
          <img
            src="/marketing/grid11.jpg"
            alt="Marketing Visual"
            className="grid11-img"
          />
        </div>

        {/* Grid Item 12 */}
        <div className="marketing-grid-div marketing-grid-div12">
           <img
            src="/marketing/grid12.jpg"
            alt="Marketing Visual"
            className="grid11-img"
          />
        </div>

        {/* Grid Item 13 */}
        <div className="marketing-grid-div marketing-grid-div13">
          <video src="/marketing/grid13.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 14 */}
        <div className="marketing-grid-div marketing-grid-div14">
          <video src="/marketing/grid14.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 15 */}
        <div className="marketing-grid-div marketing-grid-div15">
          <video src="/marketing/grid15.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 16 */}
        <div className="marketing-grid-div marketing-grid-div16">
          <video src="/marketing/grid16.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 17 */}
        <div className="marketing-grid-div marketing-grid-div17">
          <img
            src="/marketing/grid17.jpg"
            alt="Marketing Visual"
            className="grid17-img"
          />
        </div>

        {/* CTA Button at Bottom */}
        <div className="marketing-grid-cta">
          <a
            href="https://wa.me/917838649867"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button marketing primary"
          >
            <span>Start Your Journey</span>
            <div className="button-glow"></div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MarketingGrid
