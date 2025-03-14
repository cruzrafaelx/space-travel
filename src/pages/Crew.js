import React from 'react'
import data from '../data.json'
import { NavLink } from 'react-router-dom'

function Crew() {

  console.log(data)

  const image = data.crew[0].images.png
  const role = data.crew[0].role
  const name = data.crew[0].name
  const bio = data.crew[0].bio

  console.log(image, role, name, bio)

  return (
    <section className='grid-container crew flow' 
             style={{"--flow-space": "2rem"}}>
      <h1 className='uppercase crew-title letter-spacing-2 fs-400 ff-sans-cond'><span>02</span> Meet your crew</h1>
      <div className='crew-img'>
        <img src={`http://localhost:3000/${image}`}></img>
      </div>
      <div className="dot-indicators flex">
          <button aria-selected="true">
            <span className="sr-only">slide title</span>
          </button>
          <button aria-selected="false">
            <span className="sr-only">slide title</span>
          </button>
          <button aria-selected="false">
            <span className="sr-only">slide title</span>
          </button>
          <button aria-selected="false">
            <span className="sr-only">slide title</span>
          </button>
      </div>
      <div className='crew-description flex'>
        <h3 className='uppercase ff-serif'>{role}</h3>
        <h1 className='uppercase ff-serif fs-600'>{name}</h1>
        <p>{bio}</p>
      </div>
    </section>
  )
}

export default Crew