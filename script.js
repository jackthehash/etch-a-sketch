const container = document.querySelector(".container");
const btn = document.querySelector("button");

let num = 16;

btn.addEventListener("click", () => {num = prompt("How many number of squares per side for the new grid?");
    if (num > 100) {
        num = prompt("How many number of squares per side for the new grid?\nSmaller than 100!");
    }
    if (num < 0) {
        num = prompt("How many number of squares per side for the new grid?\Bigger than 0!");
    }
    newGrid();
})

function newGrid() {
    container.textContent = "";
    for (let i = 0; i < num; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < num; j++) {
            const column = document.createElement("div");
            column.classList.add("square");
            column.style.opacity = "0.1";
            row.appendChild(column);
        }
        container.appendChild(row);
    }
    
    const square = document.querySelectorAll(".square");
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("mouseenter", () => square[i].style.backgroundColor = randomColor());
        square[i].addEventListener("mouseleave", () => {square[i].style.backgroundColor = "black";
            if (square[i].style.opacity !== "1") {
            square[i].style.opacity = String(Number(square[i].style.opacity) + 0.09);
            }
        });
    }
}

for (let i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < num; j++) {
        const column = document.createElement("div");
        column.classList.add("square");
        column.style.opacity = "0.1";
        row.appendChild(column);
    }
    container.appendChild(row);
}

const square = document.querySelectorAll(".square");
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseenter", () => square[i].style.backgroundColor = randomColor());
    square[i].addEventListener("mouseleave", () => {square[i].style.backgroundColor = "black";
        if (square[i].style.opacity !== "1") {
        square[i].style.opacity = String(Number(square[i].style.opacity) + 0.09);
        }
    });
}

function random() {
    return Math.floor(Math.random() * 255);
}

function randomColor() {
    return "rgb(" + random() + ", " + random() + ", " + random() + ")";
}

function dark() {

}
