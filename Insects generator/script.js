var btn = document.querySelector('button')
var body = document.querySelector('body')


btn.addEventListener('click', function(){
    var idx = Math.floor(Math.random()*2);
    var left = Math.floor(Math.random()*90);
    var right = Math.floor(Math.random()*90);
     
    var arr = ['https://pngimg.com/uploads/butterfly/small/butterfly_PNG1006.png','https://img.freepik.com/free-photo/frog-leg-beetle-sagra-sp-white-background-frog-leg-beetle-sagra-sp-closeup_488145-2859.jpg?ga=GA1.1.1975090110.1735102381&semt=ais_hybrid']

    var jip = document.createElement('img')
    jip.setAttribute('src',arr[idx])
    jip.style.left = left +'%';
    jip.style.top = right +'%';
    jip.style.position = 'absolute';
    jip.style.width = '70px';
    jip.style.height = '70px';
    body.appendChild(jip);

})