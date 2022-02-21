//global declarations for container and cells as a collection
const container = document.querySelector("#container");
const collection = document.getElementsByClassName("cell");

//Creates the main grid when page loads
createGrid(16);

//Grid functions------------------------------------------------------------------------------


//Creating the grid
function createGrid(numbah){
for (let i = 0; i < numbah; i++) {
    const row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    for (let j = 0; j < numbah; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = 960/numbah + "px";
        cell.style.height = 960/numbah + "px";
        row.appendChild(cell);
        };
    };
    makeTrail();
};

//making trail
function makeTrail() {
    for (let k = 0; k < collection.length; k++) {
        collection[k].addEventListener("mouseover", () => {
            collection[k].style.backgroundColor = "black";
         });  
     };
};

//making color trail
function makeColorTrail() {
    for (let b = 0; b < collection.length; b++) {
        collection[b].addEventListener("mouseover", () => {
            collection[b].style.backgroundColor = randomRGB();
        });  
    };
};

//making gradual black trail
function makeGradualTrail() {
    let alpha = 0;
    for (let b = 0; b < collection.length; b++) {
        collection[b].addEventListener("mouseover", () => {
            collection[b].style.backgroundColor = "rgba(" + 0 + "," + 0 + "," + 0 + "," + alpha + ")";
            if (alpha < 1) {
                alpha += 0.1;
            } else if (alpha = 1) {
                alpha = 0;
            };
        });  
    };
};

//clear grid function(deleting the grid)
function clearGrid(){
    const rows = document.getElementsByClassName("row");
    for (let v = rows.length-1; v >= 0; v--) {
        rows[v].remove();
    };
};

//clean grid (making background white)
function cleanGrid(){
    for (let b = 0; b < collection.length; b++) {
        collection[b].style.backgroundColor = "white"; 
    };
};


//prompt function after button click
function getPrompt() {
    let prmpt = prompt("Boxes per side? (Max 100)", "");
    if (prmpt > 100) {
        alert("Cannot be greater than 100");
        return getPrompt();
    } else if (prmpt === null || (isNaN(prmpt) == true)) {
        alert("Please give a valid number");
        return getPrompt();
    } else {
        for (let q = 0; q < collection.length; q++) {
            collection[q].style.backgroundColor = "white";
        };
    };
    return prmpt;
};

//random rgb
function randomRGB() {
    let red = Math.floor((Math.random()*255));
    let green = Math.floor((Math.random()*255));
    let blue = Math.floor((Math.random()*255));
    return "rgb(" + red + "," + green + "," + blue + ")";
};


//Button clicks-----------------------------------------------------------------------------------------------

//new square button click
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    clearGrid();
    let prompty = getPrompt();
    createGrid(prompty);
});

//color me button click
const btncolor = document.querySelector("#btncolor");
btncolor.addEventListener("click", () => {
    makeColorTrail();
});

//black button click
const btnblack = document.querySelector("#btnblack");
btnblack.addEventListener("click", () => {
    makeTrail();
});

//clean grid button click
const cleangrid = document.querySelector("#cleangrid");
cleangrid.addEventListener("click", () => {
    cleanGrid();
});

const gradual = document.querySelector("#gradual");
gradual.addEventListener("click", () => {
    makeGradualTrail();
});