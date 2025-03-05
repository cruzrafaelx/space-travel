import React from 'react'
import { useState } from 'react'

function Homepage() {

  return (
        <main className='grid-container grid-container--home'>
          <div>
            <h1 className='fs-500 uppercase ff-sans-cond letter-spacing-1'>So, you want to travel to <span className='d-block fs-900 ff-serif'>space</span></h1>
            <p>let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! </p>
          </div>
          <div>
            <button className="large-button bg-white text-dark ff-serif uppercase">explore</button>
          </div>
        </main>
  )
}

export default Homepage