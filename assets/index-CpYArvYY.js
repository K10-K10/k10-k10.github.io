import{n as e,r as t}from"./rolldown-runtime-DGruFWvd.js";import{a as n,c as r,d as i,f as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g}from"./vendor-DBz16_aZ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var _=t(l()),v=t(o());function y({name:e,theme:t=`auto`,style:n={}}){let[r,i]=(0,v.useState)(`var(--white-color)`),[a,o]=(0,v.useState)(``),s=`/SVG-icons/svg/${e}.svg`;return(0,v.useEffect)(()=>{let e;switch(t){case`light`:e=`var(--white-color)`;break;case`dark`:e=`var(--black-color)`;break;case`re`:e=`var(--reverse-color)`;break;default:e=document.body.dataset.theme===`dark`?`var(--black-color)`:`var(--white-color)`}i(e),fetch(s).then(e=>e.text()).then(e=>o(e)).catch(console.error)},[s,t]),d(`div`,{style:{color:r,margin:`auto`,height:`24px`,width:`24px`,...n},dangerouslySetInnerHTML:{__html:a}})}function ee(){let e=[[`Documents`,`docs`],[`Tools`,`tools`],[`Blog`,`blog`],[`About`,`about`]],[t,n]=(0,v.useState)(window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`);return(0,v.useEffect)(()=>{document.body.setAttribute(`data-theme`,t)},[t]),m(`header`,{className:`header`,children:[d(`a`,{href:`/`,className:`title`,children:`K10-K10`}),m(`label`,{id:`hamburger-menu`,children:[d(`input`,{id:`menu`,type:`checkbox`}),d(`div`,{id:`topic_scope_bg`,children:d(`div`,{id:`topic_scope`,children:e.map((e,t)=>d(`a`,{href:`/${e.at(1)}`,className:`topic`,children:e.at(0)},t))})}),d(`div`,{id:`box`,children:d(`span`,{id:`bar`})})]}),d(`div`,{className:`theme`,onClick:()=>{n(e=>e===`dark`?`light`:`dark`)},children:d(y,{name:t===`dark`?`moon`:`sun`,theme:`light`,style:{height:`24px`,width:`24px`}})})]})}function b(){return d(`footer`,{children:m(`div`,{className:`footer_info`,children:[m(`p`,{children:[`© `,new Date().getFullYear(),` K10-K10`]}),d(`p`,{children:`Powered by React, Vite & GitHub Pages`})]})})}function x({linkTitle:e,title:t,description:n,pageUrl:r}){return(0,v.useEffect)(()=>{let t=`K10-K10`;e&&(t=`K10-K10 | ${e}`),document.title=t;let i=document.querySelector(`meta[name="description"]`);i||(i=document.createElement(`meta`),i.setAttribute(`name`,`description`),document.head.appendChild(i)),i.setAttribute(`content`,n);let a=document.querySelector(`meta[property="og:title"]`);a||(a=document.createElement(`meta`),a.setAttribute(`property`,`og:title`),document.head.appendChild(a)),a.setAttribute(`content`,t);let o=document.querySelector(`meta[property="og:description"]`);if(o||(o=document.createElement(`meta`),o.setAttribute(`property`,`og:description`),document.head.appendChild(o)),o.setAttribute(`content`,n),r){let e=document.querySelector(`meta[property="og:url"]`);e||(e=document.createElement(`meta`),e.setAttribute(`property`,`og:url`),document.head.appendChild(e)),e.setAttribute(`content`,r);let t=document.querySelector(`link[rel="canonical"]`);t||(t=document.createElement(`link`),t.setAttribute(`rel`,`canonical`),document.head.appendChild(t)),t.setAttribute(`href`,r)}let s=document.querySelector(`meta[name="twitter:title"]`);s||(s=document.createElement(`meta`),s.setAttribute(`name`,`twitter:title`),document.head.appendChild(s)),s.setAttribute(`content`,t);let c=document.querySelector(`meta[name="twitter:description"]`);c||(c=document.createElement(`meta`),c.setAttribute(`name`,`twitter:description`),document.head.appendChild(c)),c.setAttribute(`content`,n)},[e,t,n,r]),null}const S=[{id:3,title:`Create a script for this blog`,headName:`post_script`,date:`05-Oct-2025`,content:`Until now, this blog written directly into JSON files.
However, that was a faff. Because it should have escape characters.

Therefore, I created script to automatically generate JSON file from text files.
It was written in C++.

Text file format
File name -> Page header name
First, describe the page data

---

ID
Date
Title

---

I had never used a file system library before,
and handling “\\n” was difficult.

I wish to add elements such as “title” and “table”.
Ultimately, I want to be able to write in Markdown format.`},{id:2,title:`Added langton's ant`,headName:`langton`,date:`04-Oct-2025`,content:`I added a new page about Langton's Ant.
It was my first time creating a program using JavaScript,
and I learned a lot from it.
It was difficult to make it display quickly.

I want to be able to change the speed and display size.
I might also add the “Game of Life.”
But, I don't know how to change colour in touched grid;;
I should have to learn more...`},{id:5,title:`Add KrowTUI documentation`,headName:`krow`,date:`21-Jun-2026`,content:`I created a new page about KrowTUI.
KrowTUI is my original library in C++ to make TUI (Terminal User Interface) applications.

I learned a lot from creating this library.
Please check it out if you are interested in TUI applications.

Documentation is fetching from the GitHub repository each Monday and Friday, so it will be updated automatically.

