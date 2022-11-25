import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useState } from 'react'
import './home.css'
import Footer from '../Footer/Footer'
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdAutoFixHigh } from "react-icons/md";
import { json, Link } from 'react-router-dom'
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
                    <div className='homehtml'>HTML<FaHtml5 /><button onClick={() => setHtml(templateh)}>auto<MdAutoFixHigh /></button></div>
                    <div className='homecss'>CSS<FaCss3Alt /><button onClick={() => setCss(templatec)}>auto<MdAutoFixHigh /></button></div>
                    <div className='homeresult'>Result<FiMonitor /></div>
                </div>
                {/* ------------------------------------------------ */}
                {/* HTML Css Editor */}
                {/* ------------------------------------------------ */}
                <div className="homeeditor">
                    <CodeEditor
                        value={html}
                        language="html"
                        onChange={(e) => setHtml(e.target.value)}
                        padding={16}
                        style={styleh}
                    />
                    <CodeEditor
                        placeholder={templateh}
                        language="html"
                        padding={16}
                        style={stylehh}
                    />
                </div>

                <div className="sethomeeditor">
                    <CodeEditor
                        value={css}
                        language="css"
                        onChange={(e) => setCss(e.target.value)}
                        padding={16}
                        style={stylec}
                    />
                    <CodeEditor
                        placeholder={templatec}
                        language="html"
                        padding={16}
                        style={stylecc}
                    />
                </div>
                <iframe className="homei" srcDoc={`${html}<style>${css}</style>`} />

                <Link to="/selector"><button className='homejoin'>コースの選択</button></Link>
            </div>
            <Footer />
        </>
    )
}

export default Home

// ----------------------------------------------------//
// 文章のセット //
// ----------------------------------------------------//
let templateh = `<h1><span class="text">Hello
DesignTyping</span></h1>`;
let templatec = `.text {
display: inline-block;
background: -webkit-linear-gradient(45deg, #54d0ff, #9f92ff 20%, #ff7689 90%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent
}`
// ----------------------------------------------------//
// EditorのCSS //
// ----------------------------------------------------//
let styleh = {
    fontSize: "16px",
    backgroundColor: "#fcfcfc",
    color: "#555",
    width: "30%",
    height: "16rem",
    border: "1px solid #8f34f9",
    opacity: "0.5",
    zIndex: "10",
    borderRadius: "0.3rem",
    position: "absolute",
    top: "35%",
    left: "2.5%"
}
let stylehh = {
    fontSize: "16px",
    backgroundColor: "#fcfcfc",
    color: "#555",
    width: "30%",
    height: "16rem",
    border: "1px solid #8f34f9",
    zIndex: "1",
    borderRadius: "0.3rem",
    position: "absolute",
    top: "35%",
    left: "2.5%"
}

let stylec = {
    fontSize: "16px",
    backgroundColor: "#fcfcfc",
    color: "#555",
    width: "30%",
    height: "16rem",
    border: "1px solid #8f34f9",
    opacity: "0.5",
    zIndex: "10",
    borderRadius: "0.3rem",
    position: "absolute",
    top: "35%",
    left: "35%"
}
let stylecc = {
    fontSize: "16px",
    backgroundColor: "#fcfcfc",
    color: "#555",
    width: "30%",
    height: "16rem",
    border: "1px solid #8f34f9",
    zIndex: "1",
    borderRadius: "0.3rem",
    position: "absolute",
    top: "35%",
    left: "35%"
}
