import React, { useState } from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdAutoFixHigh } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";
import './domsousa.css'

const DomSousa = () => {
  const [html, setHtml] = useState("");
  const [css,setCss] = useState("");
  const [js,setJs] = useState("");

  return (
<div>
  <div className="myprofiletitle">
    <div className="myprofilehtml">HTML<FaHtml5 /><button onClick={()=>setHtml(`<p id="text">Hello JS</p>`)}>auto<MdAutoFixHigh /></button></div>
    <div className="myprofilecss">CSS<FaCss3Alt /><button onClick={()=>setCss(``)}>auto<MdAutoFixHigh /></button></div>
    <div className="myprofilejs">JavaScript<TbBrandJavascript /><button onClick={()=>setJs(`let text = document.getElementById("text");
text.innerHTML = "Change!";`)}>auto<MdAutoFixHigh /></button></div>
  </div>

  <div className="domsousaeditor">
  <textarea value={html} onChange={(event) => setHtml(event.target.value)} className="domsousah" />
  <textarea value={css} onChange={(event) => setCss(event.target.value)} className="domsousac" />
  <textarea value={js} onChange={(event) => setJs(event.target.value)} className="domsousaj" />
  <div className="setdomsousaeditor">
  <textarea className="domsousahh" placeholder='<p id="text">Hello JS</p>'/>
  <textarea className="domsousacc" placeholder='' />
  <textarea className="domsousajj" placeholder='let text = document.getElementById("text");
text.innerHTML = "Change!";' />
  </div>
  </div>

  <div className="domsousaresult">Result<FiMonitor /></div>
  <iframe className="domsousai" srcDoc={`${html}<style>${css}</style><script>${js}</script>`}/>
  </div>
);
};

export default DomSousa;