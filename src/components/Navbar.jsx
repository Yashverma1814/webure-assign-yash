import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <div className='nav-head'>
            <div className='nav-heading' >Webure Technologies</div>
            <div className="nav-links">
                <div className="nav-link">About Us</div>
                <div className="nav-link">Services</div>
                <div className="nav-link">Careers</div>
                <div className="nav-link">ROI stories</div>
                <div className="nav-link">Blog</div>
                <div className="nav-link">Contact Us</div>
            </div>
            <div className="talk-button">
              <button className='btn-lets-talk'>Let's Talk</button>
            </div>
        </div>
    </div>
  )
}
