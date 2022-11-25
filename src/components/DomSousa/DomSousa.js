import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useState } from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdAutoFixHigh } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";
import './domsousa.css'

const DomSousa = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <div>
      <div className="myprofiletitle">
        <div className="myprofilehtml">HTML<FaHtml5 /><button onClick={() => setHtml(templateh)}>auto<MdAutoFixHigh /></button></div>
        <div className="myprofilecss">CSS<FaCss3Alt /><button onClick={() => setCss(``)}>auto<MdAutoFixHigh /></button></div>
        <div className="myprofilejs">JavaScript<TbBrandJavascript /><button onClick={() => setJs(templatej)}>auto<MdAutoFixHigh /></button></div>
      </div>

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
      {/* CSS */}
      <CodeEditor
        value={css}
        language="css"
        onChange={(e) => setCss(e.target.value)}
        padding={16}
        style={stylec}
      />
      <CodeEditor
        placeholder={templatec}
        language="css"
        padding={16}
        style={stylecc}
      />
      {/* JavaScript */}
      <CodeEditor
        value={js}
        language="javascript"
        onChange={(e) => setJs(e.target.value)}
        padding={16}
        style={stylej}
      />
      <CodeEditor
        placeholder={templatej}
        language="css"
        padding={16}
        style={stylejj}
      />

      <div className="domsousaresult">Result<FiMonitor /></div>
      <iframe className="domsousai" srcDoc={`${html}<style>${css}</style><script>${js}</script>`} />
    </div>
  );
};

export default DomSousa;

// ----------------------------------------------------//
// EditorのCSS //
// ----------------------------------------------------//
let styleh = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "30%",
  height: "15rem",
  border: "1px solid black",
  opacity: "0.5",
  zIndex: "10",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "2.5%"
}
let stylehh = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "30%",
  height: "15rem",
  border: "1px solid black",
  zIndex: "1",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "2.5%"
}
let stylec = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "30%",
  height: "15rem",
  border: "1px solid black",
  opacity: "0.5",
  zIndex: "10",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "35%"
}
let stylecc = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "30%",
  height: "15rem",
  border: "1px solid black",
  zIndex: "1",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "35%"
}
let stylej = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "30%",
  height: "15rem",
  border: "1px solid black",
  opacity: "0.5",
  zIndex: "10",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "67.5%"
}
let stylejj = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "30%",
  height: "15rem",
  border: "1px solid black",
  zIndex: "1",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "67.5%"
}

// ----------------------------------------------------//
// HTMLのセット //
// ----------------------------------------------------//
let templateh = `<p id="text">Hello JS</p>`;
// ----------------------------------------------------//
// CSSのセット //
// ----------------------------------------------------//
let templatec = ``;
// ----------------------------------------------------//
// JavaScriptのセット //
// ----------------------------------------------------//
let templatej = `let text = document.getElementById("text");
text.innerHTML = "Change";`;