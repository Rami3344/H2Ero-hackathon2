import React from 'react'
import lms from "../../content/lms.jpg"
import lakc from "../../content/lakc.jpg"
import bullets from "../../content/Bullets.png"
import vog from "../../content/vog.jpg"
import espin from "../../content/espin.jpg"
function Home() {
  return (
    <div className='home'>
        <div className='container1' >
            <button>Play Now!</button>
        </div>
        <div className='container2'>
            <h1>Our Sponsors</h1>
            <div>
              <img src={lms} alt="" />
              <img src={lakc} alt="" />
              <img src={vog} alt="" />
              <img src={bullets} alt="" />
              <img src={espin} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Home