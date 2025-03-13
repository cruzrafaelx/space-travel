import React from 'react'
import { Outlet, NavLink,useLocation } from 'react-router-dom'
import { useState } from 'react'

function Layout() {

    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const location = useLocation().pathname
    

    function toggleMenuClick(){
      setIsMenuOpen(!isMenuOpen)
      console.log(isMenuOpen)
    }

    //This is where you'll change the background images
    
  
  return (
    <div className={ `${location === "/" ? "homepage" : "destination" }`}>
        <header className='primary-header flex'>
          <div className='homepage-logo'>
            <img src='/shared/logo.svg'></img>
          </div>
          <button 
            onClick={toggleMenuClick} 
            className={`mobile-nav-toggle 
              ${isMenuOpen ? 'nav-bg-close' : 'nav-bg-open'}`} 
            aria-controls="primary-navigation">
          <span className='sr-only' aria-expanded="false">Menu</span>
          </button>
          <nav>
              <ul id='primary-navigation' 
              className={`primary-nav underline-indicators flex 
              ${isMenuOpen ? "show" :""}`}>
                  <li>
                    <NavLink to="." end className="uppercase text-white letter-spacing-2"><span aria-hidden='true'>00</span>Home</NavLink></li>
                  <li><NavLink to="/destinations" end 
                  className={({isActive, isPending}) =>
                  isActive || window.location.pathname.startsWith("/destinations") ?
                  "active uppercase text-white letter-spacing-2" :
                  "uppercase text-white letter-spacing-2"}><span aria-hidden='true'>01</span>Destination</NavLink></li>
                  <li><NavLink to="/crew" className="uppercase text-white letter-spacing-2"><span aria-hidden='true'>02</span>Crew</NavLink></li>
                  <li><NavLink to="technology" className="uppercase text-white letter-spacing-2"><span aria-hidden='true'>03</span>Technology</NavLink></li>
              </ul>
          </nav>
        </header>

        <Outlet/>
    </div>
  )
}

export default Layout