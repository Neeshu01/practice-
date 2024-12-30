var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
 
flag=0;

btn.addEventListener("click",function(){
   if(flag == 0){
    h2.innerHTML = 'Request sending';
    h2.style.color = 'white';
    
   setTimeout(function(){
   h2.innerHTML = 'Friends';
   h2.style.color = 'white';
   btn.innerHTML = 'Removed';
   },1000)
   flag=1;

   }
   else{
    h2.innerHTML = 'Stanger';
    h2.style.color = 'white'
    btn.innerHTML = 'Add';
    flag=0;
   }

});