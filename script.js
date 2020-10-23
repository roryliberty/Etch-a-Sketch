const gridContainer = document.getElementById("grid-container");
const startOverButton = document.getElementById("start-over");

// Setting the style of the grid-container div
gridContainer.style.display = "grid";
gridContainer.style.borderStyle = "solid";
gridContainer.style.width = "500px";
gridContainer.style.height = "500px";

console.log(gridContainer);

function makeGrid(rows) {
    for (i = 0; i < (rows * rows); i++) {
        // Create a new div element
        const newDiv = document.createElement("div");

        // Add the new div element to the gridConainer element and give it a class
        gridContainer.appendChild(newDiv).className = "grid-cell";
        //
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    }

//        newDiv.id = (i + 1);
//        newDiv.innerHTML = cell.id;
  
    const boxes = gridContainer.querySelectorAll(".grid-cell");

    for (let box of boxes) {
        box.addEventListener("mouseover", (e) => {
//            console.log(e);
//            let boxNumber = e.target.id;
            box.style.backgroundColor = "black";
        });
    }

 //       boxes.forEach((div) => {
 //           div.addEventListener("mouseover", (e) => {
 //               console.log(e);
 //               let boxNumber = e.target.id;
 //               div.style.backgroundColor = "black";
 //           });
 //       });
    
}

makeGrid(16);

function clearGrid() {
    gridContainer.innerHTML = "";
    let numRowsCols = prompt("How many rows/columns (max 100)?", 16);

    if (numRowsCols > 100 || numRowsCols === null) {
        numRowsCols = 16;
    }

    makeGrid(numRowsCols);
}