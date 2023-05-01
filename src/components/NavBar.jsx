import { React } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div style={{padding:0}} className='navbar'>
      <nav>
        <ul>
          <li><Link to="/Home"><FontAwesomeIcon className='icon' icon={faHouseUser}/></Link></li>
          <li><Link to="/AboutUs"><FontAwesomeIcon className='icon' icon={faWandMagicSparkles}/></Link></li>
          <li><Link to="/Gallery"><FontAwesomeIcon className='icon' icon={faImage }/></Link></li>
          <li><Link to="/ContactUs"><FontAwesomeIcon className='icon' icon={faHeadset}/></Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default NavBar