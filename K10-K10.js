/*
@author hatuna-827
2025/02/10
*/

document.addEventListener('DOMContentLoaded', function() {
document.getElementsByTagName('body')[0].innerHTML='<div id="main">'+document.getElementsByTagName('body')[0].innerHTML+'</div>'
document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin','<div id="header"></div>')
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend','<div id="footer"></div>')
document.getElementsByTagName('h1')[0].insertAdjacentHTML('afterend','<div id="tag"></div>')
var tag_target=document.getElementsByTagName('h2')
if(tag_target.length!=0){
for (i=0;i<tag_target.length;i++){
    tag_target[i].setAttribute("id",tag_target[i].innerText)
    document.getElementById('tag').insertAdjacentHTML('beforeend','<a href="#'+tag_target[i].id+'">'+(i+1)+'.'+tag_target[i].id+'</a>\n')
}
document.getElementById('tag').insertAdjacentHTML('beforebegin','<h2>目次<h2>')
}
var img=document.getElementsByTagName('img')
for(let i=0;i<img.length;i++){
    img[i].setAttribute('alt','画像の読み込みに失敗しました。')
}
let code_target=document.getElementsByTagName('pre')
for(let i=0;i<code_target.length;i++){
    code_target[i].setAttribute('id','code'+i)
    document.getElementById('code'+i).insertAdjacentHTML('beforebegin','<div class="copy-button-box"><button class="copy-button" id="button'+i+'" onclick="copy('+i+')">copy</button></div>')
}
})
function copy(target_id){
    var target=document.getElementById('code'+target_id)
    navigator.clipboard.writeText(target.textContent)
    document.getElementById('button'+target_id).textContent = 'copied!'
    setTimeout(function() {
        document.getElementById('button'+target_id).textContent = 'copy'
    }, 1000)
}
function goToPage() {
    window.location.href = 'https://k10-k10.github.io/';
}
