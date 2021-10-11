//JS实现
let [box,content,text]=[
   document.querySelector('.box'),
   document.querySelector('.content'),
   document.querySelector('.text')
]
let [textWidth,boxWidth]=[
    text.offsetWidth,
    box.offsetWidth
]
window.onload=function checkScrollLeft(){
    //判断文字长度是否大于盒子长度
    if(boxWidth>textWidth){
        return false
    }
    content.innerHTML+=content.innerHTML
    document.querySelector('.text').classList.add('padding')
    //更新
    textWidth=document.querySelector('.text').offsetWidth
    toScrollLeft()
}
function toScrollLeft(){
    //如果文字长度大于滚动条距离，则递归拖动
    if(textWidth > box.scrollLeft){
        box.scrollLeft++
        setTimeout('toScrollLeft()',18)
    }else{

    }
}
//CSS实现
var cont = document.querySelector('.cont')
var wrap = document.querySelector('.wrap')
var txt = document.querySelector('.txt')
var wrapWidth = wrap.offsetWidth
var txtWidth = txt.offsetWidth
window.onload = function xcheckScrollLeft(){
   //判断文字长度是否大于盒子长度 开始滚动
   if(txtWidth > wrapWidth){
       txt.style.paddingRight = '300px'
       cont.style.left='-870px'
   }
   //滚动结束
   document.addEventListener('transitionend',function(){
      console.log('end')
   },false)
}