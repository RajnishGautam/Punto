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
          <h3>Grid 2 - Wide Section</h3>
        </div>

        {/* Grid Item 3 */}
        <div className="marketing-grid-div marketing-grid-div3">
          <video src="/marketing/grid3.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 4 */}
        <div className="marketing-grid-div marketing-grid-div4">
          <video src="/marketing/grid4.mp4" autoPlay muted loop playsInline />
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
          <div className="seo-animation-bg"></div>
          <div className="seo-content">
            <h3 className="animated-heading">Rank Higher. Convert Faster.</h3>
            <p className="typing-text">
              Unlock your site's true potential with SEO that works
            </p>
          </div>
        </div>
        {/* Grid Item 8 */}
        <div className="marketing-grid-div marketing-grid-div8">
          <img
            src="/marketing/grid8.png"
            alt="SEO Visual"
            className="grid8-img"
          />
        </div>

        {/* Grid Item 9 */}
        <div className="marketing-grid-div marketing-grid-div9">
          <h2>Grid 9 - Wide Section</h2>
          <p>Perfect for banners or wide content</p>
        </div>

        {/* Grid Item 10 */}
        <div className="marketing-grid-div marketing-grid-div10">
          <video src="/marketing/grid10.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 11 */}
        <div className="marketing-grid-div marketing-grid-div11">
          <h4>Best Digital Marketing Agency in Lucknow</h4>
        </div>

        {/* Grid Item 12 */}
        <div className="marketing-grid-div marketing-grid-div12">
          <h4>12</h4>
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
          <video src="/marketing/grid5.mp4" autoPlay muted loop playsInline />
        </div>

        {/* Grid Item 16 */}
        <div className="marketing-grid-div marketing-grid-div16">
          <h3>Grid 16</h3>
          <p>Your content</p>
        </div>

        {/* Grid Item 17 */}
        <div className="marketing-grid-div marketing-grid-div17">
          <h3>Grid 17 - Wide</h3>
          <p>Wide section for content</p>
        </div>

        {/* Grid Item 18 */}
        <div className="marketing-grid-div marketing-grid-div18">
          <h3>Grid 18</h3>
        </div>

        {/* Grid Item 19 */}
        {/* Grid Item 19 */}
<div className="marketing-grid-div marketing-grid-div19">
  <h3>Grid 19 - Wide</h3>
  <p>Bottom wide section</p>
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
