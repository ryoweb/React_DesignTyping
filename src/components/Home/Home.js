import React, { useState } from 'react'
import './home.css'
import Footer from '../Footer/Footer'
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdAutoFixHigh } from "react-icons/md";
import { Link } from 'react-router-dom'
function Home() {

const [html, setHtml] = useState("");
const [css, setCss] = useState("");

return (
    <>
<div className='mainarea'>
    <div className='sitenav'>
        <p>プログラミングに関する知識は必要ありません</p>
        <br />
        <p>タイピングゲームのような感覚でウェブデザインを体験する事が出来ます</p>
    </div>

    <div className="hometitle">
<div className='homehtml'>HTML<FaHtml5 /><button onClick={()=>setHtml(`<h1><span class="text">HelloWorld</span></h1>`)}>auto<MdAutoFixHigh /></button></div>
<div className='homecss'>CSS<FaCss3Alt /><button onClick={()=>setCss(`.text {
display: inline-block;
background: -webkit-linear-gradient(45deg, #54d0ff, #9f92ff 20%, #ff7689 90%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}`)}>auto<MdAutoFixHigh /></button></div>
        <div className='homeresult'>Result<FiMonitor /></div>
    </div>

    <div className="homeeditor">
        <textarea value={html} onChange={(event) => setHtml(event.target.value)} className="homeh" id="homeh"/>
        <textarea value={css} onChange={(event) => setCss(event.target.value)} className="homec" />
    </div>

    <div className="sethomeeditor">
        <textarea className="homehh" placeholder='<h1><span class="text">HelloWorld</span></h1>'/>
        <textarea className="homecc" placeholder='.text {
display: inline-block;
background: -webkit-linear-gradient(45deg, #54d0ff, #9f92ff 20%, #ff7689 90%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}'/>
    </div>
    <iframe className="homei" srcDoc={`${html}<style>${css}</style>`}/>

    <Link to="/selector"><button className='homejoin'>コースの選択</button></Link>
</div>
<Footer />
</>
)
}

export default Home