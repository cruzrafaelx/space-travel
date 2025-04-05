import React from 'react'
import data from '../data.json'
import { useOutletContext } from 'react-router-dom'

function Crew() {
  const id = useOutletContext()
  console.log(id)
  console.log(data)

  const image = data.crew[id].images.png
  const role = data.crew[id].role
  const name = data.crew[id].name
  const bio = data.crew[id].bio


  return (
      <div className='crew-description flex'>
        <h3 className='uppercase ff-serif fs-500'>{role}</h3>
        <h1 className='uppercase ff-serif fs-600'>{name}</h1>
        <p>{bio}</p>
      </div>
  )
}

export default Crew