I'll added more features in the future, so please look forward to it.`},{id:1,title:`First blog`,headName:`first_blog`,date:`14-Sep-2025`,content:`This is a test for the blog component.
Here I will write about technical content and my opinions.
I will update this blog as much as possible.`},{id:4,title:"Transitioned from `Create React App` to `Vite`",headName:`vite`,date:`19-Oct-2025`,content:`On February 14, 2025, \`Create React App\` was officially deprecated.
I learnt about this from a comment on Qiita.
I thank the person who told me.

So, I decided to migrate to \`Vite\`, a fast and modern build tool.
I thought it would be complicated, but it turned out to be very simple.

So far, I haven’t encountered any issues.`}];function te(){return m(`div`,{id:`home`,children:[d(x,{title:`K10-K10 - Personal Portfolio & Projects`,linkTitle:`Home`,description:`K10-K10 - Personal portfolio featuring software development projects, interactive tools, and blog posts. Explore my work in programming and creative projects.`,pageUrl:`https://K10-K10.github.io/`}),d(`h1`,{children:`Hello,World!`}),m(`div`,{className:`information`,children:[d(`h2`,{children:`Tools`}),d(`p`,{children:"New `langton's ant`"}),d(`h2`,{children:`Latest Blog Posts`}),d(`ul`,{children:S.slice(-3).reverse().map(e=>d(`li`,{children:d(`a`,{href:`/blog/${e.headName}`,children:e.title})},e.headName))})]})]})}function C(){return m(`div`,{id:`NotFound`,children:[d(x,{title:`K10-K10 - Page Not Found`,linkTitle:`404`,description:`Page not found. The requested page does not exist on K10-K10 website.`}),d(`h1`,{children:`Error:404`}),d(`h2`,{children:`Page NotFound`})]})}function w({children:e,onClick:t,disabled:r=!1,style:i={},className:a}){let o=n({margin:`10px`,height:`50px`,width:`200px`,color:`var(--button-text-color)`,backgroundColor:`var(--button-color)`,border:`1px solid var(--button-color)`,borderRadius:`10px`,fontFamily:`inherit`,fontSize:`var(--Base-FontSize)`,textAlign:`center`,...i});return d(`button`,{className:`button`+a,onClick:t,disabled:r,css:o,children:e})}function T(){let[e,t]=(0,v.useState)(0),[n,r]=(0,v.useState)(0),[i,a]=(0,v.useState)(0);e>255&&t(255),e<0&&t(0),n>255&&r(255),n<0&&r(0),i>255&&a(255),i<0&&a(0);let o=(0,v.useRef)(null);return(0,v.useEffect)(()=>{if(o.current){let t=o.current.getContext(`2d`);if(!t)return;t.fillStyle=`rgb(${e},${n},${i})`,t.fillRect(0,0,100,100)}},[e,n,i]),m(`div`,{id:`RGB`,children:[d(x,{title:`React Test`,linkTitle:`RGB`,description:`K10-K10 site - React test page`}),d(`h1`,{children:`RGB checker`}),m(`div`,{children:[m(`p`,{className:`RGB`,children:[`R: `,e]}),d(w,{children:`R + 5`,onClick:()=>t(e+5),disabled:!1}),d(w,{children:`R - 5`,onClick:()=>t(e-5),disabled:!1})]}),m(`div`,{children:[m(`p`,{className:`RGB`,children:[`G: `,n]}),d(w,{children:`G + 5`,onClick:()=>r(n+5),disabled:!1}),d(w,{children:`G - 5`,onClick:()=>r(n-5),disabled:!1})]}),m(`div`,{children:[m(`p`,{className:`RGB`,children:[`B: `,i]}),d(w,{children:`B + 5`,onClick:()=>a(i+5),disabled:!1}),d(w,{children:`B - 5`,onClick:()=>a(i-5),disabled:!1})]}),d(`canvas`,{id:`myCanvas`,ref:o,width:100,height:100})]})}var ne=T;function re({type:e=`text`,label:t,value:n,onChange:r,tmp:i=``,label_style:a={},input_style:o={}}){let s={label:{...a},input:{fontSize:`var(--Base-FontSize)`,fontFamily:`inherit`,backgroundColor:`var(--background-color)`,padding:`10px`,...o}};return m(`div`,{children:[m(`label`,{style:s.label,htmlFor:t,children:[t,`:`,` `]}),d(`input`,{type:e,value:n,onChange:e=>r(e.target.value),placeholder:i,style:s.input,id:t})]})}function ie({children:e,dialog_style:t={},button_style:n={}}){let r={dialog:{position:`absolute`,margin:0,padding:`16px`,borderRadius:`16px`,border:`none`,boxShadow:`0 4px 12px rgba(0,0,0,0.2)`,top:`20px`,left:`50%`,transform:`translateX(-50%)`,background:`white`,...t},closeButton:{background:`var(--primary-color)`,height:`32px`,padding:`4px 12px`,borderRadius:`8px`,border:`none`,cursor:`pointer`,...n}};return m(`dialog`,{open:!0,style:r.dialog,children:[e,d(`form`,{method:`dialog`,children:d(w,{style:r.closeButton,disabled:!1,children:`OK`})})]})}var ae=ie;function oe(){let[e,t]=(0,v.useState)(``),[n,r]=(0,v.useState)([]),[i,a]=(0,v.useState)([]);return m(`div`,{className:`github`,children:[d(x,{title:`Github API`,linkTitle:`Github`,description:`K10-K10 site - Use Github-API`}),d(re,{type:`text`,label:`Github User Name`,value:e,onChange:t,tmp:`Input`}),d(w,{onClick:async()=>{if(!e){a(e=>[...e,`Error: name is required`]);return}try{let t=await fetch(`https://api.github.com/users/${e}/repos`);if(!t.ok)throw Error(`User is not found`);let n=await t.json();r(n)}catch(e){console.error(`Request error:`,e),a(e=>[...e,`API failed`])}},disabled:!1,children:`API`}),i.map((e,t)=>d(ae,{button_style:{color:`var(--error-color)`},children:d(`p`,{children:e})},t)),d(`ul`,{children:n.map(e=>d(`li`,{children:d(`a`,{href:e.html_url,target:`_blank`,rel:`noreferrer`,children:e.name})},e.id))})]})}var se=oe,E=200,D=5;function ce(){let e=(0,v.useRef)(null),t=(0,v.useRef)(Array.from({length:E},()=>Array(E).fill(!1))),n=(0,v.useRef)(0),r=(0,v.useRef)(Math.floor(E/2)),i=(0,v.useRef)(Math.floor(E/2)),a=(0,v.useRef)(0),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(0);function u(){n.current=0,t.current=Array.from({length:E},()=>Array(E).fill(!1)),r.current=Math.floor(E/2),i.current=Math.floor(E/2),a.current=0;let o=e.current.getContext(`2d`);o&&(o.fillStyle=`white`,o.fillRect(0,0,E*D,E*D),o.fillStyle=`red`,o.fillRect(r.current*D,i.current*D,D,D))}function f(){n.current+=1;let o=e.current.getContext(`2d`);if(!o)return;let s=t.current,c=r.current,u=i.current,d=a.current;switch(s[u][c]?(d=(d+3)%4,s[u][c]=!1,o.fillStyle=`white`):(d=(d+1)%4,s[u][c]=!0,o.fillStyle=`black`),o.fillRect(c*D,u*D,D,D),d){case 0:u=(u-1+E)%E;break;case 1:c=(c+1)%E;break;case 2:u=(u+1)%E;break;case 3:c=(c-1+E)%E;break}o.fillStyle=`red`,o.fillRect(c*D,u*D,D,D),r.current=c,i.current=u,a.current=d,l(e=>e+1)}return(0,v.useEffect)(()=>{if(!o)return;let e=setInterval(f,8);return()=>clearInterval(e)},[o]),(0,v.useEffect)(()=>{u()},[]),m(`div`,{className:`ants`,children:[d(x,{title:`Langton's ant`,linkTitle:`Ants`,description:`K10-K10 site - Langton's ant simulator`}),d(`h1`,{className:`ants-title`,children:`Langton's ant`}),d(`canvas`,{className:`ants-canvas`,ref:e,width:E*D,height:E*D,style:{border:`1px solid black`}}),m(`div`,{className:`ants-controls`,style:{marginTop:`10px`},children:[d(w,{onClick:u,disabled:!1,children:d(y,{name:`reset`,theme:`re`})}),d(w,{onClick:f,disabled:!1,children:d(y,{name:`jump`,theme:`re`})}),d(w,{onClick:()=>s(!o),disabled:!1,children:d(y,{name:o?`stop`:`start`,theme:`re`})})]}),m(`p`,{className:`ants-position`,children:[`Ant Position: (`,r.current,`, `,i.current,`), Direction: `,a.current,`, count `,n.current]})]})}var le=ce;function O({style:e={}}={}){let t={spacer:{padding:`15px`,...e}};return d(`div`,{style:t.spacer})}function k({title:e,children:t,style_scope:n={},style_contents:r={}}){return m(`div`,{className:`talk-scope`,style:n,children:[d(`div`,{className:`title`,children:e}),d(`div`,{className:`talk-contents`,style:r,children:t})]})}function A(){return m(`div`,{className:`about`,children:[d(x,{title:`K10-K10 - About`,linkTitle:`About`,description:`Learn about K10-K10 - a junior high school developer passionate about C++, competitive programming, and robotics. Explore portfolio and projects.`,pageUrl:`https://K10-K10.github.io/About`}),m(k,{title:`About the site`,style_scope:{background:`var(--cloudy_background-color)`},children:[d(`p`,{children:`This site is my React practice site.`}),d(`p`,{children:`Content related to blogs, tools, games, and more will be added.`}),d(O,{}),d(`p`,{children:`This site is powered by GitHub Pages and React.`}),d(`a`,{href:`https://github.com/K10-K10/k10-k10.github.io`,children:`This site's source code`})]}),m(k,{title:`About the Author`,children:[m(`div`,{className:`user-wrapper`,children:[d(`img`,{src:`/favicon.ico`,alt:`author icon`}),m(`div`,{className:`user-info`,children:[d(`p`,{children:`Hello! I'm K10-K10. I'm junior high school student`}),d(`a`,{href:`https://github.com/K10-K10`,children:`My GitHub Account`}),d(`p`,{children:`I primarily use C++, and belong to a robotics team.`}),d(`a`,{href:`https://techno-robocup.github.io/`,children:`Robot team's blogs`})]})]}),d(`p`,{children:`I started programming in first grade and attended robotics classes.`}),d(`p`,{children:`At the same time, my father recommended Unity, and I started learning C#`}),d(`p`,{children:`I entered junior high school and started competitive programming and C++.`}),d(`p`,{children:`Recently, I haven't been able to join in competitions. Therefore, I want to join as much as possible.`}),d(O,{}),d(`p`,{children:`I want to update this site as much as possible.`}),d(`p`,{children:`Thank you for Reading!`})]})]})}function j(){let e=[...S].sort((e,t)=>t.id-e.id);return m(`div`,{className:`blog-home`,children:[d(x,{title:`K10-K10 - Blog`,linkTitle:`Blog`,description:`K10-K10 Blog - Read articles about programming, robotics, competitive programming, and software development projects.`,pageUrl:`https://K10-K10.github.io/Blog`}),d(k,{title:`Blog`,children:e.map(e=>d(`div`,{children:m(`p`,{className:`blog-list`,children:[e.date,` :`,` `,d(c,{className:`blog-link`,to:`/blog/${e.headName}`,children:e.title})]})},e.id))})]})}function M(){let{headName:e}=a();i();let t=S.find(t=>t.headName===e);return t?d(`div`,{className:`blog-post`,children:m(k,{title:t.title,children:[d(`small`,{style:{textAlign:`center`,display:`block`,marginBottom:`30px`},className:`data`,children:t.date}),d(`pre`,{style:{lineHeight:`150%`,whiteSpace:`pre-wrap`},children:t.content})]})}):d(C,{})}function N(){return m(`div`,{className:`tools`,children:[d(x,{title:`K10-K10 - Tools`,linkTitle:`Tools`,description:`K10-K10 Tools - Interactive tools including GitHub API viewer, RGB color checker, and Langton's Ant simulator.`,pageUrl:`https://K10-K10.github.io/Tools`}),d(`h1`,{children:`Tools`}),d(`a`,{href:`Tools/Github`,children:`Github API`}),d(`a`,{href:`Tools/RGB`,children:`RGB checker`}),d(`a`,{href:`Tools/Ants`,children:`Langton's Ant`})]})}var P=N;function F({title:e,description:t,imageUrl:n,link:r}){return d(`div`,{className:`grid-item`,onClick:()=>window.location.href=r||`./`,children:m(`div`,{className:`grid-content`,children:[n&&d(`img`,{src:n,alt:e,className:`grid-image`}),m(`div`,{className:`grid-text`,children:[d(`h2`,{className:`grid-title`,children:e}),d(`p`,{className:`grid-description`,children:t})]})]})})}function I(){return m(`div`,{className:`Docs-home`,children:[d(x,{title:`K10-K10 - Documentation`,linkTitle:`Docs`,description:`K10-K10 Documentation - Technical documentation and guides for K10-K10 projects and tools.`,pageUrl:`https://K10-K10.github.io/Docs`}),d(k,{title:`Documentation`,children:d(F,{title:`KrowTUI`,description:`C++ library to make TUI tools.`,imageUrl:`/github_logo.png`,link:`/docs/tuilib`})})]})}function L({textToCopy:e}){let[t,n]=(0,v.useState)(!1);return d(`div`,{children:d(`button`,{onClick:async()=>{try{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),1e3)}catch(e){console.error(`Failed to copy: `,e),alert(`Failed to copy text.`)}},children:t?`Copied!`:`Copy`})})}var R=L;function z({lang:e,inline:t,children:n}){let r=e?e.replace(`language-`,``):`text`;return t?d(`code`,{css:B,children:n}):m(`div`,{css:V,children:[d(`p`,{css:H,children:r}),d(`div`,{css:U,children:d(R,{textToCopy:String(n)})}),d(u,{language:r,style:h,customStyle:{background:`transparent`,padding:0,margin:0,fontSize:`1rem`},codeTagProps:{style:{fontFamily:`monospace`,tabSize:4}},children:String(n).replace(/\n$/,``)})]})}var B=n({background:`var(--code-color)`,color:`var(--text-right-color)`,padding:`2px 6px`,borderRadius:`4px`,fontSize:`0.95em`,fontFamily:`monospace`,wordBreak:`break-word`,display:`inline-block`}),V=n({position:`relative`,marginTop:`10px`,marginBottom:`10px`,display:`block`,width:`100%`,textAlign:`left`,padding:`15px`,background:`var(--code-color)`,borderRadius:`10px`,overflowX:`auto`}),H=n({color:`#aaa`,fontSize:`0.9rem`,marginBottom:`8px`,textTransform:`uppercase`}),U=n({position:`absolute`,top:`10px`,right:`10px`,zIndex:10}),W={sections:[{order:1,basePath:`contents/tuilib`,items:[{title:`Readme`,path:`/README.md`},{title:`Getting Started`,items:[{title:`Getting Started`,path:`/docs/getting_started.md`},{title:`Examples`,path:`/docs/examples.md`}]},{title:`Sample`,path:`/docs/samples.md`,items:[{title:`Colour Palette`,path:`/docs/sample/colour_palette.md`},{title:`Counter`,path:`/docs/sample/counter.md`}]},{title:`References`,path:`/docs/references.md`,items:[{title:`App`,path:`/docs/references/app.md`},{title:`Events`,path:`/docs/references/events.md`,items:[{title:`Key Event`,path:`/docs/references/events/keyevent.md`}]},{title:`Layout`,path:`/docs/references/layout.md`,items:[{title:`Rect`,path:`/docs/references/layout/rect.md`}]},{title:`Objects`,path:`/docs/references/objects.md`,items:[{title:`Block`,path:`/docs/references/object/block.md`},{title:`List`,path:`/docs/references/object/list.md`},{title:`Text Field`,path:`/docs/references/object/textfield.md`}]},{title:`Style`,path:`/docs/references/style/style.md`},{title:`Text`,path:`/docs/references/text/text.md`}]},{title:`Tips`,path:`/docs/points.md`},{title:`Changelog`,path:`/docs/changelog.md`,items:[{title:`v0.1.0`,path:`/docs/changelog/0.1.0.md`},{title:`v0.2.0`,path:`/docs/changelog/0.2.0.md`},{title:`v0.3.0`,path:`/docs/changelog/0.3.0.md`}]}]}]},G=e=>`/docs/tuilib/${e.replace(/^\//,``).replace(/\.md$/,``)}`.replace(/\/+/g,`/`);function K(){let e=g(),t=W.sections[0];return d(`aside`,{className:`tui-sidebar`,children:d(`ul`,{className:`tui-sidebar-list`,children:t.items.map((t,n)=>{let r=t.path?G(t.path):``,i=e.pathname===r;return t.items?m(`li`,{className:`tui-sidebar-item has-children`,children:[d(`div`,{className:`tui-sidebar-group-title`,children:t.path?d(c,{to:r,className:`tui-sidebar-link ${i?`is-active`:``}`,children:t.title}):t.title}),d(`ul`,{className:`tui-sidebar-sub-list`,children:t.items.map((t,n)=>{let r=t.path?G(t.path):``,i=e.pathname===r;return t.items?m(`li`,{className:`tui-sidebar-sub-item has-grand-children`,children:[d(`div`,{className:`tui-sidebar-sub-group-title`,children:t.path?d(c,{to:r,className:`tui-sidebar-link ${i?`is-active`:``}`,children:t.title}):t.title}),d(`ul`,{className:`tui-sidebar-grand-list`,children:t.items.map((t,n)=>{let r=G(t.path),i=e.pathname===r;return d(`li`,{className:`tui-sidebar-grand-item`,children:d(c,{to:r,className:`tui-sidebar-link tui-sidebar-grand-link ${i?`is-active`:``}`,children:t.title})},n)})})]},n):d(`li`,{className:`tui-sidebar-sub-item`,children:d(c,{to:r,className:`tui-sidebar-link ${i?`is-active`:``}`,children:t.title})},n)})})]},n):d(`li`,{className:`tui-sidebar-item`,children:d(c,{to:r,className:`tui-sidebar-link ${i?`is-active`:``}`,children:t.title})},n)})})})}var ue=e({default:()=>q}),q=`---
version: 0.3.0
update: 19/06/2026
---

# Krow TUI

![Krow Logo](docs/logo.svg)

[![build](https://github.com/K10-K10/krowTUI/actions/workflows/build.yml/badge.svg)](https://github.com/K10-K10/krowTUI/actions/workflows/build.yml)
[![Lint](https://github.com/K10-K10/krowTUI/actions/workflows/lint.yml/badge.svg)](https://github.com/K10-K10/krowTUI/actions/workflows/lint.yml)
[![GitHub Release Date](https://img.shields.io/github/release-date/K10-K10/krowTUI)](https://github.com/K10-K10/krowTUI/releases)
[![GitHub Releases](https://img.shields.io/github/release/K10-K10/krowTUI.svg)](https://github.com/K10-K10/krowTUI/releases)
[![GitHub License](https://img.shields.io/github/license/K10-K10/krowTUI)](https://github.com/K10-K10/krowTUI/blob/main/LICENSE)

## Quick start

### Installation

This library is header-only, so you can simply download the source code and include the necessary header files in your project.

#### Recommended method

You can use Cmake's \`FetchContent\` module to include the TUI library in your procejt.
Add the following lines to your \`CMakeLists.txt\`

\`\`\`txt
include(FetchContent)

FetchContent_Declare(
    krowTUI
    GIT_REPOSITORY https://github.com/K10-K10/krowTUI
    GIT_TAG main # We suport only latest version, so use main branch
)

FetchContent_MakeAvailable(krowTUI)

add_executable(<your_app> main.cpp)
target_link_libraries(<your_app> PRIVATE K10-K10::krow)
\`\`\`

Other methods is [here](Getting Started)

## Usage

You can directluy include header file:

\`\`\`cpp
#include <K10-K10/krow.h>
\`\`\`

## Example

\`\`\`cpp
#include <K10-K10/krow.h>

using namespace krow;
int main() {
  app.init();
  TextField label;
  Line l = "Hello TUI!"_s.style(style::Default().bold());
  Text text = l.alignment_left();
  label.contents({text});

  List list;
  list.items({Text("item1"_s), Text("item2"_s), Text("item3"_s),
              Text("item4"_s), Text("item5"_s)});
  Block box;
  label.position({1, 1, 20, 1});
  list.position({1, 3, 20, 5});
  box.position({0, 0, FULL, FULL});
  app.loop([&]() {
    box.draw();
    label.draw();
    list.draw();

    input::key.read();
    auto key = input::key.getKeyCode();

    if (key == input::KeyCode::UP) {
      list.move_up();
    }
    if (key == input::KeyCode::DOWN) {
      list.move_down();
    }
    if (key == input::KeyCode::CHAR) {
      char c = input::key.getCurrentChar();
      if (c == 'q') {
        app.stop();
      }
    }
  });

  return 0;
}
\`\`\`

## Documentations

- [Getting Started](docs/getting_started.md)
- [API Reference](docs/references.md)
- [Examples](docs/examples.md)
- [Points to Note](docs/points.md)
- [Samples](docs/samples.md)
- [Changelog](docs/changelog.md)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-Party Notices

This project uses \`ncurses\` library. It's license is included below.

\`\`\`text
Copyright 2018-2021,2023 Thomas E. Dickey
Copyright 1998-2016,2017 Free Software Foundation, Inc.
Author: Zeyd M. Ben-Halim <zmbenhal@netcom.com> 1992,1995
   and: Eric S. Raymond <esr@snark.thyrsus.com>
   and: Thomas E. Dickey                        1996-on

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, distribute with modifications, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE ABOVE COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
THE USE OR OTHER DEALINGS IN THE SOFTWARE.
\`\`\`
`,J=e=>typeof e==`string`?e.toLowerCase().trim().replace(/\s+/g,`-`).replace(/\./g,`-`).replace(/\(\)/g,``):Array.isArray(e)?e.map(e=>J(e)).join(``):e&&typeof e==`object`&&`props`in e?J(e.props.children):``,de=e=>{let t={title:``,version:``,date:``,namespace:``},n=e;if(e&&e.startsWith(`---`)){let r=e.split(`---`);r.length>=3&&(n=r.slice(2).join(`---`).trim(),r[1].split(`
`).forEach(e=>{let[n,...r]=e.split(`:`);n&&r.length>0&&(t[n.trim()]=r.join(`:`).trim().replace(/['"]/g,``))}))}return{data:t,bodyContent:n}};function fe(){let e=g(),{data:t,bodyContent:n}=de(q),r=t.title||`README`;return m(`div`,{className:`TuiDocs-main`,children:[d(x,{title:`K10-K10 - ${r}`,linkTitle:`tui`,description:`K10-K10 Documentation - TUI library in C++ documentation.`,pageUrl:`https://K10-K10.github.io/docs/tuilib`}),m(`div`,{style:{display:`flex`,gap:`20px`,alignItems:`flex-start`,width:`100%`},children:[d(K,{}),m(k,{title:r,style:{flex:1},children:[d(`div`,{style:{marginBottom:`20px`,display:`flex`,gap:`15px`,flexDirection:`column`},children:d(`a`,{href:`https://github.com/k10-k10/KrowTUI`,target:`_blank`,rel:`noreferrer`,className:`github-link`,children:`Github Repository`})}),d(s,{remarkPlugins:[p],components:{code({node:e,className:t,children:n,...r}){let i=/language-(\w+)/.exec(t||``),a=i?i[1]:`text`,o=!t&&!String(n).includes(`
`);return d(z,{lang:a,inline:o,children:n})},h2({children:e,...t}){let n=J(e);return d(`h2`,{id:n,...t,children:e})},a({href:t,children:n,...r}){if(!t)return null;if(t.startsWith(`http`)||t.startsWith(`#`))return d(`a`,{href:t,target:t.startsWith(`http`)?`_blank`:void 0,rel:`noreferrer`,...r,children:n});let i=()=>{setTimeout(()=>{window.scrollTo(0,0);let e=document.querySelector(`.TuiDocs-main`);e&&(e.scrollTop=0)},50)},a=t.replace(/^\.\.\//,``).replace(/^\.\//,``).replace(/\.md$/,``),o=e.pathname.split(`/`);o.pop();let s=`${o.join(`/`)}/tuilib/${a}`.replace(/\/+/g,`/`);return d(c,{to:s,onClick:i,...r,children:n})},img({src:e,alt:t,...n}){if(!e||e.startsWith(`http`)||e.startsWith(`data:`))return d(`img`,{src:e,alt:t,style:{maxWidth:`100%`,height:`auto`,borderRadius:`8px`},...n});let r=`/tuilib/docs/${e.replace(/^\.\.\//,``).replace(/^\.\//,``).replace(/^docs\//i,``)}`;return r=r.replace(/\/+/g,`/`),m(`span`,{style:{display:`block`,textAlign:`center`,margin:`20px 0`},children:[d(`img`,{src:r,alt:t,style:{maxWidth:`100%`,height:`auto`,borderRadius:`8px`,boxShadow:`0 4px 12px rgba(0,0,0,0.1)`},...n}),t&&d(`span`,{style:{display:`block`,fontSize:`0.85rem`,color:`#888`,marginTop:`8px`},children:t})]})}},children:n})]})]})]})}var pe=`MIT License

Copyright (c) 2026 K10-K10

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,me=e({default:()=>he}),he=`# ver 0.1.0

- commithash: \`43abce017582b159d8f7eb3e0fa752caf6473a6b\`
- date: 05/06/2026

## [Added]

- New object \`TextField\` for multiline and input text fields.

## [Changed]

## [Removed]

- \`pop\` and \`push\` function is removed from \`Text\` object. Use \`TextField\` instead.
`,ge=e({default:()=>_e}),_e=`# ver 0.2.0

- commithash: \`\`
- date: 10/06/2026

## [Note]

- License is changed from GPL-3.0 to MIT License.
- version 1.2.0 -> version 0.2.0

## [Feature]

- Style function for \`Text\` object.
- Style function for \`TextField\` object.
- Style function for \`Block\` object.
- Style function for \`List\` object.

## [Docs]

- Update documentation for \`Text\` object.
- Update documentation for \`TextField\` object.
- Update documentation for \`Block\` object.
- Update documentation for \`List\` object.

All documents depending on version 1.2.0.

## [Changed]

- Update CMake for modern, and update installation instructions.

## [Removed]

- \`pose\` function is removed from \`App\` object.
`,ve=e({default:()=>ye}),ye=`# ver 0.3.0

- commithash: \`0fac85c7ddb715739ade4cd43f1a1cf49755b64c\`
- date: 20/06/2026

## Abstract

This release includes a lot of new features and improvements.
First, library name is changed to \`KrowTUI\` from \`Krow\`. This change is made to better reflect the purpose of the library, which is to provide a TUI (Text User Interface) framework.
Second, useful rendering objects such as \`Span\`, \`Line\`, and \`Text\` are added to make it easier to create complex TUI layouts.

## [Note]

- Rename library for \`KrowTUI\` #52 #53
- Added new GitHub Actions workflow for lint check. #34 #35
- Added Google Test framework for unit testing. #41

## [Features]

- Add \`logger\` function. #38
- Add \`clear\` function on \`list\` object. #43
- Add \`Span\` \`Line\` and \`Text\` for useful rendering. #59

## [Changed]

- Update Style function more efficiently. #40
- Refactor suggestion from cppcheck. #33
- Add include guard to header files. #39
- Add time interval to keyboard input. #51
- Run clang-tidy and refactoring. #54

## [Docs]

- Add badge and sample picture to README.md. #32 #36
- New sample code #37
- fix missing library name in README and getting_started.md. #42
- Update issue templates for yml format. #47 #48

## [Removed]

- Remove \`Text\` object. #50
`,be=e({default:()=>xe}),xe=`# Changelogs

[version 0.3.0](changelog/0.3.0.md)
[version 0.2.0](changelog/0.2.0.md)
[version 0.1.0](changelog/0.1.0.md)
`,Se=e({default:()=>Ce}),Ce=`# File dependency diagram

\`\`\`mermaid
flowchart LR
    subgraph include/K10-K10/core ["include/K10-K10/core"]
        include/K10-K10/core/render.h["render.h"]
        include/K10-K10/core/screen.h["screen.h"]
        include/K10-K10/core/drawObj.h["drawObj.h"]
    end
    subgraph include/K10-K10/style ["include/K10-K10/style"]
        include/K10-K10/style/style.h["style.h"]
        include/K10-K10/style/alignment.h["alignment.h"]
        include/K10-K10/style/border.h["border.h"]
        include/K10-K10/style/color.h["color.h"]
    end
    subgraph include/K10-K10/debug ["include/K10-K10/debug"]
        include/K10-K10/debug/logger.h["logger.h"]
    end
    subgraph include/K10-K10/app ["include/K10-K10/app"]
        include/K10-K10/app/app.h["app.h"]
    end
    subgraph include/K10-K10/layout ["include/K10-K10/layout"]
        include/K10-K10/layout/rect.h["rect.h"]
    end
    subgraph include/K10-K10/obj ["include/K10-K10/obj"]
        include/K10-K10/obj/input.h["input.h"]
        include/K10-K10/obj/obj.h["obj.h"]
        include/K10-K10/obj/list.h["list.h"]
        include/K10-K10/obj/block.h["block.h"]
    end
    subgraph include/K10-K10 ["include/K10-K10"]
        include/K10-K10/krow.h["krow.h"]
    end
    subgraph include/K10-K10/input ["include/K10-K10/input"]
        include/K10-K10/input/cursor.h["cursor.h"]
        include/K10-K10/input/keyboard.h["keyboard.h"]
    end
    subgraph include/K10-K10/line ["include/K10-K10/line"]
        include/K10-K10/line/text.h["text.h"]
        include/K10-K10/line/line.h["line.h"]
    end
    subgraph include/K10-K10/utils ["include/K10-K10/utils"]
        include/K10-K10/utils/string_helper.h["string_helper.h"]
        include/K10-K10/utils/base.h["base.h"]
    end
    subgraph src/K10-K10/core ["src/K10-K10/core"]
        src/K10-K10/core/drawObj.cc["drawObj.cc"]
        src/K10-K10/core/screen.cc["screen.cc"]
        src/K10-K10/core/render.cc["render.cc"]
    end
    subgraph src/K10-K10/style ["src/K10-K10/style"]
        src/K10-K10/style/color.cc["color.cc"]
        src/K10-K10/style/alignment.cc["alignment.cc"]
        src/K10-K10/style/style.cc["style.cc"]
    end
    subgraph src/K10-K10/app ["src/K10-K10/app"]
        src/K10-K10/app/app.cc["app.cc"]
    end
    subgraph src/K10-K10/obj ["src/K10-K10/obj"]
        src/K10-K10/obj/input.cc["input.cc"]
        src/K10-K10/obj/list.cc["list.cc"]
        src/K10-K10/obj/obj.cc["obj.cc"]
        src/K10-K10/obj/block.cc["block.cc"]
    end
    subgraph src/K10-K10/input ["src/K10-K10/input"]
        src/K10-K10/input/keyboard.cc["keyboard.cc"]
        src/K10-K10/input/cursor.cc["cursor.cc"]
    end
    subgraph src/K10-K10/line ["src/K10-K10/line"]
        src/K10-K10/line/text.cc["text.cc"]
    end
    subgraph src/K10-K10/utils ["src/K10-K10/utils"]
        src/K10-K10/utils/string_helper.cc["string_helper.cc"]
        src/K10-K10/utils/base.cc["base.cc"]
    end
    subgraph include/K10-K10/core ["include/K10-K10/core"]
        include/K10-K10/core/render.h["render.h"]
        include/K10-K10/core/screen.h["screen.h"]
        include/K10-K10/core/drawObj.h["drawObj.h"]
    end
    subgraph include/K10-K10/style ["include/K10-K10/style"]
        include/K10-K10/style/style.h["style.h"]
        include/K10-K10/style/alignment.h["alignment.h"]
        include/K10-K10/style/border.h["border.h"]
        include/K10-K10/style/color.h["color.h"]
    end
    subgraph include/K10-K10/debug ["include/K10-K10/debug"]
        include/K10-K10/debug/logger.h["logger.h"]
    end
    subgraph include/K10-K10/app ["include/K10-K10/app"]
        include/K10-K10/app/app.h["app.h"]
    end
    subgraph include/K10-K10/layout ["include/K10-K10/layout"]
        include/K10-K10/layout/rect.h["rect.h"]
    end
    subgraph include/K10-K10/obj ["include/K10-K10/obj"]
        include/K10-K10/obj/input.h["input.h"]
        include/K10-K10/obj/obj.h["obj.h"]
        include/K10-K10/obj/list.h["list.h"]
        include/K10-K10/obj/block.h["block.h"]
    end
    subgraph include/K10-K10 ["include/K10-K10"]
        include/K10-K10/krow.h["krow.h"]
    end
    subgraph include/K10-K10/input ["include/K10-K10/input"]
        include/K10-K10/input/cursor.h["cursor.h"]
        include/K10-K10/input/keyboard.h["keyboard.h"]
    end
    subgraph include/K10-K10/line ["include/K10-K10/line"]
        include/K10-K10/line/text.h["text.h"]
        include/K10-K10/line/line.h["line.h"]
    end
    subgraph include/K10-K10/utils ["include/K10-K10/utils"]
        include/K10-K10/utils/string_helper.h["string_helper.h"]
        include/K10-K10/utils/base.h["base.h"]
    end

    %% Dependencies
    include/K10-K10/core/render.h --> include/K10-K10/core/screen.h
    include/K10-K10/core/screen.h --> include/K10-K10/style/style.h
    include/K10-K10/core/drawObj.h --> include/K10-K10/core/screen.h
    include/K10-K10/style/style.h --> include/K10-K10/style/color.h
    include/K10-K10/app/app.h --> include/K10-K10/core/render.h
    include/K10-K10/app/app.h --> include/K10-K10/core/screen.h
    include/K10-K10/obj/input.h --> include/K10-K10/layout/rect.h
    include/K10-K10/obj/input.h --> include/K10-K10/line/text.h
    include/K10-K10/obj/input.h --> include/K10-K10/obj/obj.h
    include/K10-K10/obj/input.h --> include/K10-K10/style/style.h
    include/K10-K10/obj/list.h --> include/K10-K10/layout/rect.h
    include/K10-K10/obj/list.h --> include/K10-K10/line/text.h
    include/K10-K10/obj/list.h --> include/K10-K10/obj/obj.h
    include/K10-K10/obj/list.h --> include/K10-K10/style/style.h
    include/K10-K10/obj/block.h --> include/K10-K10/layout/rect.h
    include/K10-K10/obj/block.h --> include/K10-K10/line/text.h
    include/K10-K10/obj/block.h --> include/K10-K10/obj/obj.h
    include/K10-K10/obj/block.h --> include/K10-K10/style/border.h
    include/K10-K10/obj/block.h --> include/K10-K10/style/style.h
    include/K10-K10/krow.h --> include/K10-K10/app/app.h
    include/K10-K10/krow.h --> include/K10-K10/input/cursor.h
    include/K10-K10/krow.h --> include/K10-K10/input/keyboard.h
    include/K10-K10/krow.h --> include/K10-K10/layout/rect.h
    include/K10-K10/krow.h --> include/K10-K10/line/line.h
    include/K10-K10/krow.h --> include/K10-K10/line/text.h
    include/K10-K10/krow.h --> include/K10-K10/obj/block.h
    include/K10-K10/krow.h --> include/K10-K10/obj/input.h
    include/K10-K10/krow.h --> include/K10-K10/obj/list.h
    include/K10-K10/krow.h --> include/K10-K10/style/alignment.h
    include/K10-K10/krow.h --> include/K10-K10/style/border.h
    include/K10-K10/krow.h --> include/K10-K10/style/color.h
    include/K10-K10/krow.h --> include/K10-K10/style/style.h
    include/K10-K10/line/text.h --> include/K10-K10/line/line.h
    include/K10-K10/line/line.h --> include/K10-K10/style/alignment.h
    include/K10-K10/line/line.h --> include/K10-K10/style/style.h
    src/K10-K10/core/drawObj.cc -..-> include/K10-K10/core/drawObj.h
    src/K10-K10/core/drawObj.cc --> include/K10-K10/core/screen.h
    src/K10-K10/core/screen.cc -..-> include/K10-K10/core/screen.h
    src/K10-K10/core/render.cc -..-> include/K10-K10/core/render.h
    src/K10-K10/core/render.cc --> include/K10-K10/core/screen.h
    src/K10-K10/core/render.cc --> include/K10-K10/style/style.h
    src/K10-K10/core/render.cc --> include/K10-K10/utils/base.h
    src/K10-K10/style/alignment.cc -..-> include/K10-K10/style/alignment.h
    src/K10-K10/style/style.cc --> include/K10-K10/style/color.h
    src/K10-K10/style/style.cc -..-> include/K10-K10/style/style.h
    src/K10-K10/app/app.cc -..-> include/K10-K10/app/app.h
    src/K10-K10/app/app.cc --> include/K10-K10/core/render.h
    src/K10-K10/app/app.cc --> include/K10-K10/core/screen.h
    src/K10-K10/app/app.cc --> include/K10-K10/utils/base.h
    src/K10-K10/obj/input.cc --> include/K10-K10/core/drawObj.h
    src/K10-K10/obj/input.cc --> include/K10-K10/core/screen.h
    src/K10-K10/obj/input.cc --> include/K10-K10/layout/rect.h
    src/K10-K10/obj/input.cc --> include/K10-K10/line/line.h
    src/K10-K10/obj/input.cc -..-> include/K10-K10/obj/input.h
    src/K10-K10/obj/input.cc --> include/K10-K10/style/alignment.h
    src/K10-K10/obj/input.cc --> include/K10-K10/style/style.h
    src/K10-K10/obj/input.cc --> include/K10-K10/utils/string_helper.h
    src/K10-K10/obj/list.cc --> include/K10-K10/core/drawObj.h
    src/K10-K10/obj/list.cc --> include/K10-K10/core/screen.h
    src/K10-K10/obj/list.cc --> include/K10-K10/layout/rect.h
    src/K10-K10/obj/list.cc --> include/K10-K10/line/line.h
    src/K10-K10/obj/list.cc --> include/K10-K10/line/text.h
    src/K10-K10/obj/list.cc -..-> include/K10-K10/obj/list.h
    src/K10-K10/obj/list.cc --> include/K10-K10/style/alignment.h
    src/K10-K10/obj/list.cc --> include/K10-K10/style/style.h
    src/K10-K10/obj/list.cc --> include/K10-K10/utils/string_helper.h
    src/K10-K10/obj/block.cc --> include/K10-K10/core/drawObj.h
    src/K10-K10/obj/block.cc --> include/K10-K10/core/screen.h
    src/K10-K10/obj/block.cc --> include/K10-K10/layout/rect.h
    src/K10-K10/obj/block.cc --> include/K10-K10/line/line.h
    src/K10-K10/obj/block.cc --> include/K10-K10/line/text.h
    src/K10-K10/obj/block.cc -..-> include/K10-K10/obj/block.h
    src/K10-K10/obj/block.cc --> include/K10-K10/style/alignment.h
    src/K10-K10/obj/block.cc --> include/K10-K10/style/border.h
    src/K10-K10/obj/block.cc --> include/K10-K10/utils/string_helper.h
    src/K10-K10/input/keyboard.cc -..-> include/K10-K10/input/keyboard.h
    src/K10-K10/input/keyboard.cc --> include/K10-K10/utils/base.h
    src/K10-K10/input/cursor.cc -..-> include/K10-K10/input/cursor.h
    src/K10-K10/line/text.cc --> include/K10-K10/line/line.h
    src/K10-K10/line/text.cc -..-> include/K10-K10/line/text.h
    src/K10-K10/line/text.cc --> include/K10-K10/style/alignment.h
    src/K10-K10/utils/string_helper.cc -..-> include/K10-K10/utils/string_helper.h
    src/K10-K10/utils/base.cc -..-> include/K10-K10/utils/base.h
\`\`\`
`,we=e({default:()=>Te}),Te=`# 02/06

開発日誌をつけようと思った。BackSpaceでけしてもre-renderingされない。

TextFielどこまで実装するか悩む。ランダムアクセスできる構造にはなったが、カーソルとかスクロールを実装するか悩む
Listが存在しているから、スクロールは実装するとして、カーソルはどうしようかな。

ただ別のクラスにしてもいいな。

# 14/06

Lineを作ろう。string とLine をそれぞれのObjに入れる良い方法を考えないと
string -> line を作ればよいのか
アライメントもほしい

まだまだバグあるしDocsもアップデートシていかないと
Mazeと1/8192のテスト実装はした
`,Ee=e({default:()=>De}),De=`---
version: 0.3.0
date: 19/06/2026
---

# Examples

Here are some examples of how to use the TUI library in C++.

\`\`\`cpp
#include <K10-K10/krow.h>

using namespace krow;
int main() {
  app.init();
  TextField label;
  Line l = "Hello TUI!"_s.style(style::Default().bold());
  Text text = l.alignment_left();
  label.contents({text});

  List list;
  list.items({Text("item1"_s), Text("item2"_s), Text("item3"_s),
              Text("item4"_s), Text("item5"_s)});
  Block box;
  label.position({1, 1, 20, 1});
  list.position({1, 3, 20, 5});
  box.position({0, 0, FULL, FULL});
  app.loop([&]() {
    box.draw();
    label.draw();
    list.draw();

    input::key.read();
    auto key = input::key.getKeyCode();

    if (key == input::KeyCode::UP) {
      list.move_up();
    }
    if (key == input::KeyCode::DOWN) {
      list.move_down();
    }
    if (key == input::KeyCode::CHAR) {
      char c = input::key.getCurrentChar();
      if (c == 'q') {
        app.stop();
      }
    }
  });

  return 0;
}

\`\`\`

And this is minimal \`CMakeLists.txt\` to build the example:

\`\`\`cmake
cmake_minimum_required(VERSION 3.16)
project(app LANGUAGES CXX)

include(FetchContent)

FetchContent_Declare(
  KrowTUI
  GIT_REPOSITORY https://github.com/K10-K10/KrowTUI
  GIT_TAG        main
)

FetchContent_MakeAvailable(KrowTUI)

add_executable(app src/main.cpp)

target_link_libraries(app PRIVATE K10-K10::krow)
\`\`\`

![Example Output](example_output.png)

### KeyBindings

- \`UP\`: Move up in the list
- \`DOWN\`: Move down in the list
- \`q\`: Quit the application
`,Oe=e({default:()=>ke}),ke=`---
version: 0.3.0
date: 19/06/2026
---

# Getting Started

This document will guide you through the process of setting up and using the TUI library in your C++ projects. Follow the steps below to get started.

## Installation

The TUI library is header-only, so you can simply download the source code and include the necessary header files in your project.

### Method 1: Via CMake FetchContent

You can use CMake's \`FetchContent\` module to include the TUI library in your project. Add the following lines to your \`CMakeLists.txt\`:

\`\`\`cmake
include(FetchContent)

FetchContent_Declare(
    krowTUI
    GIT_REPOSITORY https://github.com/K10-K10/KrowTUI
    GIT_TAG main # We suport only latest version, so use main branch
)

FetchContent_MakeAvailable(krowTUI)

add_executable(your_app main.cpp)
target_link_libraries(your_app PRIVATE K10-K10::krow)
\`\`\`

### Method 2: Via Git Submodule

Alternatively, you can add the TUI library as a git submodule in your project:

1. Add the submodule to your repository:

\`\`\`bash
git submodule add [https://github.com/your_github_username/KrowTUI.git](https://github.com/your_github_username/KrowTUI.git) lib/KrowTUI
git submodule update --init --recursive
\`\`\`

1. Add the following to your \`CMakeLists.txt\`:

\`\`\`cmake
# Add the submodule directory
add_subdirectory(lib/KrowTUI)

# Your executable
add_executable(my_app src/main.cpp)

# Link the library
target_link_libraries(my_app PRIVATE K10-K10::krow)
\`\`\`

## Usage

This library is header-only, so you can directly include the header file\`K10-K10/krow.h\` in your project.

\`\`\`cpp
#include <K10-K10/krow.h>
\`\`\`

## How to Use

First, initialize the terminal:

\`\`\`cpp
app.init();
\`\`\`

Then, you can create and manipulate terminal elements as needed. For example, to create a simple text element:

\`\`\`cpp
krow::Text text("Hello, World!");
\`\`\`

Finally, draw the terminal to see the changes:

\`\`\`cpp
app.loop{[&]() {
    text.draw();
}};
\`\`\`

When you're done, make sure to clean up resources:

\`\`\`cpp
app.stop();
\`\`\`

example code can be found in the [Examples](examples.md) section of the documentation.
`,Ae=e({default:()=>je}),je=`---
version: 0.3.0
date: 19/06/2026
---

# Points to Note

Here are some important points to note when using the TUI library:

1. **Coordinate System**: The TUI library uses a coordinate system where the top-left corner of the terminal is (0, 0). The x-coordinate increases to the right, and the y-coordinate increases downwards.

2. **Where to Draw**: When \`app\` is initialized, it entered alternate window, and when \`app.stop()\` called, it will exit alternate window.

3. **If process stopped by \`Ctrl + C\`**: This library has a signal handler for \`SIGINT\`, and when the process is stopped by \`Ctrl + C\`, auto call \`app.stop()\`, so the terminal will be restored to its original state.

4. **Order of Drawing**: The order of drawing objects matters. Objects drawn later will be displayed on top of objects drawn earlier. Make sure to draw background elements first and foreground elements later. I'll add more options to control the order of drawing later.
`,Me=e({default:()=>Ne}),Ne=`---
version: 0.3.0
date: 19/06/2026
namespace: krow
---

# App

\`app\` is the main class of the library. It is responsible for managing the application state, rendering the UI, and handling user input.

## Methods

- [\`app.init(fps)\`](#1-appinit): Initializes the application.
- [\`app.loop(funcs)\`](#2-appploop): Starts the main loop of the application.
- [\`app.stop()\`](#3-appstop): Stops the main loop and exits from alternate screen.

## Example

\`\`\`cpp
#include <K10-K10/krow.hpp>

int main() {
  krow::app.init(60);

  krow::app.loop([]() {
    // Your code here
  });

  return 0;
}
\`\`\`

## Methods Details

### 1. \`app.init(fps)\`

\`\`\`cpp
void init(int fps = 60);
\`\`\`

- **Arguments**: \`fps: int\` (the desired frames per second) - **Default**: 60
- **Return**: None

Initializes the application. This function must be called before any other functions are used.
When this function is called, the terminal enter the alternate screen and hide the cursor.

### 2. \`app.loop(funcs)\`

\`\`\`cpp
void loop(std::function<void()> frame);
\`\`\`

- **Arguments**: \`frame: std::function<void()>\` (the function to be called in each loop iteration)
- **Return**: None

Starts the main loop of the application. The provided function will be called in each iteration of the loop, allowing you to update the UI and handle user input.

It's received only one function, but you can use lambda functions to call multiple functions in one loop iteration.

### 3. \`app.stop()\`

- **Arguments**: None
- **Return**: None

Stops the main loop and exits from alternate screen.
You should call this function when you want to exit the application.
`,Pe=e({default:()=>Fe}),Fe=`---
version: 0.3.0
date: 19/06/2026
namespace: krow::input
---

# Key

The \`Key\` class represents a key on the keyboard. It contains information about the key code, modifiers, and the type of event (press or release). The \`KeyEvent\` class is used to handle key events in the TUI library.

This class is contained in the \`krow::input\` namespace and can be accessed through the \`input::key\` object.

## Methods

- [getKeyCode()](#getkeycode): Returns the key code of the key event.
- [getCurrentChar()](#getcurrentchar): Returns the character associated with the key event.
- [read()](#read): Reads the next key event from the input stream.

## KeyCode

The \`KeyCode\` enum defines the key codes for various keys on the keyboard. Some of the key codes include:

- \`None\`: No key event.
- \`UNKNOWN\`: Unknown key event.
- \`ESCAPE\`: Escape key.
- \`ENTER\`: Enter key.
- \`BACKSPACE\`: Backspace key.
- \`TAB\`: Tab key.
- \`SPACE\`: Space key.
- \`UP\`: Up arrow key.
- \`DOWN\`: Down arrow key.
- \`LEFT\`: Left arrow key.
- \`RIGHT\`: Right arrow key.
- \`CHAR\`: Character key (for printable characters).

## Example

\`\`\`cpp
#include <K10-K10/krow.h>

using namespace krow;
int main() {
  app.init();

  TextField text;
  text.contents({Line("Prease  ESC or q to exit."_s)}).position({0, 0, 30, 30});
  app.loop([&] {
    text.draw();
    input::key.read();
    auto key = input::key.getKeyCode();
    if (key == input::KeyCode::ESC) {
      app.stop();
    }
    if (key == input::KeyCode::CHAR) {
      char c = input::key.getCurrentChar();
      if (c == 'q') {
        app.stop();
      }
    }
  });
  return 0;
}

\`\`\`

## Methods Details

### getKeyCode()

\`\`\`cpp
KeyCode getKeyCode();
\`\`\`

- **Arguments**: None
- **Returns**: The key code of the key event.

Returns the key code of the key event, which can be used to determine which key was pressed or released.
When you call this method, keyCode will be set to None. So you must set for variable to store the value of keyCode before calling this method.

### GetCurrentChar()

\`\`\`cpp
char getCurrentChar();
\`\`\`

- **Arguments**: None
- **Returns**: The character associated with the key event.

Returns the character associated with the key event, which is useful for handling character input.
When you call this method, the current char is set to None(\`\\0\`). So you must set for variable to store the value of keyCode before calling this method.

### read()

\`\`\`cpp
void read();
\`\`\`

- **Arguments**: None
- **Returns**: None

Reads the next key event from the input stream and updates the internal state of the \`Key\` object accordingly.
`,Ie=e({default:()=>Le}),Le=`---
version: 0.3.0
date: 19/06/2026
---

# Events

This section describes the events that can be handled in the TUI library.
The library provides a way to handle key events, which are triggered when a key is pressed or released.

## KeyEvent

The \`KeyEvent\` class represents a key event that occurs when a key is pressed or released. It contains information about the key code, modifiers, and the type of event (press or release).

[KeyEvent API Reference](keyevent.md)
`,Re=e({default:()=>ze}),ze=`---
version: 0.3.0
date: 19/06/2026
namespace: krow
---

# Rect

Rect is a class that represents a rectangular area in the terminal. It is defined by its position (x, y) and its size (width, height). The \`Rect\` class provides methods for manipulating and querying the rectangle's properties.

## Constructor

\`\`\`cpp
krow::Rect(int x, int y, int width, int height);
\`\`\`

## Use window size

If you want to use the window size, you can use the \`FULL\` constant for width and height.
It will automatically adjust to the current window size.

\`\`\`cpp
krow::Rect rect(0, 0, FULL, FULL);
\`\`\`
`,Be=e({default:()=>Ve}),Ve=`---
version: 0.3.0
date: 19/06/2026
---

# Layout

This section describes the layout-related components of the TUI library.
The coordinates in the terminal are represented as (x, y), where x is the column number and y is the row number, both starting from 0.

\`\`\`
(0, 0) ──> x
  │
  │
  │
  │
  ▼
  y
\`\`\`

## Rect

The \`Rect\` class represents a rectangular area in the terminal. It is defined by its position (x, y) and its size (width, height). The \`Rect\` class provides methods for manipulating and querying the rectangle's properties.

- [Rect Class Reference](rect.md)
`,He=e({default:()=>Ue}),Ue="---\nversion: 0.3.0\ndate: 21/06/2026\nnamespace: krow\n---\n\n# Block\n\n`Block` is an object that can render a rectangular frame with a border. It can be used to create sections or containers in your app's interface.\n\n## Methods\n\n- [`position(rect)`](#1-positionrect): Sets the position and size of the block.\n- [`draw()`](#2-draw): Draws the block on the terminal at the specified position and with the specified border style.\n- [`title(text)`](#3-titletext): Sets the title of the block, which will be displayed at the top center of the block.\n- [`bottom_title(text)`](#4-bottom_titletext): Sets the bottom title of the block, which will be displayed at the bottom center of the block.\n\n### Style Methods\n\n- [`border_type(border)`](#1-border_typeborder): Sets the border style presets of the block.\n- [`borders(mask)`](#2-bordersmask): Specifies which edges of the block's border should be drawn using a bitmask.\n- [`border_color(color)`](#3-border_colorcolor): Sets the color of the block's border.\n- [`field_color(color)`](#4-field_colorcolor): Sets the background color of the block.\n\n## Example\n\n```cpp\n#include <K10-K10/krow.h>\n\nint main() {\n  krow::app.init();\n  krow::Block block;\n\n  block.position({1, 1, 20, 10})\n      .border_style(krow::style::Default()\n                        .fg(krow::style::BasicColor::Red)\n                        .bg(krow::style::BasicColor::Blue));\n  krow::app.loop([&]() { block.draw(); });\n\n  krow::app.stop();\n  return 0;\n}\n```\n\n## Method Details\n\n### 1. `position(rect)`\n\n```cpp\nBlock& position(const Rect& r);\n\n```\n\n- **Arguments**: `r: const krow::Rect&` (A `Rect` object that defines the position and size of the block)\n- **Return**: `Block&` (Reference to the block for method chaining)\n\nSets the position and size of the block.\n\n### 2. `draw()`\n\n```cpp\nvoid draw();\n\n```\n\n- **Arguments**: None\n- **Return**: None\n\nDraws the block on the terminal at the specified position and with the specified border style.\n\n### 3. `title(text)`\n\n```cpp\nBlock& title(const Text& text);\n\n```\n\n- **Arguments**: `text: const krow::Text&` (A `Text` structure that defines the content and style of the title)\n- **Return**: `Block&` (Reference to the block for method chaining)\n\nSets the title of the block, which will be displayed at the top center of the block.\n\n### 4. `bottom_title(text)`\n\n```cpp\nBlock& bottom_title(const Text& text);\n\n```\n\n- **Arguments**: `text: const krow::Text&` (A `Text` structure that defines the content and style of the bottom title)\n- **Return**: `Block&` (Reference to the block for method chaining)\n\nSets the bottom title of the block, which will be displayed at the bottom center of the block.\n\n---\n\n### 1. `border_type(border)`\n\n```cpp\nBlock& border_type(const krow::style::Border& border);\n\n```\n\n- **Arguments**: `border: const krow::style::Border&` (Specifies the character set configuration for the border layout)\n- **Return**: `Block&` (Reference to the block for method chaining)\n\nSets the character style configuration of the block's layout frame. See [Border Presets](https://www.google.com/search?q=%23border-presets) for available configurations.\n\n### 2. `borders(mask)`\n\n```cpp\nBlock& borders(krow::style::Borders mask);\n\n```\n\n- **Arguments**: `mask: krow::style::Borders` (A bitmask that specifies the drawing edges)\n- **Return**: `Block&` (Reference to the block for method chaining)\n\nSpecifies which edges of the block's border should be rendered. Supports bitwise operators (`|` and `&`). See [Borders Bitmask Flags](https://www.google.com/search?q=%23borders-bitmask-flags) for details.\n\n### 3. `border_color(color)`\n\n```cpp\nBlock& border_color(const krow::style::Color& color);\nBlock& border_color(int color);\n\n```\n\n- **Arguments**: `color: const krow::style::Color&` / `int` (Specifies the color of the border lines)\n- **Return**: `Block&` (Reference to the block for method chaining)\n\nSets the visual color layout utilized to draw the frame lines.\n\n### 4. `field_color(color)`\n\n```cpp\nBlock& field_color(const krow::style::Color& color);\nBlock& field_color(int color);\n\n```\n\n- **Arguments**: `color: const krow::style::Color&` / `int` (Specifies the background color fill)\n- **Return**: `Block&` (Reference to the block for method chaining)\n\nSets the background color layer bound to the internal grid region of the block.\n\n---\n\n## Border Presets\n\nThe library provides predefined `krow::style::Border` instances representing distinct line styling definitions:\n\n| Constant Name          | Box Appearance Type Description                    | Style Representation (`tl`, `tr`, `bl`, `br`, `h`, `v`) |\n| ---------------------- | -------------------------------------------------- | ------------------------------------------------------- |\n| `krow::style::SINGLE`  | Standard single-line box layouts.                  | `┌`, `┐`, `└`, `┘`, `─`, `│`                            |\n| `krow::style::ROUNDED` | Single-line box layouts utilizing rounded corners. | `╭`, `╮`, `╰`, `╯`, `─`, `│`                            |\n| `krow::style::BOLD`    | Thick/Heavy line container style layouts.          | `┏`, `┓`, `┗`, `┛`, `━`, `┃`                            |\n| `krow::style::DOUBLE`  | Standard double-line character container layouts.  | `╔`, `╗`, `╚`, `╝`, `═`, `║`                            |\n\n## Borders Bitmask Flags\n\nThe `Borders` enum represents a bitmask used to filter which edges should be active during the render cycle:\n\n| Flag Constant     | Bitmask Shift                    | Description Value                                  |\n| ----------------- | -------------------------------- | -------------------------------------------------- |\n| `Borders::NONE`   | `0`                              | No layout edges are drawn.                         |\n| `Borders::TOP`    | `1 << 0`                         | Draws only the top horizontal frame row.           |\n| `Borders::BOTTOM` | `1 << 1`                         | Draws only the bottom horizontal frame row.        |\n| `Borders::LEFT`   | `1 << 2`                         | Draws only the left vertical frame column.         |\n| `Borders::RIGHT`  | `1 << 3`                         | Draws only the right vertical frame column.        |\n| `Borders::ALL`    | `TOP \\| BOTTOM \\| LEFT \\| RIGHT` | Draws all bounding frame edges (Default behavior). |\n",We=e({default:()=>Ge}),Ge=`---
version: 0.3.0
date: 20/06/2026
namespace: krow
---

# List

\`List\` is an object that displays a scrollable or selectable list of items in the terminal. It supports item selection, custom cursor symbols, and comprehensive style configurations via \`style::Style\` structures.

## Methods

- [\`position(rect)\`](#1-positionrect): Sets the position and size of the list.
- [\`items(items)\`](#2-itemsitems): Sets the entire list of items at once.
- [\`items()\`](#3-items): Returns a reference to the current list of items.
- [\`add_item(text)\`](#4-add_itemtext): Appends a single item to the end of the list.
- [\`clear()\`](#5-clear): Clears all items from the list.
- [\`selected_item()\`](#6-selected_item): Returns the \`Text\` object of the currently selected item.
- [\`move_up()\`](#7-move_up): Moves the selection cursor up by one item.
- [\`move_down()\`](#8-move_down): Moves the selection cursor down by one item.
- [\`selected_index()\`](#9-selected_index): Returns the 0-based index of the currently selected item.
- [\`draw()\`](#10-draw): Draws the list on the terminal with the configured items and styles.

### Styles & Visuals (Method Chaining)

The \`List\` object provides chainable methods to customize its visual appearance:

- [\`selector_symbol(symbol)\`](#11-selector_symbolsymbol): Sets the selection indicator prefix (Default: \`">"\`).
- [\`contents_style(style)\`](#12-contents_stylestyle): Sets the general style (text and background) for unselected items.
- [\`selector_style(style)\`](#13-selector_stylestyle): Sets the style for the active selector symbol.
- [\`highlight_style(style)\`](#14-highlight_stylestyle): Sets the style for the currently selected item.

## Example

\`\`\`cpp
#include <K10-K10/krow.h>

int main() {
  krow::app.init();

  krow::List list;
  krow::Rect rect{2, 2, 20, 5}; // x, y, width, height

  // Custom styles
  krow::style::Style standard_style;
  standard_style.fg(krow::utils::TextColor::White);

  krow::style::Style select_style;
  select_style.bg(krow::utils::FillColor::Blue).fg(krow::utils::TextColor::White);

  // Method chaining setup
  list.position(rect)
      .items({krow::Text("Option 1"), krow::Text("Option 2")})
      .add_item(krow::Text("Option 3"))
      .selector_symbol("->")
      .contents_style(standard_style)
      .highlight_style(select_style);

  krow::app.loop([&]() {
    list.draw();
    input::key.read();
    auto key = input::key.getKeyCode();

    if (key == input::KeyCode::UP) {
      list.move_up();
    }
    if (key == input::KeyCode::DOWN) {
      list.move_down();
    }
  });

  krow::app.stop();
  return 0;
}

\`\`\`

## Methods Details

### 1. position(rect)

\`\`\`c++
List& position(const Rect& r);

\`\`\`

- **Arguments**: \`r: const krow::Rect&\` (A \`Rect\` object defining the list's bounding box)
- **Return**: \`List&\` (Reference to the current object for method chaining)

Sets the position and size of the list.

### 2. items(items)

\`\`\`c++
List& items(std::vector<Text> items);

\`\`\`

- **Arguments**: \`items: std::vector<krow::Text>\` (A vector of \`Text\` structures to populate the list)
- **Return**: \`List&\` (Reference to the current object for method chaining)

Replaces the current list items with the provided vector of \`Text\` objects.

### 3. items()

\`\`\`c++
const std::vector<Text>& items() const;

\`\`\`

- **Arguments**: None
- **Return**: \`const std::vector<krow::Text>&\` (A constant reference to the internal items vector)

Returns the entire collection of items currently stored in the list.

### 4. add_item(text)

\`\`\`c++
List& add_item(const Text& s);

\`\`\`

- **Arguments**: \`s: const krow::Text&\` (The \`Text\` structure of the item to add)
- **Return**: \`List&\` (Reference to the current object for method chaining)

Appends a new \`Text\` item to the end of the list.

### 5. clear()

\`\`\`c++
List& clear();

\`\`\`

- **Arguments**: None
- **Return**: \`List&\` (Reference to the current object for method chaining)

Removes all elements from the internal list data structure.

### 6. selected_item()

\`\`\`c++
Text selected_item() const;

\`\`\`

- **Arguments**: None
- **Return**: \`krow::Text\` (The \`Text\` structure of the selected item)

Returns the \`Text\` content and styling of the item that is currently highlighted/selected.

### 7. move_up()

\`\`\`c++
void move_up();

\`\`\`

- **Arguments**: None
- **Return**: None

Decrements the internal selection index to move the cursor up. Includes boundary checks to prevent underflow.

### 8. move_down()

\`\`\`c++
void move_down();

\`\`\`

- **Arguments**: None
- **Return**: None

Increments the internal selection index to move the cursor down. Includes boundary checks based on the total number of items.

### 9. selected_index()

\`\`\`c++
int selected_index() const;

\`\`\`

- **Arguments**: None
- **Return**: \`int\` (The 0-based index of the active item)

Returns the numeric index of the currently selected item.

### 10. draw()

\`\`\`c++
void draw() override;

\`\`\`

- **Arguments**: None
- **Return**: None

Overrides the \`Object::draw()\` method. Renders the entire list component, including the background, unselected items, the active selector symbol, and the highlighted item within the specified \`Rect\` boundary.

---

## Style Methods Details

### 11. selector_symbol(symbol)

\`\`\`c++
List& selector_symbol(const std::string& symbol);

\`\`\`

- **Arguments**: \`symbol: const std::string&\` (The string to use as the selection indicator)
- **Return**: \`List&\` (Reference to the current object for method chaining)

Sets the selection indicator prefix that appears before the currently selected item. The default symbol is \`">"\`.

### 12. contents_style(style)

\`\`\`c++
List& contents_style(const style::Style& s);

\`\`\`

- **Arguments**: \`s: const krow::style::Style&\` (The style configuration for standard list items)
- **Return**: \`List&\` (Reference to the current object for method chaining)

Sets the default foreground and background style for unselected items in the list.

### 13. selector_style(style)

\`\`\`c++
List& selector_style(const style::Style& s);

\`\`\`

- **Arguments**: \`s: const krow::style::Style&\` (The style configuration for the selector symbol)
- **Return**: \`List&\` (Reference to the current object for method chaining)

Sets the visual style applied to the active selector symbol.

### 14. highlight_style(style)

\`\`\`c++
List& highlight_style(const style::Style& s);

\`\`\`

- **Arguments**: \`s: const krow::style::Style&\` (The style configuration for the active item)
- **Return**: \`List&\` (Reference to the current object for method chaining)

Sets the text and background style used exclusively for the currently highlighted item.
`,Ke=e({default:()=>qe}),qe="---\nversion: 0.3.0\ndate: 20/06/2026\nnamespace: krow\n---\n\n# TextField\n\n`TextField` is an object that can render dynamic and interactive text fields in your terminal application. It supports multi-line text structured as a vector of `Text` objects, cursor movement, character insertion/deletion, and dedicated style configurations for both text and the cursor.\n\n## Methods\n\n- [`position(rect)`](#1-positionrect): Sets the position and size of the text field.\n- [`contents(text)`](#2-contentstext): Sets the text content of the text field using a vector of `Text` objects.\n- [`get_contents()`](#3-get_contents): Returns the current text contents of the text field.\n- [`move_cursor(x, y)`](#4-move_cursorx-y): Moves the cursor to the specified position within the text field.\n- [`insert_char(c)`](#5-insert_charc): Inserts a character or a short string at the current cursor position.\n- [`delete_char()`](#6-delete_char): Deletes the character at the current cursor position.\n- [`operator[]`](#7-operator): Accesses the `Text` object at the specified line index.\n- [`draw()`](#8-draw): Draws the text field on the terminal at the specified position with configured styles.\n\n### Style Methods (Method Chaining)\n\n- [`text_style(style)`](#9-text_stylestyle): Sets the text style for the content inside the field.\n- [`cursor_style(style)`](#10-cursor_stylestyle): Sets the visual style for the input cursor.\n\n---\n\n## Method Details\n\n### 1. `position(rect)`\n\n```cpp\nTextField& position(const Rect& r);\n\n```\n\n- **Arguments**: `r: const krow::Rect&` (A `Rect` object that defines the position and size of the text field)\n- **Return**: `TextField&` (Reference to the current object for method chaining)\n\nSets the position and size of the text field.\n\n### 2. `contents(text)`\n\n```cpp\nTextField& contents(const std::vector<Text>& text);\n\n```\n\n- **Arguments**: `text: const std::vector<krow::Text>&` (A vector of `Text` structures containing the content to display)\n- **Return**: `TextField&` (Reference to the current object for method chaining)\n\nSets the text content of the `TextField` object.\n\n### 3. `get_contents()`\n\n```cpp\nstd::vector<Text> get_contents() const;\n\n```\n\n- **Arguments**: None\n- **Return**: `std::vector<krow::Text>` (A vector containing the current text layers/lines of the text field)\n\nReturns the current internal text content of the `TextField` object.\n\n### 4. `move_cursor(x, y)`\n\n```cpp\nTextField& move_cursor(int x, int y);\n\n```\n\n- **Arguments**: `x: int` (The column/x-coordinate), `y: int` (The line/y-coordinate)\n- **Return**: `TextField&` (Reference to the current object for method chaining)\n\nMoves the cursor to the specified coordinates within the text field bounds.\n\n### 5. `insert_char(c)`\n\n```cpp\nTextField& insert_char(const std::string& c);\n\n```\n\n- **Arguments**: `c: const std::string&` (The character or string segment to insert at the current cursor position)\n- **Return**: `TextField&` (Reference to the current object for method chaining)\n\nInserts a character (or multi-byte string character) at the current cursor location in the text field.\n\n### 6. `delete_char()`\n\n```cpp\nTextField& delete_char();\n\n```\n\n- **Arguments**: None\n- **Return**: `TextField&` (Reference to the current object for method chaining)\n\nDeletes the character at the current cursor position in the text field.\n\n### 7. `operator[]`\n\n```cpp\nText& operator[](size_t index);\nconst Text& operator[](size_t index) const;\n\n```\n\n- **Arguments**: `index: size_t` (The 0-based index of the line/Text element to access)\n- **Return**: `krow::Text&` (A reference to the `Text` structure at the specified index)\n\nReturns the `Text` object at the specified index in the text field.\nYou can use it to chain access to specific characters or sub-elements, for example: `textField[0][1]` (accesses the second character of the first text line).\n\n### 8. `draw()`\n\n```cpp\nvoid draw() override;\n\n```\n\n- **Arguments**: None\n- **Return**: None\n\nDraws the text field component on the terminal screen at its specified position, rendering the text content and the interactive cursor with their corresponding styles.\n\n---\n\n## Style Methods Details\n\n### 9. `text_style(style)`\n\n```cpp\nTextField& text_style(const style::Style& s);\n\n```\n\n- **Arguments**: `s: const krow::style::Style&` (The style configuration structure)\n- **Return**: `TextField&` (Reference to the current object for method chaining)\n\nSets the default foreground, background, and text modifications for the text content inside the field.\n\n### 10. `cursor_style(style)`\n\n```cpp\nTextField& cursor_style(const style::Style& s);\n\n```\n\n- **Arguments**: `s: const krow::style::Style&` (The style configuration structure)\n- **Return**: `TextField&` (Reference to the current object for method chaining)\n\nSets the style applied specifically to the interactive input cursor (e.g., color or background inversion).\n",Je=e({default:()=>Ye}),Ye=`---
version: 0.3.0
date: 19/06/2026
---

# Objects

Objects are the building blocks of your app's interface. They can render text, block list, etc.

## Common Properties

All objects share the following common properties:

### \`.position(rect)\`

A \`Rect\` object that defines the position and size of the object on the terminal.

### \`.draw()\`

Draws the object on the terminal at the specified for frame.

## Objects types

- [Block](object/block.md): A block object that can render a rectangular area with a border
- [List](object/list.md): A list object that can render a list of items with various styles.
- [TextField](object/textfield.md): A text field object that can render dynamic content.
`,Xe=e({default:()=>Ze}),Ze=`---
version: 0.3.0
date: 20/06/2026
namespace: krow::style
---

# Color & Style

The \`style\` namespace provides comprehensive tools for managing colors and text formatting attributes in the terminal. It includes the \`Color\` structure for managing colors (Basic, 8-bit Extended 256, and 24-bit TrueColor RGB) and the \`Style\` structure to bind foreground colors, background colors, and text decoration flags (like bold or underline) together.

---

## BasicColor Enum

The \`BasicColor\` enum class defines the standard 8 terminal colors.

| Enum Value            | Description                  |
| :-------------------- | :--------------------------- |
| \`BasicColor::Default\` | The terminal's default color |
| \`BasicColor::Black\`   | Black                        |
| \`BasicColor::Red\`     | Red                          |
| \`BasicColor::Green\`   | Green                        |
| \`BasicColor::Yellow\`  | Yellow                       |
| \`BasicColor::Blue\`    | Blue                         |
| \`BasicColor::Magenta\` | Magenta                      |
| \`BasicColor::Cyan\`    | Cyan                         |
| \`BasicColor::White\`   | White                        |

---

## Color Structure

\`krow::style::Color\` handles different color types using three internal categories defined by \`Color::Type\`: \`Basic\`, \`Extended256\`, and \`RGB\`.

### Constructors

- \`Color()\`  
  Initializes as a \`Type::Basic\` color pointing to \`BasicColor::Default\`.
- \`Color(BasicColor bc)\`  
  Initializes as a \`Type::Basic\` color with the specified standard enum value.
- \`Color(int code)\`  
  Initializes as a \`Type::Extended256\` color utilizing an 8-bit color index (0-255).
- \`Color(int r, int g, int b)\`  
  Initializes as a \`Type::RGB\` color utilizing 24-bit TrueColor red, green, and blue components.

### Inspector Methods

- \`get_type() -> Color::Type\`  
  Returns the type classification of the color (\`Basic\`, \`Extended256\`, or \`RGB\`).
- \`get_basic() -> BasicColor\`  
  Returns the \`BasicColor\` enum value (Only applicable if type is \`Basic\`).
- \`get_code256() -> int\`  
  Returns the 8-bit color index code (Only applicable if type is \`Extended256\`).
- \`get_rgb() -> std::array<int, 3>\`  
  Returns an array containing \`{r, g, b}\` color intensities (Only applicable if type is \`RGB\`).

---

## Style Structure

\`krow::style::Style\` compiles both layout colors and visual formatting flags into a unified design state. It provides chainable methods to easily construct text attributes.

### Non-member Helper Functions

- \`krow::style::Default()\`  
  Returns a clean, default-initialized \`Style\` object.

### Color Configuration Methods

- [\`fg(color)\`](#style-fg): Sets the text foreground color.
- [\`bg(color)\`](#style-bg): Sets the layout background color.

### Text Decoration Methods (Flags)

- [\`None()\`](#style-none): Resets all text decoration flags back to none.
- [\`bold()\`](#style-decorations): Appends the Bold modification.
- [\`dim()\`](#style-decorations): Appends the Dim/Faint modification.
- [\`italic()\`](#style-decorations): Appends the Italic modification.
- [\`underline()\`](#style-decorations): Appends the Underline modification.
- [\`blink()\`](#style-decorations): Appends the standard Blink modification.
- [\`rapidBlink()\`](#style-decorations): Appends the Rapid Blink modification.
- [\`inverted()\`](#style-decorations): Inverts foreground and background colors.
- [\`hidden()\`](#style-decorations): Conceals text without releasing layout boundaries.
- [\`strikethrough()\`](#style-decorations): Appends a strikeout line.
- [\`doubleUnderline()\`](#style-decorations): Appends a double underline modification.
- [\`overLine()\`](#style-decorations): Appends a top overline modification.

---

## Example Usage

\`\`\`cpp
#include <K10-K10/krow.h>

int main() {
  krow::app.init();

  // Create customized colors
  krow::style::Color custom_red(krow::style::BasicColor::Red);
  krow::style::Color gold_256(220);
  krow::style::Color sky_rgb(135, 206, 235);

  // Combine colors and text effects using Method Chaining
  krow::style::Style alert_style = krow::style::Default();
  alert_style.fg(custom_red)
             .bg(gold_256)
             .bold()
             .underline();

  // Apply alert_style inside components or text streams as supported...

  krow::app.stop();
  return 0;
}

\`\`\`

---

## Style Methods Details

### \`fg(color)\`

\`\`\`cpp
Style& fg(const krow::style::Color& color);

\`\`\`

- **Arguments**: \`color: const krow::style::Color&\` (The color structure to apply to the text foreground)
- **Return**: \`Style&\` (Reference to the current style for method chaining)

Applies a custom background color layer mapping. Internally resolves standard codes, 256 indices, or RGB structures into standard ANSI configurations.

### \`bg(color)\`

\`\`\`cpp
Style& bg(const krow::style::Color& color);

\`\`\`

- **Arguments**: \`color: const krow::style::Color&\` (The color structure to apply to the text background)
- **Return**: \`Style&\` (Reference to the current style for method chaining)

Applies a custom background color layer mapping.

### \`None()\`

\`\`\`cpp
Style& None();

\`\`\`

- **Arguments**: None
- **Return**: \`Style&\` (Reference to the current style for method chaining)

Clears out all previously bitwise-assigned text decoration flags, resetting them to \`None\`.

### Text Decoration Modifiers

\`\`\`cpp
Style& bold();
Style& dim();
Style& italic();
Style& underline();
Style& blink();
Style& rapidBlink();
Style& inverted();
Style& hidden();
Style& strikethrough();
Style& doubleUnderline();
Style& overLine();

\`\`\`

- **Arguments**: None
- **Return**: \`Style&\` (Reference to the current style for method chaining)

Each method bitwise-appends a specific visual modifier to the internal formatting flag mask. Multiple configurations can be chained together (e.g., \`style.bold().italic().underline()\`).
`,Qe=e({default:()=>$e}),$e='---\nversion: 0.3.0\ndate: 20/06/2026\nnamespace: krow\n---\n\n# Text\n\nThis page covers how draw text in TUI library.\n\n`Text` is composed of `Line`s, and which are composed of `Span`s. A `Span` is a string with a style, and a `Line` is a collection of `Span`s. The `Text` object is a collection of `Line`s.\n\n## Span\n\nA `Span` is a string with a style. It is represented by the `Span` struct, which has two fields: `content` and `style`. The `content` field is a string that represents the text to be displayed, and the `style` field is a `Style` object that represents the style of the text.\n\ne.g.\n\n```cpp\nkrow::Span span = "Hello, World!";\nspan.style(style::Default().fg(color(krow::utils::TextColor::Red)));\n```\n\nIf you want to create a `Span` from a string literal, you can use the `operator""_s` user-defined literal.\nSo this character string is equivalent to Span with default style:\n\n```cpp\n"Hello, World!"_s;\n```\n\n## Line\n\nA `Line` is a collection of `Span`s. It is represented by the `Line` struct, which has one field: `spans`. The `spans` field is a vector of `Span`s that represents the text to be displayed in the line.\n\ne.g.\n\n```cpp\nkrow::Line line = "Hello, "_s + "World!"_s;\n```\n\nYou also can call `break_ln()` method to break a line into multiple lines.\n\n> [!WARNING]\n> `break_ln()` does not work currently.\n\nSo if you write:\n\n```cpp\nkrow::Line line = "This is first line."_s;\nkrow::Line line2 = "This is second line."_s;\nkrow::Text text = line + line2;\n```\n\nit will be rendered as:\n\n```text\nThis is first line.\nThis is second line.\n```\n\nYou may already notice that `Line` and `Span` can be concatenated with `operator+`, which will create a new `Line` or `Text` object with the concatenated `Span`s or `Line`s.\n\n## Text\n\nA `Text` is a collection of `Line`s. It is represented by the `Text` struct, which has one field: `lines`. The `lines` field is a vector of `Line`s that represents the text to be displayed.\n\ne.g.\n\n```cpp\nkrow::Line line1 = "This is first line."_s + "This is second line."_s;\nkrow::Line line2 = "This is third line."_s;\nkrow::Text text = line1 + line2;\n```\n\n### Alignment\n\nYou can set the alignment of the text by calling `align_center()`, `align_left()`, or `align_right()` methods on a `Text` object.\n\nDefault alignment is left-aligned. You can also set the alignment of a `Line` or `Span` object, and the alignment will be inherited by the `Text` object.\n\n```cpp\nkrow::Text text = "This is first line."_s.align_center() + "This is second line."_s;\n```\n\nThis will center-align the text.\n\n## Example\n\n```cpp\n#include <K10-K10/krow.h>\n\nint main() {\n    krow::app.init();\n    krow::Text text = "Hello world!"_s.align_center() + "This is a TUI library."_s.align_left() + "Enjoy it!"_s.align_right();\n    TextField textfield;\n    textfield.position({1, 1, 30, 10})\n        .field_color(krow::utils::FillColor::Blue)\n        .text_color(krow::utils::TextColor::White);\n        .content(text);\n    krow::app.loop([&]() {\n        textfield.draw();\n    });\n\n    krow::app.stop();\n    return 0;\n}\n```\n',et=e({default:()=>tt}),tt=`---
version: 0.3.0
date: 19/06/2026
---

# API Reference

This is the API reference for TUI library.
All functions are include in the \`krow\` namespace.

## Table of Contents

- [App](references/app.md)
- [Text](references/text/text.md)
- [Objects](references/objects.md)
  - [Block](references/object/block.md)
  - [List](references/object/list.md)
  - [TextField](references/object/textfield.md)
- [Layout](references/layout.md)
  - [Rect](references/layout/rect.md)
- [Events](references/events.md)
  - [KeyEvent](references/events/keyevent.md)
  - ~~Cursor~~
- [Style](references/style/style.md)
`,nt=e({default:()=>rt}),rt=`---
version: 0.3.0
date: 20/06/2026
---

# Color Palette

This sample demonstrates the use of different color palettes in a terminal application using the Krow library. It showcases three types of color palettes: Basic, Code256, and RGB.

## What's in the Code?

The main components of the code include:

- **Block Object**: Provides a visual border around the color palette display.
- **List Objects**: Displays the different color palettes (Basic, Code256, RGB) in separate lists.
- **Color Conversion Function**: Converts RGB values to hexadecimal format for display.

\`\`\`cpp
#include <chrono>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <string>
#include <thread>
#include <vector>

#include "K10-K10/krow.h"

using namespace krow;

std::string rgb_to_hex(uint8_t r, uint8_t g, uint8_t b) {
  std::stringstream ss;
  ss << "#" << std::setfill('0') << std::setw(2) << std::hex << (int)r
     << std::setfill('0') << std::setw(2) << std::hex << (int)g
     << std::setfill('0') << std::setw(2) << std::hex << (int)b;
  return ss.str();
}

int main() {
  app.init();
  std::vector<Text> basic_items;
  std::vector<std::pair<std::string, style::BasicColor>> basic_colors = {
      {"Black", style::BasicColor::Black},
      {"Red", style::BasicColor::Red},
      {"Green", style::BasicColor::Green},
      {"Yellow", style::BasicColor::Yellow},
      {"Blue", style::BasicColor::Blue},
      {"Magenta", style::BasicColor::Magenta},
      {"Cyan", style::BasicColor::Cyan},
      {"White", style::BasicColor::White}};
  for (const auto& c : basic_colors) {
    Span s = "Basic: " + c.first;
    Line l_part = s.style(style::Default().fg(c.second));
    Line r_part = " TEXT "_s.style(
        style::Default().bg(c.second).fg(style::BasicColor::Black));
    basic_items.push_back(l_part.alignment_left() + r_part.alignment_right());
  }

  std::vector<Text> code256_items;
  for (int i = 0; i < 256; ++i) {
    std::string num_str = std::to_string(i);
    if (num_str.length() == 1) num_str = "00" + num_str;
    if (num_str.length() == 2) num_str = "0" + num_str;

    style::Style text_style;
    text_style.fg(style::Color(i));

    Span s = "Code256: ID " + num_str;
    Line l_part = s.style(text_style);

    Line r_part = " COLORBAR "_s.style(style::Default()
                                           .bg(style::Color(i))
                                           .fg(style::Color(i == 15 ? 0 : 15)));

    code256_items.push_back(l_part.alignment_left() + r_part.alignment_right());
  }

  std::vector<Text> rgb_items;
  for (int r = 0; r <= 255; r += 40) {
    for (int g = 0; g <= 255; g += 40) {
      for (int b = 0; b <= 255; b += 60) {
        std::string hex_name = rgb_to_hex(r, g, b);

        style::Style text_style;
        text_style.fg(style::Color(r, g, b));
        Span s = "RGB: " + hex_name;
        Line l_part = s.style(text_style);
        Line r_part = " [██████] "_s.style(style::Default()
                                               .bg(style::Color(r, g, b))
                                               .fg(style::Color(r, g, b)));

        rgb_items.push_back(l_part.alignment_left() + r_part.alignment_right());
      }
    }
  }

  Block window_box;
  window_box.position({0, 0, FULL, FULL});
  window_box.border_type(style::SINGLE);
  List list_basic, list_256, list_rgb;
  list_basic.position({2, 2, 30, 50});
  list_basic.items(basic_items);
  list_basic.selector_symbol("➔ ");

  list_256.position({34, 2, 50, 50});
  list_256.items(code256_items);
  list_256.selector_symbol("➔ ");

  list_rgb.position({68, 2, 50, 50});
  list_rgb.items(rgb_items);
  list_rgb.selector_symbol("➔ ");
  int active_tab = 0;
  app.loop([&]() {
    Line t_left = " 🎨 MULTI COLOR CHART "_s.style(
        style::Default().fg(style::BasicColor::White));
    std::string tab_name = (active_tab == 0)   ? "[1: BASIC]"
                           : (active_tab == 1) ? "[2: CODE256]"
                                               : "[3: RGB]";

    Span s = "Active: " + tab_name;
    Line t_center = s.style(style::Default().fg(style::BasicColor::Yellow));
    Line t_right = " Tab/Left/Right: Switch | Q: Exit "_s.style(
        style::Default().fg(style::BasicColor::Black));
    window_box
        .title(t_left.alignment_left() + t_center.alignment_center() +
               t_right.alignment_right())
        .bottom_title(t_left.alignment_left() + t_center.alignment_center());

    list_basic.selector_symbol(active_tab == 0 ? "➔ " : "   ");
    list_256.selector_symbol(active_tab == 1 ? "➔ " : "   ");
    list_rgb.selector_symbol(active_tab == 2 ? "➔ " : "   ");

    list_basic.draw();
    list_256.draw();
    list_rgb.draw();
    window_box.draw();

    input::key.read();
    auto key = input::key.getKeyCode();

    if (key == input::KeyCode::CHAR) {
      char c = input::key.getCurrentChar();
      if (c == 'q') app.stop();
      if (c == '1') active_tab = 0;
      if (c == '2') active_tab = 1;
      if (c == '3') active_tab = 2;
    }

    if (key == input::KeyCode::LEFT) {
      active_tab = (active_tab + 2) % 3;
    } else if (key == input::KeyCode::RIGHT) {
      active_tab = (active_tab + 1) % 3;
    }

    if (key == input::KeyCode::UP) {
      if (active_tab == 0) list_basic.move_up();
      if (active_tab == 1) list_256.move_up();
      if (active_tab == 2) list_rgb.move_up();
    } else if (key == input::KeyCode::DOWN) {
      if (active_tab == 0) list_basic.move_down();
      if (active_tab == 1) list_256.move_down();
      if (active_tab == 2) list_rgb.move_down();
    }
  });

  return 0;
}
\`\`\`

## Key Bindings

- **Up Arrow**: Move the selection up in the active color palette list.
- **Down Arrow**: Move the selection down in the active color palette list.
- **Left Arrow**: Switch to the previous color palette tab.
- **Right Arrow**: Switch to the next color palette tab.
- **'q' Key**: Quit the application.

## Results

[![color_palette](colour_palette.png)](colour_palette.png)
`,it=e({default:()=>at}),at=`---
version: 0.3.0
date: 20/06/2026
---

# Counter Example

This example demonstrates a simple counter application using Krow TUI. The application displays a counter value that can be incremented or decremented using the UP and DOWN arrow keys, respectively. Pressing 'q' will quit the application.

## What's in the Code?

The main components of the code include:

- **TextField Object**: Displays the current value of the counter.
- **Block Object**: Provides a visual border around the counter display.
- **Event Loop**: Continuously listens for user input to update the counter or exit the application.
- **Key Event Handling**: Listens for key presses to update the counter or quit the application.

\`\`\`cpp
#include <K10-K10/krow.h>

#include <string>
using namespace krow;
int main() {
  app.init();
  TextField counter;
  Block block;
  block.position({0, 0, 32, 3}).border_type(style::DOUBLE).title({"Counter"_s});
  int cnt = 0;
  counter.position({1, 1, 30, 1});
  app.loop([&]() {
    block.draw();
    counter.contents({Line("Count: "_s) + Line(Span(std::to_string(cnt))
                                                   .style(style::Default().fg(
                                                       style::Color(130))))});
    counter.draw();
    input::key.read();
    auto key = input::key.getKeyCode();

    if (key == input::KeyCode::UP) {
      ++cnt;
    } else if (key == input::KeyCode::DOWN) {
      --cnt;
    }
  });
  return 0;
}

\`\`\`

## Key bindings

- **UP Arrow**: Increment the counter value.
- **DOWN Arrow**: Decrement the counter value (not going below 0).

## Results

It will display like this:

[![counter](counter.png)](counter.png)
`,Y=e({default:()=>ot}),ot=`---
version: 0.3.0
date: 20/06/2026
---

# Samples

- [Counter](sample/counter.md)
- [Colour Palette](sample/colour_palette.md)
`,X={"/src/contents/tuilib/README.md":ue,"/src/contents/tuilib/docs/changelog/0.1.0.md":me,"/src/contents/tuilib/docs/changelog/0.2.0.md":ge,"/src/contents/tuilib/docs/changelog/0.3.0.md":ve,"/src/contents/tuilib/docs/changelog.md":be,"/src/contents/tuilib/docs/dev/file_dependency.md":Se,"/src/contents/tuilib/docs/dialy.md":we,"/src/contents/tuilib/docs/examples.md":Ee,"/src/contents/tuilib/docs/getting_started.md":Oe,"/src/contents/tuilib/docs/points.md":Ae,"/src/contents/tuilib/docs/references/app.md":Me,"/src/contents/tuilib/docs/references/events/keyevent.md":Pe,"/src/contents/tuilib/docs/references/events.md":Ie,"/src/contents/tuilib/docs/references/layout/rect.md":Re,"/src/contents/tuilib/docs/references/layout.md":Be,"/src/contents/tuilib/docs/references/object/block.md":He,"/src/contents/tuilib/docs/references/object/list.md":We,"/src/contents/tuilib/docs/references/object/textfield.md":Ke,"/src/contents/tuilib/docs/references/objects.md":Je,"/src/contents/tuilib/docs/references/style/style.md":Xe,"/src/contents/tuilib/docs/references/text/text.md":Qe,"/src/contents/tuilib/docs/references.md":et,"/src/contents/tuilib/docs/sample/colour_palette.md":nt,"/src/contents/tuilib/docs/sample/counter.md":it,"/src/contents/tuilib/docs/samples.md":Y,"/src/contents/tuilib/LICENSE":{default:pe}},Z=e=>typeof e==`string`?e.toLowerCase().trim().replace(/\s+/g,`-`).replace(/\./g,`-`).replace(/\(\)/g,``):Array.isArray(e)?e.map(e=>Z(e)).join(``):e&&typeof e==`object`&&`props`in e?Z(e.props.children):``,st=e=>{let t={title:``,version:``,date:``,namespace:``},n=e;if(e&&e.startsWith(`---`)){let r=e.split(`---`);r.length>=3&&(n=r.slice(2).join(`---`).trim(),r[1].split(`
`).forEach(e=>{let[n,...r]=e.split(`:`);if(n&&r.length>0){let e=n.trim();t[e]=r.join(`:`).trim().replace(/['"]/g,``)}}))}return{data:t,bodyContent:n}};function ct(){let{"*":e}=a(),t=(e?.toLowerCase()===`license`?`/src/contents/tuilib/LICENSE`:`/src/contents/tuilib/${e}.md`).replace(/\/+/g,`/`);console.log(`Looking for key:`,t),console.log(`Available keys:`,Object.keys(X));let n=X[t];if(!n)return d(`div`,{style:{padding:`20px`,color:`#ff4d4f`},children:d(`h2`,{children:`Document not found.`})});let r=n,i=typeof r.default==`string`?r.default:``,{data:o,bodyContent:l}=st(i),u=o.title,f=o.version,h=o.date,g=o.namespace;return m(`div`,{className:`TuiDocs-main`,children:[d(x,{title:u?`K10-K10 - ${u}`:`K10-K10 - TUI Docs`,linkTitle:`tui`,description:`K10-K10 Documentation - TUI library in C++ documentation.`,pageUrl:`https://K10-K10.github.io/docs/tuilib/${e}`}),m(`div`,{style:{display:`flex`,gap:`20px`,alignItems:`flex-start`,width:`100%`},children:[d(K,{}),d(k,{title:u||`Documentation`,style:{flex:1},children:m(`article`,{className:`tui-post-container`,style:{maxWidth:`800px`,margin:`0 auto`},children:[(f||h||g)&&m(`div`,{style:{marginBottom:`20px`,padding:`10px 15px`,background:`rgba(0,0,0,0.03)`,borderRadius:`6px`,fontSize:`0.9rem`,color:`#555`,display:`flex`,gap:`20px`,flexWrap:`wrap`},children:[f&&m(`span`,{children:[d(`strong`,{children:`Version:`}),` `,f]}),h&&m(`span`,{children:[d(`strong`,{children:`Date:`}),` `,h]}),g&&m(`span`,{children:[d(`strong`,{children:`Namespace:`}),` `,d(`code`,{children:g})]})]}),d(s,{remarkPlugins:[p],components:{code({node:e,className:t,children:n,...r}){let i=/language-(\w+)/.exec(t||``),a=i?i[1]:`text`,o=!t&&!String(n).includes(`
`);return d(z,{lang:a,inline:o,children:n})},a({href:e,children:t,...n}){if(!e)return null;if(e.startsWith(`http`)||e.startsWith(`#`))return d(`a`,{href:e,target:e.startsWith(`http`)?`_blank`:void 0,rel:`noreferrer`,...n,children:t});let r=()=>{setTimeout(()=>{window.scrollTo(0,0);let e=document.querySelector(`.TuiDocs-main`);e&&(e.scrollTop=0)},50)},i=e.replace(/^\.\.\//,``).replace(/^\.\//,``).replace(/\.md$/,``),a=location.pathname.split(`/`);a.pop();let o=`${a.join(`/`)}/${i}`.replace(/\/+/g,`/`);return d(c,{to:o,onClick:r,...n,children:t})},h2({children:e,...t}){let n=Z(e);return d(`h2`,{id:n,...t,children:e})},h3({children:e,...t}){let n=Z(e);return d(`h3`,{id:n,...t,children:e})},h4({children:e,...t}){let n=Z(e);return d(`h4`,{id:n,...t,children:e})},img({src:e,alt:t,...n}){if(!e||e.startsWith(`http`)||e.startsWith(`data:`))return d(`img`,{src:e,alt:t,style:{maxWidth:`100%`,height:`auto`,borderRadius:`8px`},...n});let r=`/tuilib/docs/${e.replace(/^\.\.\//,``).replace(/^\.\//,``).replace(/^docs\//i,``)}`;return r=r.replace(/\/+/g,`/`),m(`span`,{style:{display:`block`,textAlign:`center`,margin:`20px 0`},children:[d(`img`,{src:r,alt:t,style:{maxWidth:`100%`,height:`auto`,borderRadius:`8px`,boxShadow:`0 4px 12px rgba(0,0,0,0.1)`},...n}),t&&d(`span`,{style:{display:`block`,fontSize:`0.85rem`,color:`#888`,marginTop:`8px`},children:t})]})}},children:l})]})})]})]})}var Q=sessionStorage.getItem(`redirect`);Q&&(sessionStorage.removeItem(`redirect`),window.history.replaceState(null,``,Q));var lt=[{path:`/`,element:d(te,{})},{path:`/about`,element:d(A,{})},{path:`/blog`,element:d(j,{})},{path:`/blog/:headName`,element:d(M,{})},{path:`/docs`,element:d(I,{})},{path:`/docs/tuilib`,children:[{path:``,element:d(fe,{})},{path:`*`,element:d(ct,{})}]},{path:`/tools`,children:[{path:``,element:d(P,{})},{path:`rgb`,element:d(ne,{})},{path:`github`,element:d(se,{})},{path:`ants`,element:d(le,{})}]},{path:`*`,element:d(C,{})}];function ut(){let e=f(lt);return m(`div`,{id:`app-layout`,children:[d(x,{title:`K10-K10 - Home`,linkTitle:`Home`,description:`K10-K10 - Personal portfolio, projects, tools, and blog. Explore software development work and creative projects.`,pageUrl:`https://K10-K10.github.io/`}),d(ee,{}),d(`main`,{children:e}),d(b,{})]})}function dt(){return d(r,{basename:`/`,children:d(ut,{})})}var $=document.getElementById(`root`);if(!$)throw Error(`Root element not found`);(0,_.createRoot)($).render(d(v.StrictMode,{children:d(dt,{})}));