import React, { useState } from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdAutoFixHigh } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";

const Position = () => {
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
<title>タイトル</title>
<meta name="description" content="テキストテキストテキストテキストテキストテキスト">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="content">
<div class="text">
<h2 class="title">OUR SERVICES</h2>
<p class="large">
We can provide flower arrangements for offices,
hotels, restaurants & retail spaces.
</p>
<p>
テキストテキストテキテキストテキストテキストテキテキスト
テキストテキストテキテキストテキストテキストテキテキスト
テキストテキストテキテキストテキストテキストテキテキスト
</p>
<a class="btn" href="#">詳細はこちら</a>
</div>
<div class="img">
<img src="https://onl.sc/cnLF933" alt="">
</div>
</div>
</body>
</html>`)}>auto<MdAutoFixHigh /></button></div>
    <div className="myprofilecss">CSS<FaCss3Alt /><button onClick={()=>setCss(`@charset "UTF-8";
body {
background-color: #efeded;
color: #35383a;
font-family: "Noto Serif JP", serif;
}
a {
color: #35383a;
text-decoration: none;
}
img {
max-width: 100%;
}
/*————————————————
【要素の重ね合わせ（親要素）】
positionで要素を重ね合わせると高さがなくなるので、
高さを残したい場合は親要素で「height」を指定。
————————————————*/
.content {
max-width: 1000px;
height: 698px;
margin: 100px auto;
position: relative;
}
/*————————————————
【要素の重ね合わせ（子要素）】
「position: absolute;」と「left」で左に配置。
————————————————*/
.text {
max-width: 680px;
background-color: #fff;
padding: 84px 160px 84px 84px;
position: absolute;
left: 0;
}
.text p {
line-height: 1.8;
margin-bottom: 35px;
}
/*————————————————
「display: inline-block;」で下線をテキスト幅に合わせる。
————————————————*/
.text .title {
border-bottom: solid 1px #35383a;
display: inline-block;
font-size: 1.875rem;
font-weight: normal;
margin-bottom: 30px;
}
.text .large {
font-size: 1.875rem;
}
/*————————————————
「display: inline-block;」でボタンをテキスト幅に合わせてから
paddingでサイズを調整。
「transition」で、ホバーをふわっとさせる。
————————————————*/
.text .btn {
display: inline-block;
border: solid 1px #35383a;
border-radius: 30px;
padding: 16px 50px;
transition: all 0.3s ease;
}
.text .btn:hover {
background-color: #efeded;
}
/*————————————————
【要素の重ね合わせ（子要素）】
「position: absolute;」と「top」「right」で、
親要素の上から140px、右から20pxに配置。
————————————————*/
.img {
max-width: 400px;
position: absolute;
top: 140px;
right: 20px;
}
/*————————————————
「vertical-align: bottom;」で、画像の下の隙間を消す。
「top」を指定してもOK。
————————————————*/
.img img {
vertical-align: bottom;
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
<title>タイトル</title>
<meta name="description" content="テキストテキストテキストテキストテキストテキスト">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="content">
<div class="text">
<h2 class="title">OUR SERVICES</h2>
<p class="large">
We can provide flower arrangements for offices,
hotels, restaurants & retail spaces.
</p>
<p>
テキストテキストテキテキストテキストテキストテキテキスト
テキストテキストテキテキストテキストテキストテキテキスト
テキストテキストテキテキストテキストテキストテキテキスト
</p>
<a class="btn" href="#">詳細はこちら</a>
</div>
<div class="img">
<img src="https://onl.sc/cnLF933" alt="">
</div>
</div>
</body>
</html>'/>
  <textarea className="myprofilecc" placeholder='@charset "UTF-8";
body {
background-color: #efeded;
color: #35383a;
font-family: "Noto Serif JP", serif;
}
a {
color: #35383a;
text-decoration: none;
}
img {
max-width: 100%;
}
/*————————————————
【要素の重ね合わせ（親要素）】
positionで要素を重ね合わせると高さがなくなるので、
高さを残したい場合は親要素で「height」を指定。
————————————————*/
.content {
max-width: 1000px;
height: 698px;
margin: 100px auto;
position: relative;
}
/*————————————————
【要素の重ね合わせ（子要素）】
「position: absolute;」と「left」で左に配置。
————————————————*/
.text {
max-width: 680px;
background-color: #fff;
padding: 84px 160px 84px 84px;
position: absolute;
left: 0;
}
.text p {
line-height: 1.8;
margin-bottom: 35px;
}
/*————————————————
「display: inline-block;」で下線をテキスト幅に合わせる。
————————————————*/
.text .title {
border-bottom: solid 1px #35383a;
display: inline-block;
font-size: 1.875rem;
font-weight: normal;
margin-bottom: 30px;
}
.text .large {
font-size: 1.875rem;
}
/*————————————————
「display: inline-block;」でボタンをテキスト幅に合わせてから
paddingでサイズを調整。
「transition」で、ホバーをふわっとさせる。
————————————————*/
.text .btn {
display: inline-block;
border: solid 1px #35383a;
border-radius: 30px;
padding: 16px 50px;
transition: all 0.3s ease;
}
.text .btn:hover {
background-color: #efeded;
}
/*————————————————
【要素の重ね合わせ（子要素）】
「position: absolute;」と「top」「right」で、
親要素の上から140px、右から20pxに配置。
————————————————*/
.img {
max-width: 400px;
position: absolute;
top: 140px;
right: 20px;
}
/*————————————————
「vertical-align: bottom;」で、画像の下の隙間を消す。
「top」を指定してもOK。
————————————————*/
.img img {
vertical-align: bottom;
}'/>
  <textarea className="myprofilejj" placeholder=
  "*今回はJavaScriptを使用しません"
  />
  </div>
  </div>

  <div className="myprofileresult">Result<FiMonitor /></div>
  <iframe className="myprofilei" srcDoc={`${html}<style>${css}</style><script>${js}</script>`}/>
  </div>
);
};

export default Position;