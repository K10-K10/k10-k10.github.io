import{j as s,a as n,L as p,m as N,M as R,B as L,R as $,b as d,F as O,c as v,r as w}from"./vendor-CRW0ph_1.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const C="_content_d688h_1",J="_title_d688h_12",f={content:C,title:J};function g({title:o,children:c}){return s("main",{className:f.content,children:[o&&n("h2",{className:f.title,children:o}),c]})}const P={};function A(){return s("footer",{className:P.footer,children:[n("p",{children:n(p,{to:"/about",children:"About"})}),n("p",{children:"© 2026 K10-K10"})]})}const B={};function E(){return n("div",{className:B.container,children:n(g,{title:"About",children:n("div",{children:"empty!"})})})}const K=`---
title: ¥ 1,450
date: 16/10/2026
section: 16-10
---

タッチTFTディスプレイ買った
スマートディスプレイ欲しい

鴨肉は燻製カシスソースが一番美味しい

回路は構想&作成だけ面白い
動作すれば全部いいけどね

---
title: RCJJ2026 RWL 東東京ノード大会
date: 14/10/2026
section: RCJJ_ETOKYO
---

東東京大会RWLに参加

一走目
レスキューゾーンからの脱出ができず、坂をくだるタイミングで障害物回避が誤発された
250点

二走目
アームの動作が不安定っぽく、ちょこちょこ止まって 177点
銀ボール1つキャッチできたが、もう1つは取れず、救助できなかった　欲張った

レスキュー機構をつけたせいで重心が高く、坂の挙動が安定しない
まぁつけてないチームは許せなくはある　拾えてないけど

関東には行けるはずだから、回路見直そう
LiDARを積む

---
title: ちょっと進歩
date: 10/11/2026
section: 10-11
---

作りたいものの知識を詰めてったら、調べてることが隣接するほかのものだったことがわかった

無知の知
---
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
`,M="_blog_dec8a_1",S="_article_dec8a_26",j="_meta_dec8a_44",u={blog:M,article:S,meta:j};function x(o){return encodeURIComponent(o.trim().toLowerCase().replace(/\s+/g,"-"))}function F(){return Object.entries(Object.assign({"../contents/posts/0":K})).sort(([c],[l])=>c.localeCompare(l)).flatMap(([c,l])=>{const i=l.split(/^---\s*$/gm),t=[];for(let e=1;e<i.length;e+=2){const r=i[e];r===void 0||!r.includes("title:")||t.push({index:e,source:`---
${r}
---
${i[e+1]??""}`})}return t.map(({index:e,source:r})=>{const a=N(r),m=String(a.data.title??""),b=String(a.data.date??""),y=String(a.data.section??"");return{id:x(`${c}-${e}-${m}`),title:m,date:b,section:y,content:a.content.trim()}})})}const I=F();function H(){return s("main",{className:u.blog,children:[n("h1",{children:"Blog"}),n("article",{className:u.article,children:I.map(o=>s("div",{id:o.section||o.id,className:o.section,"data-section":o.section,children:[n("h2",{children:o.title}),n("small",{className:u.meta,children:o.date}),n(R,{children:o.content})]},o.id))})]})}const T="_app_1f058_1",U="_content_1f058_7",h={app:T,content:U};function W(){return n(O,{children:n(g,{title:"K10-K10",children:n(p,{to:"/blog",children:n("h1",{children:"Blog"})})})})}function q(){return n(L,{children:s("div",{className:h.app,children:[n("div",{className:h.content,children:s($,{children:[n(d,{path:"/",element:n(W,{})}),n(d,{path:"/about",element:n(E,{})}),n(d,{path:"/blog",element:n(H,{})})]})}),n(A,{})]})})}const _=document.getElementById("root");if(!_)throw new Error("Root element not found");const D=v.createRoot(_);D.render(n(w.StrictMode,{children:n(q,{})}));
