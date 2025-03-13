import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

function Planet() {

 const params = useParams().id 
 const id = params ? params : 0
 console.log(id)

 const data = useOutletContext()
 console.log(data)

//  const image = data.destinations[0].images.png
 const title =  data.destinations[id].name
 const description = data.destinations[id].description
 const distance = data.destinations[id].distance
 const travel = data.destinations[id].travel

  return (
    <div>
        <h1 className='fs-900 ff-serif uppercase'>{title}</h1>
        <p className='description'>{description}</p>
        <div className='dest-sub-content flex'>
          <div > 
            <p className='uppercase fs-300'>avg. distance</p>
            <h3 className='uppercase fs-600 ff-serif'>{distance}</h3>
          </div>
          <div >
            <p className='uppercase fs-300'>est.travel time</p>
            <h3 className='uppercase fs-600 ff-serif'>{travel}</h3>
          </div>
        </div>
    </div>
  )
}

export default Planet