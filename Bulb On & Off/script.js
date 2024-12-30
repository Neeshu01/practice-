var shape = document.querySelector('.shape');
var buttom = document.querySelector('button');

var flag = 1;
var icon = document.querySelector('.icon1');
buttom.addEventListener('click', function () {
    if (flag == 1) {
        shape.style.backgroundColor = 'yellow';
        flag = 0;
        buttom.textContent = 'OFF';
    }
    else {
        shape.style.backgroundColor = '#333';
        flag = 1;
        buttom.textContent = `ON`
    }
});


