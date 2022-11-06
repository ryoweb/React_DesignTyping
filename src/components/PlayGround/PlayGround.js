import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useState } from "react";

import './playground.css'
const PlayGround = () => {
  const [html, setHtml] = useState("");
  const [css,setCss] = useState("");
  const [js,setJs] = useState("");

  return (
<div className='mainarea'>
  <CodeEditor
            value={html}
            placeholder="HTML"
            language="html"
            onChange={(e) => setHtml(e.target.value)}
            padding={16}
            style={styleh}
/>
{/* CSS */}
<CodeEditor
            value={css}
            placeholder="CSS"
            language="css"
            onChange={(e) => setCss(e.target.value)}
            padding={16}
            style={stylec}
/>

{/* JavaScript */}
<CodeEditor
            value={js}
            placeholder="JavaScript"
            language="css"
            onChange={(e) => setJs(e.target.value)}
            padding={16}
            style={stylej}
/>
  <iframe className="playgroundi" srcDoc={`${html}<style>${css}</style><script>${js}</script>`}/>
  </div>
);
};

export default PlayGround

// ----------------------------------------------------//
// EditorのCSS //
// ----------------------------------------------------//
let styleh = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "47%",
  height: "30%",
  border: "1px solid black",
  opacity: "0.9",
  zIndex:"10",
  borderRadius:"0.3rem",
  position: "absolute",
  top: "1%",
  left:"2%",
  overflow: "scroll"
}
let stylec = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "47%",
  height: "30%",
  border: "1px solid black",
  opacity: "0.9",
  zIndex:"10",
  borderRadius:"0.3rem",
  position: "absolute",
  top:"33%",
  left:"2%",
  overflow: "scroll"
}

let stylej = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "47%",
  height: "30%",
  border: "1px solid black",
  opacity: "0.9",
  zIndex:"10",
  borderRadius:"0.3rem",
  position: "absolute",
  top:"65%",
  left:"2%",
  overflow: "scroll"
}