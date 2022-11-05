import React, { useState } from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdAutoFixHigh } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";

const DropDownMenu = () => {
  const [html, setHtml] = useState("");
  const [css,setCss] = useState("");
  const [js,setJs] = useState("");

  return (
<div>
  <div className="myprofiletitle">
    <div className="myprofilehtml">HTML<FaHtml5 /><button onClick={()=>setHtml(`<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>DropdownMenu</title>
<link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
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
</html>`)}>auto<MdAutoFixHigh /></button></div>
    <div className="myprofilecss">CSS<FaCss3Alt /><button onClick={()=>setCss(`html {
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
}`)}>auto<MdAutoFixHigh /></button></div>
    <div className="myprofilejs">JavaScript<TbBrandJavascript /><button>auto<MdAutoFixHigh /></button></div>
  </div>

  <div className="myprofileeditor">
  <textarea value={html} onChange={(event) => setHtml(event.target.value)} className="myprofileh" />
  <textarea value={css} onChange={(event) => setCss(event.target.value)} className="myprofilec" />
  <textarea value={js} onChange={(event) => setJs(event.target.value)} className="myprofilej" />
  <div className="setmyprofileeditor">
  <textarea className="myprofilehh" placeholder='<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>DropdownMenu</title>
<link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
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
</html>'/>
  <textarea className="myprofilecc" placeholder='html {
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
}' />
  <textarea className="myprofilejj" placeholder='今回は使用しません' />
  </div>
  </div>

  <div className="myprofileresult">Result<FiMonitor /></div>
  <iframe className="myprofilei" srcDoc={`${html}<style>${css}</style><script>${js}</script>`}/>
  </div>
);
};

export default DropDownMenu