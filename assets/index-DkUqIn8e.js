import{r as e}from"./rolldown-runtime-DGruFWvd.js";import{a as t,c as n,d as r,f as i,i as a,l as o,m as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./vendor-Bp7Lk6Qa.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var h=e(u()),g=e(s());function _({name:e,theme:t=`auto`,style:n={}}){let[r,i]=(0,g.useState)(`var(--white-color)`),[a,o]=(0,g.useState)(``),s=`/SVG-icons/svg/${e}.svg`;return(0,g.useEffect)(()=>{let e;switch(t){case`light`:e=`var(--white-color)`;break;case`dark`:e=`var(--black-color)`;break;case`re`:e=`var(--reverse-color)`;break;default:e=document.body.dataset.theme===`dark`?`var(--black-color)`:`var(--white-color)`}i(e),fetch(s).then(e=>e.text()).then(e=>o(e)).catch(console.error)},[s,t]),l(`div`,{style:{color:r,margin:`auto`,height:`24px`,width:`24px`,...n},dangerouslySetInnerHTML:{__html:a}})}function v(){let e=[[`Documents`,`docs`],[`Tools`,`tools`],[`Blog`,`blog`],[`About`,`about`]],[t,n]=(0,g.useState)(window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`);return(0,g.useEffect)(()=>{document.body.setAttribute(`data-theme`,t)},[t]),f(`header`,{className:`header`,children:[l(`a`,{href:`/`,className:`title`,children:`K10-K10`}),f(`label`,{id:`hamburger-menu`,children:[l(`input`,{id:`menu`,type:`checkbox`}),l(`div`,{id:`topic_scope_bg`,children:l(`div`,{id:`topic_scope`,children:e.map((e,t)=>l(`a`,{href:`/${e.at(1)}`,className:`topic`,children:e.at(0)},t))})}),l(`div`,{id:`box`,children:l(`span`,{id:`bar`})})]}),l(`div`,{className:`theme`,onClick:()=>{n(e=>e===`dark`?`light`:`dark`)},children:l(_,{name:t===`dark`?`moon`:`sun`,theme:`light`,style:{height:`24px`,width:`24px`}})})]})}function y(){return l(`footer`,{children:f(`div`,{className:`footer_info`,children:[f(`p`,{children:[`© `,new Date().getFullYear(),` K10-K10`]}),l(`p`,{children:`Powered by React, Vite & GitHub Pages`})]})})}function b({linkTitle:e,title:t,description:n,pageUrl:r}){return(0,g.useEffect)(()=>{let t=`K10-K10`;e&&(t=`K10-K10 | ${e}`),document.title=t;let i=document.querySelector(`meta[name="description"]`);i||(i=document.createElement(`meta`),i.setAttribute(`name`,`description`),document.head.appendChild(i)),i.setAttribute(`content`,n);let a=document.querySelector(`meta[property="og:title"]`);a||(a=document.createElement(`meta`),a.setAttribute(`property`,`og:title`),document.head.appendChild(a)),a.setAttribute(`content`,t);let o=document.querySelector(`meta[property="og:description"]`);if(o||(o=document.createElement(`meta`),o.setAttribute(`property`,`og:description`),document.head.appendChild(o)),o.setAttribute(`content`,n),r){let e=document.querySelector(`meta[property="og:url"]`);e||(e=document.createElement(`meta`),e.setAttribute(`property`,`og:url`),document.head.appendChild(e)),e.setAttribute(`content`,r);let t=document.querySelector(`link[rel="canonical"]`);t||(t=document.createElement(`link`),t.setAttribute(`rel`,`canonical`),document.head.appendChild(t)),t.setAttribute(`href`,r)}let s=document.querySelector(`meta[name="twitter:title"]`);s||(s=document.createElement(`meta`),s.setAttribute(`name`,`twitter:title`),document.head.appendChild(s)),s.setAttribute(`content`,t);let c=document.querySelector(`meta[name="twitter:description"]`);c||(c=document.createElement(`meta`),c.setAttribute(`name`,`twitter:description`),document.head.appendChild(c)),c.setAttribute(`content`,n)},[e,t,n,r]),null}const x=[{id:1,title:`First blog`,headName:`first_blog`,date:`14-Sep-2025`,content:`This is a test for the blog component.
Here I will write about technical content and my opinions.
I will update this blog as much as possible.`},{id:3,title:`Create a script for this blog`,headName:`post_script`,date:`05-Oct-2025`,content:`Until now, this blog written directly into JSON files.
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
Ultimately, I want to be able to write in Markdown format.`},{id:4,title:"Transitioned from `Create React App` to `Vite`",headName:`vite`,date:`19-Oct-2025`,content:`On February 14, 2025, \`Create React App\` was officially deprecated.
I learnt about this from a comment on Qiita.
I thank the person who told me.

So, I decided to migrate to \`Vite\`, a fast and modern build tool.
I thought it would be complicated, but it turned out to be very simple.

So far, I haven’t encountered any issues.
`},{id:2,title:`Added langton's ant`,headName:`langton`,date:`04-Oct-2025`,content:`I added a new page about Langton's Ant.
It was my first time creating a program using JavaScript,
and I learned a lot from it.
It was difficult to make it display quickly.

I want to be able to change the speed and display size.
I might also add the “Game of Life.”
But, I don't know how to change colour in touched grid;;
I should have to learn more...`}];function S(){return f(`div`,{id:`home`,children:[l(b,{title:`K10-K10 - Personal Portfolio & Projects`,linkTitle:`Home`,description:`K10-K10 - Personal portfolio featuring software development projects, interactive tools, and blog posts. Explore my work in programming and creative projects.`,pageUrl:`https://K10-K10.github.io/`}),l(`h1`,{children:`Hello,World!`}),f(`div`,{className:`information`,children:[l(`h2`,{children:`Tools`}),l(`p`,{children:"New `langton's ant`"}),l(`h2`,{children:`Latest Blog Posts`}),l(`ul`,{children:x.slice(-3).reverse().map(e=>l(`li`,{children:l(`a`,{href:`/blog/${e.headName}`,children:e.title})},e.headName))})]})]})}function C(){return f(`div`,{id:`NotFound`,children:[l(b,{title:`K10-K10 - Page Not Found`,linkTitle:`404`,description:`Page not found. The requested page does not exist on K10-K10 website.`}),l(`h1`,{children:`Error:404`}),l(`h2`,{children:`Page NotFound`})]})}function w({children:e,onClick:n,disabled:r=!1,style:i={},className:a}){let o=t({margin:`10px`,height:`50px`,width:`200px`,color:`var(--button-text-color)`,backgroundColor:`var(--button-color)`,border:`1px solid var(--button-color)`,borderRadius:`10px`,fontFamily:`inherit`,fontSize:`var(--Base-FontSize)`,textAlign:`center`,...i});return l(`button`,{className:`button`+a,onClick:n,disabled:r,css:o,children:e})}function T(){let[e,t]=(0,g.useState)(0),[n,r]=(0,g.useState)(0),[i,a]=(0,g.useState)(0);e>255&&t(255),e<0&&t(0),n>255&&r(255),n<0&&r(0),i>255&&a(255),i<0&&a(0);let o=(0,g.useRef)(null);return(0,g.useEffect)(()=>{if(o.current){let t=o.current.getContext(`2d`);if(!t)return;t.fillStyle=`rgb(${e},${n},${i})`,t.fillRect(0,0,100,100)}},[e,n,i]),f(`div`,{id:`RGB`,children:[l(b,{title:`React Test`,linkTitle:`RGB`,description:`K10-K10 site - React test page`}),l(`h1`,{children:`RGB checker`}),f(`div`,{children:[f(`p`,{className:`RGB`,children:[`R: `,e]}),l(w,{children:`R + 5`,onClick:()=>t(e+5),disabled:!1}),l(w,{children:`R - 5`,onClick:()=>t(e-5),disabled:!1})]}),f(`div`,{children:[f(`p`,{className:`RGB`,children:[`G: `,n]}),l(w,{children:`G + 5`,onClick:()=>r(n+5),disabled:!1}),l(w,{children:`G - 5`,onClick:()=>r(n-5),disabled:!1})]}),f(`div`,{children:[f(`p`,{className:`RGB`,children:[`B: `,i]}),l(w,{children:`B + 5`,onClick:()=>a(i+5),disabled:!1}),l(w,{children:`B - 5`,onClick:()=>a(i-5),disabled:!1})]}),l(`canvas`,{id:`myCanvas`,ref:o,width:100,height:100})]})}var E=T;function ee({type:e=`text`,label:t,value:n,onChange:r,tmp:i=``,label_style:a={},input_style:o={}}){let s={label:{...a},input:{fontSize:`var(--Base-FontSize)`,fontFamily:`inherit`,backgroundColor:`var(--background-color)`,padding:`10px`,...o}};return f(`div`,{children:[f(`label`,{style:s.label,htmlFor:t,children:[t,`:`,` `]}),l(`input`,{type:e,value:n,onChange:e=>r(e.target.value),placeholder:i,style:s.input,id:t})]})}function te({children:e,dialog_style:t={},button_style:n={}}){let r={dialog:{position:`absolute`,margin:0,padding:`16px`,borderRadius:`16px`,border:`none`,boxShadow:`0 4px 12px rgba(0,0,0,0.2)`,top:`20px`,left:`50%`,transform:`translateX(-50%)`,background:`white`,...t},closeButton:{background:`var(--primary-color)`,height:`32px`,padding:`4px 12px`,borderRadius:`8px`,border:`none`,cursor:`pointer`,...n}};return f(`dialog`,{open:!0,style:r.dialog,children:[e,l(`form`,{method:`dialog`,children:l(w,{style:r.closeButton,disabled:!1,children:`OK`})})]})}var ne=te;function D(){let[e,t]=(0,g.useState)(``),[n,r]=(0,g.useState)([]),[i,a]=(0,g.useState)([]);return f(`div`,{className:`github`,children:[l(b,{title:`Github API`,linkTitle:`Github`,description:`K10-K10 site - Use Github-API`}),l(ee,{type:`text`,label:`Github User Name`,value:e,onChange:t,tmp:`Input`}),l(w,{onClick:async()=>{if(!e){a(e=>[...e,`Error: name is required`]);return}try{let t=await fetch(`https://api.github.com/users/${e}/repos`);if(!t.ok)throw Error(`User is not found`);let n=await t.json();r(n)}catch(e){console.error(`Request error:`,e),a(e=>[...e,`API failed`])}},disabled:!1,children:`API`}),i.map((e,t)=>l(ne,{button_style:{color:`var(--error-color)`},children:l(`p`,{children:e})},t)),l(`ul`,{children:n.map(e=>l(`li`,{children:l(`a`,{href:e.html_url,target:`_blank`,rel:`noreferrer`,children:e.name})},e.id))})]})}var O=D,k=200,A=5;function j(){let e=(0,g.useRef)(null),t=(0,g.useRef)(Array.from({length:k},()=>Array(k).fill(!1))),n=(0,g.useRef)(0),r=(0,g.useRef)(Math.floor(k/2)),i=(0,g.useRef)(Math.floor(k/2)),a=(0,g.useRef)(0),[o,s]=(0,g.useState)(!1),[c,u]=(0,g.useState)(0);function d(){n.current=0,t.current=Array.from({length:k},()=>Array(k).fill(!1)),r.current=Math.floor(k/2),i.current=Math.floor(k/2),a.current=0;let o=e.current.getContext(`2d`);o&&(o.fillStyle=`white`,o.fillRect(0,0,k*A,k*A),o.fillStyle=`red`,o.fillRect(r.current*A,i.current*A,A,A))}function p(){n.current+=1;let o=e.current.getContext(`2d`);if(!o)return;let s=t.current,c=r.current,l=i.current,d=a.current;switch(s[l][c]?(d=(d+3)%4,s[l][c]=!1,o.fillStyle=`white`):(d=(d+1)%4,s[l][c]=!0,o.fillStyle=`black`),o.fillRect(c*A,l*A,A,A),d){case 0:l=(l-1+k)%k;break;case 1:c=(c+1)%k;break;case 2:l=(l+1)%k;break;case 3:c=(c-1+k)%k;break}o.fillStyle=`red`,o.fillRect(c*A,l*A,A,A),r.current=c,i.current=l,a.current=d,u(e=>e+1)}return(0,g.useEffect)(()=>{if(!o)return;let e=setInterval(p,8);return()=>clearInterval(e)},[o]),(0,g.useEffect)(()=>{d()},[]),f(`div`,{className:`ants`,children:[l(b,{title:`Langton's ant`,linkTitle:`Ants`,description:`K10-K10 site - Langton's ant simulator`}),l(`h1`,{className:`ants-title`,children:`Langton's ant`}),l(`canvas`,{className:`ants-canvas`,ref:e,width:k*A,height:k*A,style:{border:`1px solid black`}}),f(`div`,{className:`ants-controls`,style:{marginTop:`10px`},children:[l(w,{onClick:d,disabled:!1,children:l(_,{name:`reset`,theme:`re`})}),l(w,{onClick:p,disabled:!1,children:l(_,{name:`jump`,theme:`re`})}),l(w,{onClick:()=>s(!o),disabled:!1,children:l(_,{name:o?`stop`:`start`,theme:`re`})})]}),f(`p`,{className:`ants-position`,children:[`Ant Position: (`,r.current,`, `,i.current,`), Direction: `,a.current,`, count `,n.current]})]})}var M=j;function N({style:e={}}={}){let t={spacer:{padding:`15px`,...e}};return l(`div`,{style:t.spacer})}function P({title:e,children:t,style_scope:n={},style_contents:r={}}){return f(`div`,{className:`talk-scope`,style:n,children:[l(`div`,{className:`title`,children:e}),l(`div`,{className:`talk-contents`,style:r,children:t})]})}function F(){return f(`div`,{className:`about`,children:[l(b,{title:`K10-K10 - About`,linkTitle:`About`,description:`Learn about K10-K10 - a junior high school developer passionate about C++, competitive programming, and robotics. Explore portfolio and projects.`,pageUrl:`https://K10-K10.github.io/About`}),f(P,{title:`About the site`,style_scope:{background:`var(--cloudy_background-color)`},children:[l(`p`,{children:`This site is my React practice site.`}),l(`p`,{children:`Content related to blogs, tools, games, and more will be added.`}),l(N,{}),l(`p`,{children:`This site is powered by GitHub Pages and React.`}),l(`a`,{href:`https://github.com/K10-K10/k10-k10.github.io`,children:`This site's source code`})]}),f(P,{title:`About the Author`,children:[f(`div`,{className:`user-wrapper`,children:[l(`img`,{src:`/favicon.ico`,alt:`author icon`}),f(`div`,{className:`user-info`,children:[l(`p`,{children:`Hello! I'm K10-K10. I'm junior high school student`}),l(`a`,{href:`https://github.com/K10-K10`,children:`My GitHub Account`}),l(`p`,{children:`I primarily use C++, and belong to a robotics team.`}),l(`a`,{href:`https://techno-robocup.github.io/`,children:`Robot team's blogs`})]})]}),l(`p`,{children:`I started programming in first grade and attended robotics classes.`}),l(`p`,{children:`At the same time, my father recommended Unity, and I started learning C#`}),l(`p`,{children:`I entered junior high school and started competitive programming and C++.`}),l(`p`,{children:`Recently, I haven't been able to join in competitions. Therefore, I want to join as much as possible.`}),l(N,{}),l(`p`,{children:`I want to update this site as much as possible.`}),l(`p`,{children:`Thank you for Reading!`})]})]})}function I(){let e=[...x].sort((e,t)=>t.id-e.id);return f(`div`,{className:`blog-home`,children:[l(b,{title:`K10-K10 - Blog`,linkTitle:`Blog`,description:`K10-K10 Blog - Read articles about programming, robotics, competitive programming, and software development projects.`,pageUrl:`https://K10-K10.github.io/Blog`}),l(P,{title:`Blog`,children:e.map(e=>l(`div`,{children:f(`p`,{className:`blog-list`,children:[e.date,` :`,` `,l(o,{className:`blog-link`,to:`/blog/${e.headName}`,children:e.title})]})},e.id))})]})}function L(){let{headName:e}=r();m();let t=x.find(t=>t.headName===e);return t?l(`div`,{className:`blog-post`,children:f(P,{title:t.title,children:[l(`small`,{style:{textAlign:`center`,display:`block`,marginBottom:`30px`},className:`data`,children:t.date}),l(`pre`,{style:{lineHeight:`150%`,whiteSpace:`pre-wrap`},children:t.content})]})}):l(C,{})}function R(){return f(`div`,{className:`tools`,children:[l(b,{title:`K10-K10 - Tools`,linkTitle:`Tools`,description:`K10-K10 Tools - Interactive tools including GitHub API viewer, RGB color checker, and Langton's Ant simulator.`,pageUrl:`https://K10-K10.github.io/Tools`}),l(`h1`,{children:`Tools`}),l(`a`,{href:`Tools/Github`,children:`Github API`}),l(`a`,{href:`Tools/RGB`,children:`RGB checker`}),l(`a`,{href:`Tools/Ants`,children:`Langton's Ant`})]})}var z=R;function B({title:e,description:t,imageUrl:n,link:r}){return l(`div`,{className:`grid-item`,onClick:()=>window.location.href=r||`./`,children:f(`div`,{className:`grid-content`,children:[n&&l(`img`,{src:n,alt:e,className:`grid-image`}),f(`div`,{className:`grid-text`,children:[l(`h2`,{className:`grid-title`,children:e}),l(`p`,{className:`grid-description`,children:t})]})]})})}function V(){return f(`div`,{className:`Docs-home`,children:[l(b,{title:`K10-K10 - Documentation`,linkTitle:`Docs`,description:`K10-K10 Documentation - Technical documentation and guides for K10-K10 projects and tools.`,pageUrl:`https://K10-K10.github.io/Docs`}),l(P,{title:`Documentation`,children:l(B,{title:`KrowTUI`,description:`C++ library to make TUI tools.`,imageUrl:`/github_logo.png`,link:`/docs/tuilib`})})]})}function H({textToCopy:e}){let[t,n]=(0,g.useState)(!1);return l(`div`,{children:l(`button`,{onClick:async()=>{try{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),1e3)}catch(e){console.error(`Failed to copy: `,e),alert(`Failed to copy text.`)}},children:t?`Copied!`:`Copy`})})}var re=H;function U({lang:e,inline:t,children:n}){let r=e?e.replace(`language-`,``):`text`;return t?l(`code`,{css:W,children:n}):f(`div`,{css:G,children:[l(`p`,{css:K,children:r}),l(`div`,{css:q,children:l(re,{textToCopy:String(n)})}),l(c,{language:r,style:p,customStyle:{background:`transparent`,padding:0,margin:0,fontSize:`1rem`},codeTagProps:{style:{fontFamily:`monospace`,tabSize:4}},children:String(n).replace(/\n$/,``)})]})}var W=t({background:`var(--code-color)`,color:`var(--text-right-color)`,padding:`2px 6px`,borderRadius:`4px`,fontSize:`0.95em`,fontFamily:`monospace`,wordBreak:`break-word`,display:`inline-block`}),G=t({position:`relative`,marginTop:`10px`,marginBottom:`10px`,display:`block`,width:`100%`,textAlign:`left`,padding:`15px`,background:`var(--code-color)`,borderRadius:`10px`,overflowX:`auto`}),K=t({color:`#aaa`,fontSize:`0.9rem`,marginBottom:`8px`,textTransform:`uppercase`}),q=t({position:`absolute`,top:`10px`,right:`10px`,zIndex:10}),J=`---
version: 0.3.0
update: 19/06/2026
---

# Krow TUI

![Logo](docs/logo.png)

[![build](https://github.com/K10-K10/krowTUI/actions/workflows/build.yml/badge.svg)](https://github.com/K10-K10/krowTUI/actions/workflows/build.yml)
[![Lint](https://github.com/K10-K10/krowTUI/actions/workflows/lint.yml/badge.svg)](https://github.com/K10-K10/krowTUI/actions/workflows/lint.yml)
[![GitHub Release Date](https://img.shields.io/github/release-date/K10-K10/krowTUI)](<https://github.com/K10-K10/krowTUI/releases>)
[![GitHub Releases](https://img.shields.io/github/release/K10-K10/krowTUI.svg)](https://github.com/K10-K10/krowTUI/releases)
[![GitHub License](https://img.shields.io/github/license/K10-K10/krowTUI)](<https://github.com/K10-K10/krowTUI/blob/main/LICENSE>)

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
  Text text;
  text.contents("Hello TUI!");

  List list;
  list.items({"item1", "item2", "item3", "item4", "item5"});
  Block box;
  text.position({1, 1, 20, 1});
  list.position({1, 3, 20, 5});
  box.position({0, 0, FULL, FULL});
  app.loop([&]() {
    box.draw();
    text.draw();
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
`,Y=e=>typeof e==`string`?e.toLowerCase().trim().replace(/\s+/g,`-`).replace(`.`,`-`).replace(`(`,``).replace(`)`,``):Array.isArray(e)?e.map(e=>Y(e)).join(``):e&&typeof e==`object`&&`props`in e?Y(e.props.children):``;function X(){return f(`div`,{className:`TuiDocs-main`,children:[l(b,{title:`K10-K10 - TUI Docs`,linkTitle:`tui`,description:`K10-K10 Documentation - TUI library in C++ documentation.`,pageUrl:`https://K10-K10.github.io/docs/tuilib`}),f(P,{title:`README`,children:[l(`div`,{style:{marginBottom:`20px`,display:`flex`,gap:`15px`,flexDirection:`column`},children:l(`a`,{href:`https://github.com/k10-k10/KrowTUI`,target:`_blank`,rel:`noreferrer`,className:`github-link`,children:`Github Repository`})}),l(a,{remarkPlugins:[d],components:{code({node:e,className:t,children:n,...r}){let i=/language-(\w+)/.exec(t||``),a=i?i[1]:`text`,o=!t&&!String(n).includes(`
`);return l(U,{lang:a,inline:o,children:n})},h2({children:e,...t}){let n=Y(e);return l(`h2`,{id:n,...t,children:e})},a({href:e,children:t,...n}){if(!e)return null;if(e.startsWith(`http`)||e.startsWith(`#`))return l(`a`,{href:e,target:e.startsWith(`http`)?`_blank`:void 0,rel:`noreferrer`,...n,children:t});let r=()=>{setTimeout(()=>{window.scrollTo(0,0);let e=document.querySelector(`.TuiDocs-main`);e&&(e.scrollTop=0)},50)},i=e.replace(/^\.\.\//,``).replace(/^\.\//,``).replace(/\.md$/,``),a=location.pathname.split(`/`);a.pop();let s=`${a.join(`/`)}/tuilib/${i}`.replace(/\/+/g,`/`);return l(o,{to:s,onClick:r,...n,children:t})},img({src:e,alt:t,...n}){if(!e||e.startsWith(`http`)||e.startsWith(`data:`))return l(`img`,{src:e,alt:t,style:{maxWidth:`100%`,height:`auto`,borderRadius:`8px`},...n});let r=e.replace(/^\.\.\//,``).replace(/^\.\//,``),i=location.pathname.toLowerCase(),a=``;if(i===`/docs/tuilib`||i===`/docs/tuilib/`)a=`/src/contents/tuilib/${r}`;else{let e=location.pathname.split(`/`);e.pop(),a=`/src/contents/tuilib/${e.join(`/`).replace(/^\/Docs\/tuilib/i,``)}/${r}`}return a=a.replace(/\/+/g,`/`),f(`span`,{style:{display:`block`,textAlign:`center`,margin:`20px 0`},children:[l(`img`,{src:a,alt:t,style:{maxWidth:`100%`,height:`auto`,borderRadius:`8px`,boxShadow:`0 4px 12px rgba(0,0,0,0.1)`},...n}),t&&l(`span`,{style:{display:`block`,fontSize:`0.85rem`,color:`#888`,marginTop:`8px`},children:t})]})}},children:J})]})]})}var ie={},Z=e=>typeof e==`string`?e.toLowerCase().trim().replace(/\s+/g,`-`).replace(/\./g,`-`).replace(/\(\)/g,``):Array.isArray(e)?e.map(e=>Z(e)).join(``):e&&typeof e==`object`&&`props`in e?Z(e.props.children):``;function ae(){let{"*":e}=r(),t=`/src/contents/tuiLib/docs/${e?.replace(/^\/?(tuiLib|tuilib)\//i,``)||``}.md`,n=ie[t];if(!n)return l(`div`,{style:{padding:`20px`},children:l(`h2`,{children:`Document not found.`})});let i=n,s=typeof i.default==`string`?i.default:``,c=s,u=``;if(s&&s.startsWith(`---`)){let e=s.split(`---`);e.length>=3&&(c=e.slice(2).join(`---`).trim(),(e[1]?.split(`
`)||[]).forEach(e=>{let[t,...n]=e.split(`:`);t&&t.trim()===`title`&&n.length>0&&(u=n.join(`:`).trim().replace(/['"]/g,``))}))}return f(`div`,{className:`TuiDocs-main`,children:[l(b,{title:u?`K10-K10 - ${u}`:`K10-K10 - TUI Docs`,linkTitle:`tui`,description:`K10-K10 Documentation - TUI library in C++ documentation.`,pageUrl:`https://K10-K10.github.io/docs/tuilib/${e}`}),l(P,{title:u||`Documentation`,children:l(`article`,{className:`tui-post-container`,style:{maxWidth:`800px`,margin:`0 auto`},children:l(a,{remarkPlugins:[d],components:{code({node:e,className:t,children:n,...r}){let i=/language-(\w+)/.exec(t||``),a=i?i[1]:`text`,o=!t&&!String(n).includes(`
`);return l(U,{lang:a,inline:o,children:n})},a({href:e,children:t,...n}){if(!e)return null;if(e.startsWith(`http`)||e.startsWith(`#`))return l(`a`,{href:e,target:e.startsWith(`http`)?`_blank`:void 0,rel:`noreferrer`,...n,children:t});let r=()=>{setTimeout(()=>{window.scrollTo(0,0);let e=document.querySelector(`.TuiDocs-main`);e&&(e.scrollTop=0)},50)},i=e.replace(/^\.\.\//,``).replace(/^\.\//,``).replace(/\.md$/,``),a=location.pathname.split(`/`);a.pop();let s=`${a.join(`/`)}/${i}`.replace(/\/+/g,`/`);return l(o,{to:s,onClick:r,...n,children:t})},h2({children:e,...t}){let n=Z(e);return l(`h2`,{id:n,...t,children:e})},h3({children:e,...t}){let n=Z(e);return l(`h3`,{id:n,...t,children:e})},h4({children:e,...t}){let n=Z(e);return l(`h4`,{id:n,...t,children:e})},img({src:e,alt:t,...n}){if(!e||e.startsWith(`http`)||e.startsWith(`data:`))return l(`img`,{src:e,alt:t,style:{maxWidth:`100%`,height:`auto`,borderRadius:`8px`},...n});let r=e.replace(/^\.\.\//,``).replace(/^\.\//,``),i=location.pathname.split(`/`);i.pop();let a=`/src/contents/tuiLib/${i.join(`/`).replace(`/docs/tuilib`,``)}/${r}`.replace(/\/+/g,`/`);return f(`span`,{style:{display:`block`,textAlign:`center`,margin:`20px 0`},children:[l(`img`,{src:a,alt:t,style:{maxWidth:`100%`,height:`auto`,borderRadius:`8px`,boxShadow:`0 4px 12px rgba(0,0,0,0.1)`},...n}),t&&l(`span`,{style:{display:`block`,fontSize:`0.85rem`,color:`#888`,marginTop:`8px`},children:t})]})}},children:c})})})]})}var Q=sessionStorage.getItem(`redirect`);Q&&(sessionStorage.removeItem(`redirect`),window.history.replaceState(null,``,Q));var oe=[{path:`/`,element:l(S,{})},{path:`/about`,element:l(F,{})},{path:`/blog`,element:l(I,{})},{path:`/blog/:headName`,element:l(L,{})},{path:`/docs`,element:l(V,{})},{path:`/docs/tuilib`,children:[{path:``,element:l(X,{})},{path:`docs*`,element:l(ae,{})}]},{path:`/tools`,children:[{path:``,element:l(z,{})},{path:`RGB`,element:l(E,{})},{path:`Github`,element:l(O,{})},{path:`Ants`,element:l(M,{})}]},{path:`*`,element:l(C,{})}];function se(){let e=i(oe);return f(`div`,{id:`app-layout`,children:[l(b,{title:`K10-K10 - Home`,linkTitle:`Home`,description:`K10-K10 - Personal portfolio, projects, tools, and blog. Explore software development work and creative projects.`,pageUrl:`https://K10-K10.github.io/`}),l(v,{}),l(`main`,{children:e}),l(y,{})]})}function ce(){return l(n,{basename:`/`,children:l(se,{})})}var $=document.getElementById(`root`);if(!$)throw Error(`Root element not found`);(0,h.createRoot)($).render(l(g.StrictMode,{children:l(ce,{})}));