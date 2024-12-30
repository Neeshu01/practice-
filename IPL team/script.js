// Get all teams
let teams = ['CSK', 'MI', 'KKR', 'GT', 'SRH', 'RR', 'LSG', 'PBKS', 'DC'];

let btn = document.querySelector('button');
let text = document.querySelector('h1');

btn.addEventListener('click', function () {

    let num = Math.floor(Math.random() * teams.length);

    text.innerHTML = teams[num];
});
