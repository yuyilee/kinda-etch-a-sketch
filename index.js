// console.log("it works!");

const CONTAINER = document.querySelector(".container");
const WIDTH = parseInt(window.getComputedStyle(CONTAINER).width);

// const count = 50;

// const squares = [];

function hover(e) {
    e.target.classList.add("black");
}

// function rgba(e) {
//     let red = Math.round(Math.random() * 25)
//     e.target.style.backgroundColor = 
// }

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

function rgb() {
    let square = document.querySelectorAll(".square");
    square.forEach(square => square.removeEventListener("mouseover", hover));
    square.forEach(square => square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
    }));
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
const rgbBtn = document.querySelector(".rgb");

clearBtn.addEventListener("click", clear);
rgbBtn.addEventListener("click", rgb);


const square = document.querySelectorAll(".square");
// square.forEach(square => square.addEventListener("mouseover", hover));

// console.log(square);
console.log(`${WIDTH / 16}px`);