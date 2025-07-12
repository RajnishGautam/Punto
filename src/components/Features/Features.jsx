import React from 'react'
import './Features.css'
import { FaUsers, FaBrain, FaLightbulb } from 'react-icons/fa'

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {/* Feature 1 */}
        <div className="feature-box">
          <div className="feature-icon">
            <FaUsers />
          </div>
          <div className="feature-texts">
            <h3 className="feature-title">Advanced Tools</h3>
            <p className="feature-desc">
              Scelerisque viverra mauris in aliquam sem fringilla ut.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="feature-box">
          <div className="feature-icon">
            <FaBrain />
          </div>
          <div className="feature-texts">
            <h3 className="feature-title">Innovation</h3>
            <p className="feature-desc">
              Sit amet volutpat consequat mauris nunc congue nisi.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="feature-box">
          <div className="feature-icon">
            <FaLightbulb />
          </div>
          <div className="feature-texts">
            <h3 className="feature-title">Creative Ideas</h3>
            <p className="feature-desc">
              Sagittis aliquam malesuada bibendum arcu vitae elem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
