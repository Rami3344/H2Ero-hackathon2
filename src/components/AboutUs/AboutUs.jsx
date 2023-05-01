import React from 'react'
import rambo from "../../content/rambo.jpg"
import rayen from "../../content/rayen.jpg"
import bezbez from "../../content/bezbez.jpg"
import charfi from "../../content/charfi.jpg"
import wasd from "../../content/wasd.png"
function AboutUs() {
  return (
    <div className='about'>
      <div className='cont1'>
        <h1>About Our Game</h1>
        <p className='p1'>H2Ero is a game about completing quests with 3 different levels and types of quests .The quests is all about saving water from leaking and not wasting it,you have to finish all the 3 levels to win. <br /> Good luck ! </p>
      </div>
      <div className='cont2'>
        <h1>Our Team</h1>
        <div className='team'>
          <div>
          <img src={rayen} alt="" />
          <p>Rayen Hakim <br /> <span>Marketer</span></p>
          </div>
          <div>
          <img src={rambo} alt="" />
          <p>Rami Tounsi <br /> <span>WebSite Developer</span></p>
          </div>
          <div>
          <img src={bezbez} alt="" />
          <p>Yessmin Chaari <br /> <span>Game Developer</span></p>
          </div>
          <div>
          <img src={charfi} alt="" />
          <p>Aziz Charfi <br /> <span>Designer</span></p>
          </div>
        </div>

      </div>
      <div className='cont3'>
        <h1>How To Play</h1>
        <p>Movement:</p>
        <img src={wasd} />
      </div>
    </div>
    
  )
}

export default AboutUs