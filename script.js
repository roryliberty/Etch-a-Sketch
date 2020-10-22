const gridContainer = document.getElementById("grid-container");

function makeGrid(rows, columns) {
    for (i = 0; i < (rows * columns); i++) {
        gridContainer.style.setProperty("--grid-rows", rows)
        gridContainer.style.setProperty("--grid-cols", columns);
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "sixteen-cells";
    }
}

makeGrid(16, 16);

