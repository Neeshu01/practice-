const button = document.querySelector("button");
const card = document.querySelector(".card");

button.addEventListener("click",function(){
    let a1 = Math.floor(Math.random()*250);
    let a2 = Math.floor(Math.random()*250);
    let a3 = Math.floor(Math.random()*250);
    card.style.backgroundColor = `rgb(${a1}, ${a2}, ${a3})`;
});
