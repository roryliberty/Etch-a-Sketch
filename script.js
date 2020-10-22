const gridContainer = document.getElementById("grid-container");


function makeGrid(rows, columns) {
    for (i = 0; i < (rows * columns); i++) {
        gridContainer.style.setProperty("--grid-rows", rows)
        gridContainer.style.setProperty("--grid-cols", columns);
        let cell = document.createElement("div");
        cell.id = (i + 1);
        cell.innerHTML = cell.id;
        gridContainer.appendChild(cell).className = "grid-cell";
        
    }
}



makeGrid(16, 16);


const boxes = gridContainer.querySelectorAll(".grid-cell");

boxes.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
        console.log(e);
        let boxNumber = e.target.id;
        div.style.backgroundColor = "black";
    });
});