import React from 'react'
import Footer from '../Footer/Footer'
import './mypage.css'
import { MdConstruction } from 'react-icons/md'

function MyPage() {
  return (
    <>
    <div className='mainarea'>
        <p className='iiwake'>鋭意作成中です<MdConstruction /></p>
    </div>
    <Footer />
    </>
  )
}

export default MyPage