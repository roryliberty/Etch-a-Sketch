const gridContainer = document.getElementById("grid-container");
const buttonChoice = document.querySelectorAll("button");
let drawColor = "black-button";

// Setting the style of the grid-container div
gridContainer.style.display = "grid";
gridContainer.style.borderStyle = "solid";
gridContainer.style.width = "500px";
gridContainer.style.height = "500px";

// Event listeners on buttons
for (let button of buttonChoice) {
    button.addEventListener("click", (e) => {
        drawColor = button.id;

        clearGrid();
    });
}

function makeGrid(rows) {
    for (i = 0; i < (rows * rows); i++) {
        // Create a new div element
        const newDiv = document.createElement("div");

        // Add the new div element to the gridConainer element and give it a class
        gridContainer.appendChild(newDiv).className = "grid-cell";
        
        // Building the grid
        gridContainer.style.gridTemplateRows = `repeat(${rows}, minmax(0, 1fr))`;
        gridContainer.style.gridTemplateColumns = `repeat(${rows}, minmax(0, 1fr))`;
    }

    // Grabbing the divs in grid-container
    const boxes = gridContainer.querySelectorAll(".grid-cell");

    for (let box of boxes) {
        box.addEventListener("mouseover", (e) => {
            switch (drawColor) {
                case "black-button":
                    // When the cursor moves over the divs, make them black
                    box.style.backgroundColor = "black";
                    break;
                case "color-button":
                    // Each div will be a random color if the color button is clicked
                    let randColor = Math.floor(Math.random() * 16777215).toString(16);
                    box.style.backgroundColor = "#" + randColor;
                    break;
            }
        });
    }
}

function clearGrid() {
    gridContainer.innerHTML = "";
    let numRowsCols = prompt("How many rows/columns (max 100)?", 16);

    if (numRowsCols > 100 || numRowsCols === null) {
        numRowsCols = 16;
    }

    makeGrid(numRowsCols);
}

makeGrid(16);