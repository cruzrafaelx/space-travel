import React from 'react'
import data from '../data.json'
import { NavLink } from 'react-router-dom'

function Destinations() {

  const image = data.destinations[0].images.png
  const title = data.destinations[0].name
  const description = data.destinations[0].description
  const distance = data.destinations[0].distance
  const travel = data.destinations[0].travel

  return (
    <section className='grid-container grid-container--destinations destinations'>
        <div className='flex dest-title'>
          <h1 className='uppercase letter-spacing-1'><span>01</span> Pick your destination</h1>
          <img src={image}></img>
        </div>
        
        <div className='dest-content flow' style={{"--flow-space": "2rem"}}>
          <nav>
              <ul className="secondary-nav underline-indicators flex">
                  <li className="active"><NavLink to='' className="uppercase text-white letter-spacing-2">Moon</NavLink></li>
                  <li><NavLink to='' className="uppercase text-white letter-spacing-2">Mars</NavLink></li>
                  <li><NavLink to='' className="uppercase text-white letter-spacing-2">Europa</NavLink></li>
                  <li><NavLink to='' className="uppercase text-white letter-spacing-2">Titan</NavLink></li>
              </ul>
          </nav>
          <h1 className='fs-900 ff-serif uppercase'>{title}</h1>
          <p className='description'>{description}</p>
          <div className='dest-sub-content flex'>
            <div > 
              <p className='uppercase fs-300'>avg. distance</p>
              <h3 className='fs-600'>{distance}</h3>
            </div>
            <div >
              <p className='uppercase fs-300'>est.travel time</p>
              <h3 className='fs-600'>{travel}</h3>
            </div>
          </div>
        </div>
        
    </section>
  )
}

export default Destinations