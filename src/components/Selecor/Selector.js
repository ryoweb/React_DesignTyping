import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import './selector.css'

function Selector() {
  return (
    <>
      <div className='mainarea'>
        <div className='selectorarea'>
          <p>PlayGround</p>
          <ul>
            <li><Link to="/playground">PlayGround</Link></li>
          </ul>
          <br />
          <p>WebSite</p>
          <ul>
            <li><Link to="/myprofile">MyProfile</Link></li>
          </ul>
          <br />
          <p>DesignIdea</p>
          <ul>
            <li><Link to="/dropdownmenu">Dropdown Menu</Link></li>
          </ul>
          <br />
          <p>HTML</p>
          <ul>
            <li>coming soon</li>
          </ul>
          <br />
          <p>CSS</p>
          <ul>
            <li><Link to="/position">Learn Position</Link></li>
          </ul>
          <br />
          <p>JavaScript</p>
          <ul>
            <li><Link to="/domsousa">dom</Link></li>
          </ul>
          <br />
          <p>React</p>
          <ul>
            <li>coming soon</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Selector