import{j as i,a as e,L as p,m as N,M as v,B as $,R as w,b as d,F as L,c as O,r as R}from"./vendor-CRW0ph_1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(n){if(n.ep)return;n.ep=!0;const t=l(n);fetch(n.href,t)}})();const x="_content_nt9v4_1",P="_title_nt9v4_11",f={content:x,title:P};function g({title:o,children:r}){return i("main",{className:f.content,children:[o&&e("h2",{className:f.title,children:o}),r]})}const B={};function C(){return i("footer",{className:B.footer,children:[e("p",{children:e(p,{to:"/about",children:"About"})}),e("p",{children:"© 2026 K10-K10"})]})}const M={};function S(){return e("div",{className:M.container,children:e(g,{title:"About",children:e("div",{children:"empty!"})})})}const j=`---
title: Happy Halloween!
date: 31/10/2026
section: halloween
---

あやまってUbuntuのパーテーションを削除してしまったラップトップにUbuntuを再インストールした
RCJJにもっていくとおもう

さすがにPCケースがないと持ち歩く気になれないサイズしてる
なにせ重い

久しぶりに物理的な本を買ったからブックカバーが欲しい

---
title: ¥8,125
date: 24/10/2026
section: 10-24
---

帽子&コーム買った

国際子ども図書館建物綺麗

---
title: 2026年コスモス国際賞受賞記念講演会参加
date: 22/10/2026
section: cosmos-2026
---

ロビン・イアン・マクドナルド・ダンバー博士の公演を聴きに試験期間中だけど東大へ
浅い知識しかなかったダンバー数について知れてよかった、結構面白かった

友人関係の作り方や友達の7つの柱についての公演が興味深かった
数理モデルの活用方法なども聞けてよかったし、対談も男子と女子の友人関係の話とか面白かった

AIはダンバー数に含まれるのかな?

あと神保町面白そう

---
title: サイトの刷新
date: 19/10/2026
section: init
---

サイトを刷新。blogだけにしようかな、

父親のはてぶろ読んでたら、blog書きたいなと思った
父が25歳くらいの時ので、以外と自分と書き方似てる気がした
JS,Perlに触ってスクリプト言語に感動したらしい

そろそろサーバーもらおうかな
`,A="_blog_dec8a_1",E="_article_dec8a_26",I="_meta_dec8a_44",u={blog:A,article:E,meta:I};function K(o){return encodeURIComponent(o.trim().toLowerCase().replace(/\s+/g,"-"))}function F(){return Object.entries(Object.assign({"../contents/posts/0":j})).sort(([r],[l])=>r.localeCompare(l)).flatMap(([r,l])=>{const s=l.split(/^---\s*$/gm),n=[];for(let t=1;t<s.length;t+=2){const c=s[t];c===void 0||!c.includes("title:")||n.push({index:t,source:`---
${c}
---
${s[t+1]??""}`})}return n.map(({index:t,source:c})=>{const a=N(c),m=String(a.data.title??""),b=String(a.data.date??""),y=String(a.data.section??"");return{id:K(`${r}-${t}-${m}`),title:m,date:b,section:y,content:a.content.trim()}})})}const H=F();function J(){return i("main",{className:u.blog,children:[e("h1",{children:"Blog"}),e("article",{className:u.article,children:H.map(o=>i("div",{id:o.section||o.id,className:o.section,"data-section":o.section,children:[e("h2",{children:o.title}),e("small",{className:u.meta,children:o.date}),e(v,{children:o.content})]},o.id))})]})}const U="_app_16x45_1",q="_content_16x45_7",h={app:U,content:q};function z(){return e(L,{children:e(g,{title:"K10-K10",children:e(p,{to:"/blog",children:e("h1",{children:"Blog"})})})})}function D(){return e($,{children:i("div",{className:h.app,children:[e("div",{className:h.content,children:i(w,{children:[e(d,{path:"/",element:e(z,{})}),e(d,{path:"/about",element:e(S,{})}),e(d,{path:"/blog",element:e(J,{})})]})}),e(C,{})]})})}const _=document.getElementById("root");if(!_)throw new Error("Root element not found");const G=O.createRoot(_);G.render(e(R.StrictMode,{children:e(D,{})}));
