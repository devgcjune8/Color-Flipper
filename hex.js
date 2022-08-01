const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]

const btn = document.querySelector('#btn');
const col = document.querySelector('.col');

btn.addEventListener("click",  function(){
    let randomHexColor = "#";
        for ( let c = 0; c < 6; c++ ) {
            randomHexColor += hex[getRandomItem()]
        }

    col.textContent = randomHexColor;
    document.body.style.backgroundColor = randomHexColor;
})

function getRandomItem() {
    return Math.floor(Math.random() * hex.length)
}