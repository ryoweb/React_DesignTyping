import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useState } from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdAutoFixHigh } from "react-icons/md";
import './dropdownmenu.css'

const DropDownMenu = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <div>
      <div className="myprofiletitle">
        <div className="myprofilehtml">HTML<FaHtml5 /><button onClick={() => setHtml(templateh)}>auto<MdAutoFixHigh /></button></div>
        <div className="myprofilecss">CSS<FaCss3Alt /><button onClick={() => setCss(templatec)}>auto<MdAutoFixHigh /></button></div>
      </div>

      <CodeEditor
        id="h1"
        value={html}
        language="html"
        onChange={(e) => setHtml(e.target.value)}
        padding={16}
        style={styleh}
      />
      <CodeEditor
        id="h2"
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


      <div className="dropresult">Result<FiMonitor /></div>
      <iframe className="dropi" srcDoc={`${html}<style>${css}</style>`} />
    </div>
  );
};

export default DropDownMenu

// ----------------------------------------------------//
// EditorのCSS //
// ----------------------------------------------------//
const styleh = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "44%",
  height: "128rem",
  border: "1px solid black",
  opacity: "0.7",
  zIndex: "10",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "4%",
  overflow: "scroll"
}
const stylehh = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "44%",
  height: "128rem",
  border: "1px solid black",
  zIndex: "1",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "4%",
  overflow: "scroll"
}
const stylec = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "44%",
  height: "128rem",
  border: "1px solid black",
  opacity: "0.5",
  zIndex: "10",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "52%"
}
const stylecc = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "44%",
  height: "128rem",
  border: "1px solid black",
  zIndex: "1",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "52%"
}


// ----------------------------------------------------//
// HTMLのセット //
// ----------------------------------------------------//
let templateh = `<!-- htmlはauto推奨 -->
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>タイトル</title>
<meta name="description" content="テキストテキストテキストテキストテキストテキスト">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
</head>

<body>
<header>
<h1>Navigation Menu</h1>
<nav>
<ul class="menu">
<li class="single">
<a href="#">Menu Single</a>
<ul class="menu-second">
<li><a href="#">Single Child</a></li>
<li><a href="#">Single Child</a></li>
<li><a href="#">Single Child</a></li>
</ul>
</li>
<li class="wide">
<a href="#">Menu Wide</a>
<ul class="menu-second">
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
</ul>
</li>
<li class="single">
<a href="#">Menu Single</a>
<ul class="menu-second">
<li><a href="#">Single Child</a></li>
<li><a href="#">Single Child</a></li>
<li><a href="#">Single Child</a></li>
</ul>
</li>
<li class="wide">
<a href="#">Menu Wide</a>
<ul class="menu-second">
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
<li><a href="#">Wide Child</a></li>
</ul>
</li>
</ul>
</nav>
</header>
</body>
</html>`;
// ----------------------------------------------------//
// CSSのセット //
// ----------------------------------------------------//
let templatec = `html {
font-size: 100%;
}
body {
background-color: #f1f1f1;
font-size: 0.875rem;
}
ul {
list-style: none;
}
a {
text-decoration: none;
color: #fff;
}
header {
width: 100%;
background-color: #fff;
}
h1 {
height: 140px;
line-height: 140px;
font-size: 1.625rem;
text-align: center;
}
nav {
background-color: #121212;
}
.menu {
max-width: 1000px;
display: flex;
justify-content: space-between;
margin: 0 auto;
position: relative;
}
.menu > li {
width: 25%;
height: 50px;
line-height: 50px;
text-align: center;
}
.menu > li:hover {
background-color: #3c3636;
}
.menu > li a {
display: block;
}
.menu-second {
visibility: hidden;
}
.menu > .single {
position: relative;
}
.single .menu-second {
width: 100%;
background-color: #3c3636;
position: absolute;
top: 50px;
left: 0;
}
.single .menu-second li a:hover {
opacity: 0.7;
}
.single:hover .menu-second {
visibility: visible;
}
.wide .menu-second {
width: 100%;
background-color: #3c3636;
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
position: absolute;
top: 50px;
left: 0;
}
.wide .menu-second li {
width: 25%;
}
.wide .menu-second li a:hover {
opacity: 0.7;
}
.wide:hover .menu-second {
visibility: visible;
}`;