console.log("it works!");

const CONTAINER = document.querySelector(".container");
const WIDTH = parseInt(window.getComputedStyle(CONTAINER).width);

const count = 16;

const squares = [];

for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
        squares[i] = document.createElement("div");
        squares[i].setAttribute("class", "square");
        squares[i].style.width = `${WIDTH / count}px`;
        squares[i].style.height = `${WIDTH / count}px`;
        CONTAINER.appendChild(squares[i]);
    }
}
console.log(squares);
console.log(`${WIDTH / 16}px`);