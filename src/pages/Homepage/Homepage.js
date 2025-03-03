import React from 'react'

function Homepage() {

  return (
    <section className='homepage'>
        <header className='primary-header flex'>
          <div className='homepage-logo'>
            <img src='/shared/logo.svg'></img>
          </div>
          <button className='mobile-nav-toggle' aria-controls="primary-navigation"><span className='sr-only' aria-expanded="false">Menu</span></button>
          <nav className='container'>
              <ul id='primary-navigation' className="primary-nav underline-indicators flex">
                  <li className="active"><a href="#" className="uppercase text-white letter-spacing-2"><span>00</span>Home</a></li>
                  <li><a href="#" className="uppercase text-white letter-spacing-2"><span>01</span>Destination</a></li>
                  <li><a href="#" className="uppercase text-white letter-spacing-2"><span>02</span>Crew</a></li>
                  <li><a href="#" className="uppercase text-white letter-spacing-2"><span>02</span>Technology</a></li>
              </ul>
          </nav>
        </header>

        <div className='grid-container grid-container--home'>
          <div>
            <h1 className='fs-500 uppercase ff-sans-cond letter-spacing-1'>So, you want to travel to <span className='d-block fs-900 ff-serif'>space</span></h1>
            <p>let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! </p>
          </div>
          <div>
            <button className="large-button bg-white text-dark ff-serif uppercase">explore</button>
          </div>
        </div>
    </section>
  )
}

export default Homepage