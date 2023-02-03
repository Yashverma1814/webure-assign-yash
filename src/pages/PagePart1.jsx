import React from 'react'

export const PagePart1 = () => {
  return (
    <div style={{marginTop:'5rem',paddingLeft:'4rem',display:'grid',gridTemplateColumns:'40% 50%' ,backgroundColor:"rgba(255, 100, 137, 0.04);"}}>
        <div>
            <div>
              <div style={{fontSize:'15px',color:'#F17216'}}>Best Business Platform - World Record 2021</div>
              <div className='part1-heading'>Reach Your Business</div>
              <div className='part1-heading'>Goals in Record Time</div>
              <div className='par1-content'>Support small business and join the nationwide movement to encourage commercial support for the millions of minority owned businesses helping world economy.</div>
              <div className='btn-link'>
                <div><button className='getstarted-btn'>Get Started</button></div>
                <div className='booking-link'>Book a 30 Min Quick Meeting</div>
              </div>
            </div>
        </div>
        <div>
          <div className='image-div'><img src="https://www.pngitem.com/pimgs/m/231-2318665_girl-with-laptop-png-transparent-png.png" alt="" className='girl-image'/></div>
        </div>
    </div>
  )
}
