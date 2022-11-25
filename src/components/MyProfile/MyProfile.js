import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useState } from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdAutoFixHigh } from "react-icons/md";
import './myprofile.css';

const MyProfile = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");

  return (
    <div>
      <div className="myprofiletitle">
        <div className="myprofilehtml">HTML<FaHtml5 /><button onClick={() => setHtml(templateh)}>auto<MdAutoFixHigh /></button></div>
        <div className="myprofilecss">CSS<FaCss3Alt /><button onClick={() => setCss(templatec)}>auto<MdAutoFixHigh /></button></div>
      </div>

      {/* HTML */}
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
      <div className="myprofileresult">Result<FiMonitor /></div>
      <iframe className="myprofilei" srcDoc={`${html}<style>${css}</style>`} />
    </div>
  );
};

export default MyProfile;
// ----------------------------------------------------//
// EditorのCSS //
// ----------------------------------------------------//
let styleh = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "44%",
  height: "144rem",
  border: "1px solid black",
  opacity: "0.5",
  zIndex: "10",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "4%"
}
let stylehh = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "44%",
  height: "144rem",
  border: "1px solid black",
  zIndex: "1",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "4%"
}
let stylec = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "44%",
  height: "144rem",
  border: "1px solid black",
  opacity: "0.5",
  zIndex: "10",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "52%"
}
let stylecc = {
  fontSize: "16px",
  backgroundColor: "#fcfcfc",
  color: "#555",
  width: "44%",
  height: "144rem",
  border: "1px solid black",
  zIndex: "1",
  borderRadius: "0.3rem",
  position: "absolute",
  left: "52%"
}

// ----------------------------------------------------//
// HTMLのセット //
// ----------------------------------------------------//
let templateh = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>my profile</title>
</head>
<body>
<header id="header" class="wrapper">
<h1 class="site-title"><a href="index.html"><img src="https://onl.bz/NB7e1FL" alt=“サイトのロゴ画像”></a></h1>
<nav>
<ul>
<li><a href="#about">About</a></li>
<li><a href="#bicycle">Bicycle</a></li>
</ul>
</nav>
</header>
<main>
<div id="mainvisual">
<img src="https://onl.tw/1jqyvzD" alt=“自転車の画像”>
</div>   
<section id="about" class="wrapper">
<h2 class="section-title">About</h2>
<div class="content">
<img src="https://onl.tw/YKW3nc8" alt=“プロフィールの画像”>
<div class="text">
<h3 class="content-title">Web Tarou</h3>
<p>
text<br>
text<br>
text
</p>
</div>
</div>
</section>
<section id="bicycle" class="wrapper">
<h2 class="section-title">Bicycle</h2>
<ul>
<li>
<img src="https://onl.tw/8WLEtYF" alt=“自転車の画像”>
<h3 class="content-title">title</h3>
<p>text</p>
</li>
<li>
<img src="https://onl.tw/8Cisz6c" alt=“自転車の画像”>
<h3 class="content-title">title</h3>
<p>text</p>
</li>
<li>
<img src="https://onl.tw/JYFcj1g" alt=“自転車の画像”>
<h3 class="content-title">title</h3>
<p>text</p>
</li>
</ul>
</section>
</main>
<footer id="footer">
<p>2022 Profile</p>
</footer>    
</body>
</html>`;
// ----------------------------------------------------//
// CSSのセット //
// ----------------------------------------------------//
let templatec = `body {
color: #383e45;
font-size: 0.9rem;
}
a {
text-decoration: none;
}
img {
max-width: 100%;
}
li {
list-style: none;
}
.site-title {
width: 120px;
line-height: 1px;
padding: 10px 0;
}
.site-title a {
display: block;
}
.section-title {
display: inline-block;
font-size: 2rem;
text-align: center;
margin-bottom: 60px;
border-bottom: solid 1px #383e45;
}
.content-title {
font-size: 1rem;
margin: 10px 0;
}
.wrapper {
max-width: 960px;
margin: 0 auto 100px auto;
padding: 0 4%;
text-align: center;
}
#header {
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
}
#header ul {
display: flex;
padding: 10px 0;
}
#header li {
margin-left: 30px;
}
#header li a {
color: #24292e;
}
#header li a:hover {
opacity: 0.7;
}
#mainvisual {
margin-bottom: 80px;
}
#mainvisual img {
width: 100%;
max-width: 1920px;
height: 600px;
object-fit: cover;
}
#about .content {
display: flex;
justify-content: center;
align-items: center;
}
#about img {
width: 100px;
height: 100px;
border-radius: 50%;
margin-right: 30px;
}
#about .text {
text-align: left;
}
#bicycle ul {
display: flex;
justify-content: space-between;
}
#bicycle li {
width: 32%;
}
#bicycle img {
height: 200px;
}
#footer {
font-size: 0.5rem;
padding: 10px 0;
text-align: center;
}`;
