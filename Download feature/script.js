var button = document.querySelector('button')
var growth = document.querySelector('.growth')
var h3 = document.querySelector('h3')
var grow = 0;
var flag = 0;

button.addEventListener('click',function(){
   if (grow<100){
   var interval = setInterval(function(){
        grow++;
        growth.style.width=grow+'%'
        growth.style.backgroundColour='green'
        h3.innerHTML=grow+"%"
        flag=1;
    },25)
    setTimeout(function(){
        clearInterval(interval)
    },2500)
       
}
   
})