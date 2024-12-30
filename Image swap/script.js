
var img1=document.querySelector('.img1')
var img2=document.querySelector('.img2')
var btn=document.querySelector('button')


btn.addEventListener('click',function(){
    var img1SRC=img1.getAttribute('src')
    var img2SRC=img2.getAttribute('src')

    img1.setAttribute('src',img2SRC)
    img2.setAttribute('src',img1SRC)
})

