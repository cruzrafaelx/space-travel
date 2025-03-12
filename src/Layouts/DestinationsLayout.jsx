import React from 'react'
import data from '../data.json'
import { NavLink, Outlet, useParams } from 'react-router-dom'

function Destinations() {

  const id = useParams().id
  const image = id ? 
                data.destinations[id].images.png : 
                data.destinations[0].images.png
 
  console.log(image)
  

  return (
    <section className='grid-container grid-container--destinations destinations flow' style={{"--flow-space": "1.5rem"}}>
        <div className='flex dest-title'>
          <h1 className='uppercase letter-spacing-1'><span>01</span> Pick your destination</h1>
          <img src={image}></img>
        </div>
        
        <div className='dest-content flow' >
          <nav>
              <ul className="secondary-nav underline-indicators flex">
                  <li><NavLink to='.' className="uppercase text-white letter-spacing-2">Moon</NavLink></li>
                  <li><NavLink to='./1' className="uppercase text-white letter-spacing-2">Mars</NavLink></li>
                  <li><NavLink to='./2' className="uppercase text-white letter-spacing-2">Europa</NavLink></li>
                  <li><NavLink to='./3' className="uppercase text-white letter-spacing-2">Titan</NavLink></li>
              </ul>
          </nav>
          <Outlet context={data}/>
        </div>
        
    </section>
  )
}

export default Destinations