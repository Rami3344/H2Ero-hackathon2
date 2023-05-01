import React from 'react'
import gal1 from "../../content/gal1.png"
import gal2 from "../../content/gal2.png"
import gal3 from "../../content/gal3.png"
import gal4 from "../../content/gal4.png"
import gal5 from "../../content/gal5.png"
import gal6 from "../../content/gal6.png"
function Gallery() {
  return (
    <div className='gallery'>
        <h1>Gallery Of The Game</h1>
        <div className='container'>
        <img src={gal1} />
        <img src={gal2} />
        <img src={gal3} />
        <img src={gal4} />
        <img src={gal5} />
        <img src={gal6} />
        </div>
    </div>
  )
}

export default Gallery