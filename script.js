// making a grid
function makeGrid(numbah) {  
  const container = document.querySelector("#container");
    for (let i = 0; i < numbah; i++) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);

        for (let j = 0; j < numbah; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        };
    };
};

//grid clearing function
function clearGrid() {
    for (let x = 0; x < collection.length; x++) {
        collection[x].style.backgroundColor = "white";
    };
};

makeGrid(16);

// drawing a trail
const collection = document.querySelectorAll(".cell");
for (let k = 0; k < collection.length; k++) {
    collection[k].addEventListener("mouseover", () => {
        collection[k].style.backgroundColor = "black";
    });
};

//clear button click
const clr = document.querySelector("#clr");
clr.addEventListener("click", () => {
   clearGrid();
});

//new square button click
const newsq = document.querySelector("#newsq");
newsq.addEventListener("click", () => {
    let elem = document.getElementsByClassName("cell");
    for (let q = 0; q < elem.length; q++) {
        elem[q].remove();
    };
});