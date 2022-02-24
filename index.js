// console.log("it works!");

const CONTAINER = document.querySelector(".container");
const WIDTH = parseInt(window.getComputedStyle(CONTAINER).width);

// const count = 50;

// const squares = [];

function hover(e) {
    e.target.classList.add("black");
}

function draw(count) {
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            // squares[i] = document.createElement("div");
            // squares[i].setAttribute("class", "square");
            // squares[i].style.width = `${WIDTH / count}px`;
            // squares[i].style.height = `${WIDTH / count}px`;
            // CONTAINER.appendChild(squares[i]);
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${WIDTH / count}px`;
            square.style.height = `${WIDTH / count}px`;
            CONTAINER.appendChild(square);
            square.addEventListener("mouseover", hover);
        }
    }
}

function clear() {
    let square = document.querySelectorAll(".square");
    square.forEach(square => CONTAINER.removeChild(square));
    while (true) {
        let size = prompt("Enter size of grid:", 24);
        if (Number.isInteger(+size) && (size <= 50 && size > 1)) {
            draw(size);
            break;
        }
    }
    // const square = document.querySelectorAll(".square");
    // square.forEach(square => square.addEventListener("mouseover", hover));
}

draw(24);

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", clear);

const square = document.querySelectorAll(".square");
// square.forEach(square => square.addEventListener("mouseover", hover));

// console.log(square);
console.log(`${WIDTH / 16}px`);