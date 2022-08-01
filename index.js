const colors = ['#fcba03', '#75e9eb', 'pink', 'grey', 'violet', 'darkblue', 'rgb(6,57,112)', 'hsl(65, 81, 45)'];
const btn = document.querySelector('#btn');
const col = document.querySelector('.col');

btn.addEventListener("click", function () {
   let randomNumber = getRandomNumber();
   document.body.style.backgroundColor = colors[randomNumber];
   col.textContent = colors[randomNumber]
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}