import React from 'react'
import mainLogo from '../../image/sitelogo.png'
import './headerstyle.css'
import { Link } from 'react-router-dom';

//icons----------
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineSchool } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
//------------------
function Header() {
  return (
        <header>
            <h1><Link to="/"><img src={mainLogo} alt="DesignTyping"/></Link></h1>
            <nav>
            <ul>
            <li><Link to="/">Home<AiOutlineHome /></Link></li>
            <li><Link to="/selector">Course<MdOutlineSchool /></Link></li>
            <li><Link to="/mypage">Account<VscAccount /></Link></li>
            </ul>
            </nav>
    </header>
  )
}

export default Header