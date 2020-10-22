const gridContainer = document.getElementById("grid-container");
const startOverButton = document.getElementById("start-over");


function makeGrid(rows) {
    for (i = 0; i < (rows * rows); i++) {
        gridContainer.style.setProperty("--grid-rows", rows)
        gridContainer.style.setProperty("--grid-cols", rows);
        let cell = document.createElement("div");
        cell.id = (i + 1);
        cell.innerHTML = cell.id;
        gridContainer.appendChild(cell).className = "grid-cell";
        
        const boxes = gridContainer.querySelectorAll(".grid-cell");

        boxes.forEach((div) => {
            div.addEventListener("mouseover", (e) => {
                console.log(e);
                let boxNumber = e.target.id;
                div.style.backgroundColor = "black";
            });
        });
    }
}

makeGrid(16);



function clearGrid() {
    gridContainer.innerHTML = "";
    let numRowsCols = prompt("How many rows/columns (max 100)?", 16);
    if (numRowsCols > 100 || numRowsCols === null) {
        numRowsCols = 16;
    }

    makeGrid(numRowsCols)
}