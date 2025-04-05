import React from 'react'
import { Outlet, NavLink, useParams } from 'react-router-dom'
import data from '../data.json'


function CrewsLayout() {

  const id = useParams().id 
  console.log(id)

  const image = id ? 
                data.crew[id].images.png : 
                data.crew[0].images.png

  const role = data.crew[0].role
  const name = data.crew[0].name
  const bio = data.crew[0].bio

  return (
    <section className='grid-container crew flow' style={{"--flow-space": "2rem"}}>
      <h1 className='uppercase crew-title letter-spacing-2 fs-400 ff-sans-cond'><span>02</span> Meet your crew</h1>
      <div className='crew-img'>
        <img src={`http://localhost:3000/${image}`}></img>
      </div>
      <div className="dot-indicators flex">
          <NavLink to='.' end className={({isActive}) => isActive ? "active" : ""}>
            <span className="sr-only">slide title</span>
          </NavLink>
          <NavLink to='./1' className={({isActive}) => isActive ? "active" : ""}>
            <span className="sr-only">slide title</span>
          </NavLink>
          <NavLink to='./2' className={({isActive}) => isActive ? "active" : ""}>
            <span className="sr-only">slide title</span>
          </NavLink>
          <NavLink to='./3' className={({isActive}) => isActive ? "active" : ""}>
            <span className="sr-only">slide title</span>
          </NavLink>
      </div>
      {id ? (
        <Outlet context={id}/>
      ) : (
        <div className='crew-description flex'>
          <h3 className='uppercase ff-serif'>{role}</h3>
          <h1 className='uppercase ff-serif fs-600'>{name}</h1>
          <p>{bio}</p>
        </div>
      )}
      
    </section>
  )
}

export default CrewsLayout